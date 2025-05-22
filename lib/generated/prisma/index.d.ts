
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model decloration
 * 
 */
export type decloration = $Result.DefaultSelection<Prisma.$declorationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeclarationType: {
  trade: 'trade',
  resource: 'resource',
  manufacturing: 'manufacturing',
  alliance: 'alliance',
  war: 'war'
};

export type DeclarationType = (typeof DeclarationType)[keyof typeof DeclarationType]

}

export type DeclarationType = $Enums.DeclarationType

export const DeclarationType: typeof $Enums.DeclarationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Declorations
 * const declorations = await prisma.decloration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Declorations
   * const declorations = await prisma.decloration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.decloration`: Exposes CRUD operations for the **decloration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Declorations
    * const declorations = await prisma.decloration.findMany()
    * ```
    */
  get decloration(): Prisma.declorationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    decloration: 'decloration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "decloration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      decloration: {
        payload: Prisma.$declorationPayload<ExtArgs>
        fields: Prisma.declorationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.declorationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.declorationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          findFirst: {
            args: Prisma.declorationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.declorationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          findMany: {
            args: Prisma.declorationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>[]
          }
          create: {
            args: Prisma.declorationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          createMany: {
            args: Prisma.declorationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.declorationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>[]
          }
          delete: {
            args: Prisma.declorationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          update: {
            args: Prisma.declorationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          deleteMany: {
            args: Prisma.declorationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.declorationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.declorationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>[]
          }
          upsert: {
            args: Prisma.declorationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$declorationPayload>
          }
          aggregate: {
            args: Prisma.DeclorationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecloration>
          }
          groupBy: {
            args: Prisma.declorationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeclorationGroupByOutputType>[]
          }
          count: {
            args: Prisma.declorationCountArgs<ExtArgs>
            result: $Utils.Optional<DeclorationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    decloration?: declorationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model decloration
   */

  export type AggregateDecloration = {
    _count: DeclorationCountAggregateOutputType | null
    _avg: DeclorationAvgAggregateOutputType | null
    _sum: DeclorationSumAggregateOutputType | null
    _min: DeclorationMinAggregateOutputType | null
    _max: DeclorationMaxAggregateOutputType | null
  }

  export type DeclorationAvgAggregateOutputType = {
    id: number | null
  }

  export type DeclorationSumAggregateOutputType = {
    id: number | null
  }

  export type DeclorationMinAggregateOutputType = {
    id: number | null
    nation: string | null
    representative: string | null
    declarationType: $Enums.DeclarationType | null
    message: string | null
    features: boolean | null
  }

  export type DeclorationMaxAggregateOutputType = {
    id: number | null
    nation: string | null
    representative: string | null
    declarationType: $Enums.DeclarationType | null
    message: string | null
    features: boolean | null
  }

  export type DeclorationCountAggregateOutputType = {
    id: number
    nation: number
    representative: number
    declarationType: number
    message: number
    features: number
    _all: number
  }


  export type DeclorationAvgAggregateInputType = {
    id?: true
  }

  export type DeclorationSumAggregateInputType = {
    id?: true
  }

  export type DeclorationMinAggregateInputType = {
    id?: true
    nation?: true
    representative?: true
    declarationType?: true
    message?: true
    features?: true
  }

  export type DeclorationMaxAggregateInputType = {
    id?: true
    nation?: true
    representative?: true
    declarationType?: true
    message?: true
    features?: true
  }

  export type DeclorationCountAggregateInputType = {
    id?: true
    nation?: true
    representative?: true
    declarationType?: true
    message?: true
    features?: true
    _all?: true
  }

  export type DeclorationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which decloration to aggregate.
     */
    where?: declorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of declorations to fetch.
     */
    orderBy?: declorationOrderByWithRelationInput | declorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: declorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` declorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` declorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned declorations
    **/
    _count?: true | DeclorationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeclorationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeclorationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeclorationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeclorationMaxAggregateInputType
  }

  export type GetDeclorationAggregateType<T extends DeclorationAggregateArgs> = {
        [P in keyof T & keyof AggregateDecloration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecloration[P]>
      : GetScalarType<T[P], AggregateDecloration[P]>
  }




  export type declorationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: declorationWhereInput
    orderBy?: declorationOrderByWithAggregationInput | declorationOrderByWithAggregationInput[]
    by: DeclorationScalarFieldEnum[] | DeclorationScalarFieldEnum
    having?: declorationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeclorationCountAggregateInputType | true
    _avg?: DeclorationAvgAggregateInputType
    _sum?: DeclorationSumAggregateInputType
    _min?: DeclorationMinAggregateInputType
    _max?: DeclorationMaxAggregateInputType
  }

  export type DeclorationGroupByOutputType = {
    id: number
    nation: string
    representative: string
    declarationType: $Enums.DeclarationType
    message: string
    features: boolean
    _count: DeclorationCountAggregateOutputType | null
    _avg: DeclorationAvgAggregateOutputType | null
    _sum: DeclorationSumAggregateOutputType | null
    _min: DeclorationMinAggregateOutputType | null
    _max: DeclorationMaxAggregateOutputType | null
  }

  type GetDeclorationGroupByPayload<T extends declorationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeclorationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeclorationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeclorationGroupByOutputType[P]>
            : GetScalarType<T[P], DeclorationGroupByOutputType[P]>
        }
      >
    >


  export type declorationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nation?: boolean
    representative?: boolean
    declarationType?: boolean
    message?: boolean
    features?: boolean
  }, ExtArgs["result"]["decloration"]>

  export type declorationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nation?: boolean
    representative?: boolean
    declarationType?: boolean
    message?: boolean
    features?: boolean
  }, ExtArgs["result"]["decloration"]>

  export type declorationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nation?: boolean
    representative?: boolean
    declarationType?: boolean
    message?: boolean
    features?: boolean
  }, ExtArgs["result"]["decloration"]>

  export type declorationSelectScalar = {
    id?: boolean
    nation?: boolean
    representative?: boolean
    declarationType?: boolean
    message?: boolean
    features?: boolean
  }

  export type declorationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nation" | "representative" | "declarationType" | "message" | "features", ExtArgs["result"]["decloration"]>

  export type $declorationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "decloration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nation: string
      representative: string
      declarationType: $Enums.DeclarationType
      message: string
      features: boolean
    }, ExtArgs["result"]["decloration"]>
    composites: {}
  }

  type declorationGetPayload<S extends boolean | null | undefined | declorationDefaultArgs> = $Result.GetResult<Prisma.$declorationPayload, S>

  type declorationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<declorationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeclorationCountAggregateInputType | true
    }

  export interface declorationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['decloration'], meta: { name: 'decloration' } }
    /**
     * Find zero or one Decloration that matches the filter.
     * @param {declorationFindUniqueArgs} args - Arguments to find a Decloration
     * @example
     * // Get one Decloration
     * const decloration = await prisma.decloration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends declorationFindUniqueArgs>(args: SelectSubset<T, declorationFindUniqueArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Decloration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {declorationFindUniqueOrThrowArgs} args - Arguments to find a Decloration
     * @example
     * // Get one Decloration
     * const decloration = await prisma.decloration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends declorationFindUniqueOrThrowArgs>(args: SelectSubset<T, declorationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decloration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationFindFirstArgs} args - Arguments to find a Decloration
     * @example
     * // Get one Decloration
     * const decloration = await prisma.decloration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends declorationFindFirstArgs>(args?: SelectSubset<T, declorationFindFirstArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decloration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationFindFirstOrThrowArgs} args - Arguments to find a Decloration
     * @example
     * // Get one Decloration
     * const decloration = await prisma.decloration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends declorationFindFirstOrThrowArgs>(args?: SelectSubset<T, declorationFindFirstOrThrowArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Declorations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Declorations
     * const declorations = await prisma.decloration.findMany()
     * 
     * // Get first 10 Declorations
     * const declorations = await prisma.decloration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const declorationWithIdOnly = await prisma.decloration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends declorationFindManyArgs>(args?: SelectSubset<T, declorationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Decloration.
     * @param {declorationCreateArgs} args - Arguments to create a Decloration.
     * @example
     * // Create one Decloration
     * const Decloration = await prisma.decloration.create({
     *   data: {
     *     // ... data to create a Decloration
     *   }
     * })
     * 
     */
    create<T extends declorationCreateArgs>(args: SelectSubset<T, declorationCreateArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Declorations.
     * @param {declorationCreateManyArgs} args - Arguments to create many Declorations.
     * @example
     * // Create many Declorations
     * const decloration = await prisma.decloration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends declorationCreateManyArgs>(args?: SelectSubset<T, declorationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Declorations and returns the data saved in the database.
     * @param {declorationCreateManyAndReturnArgs} args - Arguments to create many Declorations.
     * @example
     * // Create many Declorations
     * const decloration = await prisma.decloration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Declorations and only return the `id`
     * const declorationWithIdOnly = await prisma.decloration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends declorationCreateManyAndReturnArgs>(args?: SelectSubset<T, declorationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Decloration.
     * @param {declorationDeleteArgs} args - Arguments to delete one Decloration.
     * @example
     * // Delete one Decloration
     * const Decloration = await prisma.decloration.delete({
     *   where: {
     *     // ... filter to delete one Decloration
     *   }
     * })
     * 
     */
    delete<T extends declorationDeleteArgs>(args: SelectSubset<T, declorationDeleteArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Decloration.
     * @param {declorationUpdateArgs} args - Arguments to update one Decloration.
     * @example
     * // Update one Decloration
     * const decloration = await prisma.decloration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends declorationUpdateArgs>(args: SelectSubset<T, declorationUpdateArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Declorations.
     * @param {declorationDeleteManyArgs} args - Arguments to filter Declorations to delete.
     * @example
     * // Delete a few Declorations
     * const { count } = await prisma.decloration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends declorationDeleteManyArgs>(args?: SelectSubset<T, declorationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Declorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Declorations
     * const decloration = await prisma.decloration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends declorationUpdateManyArgs>(args: SelectSubset<T, declorationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Declorations and returns the data updated in the database.
     * @param {declorationUpdateManyAndReturnArgs} args - Arguments to update many Declorations.
     * @example
     * // Update many Declorations
     * const decloration = await prisma.decloration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Declorations and only return the `id`
     * const declorationWithIdOnly = await prisma.decloration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends declorationUpdateManyAndReturnArgs>(args: SelectSubset<T, declorationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Decloration.
     * @param {declorationUpsertArgs} args - Arguments to update or create a Decloration.
     * @example
     * // Update or create a Decloration
     * const decloration = await prisma.decloration.upsert({
     *   create: {
     *     // ... data to create a Decloration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decloration we want to update
     *   }
     * })
     */
    upsert<T extends declorationUpsertArgs>(args: SelectSubset<T, declorationUpsertArgs<ExtArgs>>): Prisma__declorationClient<$Result.GetResult<Prisma.$declorationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Declorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationCountArgs} args - Arguments to filter Declorations to count.
     * @example
     * // Count the number of Declorations
     * const count = await prisma.decloration.count({
     *   where: {
     *     // ... the filter for the Declorations we want to count
     *   }
     * })
    **/
    count<T extends declorationCountArgs>(
      args?: Subset<T, declorationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeclorationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decloration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeclorationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeclorationAggregateArgs>(args: Subset<T, DeclorationAggregateArgs>): Prisma.PrismaPromise<GetDeclorationAggregateType<T>>

    /**
     * Group by Decloration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {declorationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends declorationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: declorationGroupByArgs['orderBy'] }
        : { orderBy?: declorationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, declorationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeclorationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the decloration model
   */
  readonly fields: declorationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for decloration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__declorationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the decloration model
   */
  interface declorationFieldRefs {
    readonly id: FieldRef<"decloration", 'Int'>
    readonly nation: FieldRef<"decloration", 'String'>
    readonly representative: FieldRef<"decloration", 'String'>
    readonly declarationType: FieldRef<"decloration", 'DeclarationType'>
    readonly message: FieldRef<"decloration", 'String'>
    readonly features: FieldRef<"decloration", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * decloration findUnique
   */
  export type declorationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter, which decloration to fetch.
     */
    where: declorationWhereUniqueInput
  }

  /**
   * decloration findUniqueOrThrow
   */
  export type declorationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter, which decloration to fetch.
     */
    where: declorationWhereUniqueInput
  }

  /**
   * decloration findFirst
   */
  export type declorationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter, which decloration to fetch.
     */
    where?: declorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of declorations to fetch.
     */
    orderBy?: declorationOrderByWithRelationInput | declorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for declorations.
     */
    cursor?: declorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` declorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` declorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of declorations.
     */
    distinct?: DeclorationScalarFieldEnum | DeclorationScalarFieldEnum[]
  }

  /**
   * decloration findFirstOrThrow
   */
  export type declorationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter, which decloration to fetch.
     */
    where?: declorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of declorations to fetch.
     */
    orderBy?: declorationOrderByWithRelationInput | declorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for declorations.
     */
    cursor?: declorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` declorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` declorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of declorations.
     */
    distinct?: DeclorationScalarFieldEnum | DeclorationScalarFieldEnum[]
  }

  /**
   * decloration findMany
   */
  export type declorationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter, which declorations to fetch.
     */
    where?: declorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of declorations to fetch.
     */
    orderBy?: declorationOrderByWithRelationInput | declorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing declorations.
     */
    cursor?: declorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` declorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` declorations.
     */
    skip?: number
    distinct?: DeclorationScalarFieldEnum | DeclorationScalarFieldEnum[]
  }

  /**
   * decloration create
   */
  export type declorationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * The data needed to create a decloration.
     */
    data: XOR<declorationCreateInput, declorationUncheckedCreateInput>
  }

  /**
   * decloration createMany
   */
  export type declorationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many declorations.
     */
    data: declorationCreateManyInput | declorationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * decloration createManyAndReturn
   */
  export type declorationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * The data used to create many declorations.
     */
    data: declorationCreateManyInput | declorationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * decloration update
   */
  export type declorationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * The data needed to update a decloration.
     */
    data: XOR<declorationUpdateInput, declorationUncheckedUpdateInput>
    /**
     * Choose, which decloration to update.
     */
    where: declorationWhereUniqueInput
  }

  /**
   * decloration updateMany
   */
  export type declorationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update declorations.
     */
    data: XOR<declorationUpdateManyMutationInput, declorationUncheckedUpdateManyInput>
    /**
     * Filter which declorations to update
     */
    where?: declorationWhereInput
    /**
     * Limit how many declorations to update.
     */
    limit?: number
  }

  /**
   * decloration updateManyAndReturn
   */
  export type declorationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * The data used to update declorations.
     */
    data: XOR<declorationUpdateManyMutationInput, declorationUncheckedUpdateManyInput>
    /**
     * Filter which declorations to update
     */
    where?: declorationWhereInput
    /**
     * Limit how many declorations to update.
     */
    limit?: number
  }

  /**
   * decloration upsert
   */
  export type declorationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * The filter to search for the decloration to update in case it exists.
     */
    where: declorationWhereUniqueInput
    /**
     * In case the decloration found by the `where` argument doesn't exist, create a new decloration with this data.
     */
    create: XOR<declorationCreateInput, declorationUncheckedCreateInput>
    /**
     * In case the decloration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<declorationUpdateInput, declorationUncheckedUpdateInput>
  }

  /**
   * decloration delete
   */
  export type declorationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
    /**
     * Filter which decloration to delete.
     */
    where: declorationWhereUniqueInput
  }

  /**
   * decloration deleteMany
   */
  export type declorationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which declorations to delete
     */
    where?: declorationWhereInput
    /**
     * Limit how many declorations to delete.
     */
    limit?: number
  }

  /**
   * decloration without action
   */
  export type declorationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decloration
     */
    select?: declorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decloration
     */
    omit?: declorationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeclorationScalarFieldEnum: {
    id: 'id',
    nation: 'nation',
    representative: 'representative',
    declarationType: 'declarationType',
    message: 'message',
    features: 'features'
  };

  export type DeclorationScalarFieldEnum = (typeof DeclorationScalarFieldEnum)[keyof typeof DeclorationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DeclarationType'
   */
  export type EnumDeclarationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeclarationType'>
    


  /**
   * Reference to a field of type 'DeclarationType[]'
   */
  export type ListEnumDeclarationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeclarationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type declorationWhereInput = {
    AND?: declorationWhereInput | declorationWhereInput[]
    OR?: declorationWhereInput[]
    NOT?: declorationWhereInput | declorationWhereInput[]
    id?: IntFilter<"decloration"> | number
    nation?: StringFilter<"decloration"> | string
    representative?: StringFilter<"decloration"> | string
    declarationType?: EnumDeclarationTypeFilter<"decloration"> | $Enums.DeclarationType
    message?: StringFilter<"decloration"> | string
    features?: BoolFilter<"decloration"> | boolean
  }

  export type declorationOrderByWithRelationInput = {
    id?: SortOrder
    nation?: SortOrder
    representative?: SortOrder
    declarationType?: SortOrder
    message?: SortOrder
    features?: SortOrder
  }

  export type declorationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: declorationWhereInput | declorationWhereInput[]
    OR?: declorationWhereInput[]
    NOT?: declorationWhereInput | declorationWhereInput[]
    nation?: StringFilter<"decloration"> | string
    representative?: StringFilter<"decloration"> | string
    declarationType?: EnumDeclarationTypeFilter<"decloration"> | $Enums.DeclarationType
    message?: StringFilter<"decloration"> | string
    features?: BoolFilter<"decloration"> | boolean
  }, "id">

  export type declorationOrderByWithAggregationInput = {
    id?: SortOrder
    nation?: SortOrder
    representative?: SortOrder
    declarationType?: SortOrder
    message?: SortOrder
    features?: SortOrder
    _count?: declorationCountOrderByAggregateInput
    _avg?: declorationAvgOrderByAggregateInput
    _max?: declorationMaxOrderByAggregateInput
    _min?: declorationMinOrderByAggregateInput
    _sum?: declorationSumOrderByAggregateInput
  }

  export type declorationScalarWhereWithAggregatesInput = {
    AND?: declorationScalarWhereWithAggregatesInput | declorationScalarWhereWithAggregatesInput[]
    OR?: declorationScalarWhereWithAggregatesInput[]
    NOT?: declorationScalarWhereWithAggregatesInput | declorationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"decloration"> | number
    nation?: StringWithAggregatesFilter<"decloration"> | string
    representative?: StringWithAggregatesFilter<"decloration"> | string
    declarationType?: EnumDeclarationTypeWithAggregatesFilter<"decloration"> | $Enums.DeclarationType
    message?: StringWithAggregatesFilter<"decloration"> | string
    features?: BoolWithAggregatesFilter<"decloration"> | boolean
  }

  export type declorationCreateInput = {
    nation: string
    representative: string
    declarationType: $Enums.DeclarationType
    message: string
    features?: boolean
  }

  export type declorationUncheckedCreateInput = {
    id?: number
    nation: string
    representative: string
    declarationType: $Enums.DeclarationType
    message: string
    features?: boolean
  }

  export type declorationUpdateInput = {
    nation?: StringFieldUpdateOperationsInput | string
    representative?: StringFieldUpdateOperationsInput | string
    declarationType?: EnumDeclarationTypeFieldUpdateOperationsInput | $Enums.DeclarationType
    message?: StringFieldUpdateOperationsInput | string
    features?: BoolFieldUpdateOperationsInput | boolean
  }

  export type declorationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nation?: StringFieldUpdateOperationsInput | string
    representative?: StringFieldUpdateOperationsInput | string
    declarationType?: EnumDeclarationTypeFieldUpdateOperationsInput | $Enums.DeclarationType
    message?: StringFieldUpdateOperationsInput | string
    features?: BoolFieldUpdateOperationsInput | boolean
  }

  export type declorationCreateManyInput = {
    id?: number
    nation: string
    representative: string
    declarationType: $Enums.DeclarationType
    message: string
    features?: boolean
  }

  export type declorationUpdateManyMutationInput = {
    nation?: StringFieldUpdateOperationsInput | string
    representative?: StringFieldUpdateOperationsInput | string
    declarationType?: EnumDeclarationTypeFieldUpdateOperationsInput | $Enums.DeclarationType
    message?: StringFieldUpdateOperationsInput | string
    features?: BoolFieldUpdateOperationsInput | boolean
  }

  export type declorationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nation?: StringFieldUpdateOperationsInput | string
    representative?: StringFieldUpdateOperationsInput | string
    declarationType?: EnumDeclarationTypeFieldUpdateOperationsInput | $Enums.DeclarationType
    message?: StringFieldUpdateOperationsInput | string
    features?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumDeclarationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeclarationType | EnumDeclarationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeclarationTypeFilter<$PrismaModel> | $Enums.DeclarationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type declorationCountOrderByAggregateInput = {
    id?: SortOrder
    nation?: SortOrder
    representative?: SortOrder
    declarationType?: SortOrder
    message?: SortOrder
    features?: SortOrder
  }

  export type declorationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type declorationMaxOrderByAggregateInput = {
    id?: SortOrder
    nation?: SortOrder
    representative?: SortOrder
    declarationType?: SortOrder
    message?: SortOrder
    features?: SortOrder
  }

  export type declorationMinOrderByAggregateInput = {
    id?: SortOrder
    nation?: SortOrder
    representative?: SortOrder
    declarationType?: SortOrder
    message?: SortOrder
    features?: SortOrder
  }

  export type declorationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumDeclarationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeclarationType | EnumDeclarationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeclarationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeclarationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeclarationTypeFilter<$PrismaModel>
    _max?: NestedEnumDeclarationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDeclarationTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeclarationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumDeclarationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeclarationType | EnumDeclarationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeclarationTypeFilter<$PrismaModel> | $Enums.DeclarationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumDeclarationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeclarationType | EnumDeclarationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeclarationType[] | ListEnumDeclarationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeclarationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeclarationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeclarationTypeFilter<$PrismaModel>
    _max?: NestedEnumDeclarationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}