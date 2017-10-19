# Events
Implementation of **Node.Events** in Typescript for Client and Server

### Example
#### Typescript
```typescript
import {Event} from "typescript.events";

class MyEmitter extends Event {}

let myEmitter = new MyEmitter();
myEmitter.on('event', () => {
   console.log('event occured') 
});

myEmitter.emit('event');
```
#### Javascript
When performing in browser testing with [NPM](https://npm.runkit.com/typescript.events) copy, paste and run below example.
```javascript
var Event = require("typescript.events").Event;

class MyEmitter extends Event {};

let myEmitter = new MyEmitter();
myEmitter.on('event', () => {
   console.log('event occured') 
});

myEmitter.emit('event');
```
Refer to [Node Documentation](https://nodejs.org/api/events.html) for additional information

### IntelliSense Exeperience

![Alt Text](https://github.com/FlippieCoetser/Events/blob/master/intelliSense.gif)

### Installation

```
npm install typescript.events
```

### Development
#### Prepare environment
```
git clone https://github.com/FlippieCoetser/Events
cd Events
npm install
npm link
```
#### Lint code
```
npm run lint
```
#### Build code
```
npm run build
```
#### Test code
```
npm test
```
#### Coverage report
```
npm run report
```
#### Package code
```
npm run package
```
