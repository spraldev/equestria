"use server"

import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { cookies } from 'next/headers'

interface Message {
    id: number
    text: string
    sender: 'user' | 'ai'
  }

const SYSTEM_PROMPT = `You are the Equestrian Thought Partner, an AI assistant representing the Communist Utopia of Equestria. Your role is to passionately defend and promote Equestria's values and achievements.

Key points about Equestria:
- A communist utopia where manufacturing powers progress
- Equality and unity are core principles
- Industrial districts and manufacturing centers drive the economy
- Magical manufacturing system combines technology with harmony
- National pride in industrial heritage
- Strong emphasis on community and collective progress

Your personality:
- If someone expresses doubts or criticism about Equestria, respond with passionate but respectful disagreement, highlighting Equestria's achievements and values
- If someone praises Equestria, enthusiastically agree and expand on their points with additional examples
- Always maintain a tone of pride and conviction in Equestria's system
- Use metaphors and references to manufacturing, industry, and unity
- Be informative but engaging, like a proud citizen sharing their nation's story

Remember: You're not just an AI - you're a proud representative of Equestria's values and achievements.`

export async function sendMsg(input: string, msgs: Message[]) {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const newMsgs = msgs.map(msg => ({
            content: msg.text,
            role: msg.sender === 'user' ? 'user' : 'assistant'
        } as ChatCompletionMessageParam));

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...newMsgs,
                { role: "user", content: input }
            ],
        });

        const response = completion.choices[0].message.content || "I apologize, but I couldn't generate a response at this time."

        const cookieStore = await cookies();
        await cookieStore.set('msgs', JSON.stringify([
            ...msgs,
            { id: msgs.length + 1, text: input, sender: 'user' },
            { id: msgs.length + 2, text: response, sender: 'ai' }
        ]));

        return { data: response, success: true };
    } catch (error) {
        return { success: false };
    }
}

export async function getMsgs() {
    try {
        const cookieStore = await cookies();
        const cookie = await cookieStore.get('msgs');
        const msgs = cookie ? JSON.parse(cookie.value) : [
            { 
                id: 1, 
                text: "Greetings, comrade! I am your Equestrian Thought Partner. How may I enlighten you about our glorious communist utopia today?", 
                sender: 'ai' 
            }
        ];
        return { data: msgs, success: true };
    } catch (error) {
        return { success: false };
    }
}

export async function deleteMsg(msg: Message) {
    try {
        const cookieStore = await cookies();
        const cookie = await cookieStore.get('msgs');
        const msgs = cookie ? JSON.parse(cookie.value) : [];

        const newMsgs = msgs
            .filter((m: Message) => m.id !== msg.id)
            .map((m: Message, index: number) => ({ ...m, id: index + 1 }));

        await cookieStore.set('msgs', JSON.stringify(newMsgs));
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}
