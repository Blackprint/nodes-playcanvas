import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Gradually change vector value between two points
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Math/Vector/Lerp")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		Vector: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
		Target: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
		Alpha: Blackprint.Port.Default(Number, 0.1),
	};
	static output = {
		Out: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Lerp";
	}

	update() {
		let { Input, Output } = this.ref;
		let { Vector, Target, Alpha } = Input;
		if(!Vector || !Target) return;

		let temp = Vector.clone();
		temp.lerp(Vector, Target, Alpha);

		Output.Out = temp;
	}
}