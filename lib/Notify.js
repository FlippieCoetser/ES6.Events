// Base IEvent interface and implementation
var Notification = (function () {
    function Notification() {
        // Private member vars
        this._listeners = [];
    }
    Notification.prototype.on = function (Listener, Callback) {
        /// <summary>Registers a new listener for the event.</summary>
        /// <param name="listener">The callback function to register.</param>
        this._listeners.unshift({ Listener: Listener, Callback: Callback });
    };
    Notification.prototype.removeListener = function (Listener) {
        /// <summary>Unregisters a listener from the event.</summary>
        /// <param name="listener">The callback function that was registered. If missing then all listeners will be removed.</param>
        if (typeof Listener === 'string') {
            for (var i = 0, l = this._listeners.length; i < l; l++) {
                if (this._listeners[i].name === Listener) {
                    this._listeners.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this._listeners = [];
        }
    };
    Notification.prototype.emit = function (Listener) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        /// <summary>Invokes all of the listeners for this event.</summary>
        /// <param name="args">Optional set of arguments to pass to listners.</param>
        var context = {};
        var listeners = this._listeners.slice(0);
        for (var i = 0, l = listeners.length; i < l; i++) {
            if (listeners[i].Listener === Listener) {
                listeners[i].Callback.apply(context, a || []);
            }
        }
    };
    return Notification;
})();
exports.Notification = Notification;
