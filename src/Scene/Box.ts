import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Create Box
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Scene/Box")
export class Node extends Blackprint.Node<typeof Node> {
	static output = {
		Box: PlayCanvas.Entity,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Box";
	}

	init(){
		let temp = this.ref.Output.Box = new PlayCanvas.Entity();

		const material = new PlayCanvas.StandardMaterial();
		material.diffuse = PlayCanvas.Color.GRAY;
		material.update();

		temp.addComponent("render", {
			type: "box",
			material: material,
		});

		// temp.setLocalScale(50, 1, 50);
		// temp.setLocalPosition(0, -0.5, 0);
	}
}