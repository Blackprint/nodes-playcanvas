import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Apply impulse to an entity
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Entity/RigidBody/ApplyImpulse")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		/** Entity to apply the impulse into */
		Entity: Blackprint.Port.Union([PlayCanvas.GraphNode, PlayCanvas.Entity]),
		/** Impulse's vector (x,y,z) */
		Vec3: PlayCanvas.Vec3,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Apply Impulse";
	}

	update() {
		let { Input } = this.ref;
		if(!Input.Entity || !Input.Vec3) return;

		// Type cast for TypeScript
		let entity = Input.Entity as PlayCanvas.Entity;
		entity.rigidbody.applyImpulse(Input.Vec3);
	}
}