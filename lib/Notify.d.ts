export interface notification {
    add(listener: () => void): void;
    remove(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Notification implements notification {
    protected _listeners: any[];
    add(listener: () => void): void;
    remove(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export declare class MessageNotification extends Notification implements messageNotification {
    constructor(listener?: (message) => void);
    add(listener: (message) => void): void;
}
export interface messageNotification extends notification {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void): void;
    trigger(message: string): void;
}
