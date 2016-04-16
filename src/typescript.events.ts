export interface IListener {
    (...arg): void;
}

export interface IItem {
    event: string;
    listener: IListener;
    once: boolean;
}

export interface IEvent {
    addListener(event: string, listener: IListener): IEvent;
    emit(event: string, ...a: any[]): boolean;
    getMaxListeners(): number;
    listenerCount(event: string): number;
    listeners(event: string): Array<IListener>;
    on(event: string, listener: IListener): IEvent;
    once(event: string, listner: IListener): IEvent;
    removeAllListeners(event: string): IEvent;
    removeListener(event: string, listener: IListener): IEvent;
    setMaxListeners(thressholds: number): IEvent;
}

export class Event implements IEvent {
    public static defaultMaxListeners: number = 10;
    protected _listeners: Array<IItem> = [];
    private _maxListeners: number = null;
    public addListener(event: string, listener): IEvent {
        return this.on(event, listener);
    }
    public emit(event: string, ...a): boolean {
        let listenerAvailable = this.listenerCount(event) !== 0;
        let items = this._filter(this._listeners, this._matchingEvents, event);
        this._invokeListeners(items, ...a);
        this._listeners = this._filter(items, this._nonOnce);
        return listenerAvailable;
    }
    public getMaxListeners(): number {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    }
    public listenerCount(event: string): number {
        return this._filter(this._listeners, this._matchingEvents, event).length;
    }
    public listeners(event: string): Array<IListener> {
        return this._filter(this._listeners, this._matchingEvents, event)
        .map(item => item.listener)
        .reverse();
    }
    public on(event: string, listener: IListener ): IEvent {
        this._register({event, listener, once: false});
        return this;
    }
    public once(event: string, listener: IListener ): IEvent {
       this._register({event, listener, once: true});
       return this;
    }
    public removeAllListeners(event: string): IEvent {
        this._listeners = this._filter(this._listeners, this._nonMatchingEvents, event);
        return this;
    }
    public removeListener(event: string, listener: IListener): IEvent {
        this._listeners = this._filter(this._listeners, this._matchingEventsAndListener, event, listener);
        return this;
    }
    public setMaxListeners(thresshold: number): IEvent {
        this._maxListeners = thresshold;
        return this;
    }
    private _matchingEvents(item: IItem, event: string): boolean {
        return item.event === event;
    }
    private _matchingEventsAndListener(item: IItem, event: string, listener: IListener): boolean {
        return !(item.event === event) || !(item.listener === listener);
    }
    private _nonMatchingEvents(item: IItem, event: string): boolean {
        return item.event !== event;
    }
    private _nonOnce(item: IItem): boolean {
        return !item.once;
    }
    private _filter(items: Array<IItem>, filter: any, ...arg): Array<IItem> {
        return items.filter(item => filter(item, ...arg));
    }
    private _invokeListeners(items: Array<IItem>, ...a): void {
        items.map(item => item.listener(...a));
    }
    private _register(item: IItem): void {
        if (!this._checkListenerLimitReached(item.event)) {
            this._listeners.unshift(item);
            return;
        }
        console.log("Listner Limit Reached");
        return ;
    }
    private _returnListenerLimit(): number {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    }
    private _checkListenerLimitReached(event: string): boolean {
        return this.listenerCount(event) === this._returnListenerLimit();
    }
}
