declare module '@feathersjs/configuration' {
  import { Application } from '@feathersjs/feathers';

  export default function (): <T>(this: Application<T>) => Application<T>
}