[![NPM](https://img.shields.io/npm/v/@blackprint/nodes-playcanvas.svg)](https://www.npmjs.com/package/@blackprint/nodes-playcanvas)
[![Build Status](https://github.com/blackprint/nodes-playcanvas/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/blackprint/nodes-playcanvas/actions/workflows/build.yml)

## Blackprint nodes for PlayCanvas
Still work in progress

## Example
If you didn't see the import modal, please refresh the page.

1. [Simple box](https://blackprint.github.io/#page/sketch/1#;importSketch:jZHLboMwEEX_ZdYUmxgIsErComrVRdUsq6gyxgSnxljYiRJF_HsplAr6ULu17j3HM3OFF0iuUNX5UfL7LSTPUFqrTYIQy5V7MDmX4tS4ilu0L9FGUvaqG6EsUnXOzY2W9MKoOlGzCmnM8ijLQlZgmsUEB1kUFiQOOAkIoVGYUewvcfGt6VYHA87vXqUrtMq-mFfY9V2McmHGr7BamVrynrZrHXjsBGkvQFvGFUcPYl_absIrCEiwA2dIvMhz4AKJ78cO1Eerj_Z9HbMkcUDRikMCaSlkDu2ubXc_4NMu1NCx5Q18THo-8YMpfx79r2BTn8fKYqAHfk9fhHhKn-T-Rq-1loJRK2qFhqdJt-OQ5TCBh6Op404ZSxXjY9j_FK3VZdSkw0XQLbdPvOANnxc6-jL-2I_ndZ03)

<!--
## Import this nodes from URL
Please specify the version to avoid breaking changes.

```js
Blackprint.loadModuleFromURL([
  'https://cdn.jsdelivr.net/npm/@blackprint/nodes-playcanvas@0.0.1/dist/nodes-playcanvas.mjs'
], {
  // Turn this on if you want to load .sf.js, and .sf.css
  // only with single .mjs
  loadBrowserInterface: true // set to "false" for Node.js/Deno
});
```
-->

## Development URL
You can use this link to load unpublished nodes and still under development on GitHub.<br>
https://cdn.jsdelivr.net/gh/Blackprint/nodes-playcanvas@dist/nodes-playcanvas.mjs

Replace `dist` with your latest commit hash (from `dist` branch) to avoid cache from CDN.

## Local module server for development
```sh
$ cd /your/project/folder
$ git clone --depth 1 --recursive https://github.com/Blackprint/nodes-playcanvas.git .
$ pnpm i
$ npm start
 >> [Browsersync] Access URLs:
 >> -----------------------------------
 >> Local: http://localhost:6789
 >> -----------------------------------
```

Copy the `http://localhost:6789` URL and go to online Blackprint Editor. <br>
Go to development mode, and paste it to remote module server. Then refresh the page, after that you can modify the code from your favorite text editor.

![brave_7NcrWUt66n](https://user-images.githubusercontent.com/11073373/159176092-7271f980-2a70-4e38-8830-e9746170426d.png)


### License
MIT
