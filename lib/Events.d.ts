export interface IEvent {
    add(listener: () => void): void;
    remove(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Event implements IEvent {
    private _listeners;
    add(listener: () => void): void;
    remove(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export interface IMessageEvent extends IEvent {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void): void;
    trigger(message: string): void;
}
