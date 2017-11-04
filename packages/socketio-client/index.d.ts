///<reference types="socket.io-client" />

declare module '@feathersjs/socketio/client' {
  export default function(socket: SocketIOClient.Socket, options?: FeathersSocketIOClientOptions): () => void

  export interface FeathersSocketIOClientOptions {
    timeout?: number
  }
}
