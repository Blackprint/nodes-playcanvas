/* MIT Licensed */
var T=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var Y=(s,t,e)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e,o)=>{for(var c=o>1?void 0:o?U(t,e):t,p=s.length-1,l;p>=0;p--)(l=s[p])&&(c=(o?l(t,e,c):l(c))||c);return o&&c&&T(t,e,c),c};var i=(s,t,e)=>(Y(s,typeof t!="symbol"?t+"":t,e),e);var S=globalThis.Blackprint.loadScope({url:import.meta.url,hasInterface:!0,hasDocs:!0}),L=globalThis.sf;async function _(s,t){let e=globalThis.Blackprint.Environment.loadFromURL;return e&&L?.loader!=null?(await L.loader.mjs([t]))[0]:await(e?import(t):import(s))}var R=S;var E=R.createContext("PlayCanvas");E.EventSlot={slot:"my-private-event-slot"};var r=S;var X=typeof window<"u"?window:globalThis,a=X.PlayCanvas||await _("playcanvas","https://cdn.jsdelivr.net/npm/playcanvas@1.x/build/playcanvas.mjs");var f=class extends r.Node{constructor(t){super(t);let e=this.setInterface("BPIC/PlayCanvas/Application/Canvas");e.title="Canvas"}};i(f,"input",{Child:r.Port.ArrayOf(a.Entity)}),i(f,"output",{Instance:a.Application,Canvas:HTMLCanvasElement}),f=n([r.registerNode("PlayCanvas/Application/Canvas")],f);var B=class extends r.Interface{constructor(t){super(t);let e=this.canvas=document.createElement("canvas");e.style.touchAction="none",e.width=360,e.height=240}init(){this.input.Child.on("value",t=>{this.ref.Output.Instance.root.addChild(t.cable.value)}),this.input.Child.on("disconnect",t=>{this.ref.Output.Instance.root.removeChild(t.target.value)})}imported(){let t=this.ref.Output;t.Canvas=this.canvas,t.Instance=new a.Application(t.Canvas,{}),t.Instance.start()}destroy(){this.ref.Output.Instance.destroy()}};B=n([r.registerInterface("BPIC/PlayCanvas/Application/Canvas")],B);E.IFace["Application/Canvas"]=B;var m=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Create Vec2"}update(){let{Input:t,Output:e}=this.ref;e.Data=new a.Vec2(t.X,t.Y)}};i(m,"input",{X:r.Port.Default(Number,0),Y:r.Port.Default(Number,0)}),i(m,"output",{Data:a.Vec2}),m=n([r.registerNode("PlayCanvas/Data/Vec2/Create")],m);var h=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Create Vec3"}update(){let{Input:t,Output:e}=this.ref;e.Data=new a.Vec3(t.X,t.Y,t.Z)}};i(h,"input",{X:r.Port.Default(Number,0),Y:r.Port.Default(Number,0),Z:r.Port.Default(Number,0)}),i(h,"output",{Data:a.Vec3}),h=n([r.registerNode("PlayCanvas/Data/Vec3/Create")],h);var y=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Create Vec4"}update(){let{Input:t,Output:e}=this.ref;e.Data=new a.Vec4(t.W,t.X,t.Y,t.Z)}};i(y,"input",{W:r.Port.Default(Number,0),X:r.Port.Default(Number,0),Y:r.Port.Default(Number,0),Z:r.Port.Default(Number,0)}),i(y,"output",{Data:a.Vec4}),y=n([r.registerNode("PlayCanvas/Data/Vec4/Create")],y);var x=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Apply Force"}update(){let{Input:t}=this.ref;if(!t.Entity||!t.Vec3)return;t.Entity.rigidbody.applyForce(t.Vec3)}};i(x,"input",{Entity:r.Port.Union([a.GraphNode,a.Entity]),Vec3:a.Vec3}),x=n([r.registerNode("PlayCanvas/Entity/RigidBody/ApplyForce")],x);var I=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Apply Impulse"}update(){let{Input:t}=this.ref;if(!t.Entity||!t.Vec3)return;t.Entity.rigidbody.applyImpulse(t.Vec3)}};i(I,"input",{Entity:r.Port.Union([a.GraphNode,a.Entity]),Vec3:a.Vec3}),I=n([r.registerNode("PlayCanvas/Entity/RigidBody/ApplyImpulse")],I);var k=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Apply Torque"}update(){let{Input:t}=this.ref;if(!t.Entity||!t.Vec3)return;t.Entity.rigidbody.applyTorque(t.Vec3)}};i(k,"input",{Entity:r.Port.Union([a.GraphNode,a.Entity]),Vec3:a.Vec3}),k=n([r.registerNode("PlayCanvas/Entity/RigidBody/ApplyTorque")],k);var d=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Clamp Length"}update(){let{Input:t,Output:e}=this.ref,{Vector:o,Max:c}=t;o&&(o=o.clone(),o.length()>c&&o.normalize().scale(c),e.Out=o)}};i(d,"input",{Vector:r.Port.Union([a.Vec2,a.Vec3,a.Vec4]),Max:r.Port.Default(Number,10)}),i(d,"output",{Out:r.Port.Union([a.Vec2,a.Vec3,a.Vec4])}),d=n([r.registerNode("PlayCanvas/Math/Vector/ClampLength")],d);var v=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Lerp"}update(){let{Input:t,Output:e}=this.ref,{Vector:o,Target:c,Alpha:p}=t;if(!o||!c)return;let l=o.clone();l.lerp(o,c,p),e.Out=l}};i(v,"input",{Vector:r.Port.Union([a.Vec2,a.Vec3,a.Vec4]),Target:r.Port.Union([a.Vec2,a.Vec3,a.Vec4]),Alpha:r.Port.Default(Number,.1)}),i(v,"output",{Out:r.Port.Union([a.Vec2,a.Vec3,a.Vec4])}),v=n([r.registerNode("PlayCanvas/Math/Vector/Lerp")],v);var w=class{constructor(t){this.iface=t}clear(){this.haveInfo&&(this.haveInfo.destroy(),this.haveInfo=!1),this.haveWarn&&(this.haveWarn.destroy(),this.haveWarn=!1),this.haveError&&(this.haveError.destroy(),this.haveError=!1)}_reduceText(t){return t.replace(/\w{15,}/g,e=>e.slice(0,5)+"...")}info(t){if(!this.iface.$decoration)return;let e=t;t=this._reduceText(t),this.haveInfo?this.haveInfo.text=t:this.haveInfo=this.iface.$decoration.info(t),this.haveInfo._raw=e}warn(t){if(!this.iface.$decoration)return;let e=t;t=this._reduceText(t),this.haveWarn?this.haveWarn.text=t:this.haveWarn=this.iface.$decoration.warn(t),this.haveWarn._raw=e}error(t){if(!this.iface.$decoration)return;let e=t;t=this._reduceText(t),this.haveError?this.haveError.text=t:this.haveError=this.iface.$decoration.error(t),this.haveError._raw=e}success(t){if(!this.iface.$decoration)return;let e=this.iface.$decoration.success(this._reduceText(t));e._raw=t}};E.NodeToast=w;var M=Math.PI/180,C=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Rotate Vector",this._toast=new w(e)}update(){let{Input:t,Output:e}=this.ref,o=t.Vector;if(o==null)return;o=o.clone();let{Component:c,Degree:p}=t;var l=Math.cos(M*p),u=Math.sin(M*p);let{x:A,y:b,z:O}=o;if(c==="XY")o.x=A*l-b*u,o.y=b*l+A*u;else if(c==="XZ")o.x=A*l-O*u,o.z=O*l+A*u;else if(c==="YZ")o.y=b*l-O*u,o.z=O*l+b*u;else{this._toast.error(`"${c}" is not recognized`);return}this._toast.clear(),e.Out=o}};i(C,"input",{Vector:r.Port.Union([a.Vec2,a.Vec3,a.Vec4]),Degree:r.Port.Default(Number,0),Component:r.Port.Default(String,"XY")}),i(C,"output",{Out:r.Port.Union([a.Vec2,a.Vec3,a.Vec4])}),C=n([r.registerNode("PlayCanvas/Math/Vector/Rotate")],C);var D=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Box"}init(){let t=this.ref.Output.Box=new a.Entity,e=new a.StandardMaterial;e.diffuse=a.Color.GRAY,e.update(),t.addComponent("render",{type:"box",material:e})}};i(D,"output",{Box:a.Entity}),D=n([r.registerNode("PlayCanvas/Scene/Box")],D);var g=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Camera"}init(){let t=this.ref.Output.Camera=new a.Entity;t.addComponent("camera",{clearColor:new a.Color(0,0,0)}),t.rotateLocal(-30,0,0),t.translateLocal(0,0,5)}};i(g,"input",{}),i(g,"output",{Camera:a.Entity}),g=n([r.registerNode("PlayCanvas/Scene/Camera")],g);var P=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Get Entity"}update(){let{Input:t,Output:e}=this.ref;!t.Name||!t.App||(e.Entity=t.App.scene.root.findByName("ball"))}};i(P,"input",{App:a.Application,Name:String}),i(P,"output",{Entity:a.GraphNode}),P=n([r.registerNode("PlayCanvas/Scene/Get/Entity")],P);var V=class extends r.Node{constructor(t){super(t);let e=this.setInterface();e.title="Light"}init(){let t=this.ref.Output.Light=new a.Entity;t.addComponent("light",{type:"directional",color:new a.Color(1,1,1),castShadows:!0,intensity:2,shadowBias:.2,shadowDistance:16,normalOffsetBias:.05,shadowResolution:2048}),t.setLocalEulerAngles(45,30,0)}};i(V,"input",{}),i(V,"output",{Light:a.Entity}),V=n([r.registerNode("PlayCanvas/Scene/Light")],V);
