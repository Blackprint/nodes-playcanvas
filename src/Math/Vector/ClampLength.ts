import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Clamp vector length
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Math/Vector/ClampLength")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		Vector: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
		Max: Blackprint.Port.Default(Number, 10),
	};
	static output = {
		Out: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Clamp Length";
	}

	update() {
		let { Input, Output } = this.ref;
		let { Vector, Max } = Input;
		if(!Vector) return;

		Vector = Vector.clone();
        if(Vector.length() > Max)
            Vector.normalize().scale(Max);

		Output.Out = Vector;
	}
}