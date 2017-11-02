///<reference types="feathers"/>

declare module '@feathersjs/socket-commons' {
  // (JL) does it have a public API?
  type Connection = any; // todo: spec connection

  interface Channel {
    join(...connections: Connection[]): this;
    leave(...connections: Connection[]): this;
    filter(callback: (connection: Connection) => boolean): Channel;
    send(data: any): this;
  }
}

declare module '@feathersjs/feathers' {
  import { Channel } from '@feathersjs/socket-commons';
  import { HookContext } from '@feathersjs/feathers';

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