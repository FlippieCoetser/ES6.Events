export interface IListener {
    <T>(arg?: T[]): void;
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
    protected _listeners: any[] = [];
    private _maxListeners: number = null;
    public addListener(event: string, listener): IEvent {
        return this.on(event, listener);
    }
    public emit(event: string, ...a: any[]): boolean {
        let filterEvent = [{field: "event", value: event, operator:  "eq"}];
        let listeners = this._listeners.filter(this._filter(filterEvent));
        /* istanbul ignore next */
        listeners.forEach(item => item.listener.apply({}, a || []));
        let filterOnce = [{field: "once", value: true, operator: "neq"}]
        this._listeners = listeners.filter(this._filter(filterOnce));
        return listeners.length !== 0 ? true : false;
    }
    public getMaxListeners(): number {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    }
    public listenerCount(event: string): number {
        let filterEvent = [{field: "event", value: event, operator:  "eq"}];
        return this._listeners.filter(this._filter(filterEvent))
        .length;
    }
    public listeners(event: string): Array<IListener> {
        return this._filterMatchingEvents(event)
        .map(item => item.listener)
        .reverse();
    }
    public on(event: string, listener: IListener ): IEvent {
        this._register(event, listener, false);
        return this;
    }
    public once(event: string, listener: IListener ): IEvent {
       this._register(event, listener, true);
       return this;
    }
    public removeAllListeners(event: string): IEvent {
        this._listeners = this._filterNonMatchingEvents(event);
        return this;
    }
    public removeListener(event: string, listener: IListener): IEvent {
        this._listeners = this._listeners.filter(item =>
        !(item.event === event) || !(item.listener === listener)
        );
        return this;
    }
    public setMaxListeners(thresshold: number): IEvent {
        this._maxListeners = thresshold;
        return this;
    }
    private _filterMatchingEvents(event: string): any[] {
        let filterEvent = [{field: "event", value: event, operator:  "eq"}];
        return this._listeners.filter(this._filter(filterEvent));
    }
    private _filterNonMatchingEvents(event: string): any[] {
        let filterNotEvent = [{field: "event", value: event, operator:  "neq"}];        
        return this._listeners.filter(this._filter(filterNotEvent));
    }
    private _filter(filters: any){        
        return item => { 
            let condition: any;
            filters.forEach(filter => {
                let operator = filter.operator === "eq" ? true: false;
                let test = item[filter.field] === filter.value;
                condition = operator && test; 
            });    
            return condition;
        }; 
    }
    private _register(event: string, listener: IListener, once: boolean): void {
        !this._checkListenerLimitReached(event) && this._listeners.unshift({event, listener, once});
        return;
    }
    private _returnListenerLimit(): number {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    }
    private _checkListenerLimitReached(event: string): boolean {
        let limitReached = this.listenerCount(event) === this._returnListenerLimit() ? true : false;
        limitReached && console.log("Listener Limit Reached");
        return limitReached;
    }
}
