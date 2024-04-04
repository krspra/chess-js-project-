const RootDiv=document.querySelector("#root")

function initboardRender(data){
    data.forEach((element) => {
        const Rowdiv=document.createElement("div");
        Rowdiv.classList.add("Rowstyle")
        element.forEach((square)=> {
            const squarediv=document.createElement("div");
            squarediv.classList.add(square.color);
            Rowdiv.appendChild(squarediv);            
        });
        RootDiv.appendChild(Rowdiv);
    });
console.log(RootDiv);
}

export {initboardRender};