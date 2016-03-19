# Events
Implementation of **Node.Events** in Typescript for Client and Server

### Example
```typescript
import {Event} from "typescript.events";

class MyEmitter extends Event {}

let myEmitter = new MyEmitter();
myEmitter.on('event', () => {
   console.log('event occured') 
});

myEmitter.emit('event');
```
### IntelliSense Exeperience

![Alt Text](https://github.com/FlippieCoetser/Events/intelliSense.gif)

Refer to https://nodejs.org/api/events.html for additional information