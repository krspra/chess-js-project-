import {blackpawninfo,whitepawninfo,blackbishopinfo,whitebishopinfo,blackkinginfo,whitekinginfo,blackknightinfo,whiteknightinfo,blackqueeninfo,whitequeeninfo,blackrookinfo,whiterookinfo} from "../Data/Dpieces.js";

const RootDiv=document.querySelector("#root");

function piecerender(data){
    data.forEach(element => {
        element.forEach(square => {
            if (square.piece){
            const imgdiv=document.createElement("img");
            imgdiv.src=square.piece.imgurl;
            imgdiv.classList.add("pieces");
            const squaredivIdentifier=document.getElementById(square.position);
            squaredivIdentifier.appendChild(imgdiv);}
        });
        
    });
}

function initboardRender(data){
    data.forEach((element) => {
        const Rowdiv=document.createElement("div");
        Rowdiv.classList.add("Rowstyle")
        element.forEach((square)=> {
            //dhyan se dekh hum loop mei hai isliye ek hai if else loop structure multiple answer de rahe hai.
            if(square.position[0]=="7"){
                square.piece=blackpawninfo(square.position);
            }
            else if (square.position[0]=="2"){
                square.piece=whitepawninfo(square.position);
            }
            else if (square.position=="8a" || square.position=="8h" ){
                square.piece=blackrookinfo(square.position);
            }
            else if (square.position=="1a" || square.position=="1h"){
                square.piece=whiterookinfo(square.position);
            }
            else if (square.position=="8c" || square.position=="8f"){
                square.piece=blackbishopinfo(square.position);
            }
            else if (square.position=="1c" || square.position=="1f"){
                square.piece=whitebishopinfo(square.position);
            }
            else if (square.position=="8e"){
                square.piece=blackkinginfo(square.position);
            }
            else if (square.position=="1e"){
                square.piece=whitekinginfo(square.position);
            }
            else if (square.position=="8b" || square.position=="8g"){
                square.piece=blackknightinfo(square.position);
            }
            else if (square.position=="1b" || square.position=="1g"){
                square.piece=whiteknightinfo(square.position);
            }
            else if (square.position=="8d"){
                square.piece=blackqueeninfo(square.position);
            }
            else if (square.position=="1d"){
                square.piece=whitequeeninfo(square.position);
            }
            const squarediv=document.createElement("div");
            squarediv.id=square.position
            squarediv.classList.add(square.color);
            
            Rowdiv.appendChild(squarediv);            
        });
        RootDiv.appendChild(Rowdiv);
        
    });

    piecerender(data);
}


export {initboardRender};