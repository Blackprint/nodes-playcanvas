import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * Create Camera
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Scene/Camera")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		// ToDo: rotate, translate
	};
	static output = {
		Camera: PlayCanvas.Entity,
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Camera";
	}

	init(){
		let temp = this.ref.Output.Camera = new PlayCanvas.Entity();

		temp.addComponent("camera", {
			clearColor: new PlayCanvas.Color(0, 0, 0),
		});

		temp.rotateLocal(-30, 0, 0);
		temp.translateLocal(0, 0, 5);
	}
}