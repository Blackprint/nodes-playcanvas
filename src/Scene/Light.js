Blackprint.registerNode("PlayCanvas/Scene/Light",
class EmptyNode extends Blackprint.Node {
	static input = {};
	static output = {
		Light: PlayCanvas.Entity,
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Light";
		iface.description = "PlayCanvas";
	}

	init(){
		let temp = this.ref.Output.Light = new PlayCanvas.Entity();
		temp.addComponent("light", {
			type: "directional",
			color: new PlayCanvas.Color(1, 1, 1),
			castShadows: true,
			intensity: 2,
			shadowBias: 0.2,
			shadowDistance: 16,
			normalOffsetBias: 0.05,
			shadowResolution: 2048,
		});
	
		temp.setLocalEulerAngles(45, 30, 0);
	}
});