import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Apply torque to an entity
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Entity/RigidBody/ApplyTorque")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		Entity: Blackprint.Port.Union([PlayCanvas.GraphNode, PlayCanvas.Entity]),
		Vec3: PlayCanvas.Vec3,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Apply Torque";
	}

	update() {
		let { Input } = this.ref;
		if(!Input.Entity || !Input.Vec3) return;

		// Type cast for TypeScript
		let entity = Input.Entity as PlayCanvas.Entity;
		entity.rigidbody.applyTorque(Input.Vec3);
	}
}