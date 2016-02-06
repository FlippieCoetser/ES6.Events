export interface notify {
    add(listener: () => void): void;
    remove(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Notify implements notify {
    protected _listeners: any[];
    add(listener: () => void): void;
    remove(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export declare class MessageNotification extends Notify implements messageNotification {
    constructor(listener?: (message) => void);
    add(listener: (message) => void): void;
}
export interface messageNotification extends notify {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void): void;
    trigger(message: string): void;
}
