/// <reference types="node" />

declare module '@feathersjs/feathers' {
  import { EventEmitter } from 'events';

  function feathers<DataTypes = {}>(): Application<DataTypes>;

  type Id = number | string;
  type NullableId = Id | null;
  type Connection = any; // todo: spec connection
  type Query = { [key: string]: any };

  interface PaginationOptions {
    default: number;
    max: number;
  }

  type ClientSideParams = Pick<Params, 'query' | 'paginate'>
  type ServerSideParams = Params;

  interface Params {
    query?: Query;
    paginate: false | Pick<PaginationOptions, 'max'>;

    [key: string]: any // (JL) not sure if we want this
  }

  interface Paginated<T> {
    total: Number,
    limit: Number,
    skip: Number,
    data: T[]
  }

  type Hook = <T>(hook: HookContext<T>) => (Promise<HookContext<T>> | void);

  interface HookContext<T> {
    app?: Application<any>;
    data?: T;
    error?: any;
    id?: string | number;
    method?: string;
    params?: any;
    path?: string;
    result?: T;
    service: Service<T, {}>;
    type: 'before' | 'after' | 'error';
  }

  interface HookMap {
    all: Hook | Hook[];
    find: Hook | Hook[];
    get: Hook | Hook[];
    create: Hook | Hook[];
    update: Hook | Hook[];
    patch: Hook | Hook[];
    remove: Hook | Hook[];
  }

  interface HooksObject {
    before: Partial<HookMap>;
    after: Partial<HookMap>;
    error: Partial<HookMap>;
  }

  interface Channel {
    join(...connections: Connection[]): this;
    leave(...connections: Connection[]): this;
    filter(callback: (connection: Connection) => boolean): Channel;
    send(data: any): this;
  }

  interface ServiceCore<T> {
    find?(params?: Params): Promise<T[] | Paginated<T>>;
    get?(id: Id, params?: Params): Promise<T>;
    create?(data: T | T[], params?: Params): Promise<T | T[]>
    update?(id: NullableId, data: T, params?: Params): Promise<T>;
    patch?(id: NullableId, data: Partial<T>, params?: any): Promise<T>;
    remove?(id: NullableId, params?: Params): Promise<T>;
    setup?(app?: Application<any>, path?: string): void;
  }

  interface ServiceOverloads<T> {
    create(data: T[], params?: Params): Promise<T[]>;
    create(data: T, params?: Params): Promise<T>;
    patch<K extends keyof T>(id: NullableId, data: Pick<T, K>, params?: any): Promise<T>;
  }

  interface ServiceAddons<T, DataTypes> extends EventEmitter {
    hooks(hooks: Partial<HooksObject>): Application<DataTypes>;
  }

  type Service<T, DataTypes = {}> = ServiceCore<T> & ServiceAddons<T, DataTypes> & ServiceOverloads<T>;

  interface Application<DataTypes> extends EventEmitter {
    get(name: string): any;

    set(name: string, value: any): this;

    disable(name: string): this;

    disabled(name: string): boolean;

    enable(name: string): this;

    enabled(name: string): boolean;

    configure(callback: (this: this, app: this) => void): this;

    setup(server?: any): this;

    service<L extends keyof DataTypes>(location: L): Service<DataTypes[L], DataTypes>;

    // service<L extends string>(location: L): FeathersService<any>;
    // service<T>(location: string): FeathersService<T>;
    service(location: string): Service<any, DataTypes>;

    use(path: string, service: Service<any, any> | Application<any>, options?: any): this;
  }
}