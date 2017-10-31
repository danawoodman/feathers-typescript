declare module '@feathersjs/primus/client' {
  import { Primus } from 'primus';

  export default function (socket: Primus, options?: FeathersPrimusClientOptions): () => void

  interface FeathersPrimusClientOptions {
    timeout?: number;
  }
}

