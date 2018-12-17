
var hero;
var animation;

function startGame() {

    this.canvas = document.createElement("canvas");
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.contextCanvas = this.canvas.getContext("2d"); 
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);   

    animation = new Animation(contextCanvas);
    hero = new Heroi(10, 120, 640, 470, "img/sprite_sheet_heroi.png");

    animation.addSprit(hero);
    animation.start();
}










/*
countImgLoaded = 0;

function initGame(canvasName) {

    this.canvasName = canvasName;
    this.contextCanvas = document.getElementById(canvasName).getContext('2d');
    this.widthGame = this.contextCanvas.canvas.attributes.width.value;
    this.heightGame = this.contextCanvas.canvas.attributes.height.value;

    console.log("Starting game 1...");
    console.log('----------Config properties:----------');
    console.log("Width area Game = " + this.widthGame);
    console.log("Height area Game = " + this.heightGame);
    console.log('--------------------------------------');


    //Adicionando chão:
    this.contextCanvas.clearRect(0, 0, this.widthGame, this.heightGame); 
    this.contextCanvas.fillStyle = 'black';    
    this.contextCanvas.fillRect(0, 470, 800, 30);//x,y,witdh,heigth

    //Adionando personagem:
    var imgHeroi = new Image(); 
    imgHeroi.src = 'img/sprite_sheet_heroi.png';    
    imgHeroi.onload = loadImages();
}

function loadImages(contextCanvas, image) {
    countImgLoaded +=1;
    if (countImgLoaded == 1) {    
        this.widthGame = this.contextCanvas.canvas.attributes.width.value;
        this.heightGame = this.contextCanvas.canvas.attributes.height.value;
        this.contextCanvas.clearRect(0, 0, this.widthGame, this.heightGame); 

        //contextCanvas.drawImage(image, 40, 10, 40, 50, 40, 300, 40, 50);//x,y,witdh,heigth
        this.contextCanvas.drawImage(image, 0, 0, 200, 500);//x,y,witdh,heigth
    }
}
*/