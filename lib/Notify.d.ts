export interface callback {
    (parameter?: string): void;
}
export interface notification {
    bind(listener: callback): void;
    unbind(listener: callback): void;
    trigger(...a: any[]): void;
}
export declare class Notification implements notification {
    protected _listeners: any[];
    bind(listener: callback): void;
    unbind(listener?: callback): void;
    trigger(...a: any[]): void;
}
