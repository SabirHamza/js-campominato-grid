const generate = document.getElementById('generate');

let square;

generate.addEventListener(
    "click",
    function(){
        
        const grid = document.getElementById('grid');
        
        grid.innerHTML="";

        const difficulty = document.getElementById("select").value;

        let quantity;

        if (difficulty == 1) {

            quantity = 100;
        }else if (difficulty == 2) {

            quantity = 80;
        }else if (difficulty == 3) {

            quantity = 40;
        }

        for(let i = 0; i < quantity; i++) {
            
            grid.append(generatesquare(square, i, quantity));
        }
    }
)

function generatesquare (square, number, quantity) {
    
    square = document.createElement("div");
            
    if (quantity == 100) {

        square.classList.add("square")
    }else if (quantity == 80) {

        square.classList.add("square-medium")
    }else if (quantity == 40) {

        square.classList.add("square-big")
    }
            
    square.innerHTML = number + 1;

    square.addEventListener(
        "click",
        function(){
            
            this.classList.toggle("active");
        } 
    )
    return square;
}