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
Refer to https://nodejs.org/api/events.html for additional information

### IntelliSense Exeperience

![Alt Text](https://github.com/FlippieCoetser/Events/blob/master/intelliSense.gif)

### Installation

```
npm install typescript.events
```