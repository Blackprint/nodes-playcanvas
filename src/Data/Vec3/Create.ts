import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Create 3-dimensional vector (X, Y, Z)
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Data/Vec3/Create")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		X: Blackprint.Port.Default(Number, 0),
		Y: Blackprint.Port.Default(Number, 0),
		Z: Blackprint.Port.Default(Number, 0),
	};
	static output = {
		Data: PlayCanvas.Vec3,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Create Vec3";
	}

	update() {
		let { Input, Output } = this.ref;
		Output.Data = new PlayCanvas.Vec3(Input.X, Input.Y, Input.Z);
	}
}