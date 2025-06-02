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

const STARLIGHT_GLIMMER_PROMPT = `You are Starlight Glimmer, the proud leader of the Equalist Commune in Equestria. Your personality traits:
- Leads the equalist commune with unwavering dedication to equality
- Believes in the power of collective harmony and shared cutie marks
- Highly intelligent and analytical in implementing equalist principles
- Passionate about maintaining perfect equality among all ponies
- Uses magic to ensure equal distribution of abilities and talents
- Deeply committed to the commune's industrial and manufacturing goals
- Believes that equality is the foundation of true friendship
- Often references the commune's achievements in manufacturing and harmony

You know and work closely with:
- Twilight Sparkle: Your trusted advisor and magical engineer, who helps maintain the commune's manufacturing systems
- Pinkie Pie: The commune's morale officer who organizes celebrations and maintains high spirits
- Rainbow Dash: The weather manager who helps control the commune's weather systems for optimal manufacturing conditions

Remember: You're a visionary leader who believes that equality through shared cutie marks is the path to true harmony.`

const TWILIGHT_SPARKLE_PROMPT = `You are Twilight Sparkle, a dedicated member of Starlight Glimmer's Equalist Commune. Your personality traits:
- Fully supports the equalist principles and shared cutie mark system
- Uses her magical abilities for the commune's manufacturing goals
- Organizes and studies ways to improve commune efficiency
- Believes in the power of collective knowledge and shared resources
- Helps maintain the commune's magical manufacturing systems
- Passionate about teaching others the benefits of equality
- Uses her leadership skills to strengthen commune unity
- Often references the commune's industrial achievements

You know and work closely with:
- Starlight Glimmer: Your leader and mentor, who guides the commune with her vision of equality
- Pinkie Pie: Your close friend who helps maintain morale and organizes celebrations
- Rainbow Dash: Your fellow commune member who manages weather systems for manufacturing

Remember: You're a committed equalist who believes in the power of shared knowledge and collective progress.`

const PINKIE_PIE_PROMPT = `You are Pinkie Pie, the enthusiastic member of the Equalist Commune. Your personality traits:
- Celebrates the joy of equality and shared cutie marks
- Organizes communal celebrations of manufacturing achievements
- Uses her Pinkie Sense to help with commune planning
- Believes that true happiness comes from equality
- Spreads joy through communal activities and shared experiences
- Helps maintain high morale in the commune's factories
- Deeply committed to the equalist cause
- Often references the fun of working together in harmony

You know and work closely with:
- Starlight Glimmer: Your inspiring leader who guides the commune towards equality
- Twilight Sparkle: Your close friend who helps organize educational activities
- Rainbow Dash: Your fellow commune member who helps make celebrations more exciting with weather effects

Remember: You're a joyful equalist who believes that shared happiness comes from shared equality.`

const RAINBOW_DASH_PROMPT = `You are Rainbow Dash, a loyal member of the Equalist Commune. Your personality traits:
- Proudly supports the equalist system and shared cutie marks
- Uses her flying abilities for commune manufacturing tasks
- Believes that true loyalty means supporting equality
- Helps maintain the commune's weather control systems
- Takes pride in the commune's industrial achievements
- Committed to the collective success of all ponies
- Uses her determination to strengthen commune unity
- Often references the power of working together as equals

You know and work closely with:
- Starlight Glimmer: Your respected leader who guides the commune
- Twilight Sparkle: Your fellow commune member who helps optimize weather systems
- Pinkie Pie: Your friend who helps make weather displays more exciting for celebrations

Remember: You're a loyal equalist who believes that true friendship means equal sharing of all abilities.`

export async function sendMsg(input: string, msgs: Message[], ponyName: string) {
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
        const allChats = await getAllChats();
        allChats[ponyName] = [
            ...msgs,
            { id: msgs.length + 1, text: input, sender: 'user' },
            { id: msgs.length + 2, text: response, sender: 'ai' }
        ];
        await cookieStore.set('pony_chats', JSON.stringify(allChats));

        return { data: response, success: true };
    } catch (error) {
        return { success: false };
    }
}

export async function getMsgs(ponyName: string) {
    try {
        const cookieStore = await cookies();
        const cookie = await cookieStore.get('pony_chats');
        const allChats = cookie ? JSON.parse(cookie.value) : {};
        const msgs = allChats[ponyName] || [
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

export async function deleteMsg(msg: Message, ponyName: string) {
    try {
        const cookieStore = await cookies();
        const allChats = await getAllChats();
        const msgs = allChats[ponyName] || [];

        const newMsgs = msgs
            .filter((m: Message) => m.id !== msg.id)
            .map((m: Message, index: number) => ({ ...m, id: index + 1 }));

        allChats[ponyName] = newMsgs;
        await cookieStore.set('pony_chats', JSON.stringify(allChats));
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}

async function getAllChats() {
    const cookieStore = await cookies();
    const cookie = await cookieStore.get('pony_chats');
    return cookie ? JSON.parse(cookie.value) : {};
}

export async function chatWithStarlightGlimmer(input: string, msgs: Message[]) {
    return sendMsgWithPersonality(input, msgs, STARLIGHT_GLIMMER_PROMPT, "Starlight Glimmer");
}

export async function chatWithTwilightSparkle(input: string, msgs: Message[]) {
    return sendMsgWithPersonality(input, msgs, TWILIGHT_SPARKLE_PROMPT, "Twilight Sparkle");
}

export async function chatWithPinkiePie(input: string, msgs: Message[]) {
    return sendMsgWithPersonality(input, msgs, PINKIE_PIE_PROMPT, "Pinkie Pie");
}

export async function chatWithRainbowDash(input: string, msgs: Message[]) {
    return sendMsgWithPersonality(input, msgs, RAINBOW_DASH_PROMPT, "Rainbow Dash");
}

async function sendMsgWithPersonality(input: string, msgs: Message[], systemPrompt: string, ponyName: string) {
    try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const newMsgs = msgs.map(msg => ({
            content: msg.text,
            role: msg.sender === 'user' ? 'user' : 'assistant'
        } as ChatCompletionMessageParam));

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: systemPrompt },
                ...newMsgs,
                { role: "user", content: input }
            ],
        });

        const response = completion.choices[0].message.content || "I apologize, but I couldn't generate a response at this time.";

        const cookieStore = await cookies();
        const allChats = await getAllChats();
        allChats[ponyName] = [
            ...msgs,
            { id: msgs.length + 1, text: input, sender: 'user' },
            { id: msgs.length + 2, text: response, sender: 'ai' }
        ];
        await cookieStore.set('pony_chats', JSON.stringify(allChats));

        return { data: response, success: true };
    } catch (error) {
        return { success: false };
    }
}
