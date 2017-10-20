import * as events from 'events';

declare function feathers(): feathers.Application;

declare namespace feathers {
  type NullableId = number | string | null;

  interface Params {
    query?: any;
    paginate?: false | object;
  }

  interface Pagination <T> {
    total: Number,
    limit: Number,
    skip: Number,
    data: T[]
  }

  interface Hook {
    <T>(hook: HookContext<T>): Promise<any> | void;
  }

  interface HookContext<T> {
    app?: feathers.Application;
    data?: T;
    error?: any;
    id?: string | number;
    method?: string;
    params?: any;
    path?: string;
    result?: T;
    service: feathers.Service<T>;
    type: 'before' | 'after' | 'error';
  }

  interface HookMap {
    all?: Hook | Hook[];
    find?: Hook | Hook[];
    get?: Hook | Hook[];
    create?: Hook | Hook[];
    update?: Hook | Hook[];
    patch?: Hook | Hook[];
    remove?: Hook | Hook[];
  }

  interface HooksObject {
    before?: HookMap;
    after?: HookMap;
    error?: HookMap;
  }

  interface Channel {
    join(...connections: any[]): this;
    leave(...connections: any[]): this;
    filter(callback: (connection: any): boolean): Channel;
    send(data: any): this;
  }

  interface Service<T> {
    find?(params?: Params): Promise<T[] | Pagination<T>>;
    get?(id: number | string, params?: Params): Promise<T>;
    create?(data: T[], params?: Params): Promise<T[]>;
    create?(data: T , params?: Params): Promise<T>;
    update?(id: NullableId, data: T, params?: Params): Promise<T>;
    patch?(id: NullableId, data: any, params?: Params): Promise<T>;
    remove?(id: NullableId, params?: Params): Promise<T>;
    setup?(app?: Application, path?: string): void;
  }

  interface FeathersService<T> extends Service<T>, events.EventEmitter {
    hooks(hooks: HooksObject): Application;
    publish<T>(event?: string, callback: (data: T, hook: HookContext<T>) => Channel)
  }

  interface Application {
    get(name: string);
    set(name: string, value: any);
    disable(name: string);
    disabled(name: string);
    enable(name: string);
    enabled(name: string);
    configure(callback: (app: Application) => void): this;
    setup(server?: any): this;
    service<T>(location: string): FeathersService<T>;
    use<T>(path: string, service: Service<T> | Application, options?: any): this;
    channel(...names: string[]): Channel;
    publish<T>(event?: string, callback: (data: T, hook: HookContext<T>) => Channel | Channel[]);
  }
}

export = feathers;
