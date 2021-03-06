/**
 * @jest-environment jsdom
 */

require("@blackprint/engine");

// === For Browser Environment ===
window.ResizeObserver = class{};
window.sf = require("scarletsframe/dist/scarletsframe.min.js");

// Disable loader for browser, because we're testing with Node.js
sf.loader.turnedOff = true;
sf.loader.task = false;

require("@blackprint/sketch/dist/blackprint.min.js");
require("@blackprint/sketch/dist/blackprint.sf.js");
// === For Browser Environment ===


let instance = null;
test.only('Blackprint.Sketch does exist on window', async () => {
	expect(window.Blackprint.Sketch).toBeDefined();

	// Create an instance where we can create nodes or import JSON
	instance = new Blackprint.Sketch();
});

jest.setTimeout(60e3); // 1 minute

// This may took longer to finish if also loading additional modules
test("Load required modules", async () => {
	// Force it as Node.js environment because we can't load module with URL
	Blackprint.Environment.isBrowser = false;
	Blackprint.Environment.isNode = true;

	// Alternative for Blackprint.loadModuleFromURL(...);
	await import("../dist/nodes-playcanvas.mjs"); // For Browser/Node.js
	await import("../dist/nodes-playcanvas.sf.mjs"); // For Browser UI

	// Wait and avoid Jest's test environment being torn down
	await Blackprint.getContext('PlayCanvas');
	await new Promise(resolve => setTimeout(resolve, 1000));

	// Reset to browser environment
	Blackprint.Environment.isBrowser = true;
	Blackprint.Environment.isNode = false;

	// Check if the nodes has been registered
	expect(Blackprint.nodes['PlayCanvas']).toBeDefined();
});

test("Create a node", async () => {
	instance.createNode('PlayCanvas/Application/Canvas', {id: 'The_ID'});
	expect(instance.iface.The_ID).toBeDefined();
});