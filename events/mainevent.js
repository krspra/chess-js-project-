import { RootDiv } from "../Render/Rchessboard.js";
import { eSSArray } from "../executionpage.js";
import { whitepawnActivate } from "./activateEvents.js";

let clickSquareDivId;

function Mainevent(){

    RootDiv.addEventListener("click",function(event){
        if(event.target.localName==="img"){
            clickSquareDivId=event.target.parentNode.id;
            // console.log(eSSArray);
            let {piece}=eSSArray.find((el)=>el.position==clickSquareDivId);
            let piece_name=piece.piecename
            if(piece_name==="whitepawn"){
                whitepawnActivate();
            }

        }
    })

}
export {Mainevent,clickSquareDivId};