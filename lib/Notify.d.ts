export interface notification {
    bind(listener: () => void): void;
    unbind(listener: () => void): void;
    trigger(...a: any[]): void;
}
export declare class Notification implements notification {
    protected _listeners: any[];
    bind(listener: () => void): void;
    unbind(listener?: () => void): void;
    trigger(...a: any[]): void;
}
export declare class MessageNotification extends Notification implements messageNotification {
    constructor(listener?: (message) => void);
    bind(listener: (message) => void): void;
}
export interface messageNotification extends notification {
    bind(listener: (message: string) => void): void;
    unbind(listener: (message: string) => void): void;
    trigger(message: string): void;
}
