[![NPM](https://img.shields.io/npm/v/@blackprint/nodes-playcanvas.svg)](https://www.npmjs.com/package/@blackprint/nodes-playcanvas)
[![Build Status](https://github.com/blackprint/nodes-playcanvas/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/blackprint/nodes-playcanvas/actions/workflows/build.yml)

## Blackprint nodes for PlayCanvas
Still work in progress

## Example
1. [Simple box](https://blackprint.github.io/#page/sketch/1#;importSketch:jZHLboMwEEX_ZdYUmxgIsErComrVRdUsq6gyxgSnxljYiRJF_HsplAr6ULu17j3HM3OFF0iuUNX5UfL7LSTPUFqrTYIQy5V7MDmX4tS4ilu0L9FGUvaqG6EsUnXOzY2W9MKoOlGzCmnM8ijLQlZgmsUEB1kUFiQOOAkIoVGYUewvcfGt6VYHA87vXqUrtMq-mFfY9V2McmHGr7BamVrynrZrHXjsBGkvQFvGFUcPYl_absIrCEiwA2dIvMhz4AKJ78cO1Eerj_Z9HbMkcUDRikMCaSlkDu2ubXc_4NMu1NCx5Q18THo-8YMpfx79r2BTn8fKYqAHfk9fhHhKn-T-Rq-1loJRK2qFhqdJt-OQ5TCBh6Op404ZSxXjY9j_FK3VZdSkw0XQLbdPvOANnxc6-jL-2I_ndZ03)

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

## Development URL
You can use this link to load unpublished nodes and still under development on GitHub.
> `https://cdn.jsdelivr.net/gh/Blackprint/nodes-playcanvas@dist/nodes-playcanvas.mjs?1`

Please append `/url-here?random-number` if your browser still using the cached files after the repository was updated.

### License
MIT