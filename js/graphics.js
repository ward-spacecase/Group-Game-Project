var canvas,
    player,
    renderingContext,
    frames = 0,
    states = {Still: 0, Move: 1},
    currentState,
    keycode,
    width,
    rotating = false,
    audioPowerUp = new Audio('image/hiya.mp3'),
    height;

function Player () {
    this.x = 10;
    this.y = 10;
    this.maxSpeed = 10;
    this.rotation = 0;

    this.update = function () {
        if(currentState == states.Move) {
            switch(keycode){
                case 37:                    //left

                       this.x -= this.maxSpeed;

                    break;
                case 38:                    //up

                        this.y -= this.maxSpeed;


                    break;
                case 39:                        //right

                        this.x += this.maxSpeed;


                    break;
                case 40:                        //down

                        this.y += this.maxSpeed;


                    break;
                case 32:
                    rotating=true;
                    audioPowerUp.play();
                    break;
            }
        }

    };


    this.draw = function() {
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        sprite.draw(renderingContext, 50, 50);

        renderingContext.restore();
    };
}



function main() {
    player = new Player();
    windowSetup();
    canvasSetup();
    loadGraphics();
    document.body.appendChild(canvas);
}

function windowSetup() {

    width = window.innerWidth;
    height = window.innerHeight;

    width = 640;
    height = 480;

    var inputEvent = "keydown";


        $('canvas').css('margin','10px, auto');



    document.addEventListener(inputEvent, keydown);
    document.addEventListener("keyup", keyup);


}



function keydown(evt) {

    keycode = evt.keyCode;

    currentState = states.Move;
}
function keyup(evt) {
    currentState = states.Still;
}

function canvasSetup() {
    canvas = document.createElement("canvas");

    canvas.style.border = "15px solid #382b1d";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}


function loadGraphics() {

    var audioBack = new Audio('image/ken-stage.mp3');
    audioBack.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audioBack.play();
    var img = new Image();
    img.src = "image/sumosprite.png";
   // var img2 = new Image();
    //img2.src = "image/bomb.png";
    img.onload = function () {

        initSprites(this);
        gameLoop();
    };
   // img2.onload = function () {

     //   initSprites(this);
      //  gameLoop();
  //  };


}

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}
function update() {
    frames++;

        if(rotating) {
            if(frames%360 ==0){
                rotating = false;
                player.rotation = 0;
            } else {
                player.rotation = frames % 360;
            }
        }

    player.update();

}

function render() {
    renderingContext.fillRect(0,0, width, height);
    backgroundSprite.draw(renderingContext, 0, 0);

    player.draw(renderingContext);

}

