import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Create 2-dimensional vector (X, Y)
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Data/Vec2/Create")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		X: Blackprint.Port.Default(Number, 0),
		Y: Blackprint.Port.Default(Number, 0),
	};
	static output = {
		Data: PlayCanvas.Vec2,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Create Vec2";
	}

	update() {
		let { Input, Output } = this.ref;
		Output.Data = new PlayCanvas.Vec2(Input.X, Input.Y);
	}
}