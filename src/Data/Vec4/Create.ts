import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Create 4-dimensional vector (W, X, Y, Z)
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Data/Vec4/Create")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		W: Blackprint.Port.Default(Number, 0),
		X: Blackprint.Port.Default(Number, 0),
		Y: Blackprint.Port.Default(Number, 0),
		Z: Blackprint.Port.Default(Number, 0),
	};
	static output = {
		Data: PlayCanvas.Vec4,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Create Vec4";
	}

	update() {
		let { Input, Output } = this.ref;
		Output.Data = new PlayCanvas.Vec4(Input.W, Input.X, Input.Y, Input.Z);
	}
}