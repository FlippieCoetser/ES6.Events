export interface event {
    add(listener: () => void): void;
    remove(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Event implements event {
    protected _listeners: any[];
    add(listener: () => void): void;
    remove(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export declare class MessageEvent extends Event implements messageEvent {
    constructor(listener?: (message) => void);
    add(listener: (message) => void): void;
}
export interface messageEvent extends event {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void): void;
    trigger(message: string): void;
}
