import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Get entity from scene
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Scene/Get/Entity")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		App: PlayCanvas.Application,
		Name: String,
	};
	static output = {
		Entity: PlayCanvas.GraphNode,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Get Entity";
	}

	update() {
		let { Input, Output } = this.ref;

		if(!Input.Name || !Input.App) return;
		Output.Entity = Input.App.scene.root.findByName('ball');
	}
}