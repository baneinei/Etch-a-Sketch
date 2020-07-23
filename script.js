const container = document.querySelector("#container");

/*let div = document.createElement("div");
div.style.backgroundColor = "black";
div.style.border = "1px solid white";
div.style.width = (100/16) + "%";
div.style.height = (100/16)+ "%";*/
function colorChanger(input_div) {
    if (input_div.style.backgroundColor == "black") {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        input_div.style.backgroundColor = `rgb(${r},${g},${b})`;
        input_div.setAttribute("value",10);
    }
}

function createSquares(w,h) {
    for (let i = 0  ; i < w ; i++) {
        for (let j = 0 ; j < h ; j++) {
            let div = document.createElement("div");
            div.style.backgroundColor = "black";
            div.style.outline = "1px solid white";
            div.style.width = (100/w) + "%";
            div.style.height = (100/h)+ "%";
            div.style.float = "left";
            div.setAttribute("id","square");
    
            div.addEventListener("mouseenter", () => {
                colorChanger(div);
            });
    
            container.appendChild(div);
        }
    }
}

function clearGrid() {
    let divs = document.querySelectorAll("#square");
    for (let i = 0  ; i < divs.length ; i++) {
        divs.item(i).remove();
    }
}

document.querySelector("#top_btn").addEventListener("click", () => {
    clearGrid();
    let w = prompt("how many squares in width?");
    let h = prompt("how many squares in height?");
    console.log(parseInt(w));
    createSquares(parseInt(w),parseInt(h));
});

createSquares(16,16);