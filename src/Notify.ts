export interface callback {
    (parameter?: string):void;
}

export interface notification {
    on(Listener: string, Callback: callback): void;
    removeListener(listener: string): void;
    emit(Listener: string, ...a:any[]): void;
}

export class Notification implements notification {
    // Private member vars
	protected _listeners: any[] = [];
   
 
	public on (Listener: string, Callback: callback ): void {
		/// <summary>Registers a new listener for the event.</summary>
		/// <param name="listener">The callback function to register.</param>
		this._listeners.unshift({Listener, Callback});
	}
	public removeListener (Listener?: string): void {
		/// <summary>Unregisters a listener from the event.</summary>
		/// <param name="listener">The callback function that was registered. If missing then all listeners will be removed.</param>
        if (typeof Listener === 'string') {
		    for (var i = 0, l = this._listeners.length; i < l; l++) {
			    if (this._listeners[i].name === Listener) {
				    this._listeners.splice(i, 1);
				    break;
			    }	
		    }
        } else {
            this._listeners = [];
        }
    }

    public emit (Listener: string, ...a: any[]): void {
		/// <summary>Invokes all of the listeners for this event.</summary>
		/// <param name="args">Optional set of arguments to pass to listners.</param>
		var context = {};
		var listeners = this._listeners.slice(0);
		for(var i = 0, l = listeners.length; i < l; i++) {
		    if(listeners[i].Listener === Listener){ 
            listeners[i].Callback.apply(context, a || []);
            }
		}
	}
}