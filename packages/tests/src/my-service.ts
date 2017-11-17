import {
  Application,
  Id,
  NullableId,
  OptionalIDs,
  Paginated,
  Params,
  ServiceMethods,
  SetupMethod
} from '@feathersjs/feathers';

export class MyService<T = any> implements ServiceMethods<T>, SetupMethod {
  app: Application;

  constructor() {}

  async find(params?: Params): Promise<T[] | Paginated<T>> {
    return [];
  }

  async get(id: Id, params?: Params): Promise<T> {
    return {
      _id: '1337',
      name: 'really old dude',
      email: 'rod@aol.com',
      age: 99
    } as any;
  }

  async create(data: OptionalIDs<T> | OptionalIDs<T>[], params?: Params): Promise<T[] | T> {
    return {} as any;
  }

  async update(id: NullableId, data: T, params?: Params): Promise<T> {
    return {} as any;
  }

  async patch(id: NullableId, data: Partial<T>, params?: any): Promise<T> {
    return {} as any;
  }

  async remove(id: NullableId, params?: Params): Promise<T> {
    return {} as any;
  }

  setup(app: Application<any>, path: string): void {
    this.app = app;
  }
}