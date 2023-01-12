import { Context } from "_context";
import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";

/**
 * PlayCanvas Application
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Application/Canvas")
export class Node extends Blackprint.Node<typeof Node> {
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

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface("BPIC/PlayCanvas/Application/Canvas");
		iface.title = "Canvas";
	}
}

@Blackprint.registerInterface("BPIC/PlayCanvas/Application/Canvas")
export class Interface extends Blackprint.Interface<Node> {
	constructor(node: Node){
		super(node);

		let canvas = this.canvas = document.createElement('canvas');
		canvas.style.touchAction = "none";

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
}

// Make sure to save it to the Context, so we can access it from .sf extension
Context.IFace["Application/Canvas"] = Interface;