// Base IEvent interface and implementation

export interface notification {
    bind(listener: () => void): void;
    unbind(listener: () => void ): void;
    trigger(...a:any[]): void;
}

export class Notification implements notification {
    // Private member vars
	protected _listeners: any[] = [];
   
 
	public bind (listener: () => void): void {
		/// <summary>Registers a new listener for the event.</summary>
		/// <param name="listener">The callback function to register.</param>
		this._listeners.unshift(listener);
	}
	public unbind (listener?: () => void): void {
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

export class MessageNotification extends Notification implements messageNotification {
        constructor(listener?: (message) => void){
            super();
            if(listener){
                this.bind(listener);
            }
        }
        
        public bind (listener: (message) => void): void {
		/// <summary>Registers a new listener for the event.</summary>
		/// <param name="listener">The callback function to register.</param>
		this._listeners.unshift(listener);
	}
    } 
	
// Exposing Notify
export interface messageNotification extends notification {
    bind(listener: (message: string) => void): void;
    unbind(listener: (message: string) => void ): void;
    trigger(message: string): void;
}
