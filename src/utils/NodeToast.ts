import Blackprint from "@blackprint/engine";
import { Context } from "_context";

// Bootstrap for add toast on node decoration
export class NodeToast { // eslint-disable-line
	declare iface: Blackprint.Interface;
	declare haveInfo: any;
	declare haveWarn: any;
	declare haveError: any;

	constructor(iface: Blackprint.Interface){
		this.iface = iface;
	}

	clear(){
		if(this.haveInfo){
			this.haveInfo.destroy();
			this.haveInfo = false;
		}
		if(this.haveWarn){
			this.haveWarn.destroy();
			this.haveWarn = false;
		}
		if(this.haveError){
			this.haveError.destroy();
			this.haveError = false;
		}
	}

	_reduceText(text: String){
		return text.replace(/\w{15,}/g, full => full.slice(0, 5)+'...');
	}

	info(text: String){
		if(!this.iface.$decoration) return;
		let temp = text;
		text = this._reduceText(text);

		if(this.haveInfo)
			this.haveInfo.text = text;
		else
			this.haveInfo = this.iface.$decoration.info(text);

		this.haveInfo._raw = temp;
	}

	warn(text: String){
		if(!this.iface.$decoration) return;
		let temp = text;
		text = this._reduceText(text);

		if(this.haveWarn)
			this.haveWarn.text = text;
		else
			this.haveWarn = this.iface.$decoration.warn(text);

		this.haveWarn._raw = temp;
	}

	error(text: String){
		if(!this.iface.$decoration) return;
		let temp = text;
		text = this._reduceText(text);

		if(this.haveError)
			this.haveError.text = text;
		else
			this.haveError = this.iface.$decoration.error(text);

		this.haveError._raw = temp;
	}

	success(text: String){
		if(!this.iface.$decoration) return;
		let ref = this.iface.$decoration.success(this._reduceText(text));
		ref._raw = text;
	}
}

Context.NodeToast = NodeToast;