declare module '@feathersjs/primus/client' {
  import { Primus } from 'primus';

  export default function (socket: Primus, options?: FeathersPrimusClientOptions): () => void

  export interface FeathersPrimusClientOptions {
    timeout?: number;
  }
}

