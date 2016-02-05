export interface IEvent {
    add(listener: () => void): void;
    remove(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Event implements IEvent {
    protected _listeners: any[];
    add(listener: () => void): void;
    remove(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export declare class MessageEvent extends Event implements IMessageEvent {
    constructor(listener?: (message) => void);
    add(listener: (message) => void): void;
}
export interface IMessageEvent extends IEvent {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void): void;
    trigger(message: string): void;
}
