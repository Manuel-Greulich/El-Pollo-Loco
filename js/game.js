let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard)

}

function startGame() {
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('control-description').classList.add('d-none');

    // document.getElementById('canvas').classList.remove('d-none');
}


window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37)
        keyboard.LEFT = true;
    
    if(e.keyCode == 38){
        keyboard.UP = true;
        
    
    if(e.keyCode == 40)
        keyboard.DOWN = true;
    }  

    if(e.keyCode == 32)
        keyboard.SPACE = true;

    if(e.keyCode == 68)
        keyboard.D = true;    
    
    // console.log(e);
});



window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37)
        keyboard.LEFT = false;
    
    if(e.keyCode == 38){
        keyboard.UP = false;
        
    
    if(e.keyCode == 40)
        keyboard.DOWN = false;
    }  

    if(e.keyCode == 32)
        keyboard.SPACE = false;

    if(e.keyCode == 68)
        keyboard.D = false; 

    
    // console.log(e);
});
