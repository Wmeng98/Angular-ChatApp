export class ChatMessage {
    $key?: string; // correspong to firebase key on object , unique
    email?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
}