///<reference types="socket.io-client" />

declare module '@feathersjs/socketio/client' {
  export = FeathersSocketIOClientStatic;
}

interface FeathersSocketIOClientStatic {
  (socket: SocketIOClient.Socket, options?: FeathersSocketIOClientOptions): () => void
}

interface FeathersSocketIOClientOptions {
  timeout?: number
}