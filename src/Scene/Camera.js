Blackprint.registerNode("PlayCanvas/Scene/Camera",
class extends Blackprint.Node {
	static input = {
		// ToDo: rotate, translate
	};
	static output = {
		Camera: PlayCanvas.Entity,
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Camera";
		iface.description = "PlayCanvas";
	}

	init(){
		let temp = this.ref.Output.Camera = new PlayCanvas.Entity();
		temp.addComponent("camera", {
			clearColor: new PlayCanvas.Color(0, 0, 0),
		});

		temp.rotateLocal(-30, 0, 0);
		temp.translateLocal(0, 0, 5);
	}
});