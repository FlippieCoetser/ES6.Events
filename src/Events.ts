// Base IEvent interface and implementation

export interface IEvent {
    add(listener: () => void): void;
    remove(listener: () => void ): void;
    trigger(...a:any[]): void;
}

export class Event implements IEvent {
    // Private member vars
	protected _listeners: any[] = [];
   
 
	public add (listener: () => void): void {
		/// <summary>Registers a new listener for the event.</summary>
		/// <param name="listener">The callback function to register.</param>
		this._listeners.unshift(listener);
	}
	public remove (listener?: () => void): void {
		/// <summary>Unregisters a listener from the event.</summary>
		/// <param name="listener">The callback function that was registered. If missing then all listeners will be removed.</param>
        if (typeof listener === 'function') {
		    for (var i = 0, l = this._listeners.length; i < l; l++) {
			    if (this._listeners[i] === listener) {
				    this._listeners.splice(i, 1);
				    break;
			    }	
		    }
        } else {
            this._listeners = [];
        }
    }

    public trigger (...a: any[]): void {
		/// <summary>Invokes all of the listeners for this event.</summary>
		/// <param name="args">Optional set of arguments to pass to listners.</param>
		var context = {};
		var listeners = this._listeners.slice(0);
		for(var i = 0, l = listeners.length; i < l; i++) {
		    listeners[i].apply(context, a || []);
		}
	}
}

export class MessageEvent extends Event implements IMessageEvent {
        constructor(listener?: (message) => void){
            super();
            if(listener){
                this.add(listener);
            }
        }
        
        public add (listener: (message) => void): void {
		/// <summary>Registers a new listener for the event.</summary>
		/// <param name="listener">The callback function to register.</param>
		this._listeners.unshift(listener);
	}
    } 
	
// Exposing events
export interface IMessageEvent extends IEvent {
    add(listener: (message: string) => void): void;
    remove(listener: (message: string) => void ): void;
    trigger(message: string): void;
}
