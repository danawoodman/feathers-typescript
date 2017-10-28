declare module '@feathersjs/socket-commons' {
  // (JL) does it have a public API?
}

declare module '@feathersjs/feathers' {
  interface ServiceAddons<T, DataTypes> {
    publish(callback: (data: T, hook: HookContext<T>) => Channel): this
    publish(event: string, callback: (data: T, hook: HookContext<T>) => Channel): this
  }

  interface Application<DataTypes = {}> {
    channel(...names: string[]): Channel;

    publish<T>(callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<DataTypes>;
    publish<T>(event: string, callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<DataTypes>;
  }
}