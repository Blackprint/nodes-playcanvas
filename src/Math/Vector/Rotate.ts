import Blackprint from "@blackprint/sketch";
import PlayCanvas from "playcanvas";
import { NodeToast } from "utils/NodeToast";

let toRadian = Math.PI/180;

/**
 * Rotate a vector based on specified dimension component
 * @summary PlayCanvas
 * @blackprint node
 */
@Blackprint.registerNode("PlayCanvas/Math/Vector/Rotate")
export class Node extends Blackprint.Node<typeof Node> {
	static input = {
		/** Vector to be rotated */
		Vector: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
		/** The rotation is counter-clockwise, started from quadrant 1 */
		Degree: Blackprint.Port.Default(Number, 0),
		/**
		 * Vector component that you want to rotate
		 * @menu
		 * - [XY]:(XY) = Based on XY
		 * - [XZ]:(XZ) = Based on XZ
		 * - [YZ]:(YZ) = Based on YZ
		 */
		Component: Blackprint.Port.Default(String, 'XY'),
	};
	static output = {
		Out: Blackprint.Port.Union([PlayCanvas.Vec2, PlayCanvas.Vec3, PlayCanvas.Vec4]),
	};

	constructor(instance: Blackprint.Engine){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Rotate Vector";
		this._toast = new NodeToast(iface);
	}

	update() {
		let { Input, Output } = this.ref;
		let vec = Input.Vector as PlayCanvas.Vec4;
		if(vec == null) return;

		vec = vec.clone();

		let { Component, Degree } = Input;
		var rX = Math.cos(toRadian * Degree);
		var rY = Math.sin(toRadian * Degree);

		let { x, y, z } = vec;

		if(Component === 'XY'){
			vec.x = x * rX - y * rY;
			vec.y = y * rX + x * rY;
		}
		else if(Component === 'XZ'){
			vec.x = x * rX - z * rY;
			vec.z = z * rX + x * rY;
		}
		else if(Component === 'YZ'){
			vec.y = y * rX - z * rY;
			vec.z = z * rX + y * rY;
		}
		else {
			this._toast.error(`"${Component}" is not recognized`);
			return;
		}

		this._toast.clear();
		Output.Out = vec;
	}
}