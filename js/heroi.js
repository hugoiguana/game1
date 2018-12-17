

function Heroi(x, y, width, height, imgSrc) {
    
    this.x = 100;
    this.y = 100;
    this.width = 60;
    this.height = 65;
    this.image = new Image();
    this.image.src = imgSrc;
    this.positions = [];

    this.positions['stoped'] = {x:8, y:18};
    this.positions['wr1'] = {x:19, y:116}; //walk_rigth1
    this.positions['wr2'] = {x:93, y:116};
    this.positions['wr3'] = {x:177, y:116};
    this.positions['wr4'] = {x:262, y:116};
    this.positions['wr5'] = {x:342, y:116};
    this.positions['wr6'] = {x:417, y:116};

    //this.widthCut = widthCut;
    //this.heightCut = heightCut;
    //this.xCut = xCut;
    //this.yCut = yCut;
}

Heroi.prototype = {
    update : function() {
        console.log('update');
    },
    draw : function(contextCanvas) {
        
        position = this.positions['wr1'];

        //contextCanvas.drawImage(this.image, this.x, this.y, this.width, this.height);
        contextCanvas.drawImage(this.image
            , position.x, position.y, this.width, this.height
            , this.x, this.y, this.width, this.height);

        contextCanvas.lineWidth = 1;
        contextCanvas.strokeStyle = 'blue';
        contextCanvas.strokeRect(this.x, this.y, this.width, this.height);
    }
}