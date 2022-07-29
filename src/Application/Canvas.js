/**
 * Create new PlayCanvas instance and the canvas for rendering
 * @param Child PlayCanvas's entities
 * @returns Output port
 */
Blackprint.registerNode("PlayCanvas/Application/Canvas",
class extends Blackprint.Node {
	static input = {
		/** PlayCanvas's entities */
		Child: Blackprint.Port.ArrayOf(PlayCanvas.Entity),
	}

	static output = {
		/** PlayCanvas's instance */
		Instance: PlayCanvas.Application,
		/** PlayCanvas's canvas for displaying scenes */
		Canvas: HTMLCanvasElement,
	}

	constructor(instance){
		super(instance);

		let iface = this.setInterface("BPIC/PlayCanvas/Application/Canvas");
		iface.title = "Canvas";
	}
});

Blackprint.registerInterface('BPIC/PlayCanvas/Application/Canvas',
Context.IFace.EngineCreateCanvas = class IMyTemplate extends Blackprint.Interface {
	constructor(node){
		super(node);

		let canvas = this.canvas = document.createElement('canvas');
		canvas.touchAction = "none";

		canvas.width = 360;
		canvas.height = 240;
	}

	init(){
		this.input.Child.on('value', ev => {
			this.ref.Output.Instance.root.addChild(ev.cable.value);
		});
		this.input.Child.on('disconnect', ev => {
			this.ref.Output.Instance.root.removeChild(ev.target.value);
		});
	}

	imported(){
		let Output = this.ref.Output;

		Output.Canvas = this.canvas;
		Output.Instance = new PlayCanvas.Application(Output.Canvas, {});
		Output.Instance.start();
	}

	destroy(){
		this.ref.Output.Instance.destroy();
	}
});