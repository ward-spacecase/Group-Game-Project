var sprite;
var backgroundSprite;



function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function (renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img) {

      sprite = new Sprite(img, 640, 0, 106, 95); //sumo

     /*   bombSprite = [
            new Sprite(img, 0,0,275,230),
            new Sprite(img, 275,0,275,230),
            new Sprite(img, 275*2,0,275,230),
            new Sprite(img, 0,230,275,230),
            new Sprite(img, 275,230,275,230),
            new Sprite(img, 275*2,230,275,230),
            new Sprite(img, 0,230*2,275,230),
            new Sprite(img, 275,230*2,275,230),
            new Sprite(img, 275*2,230*2,275,230)
        ];*/
    backgroundSprite = new Sprite(img, 0, 0, 640, 480);
}
