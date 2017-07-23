# vue-pino

A small wrapper for adding Pino to Vuejs

## How to install:

```
npm install --save vue-pino
```

And in your entry file:
```
import Vue from 'vue'
import VuePino from 'vue-pino'

Vue.use(VuePino)
```

## Usage:
This wrapper bind `pino` to `Vue` or `this` if you're using single file component.

You can use `pino` like this:
```
Vue.pino.info("Pino is working")

this.pino.info("Pino is working")
```
