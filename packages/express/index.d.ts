declare module '@feathersjs/express' {
  import { Application } from '@feathersjs/feathers';
  export default function <T>(app: Application<T>): Application<T>;
}
