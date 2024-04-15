import { initboardData } from "./Data/Dchessboard.js";
import { initboardRender } from "./Render/Rchessboard.js";
import { Mainevent } from "./events/mainevent.js";

let Maindata=initboardData();
let eSSArray=Maindata.flat();




initboardRender(Maindata);
Mainevent();



export {eSSArray};