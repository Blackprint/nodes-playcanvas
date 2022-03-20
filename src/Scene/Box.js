Blackprint.registerNode("PlayCanvas/Scene/Box",
class EmptyNode extends Blackprint.Node {
	static input = {};
	static output = {
		Box: PlayCanvas.Entity,
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Box";
		iface.description = "PlayCanvas";
	}

	init(){
		let temp = this.ref.Output.Box = new PlayCanvas.Entity();

		const material = new PlayCanvas.StandardMaterial();
		material.diffuse = PlayCanvas.Color.GRAY;
		material.update();

		temp.addComponent("render", {
			type: "box",
			material: material,
		});
	
		// temp.setLocalScale(50, 1, 50);
		// temp.setLocalPosition(0, -0.5, 0);
	}
});