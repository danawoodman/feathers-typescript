import { Primus } from 'primus';

declare module '@feathersjs/primus/client' {
  export = FeathersPrimusClientStatic;
}

interface FeathersPrimusClientStatic {
  (socket: Primus, options?: FeathersPrimusClientOptions): () => void
}

interface FeathersPrimusClientOptions {
  timeout?: number;
}