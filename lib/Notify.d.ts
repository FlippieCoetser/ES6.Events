export interface callback {
    (parameter?: string): void;
}
export interface notification {
    on(Listener: string, Callback: callback): void;
    removeListener(listener: string): void;
    emit(Listener: string, ...a: any[]): void;
}
export declare class Notification implements notification {
    protected _listeners: any[];
    on(Listener: string, Callback: callback): void;
    removeListener(Listener?: string): void;
    emit(Listener: string, ...a: any[]): void;
}
