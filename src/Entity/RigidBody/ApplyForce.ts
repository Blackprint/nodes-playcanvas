import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Apply force to an entity
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Entity/RigidBody/ApplyForce")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		/** Entity to apply the force into */
		Entity: Blackprint.Port.Union([PlayCanvas.GraphNode, PlayCanvas.Entity]),
		/** Force's vector (x,y,z) */
		Vec3: PlayCanvas.Vec3,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Apply Force";
	}

	update() {
		let { Input } = this.ref;
		if(!Input.Entity || !Input.Vec3) return;

		// Type cast for TypeScript
		let entity = Input.Entity as PlayCanvas.Entity;
		entity.rigidbody.applyForce(Input.Vec3);
	}
}