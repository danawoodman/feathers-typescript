export type ID = string;

export interface User {
  _id: ID;
  name: string;
  email: string;
  age: number;
}

export interface Message {
  _id: ID;
  _id_sender: ID,
  text: string;
}

export interface ServiceTypes {
  users: User,
  messages: Message
}