
function Animation(contextCanvas, keyboard) {
    this.contextCanvas = contextCanvas;
    this.sprites = [];
    this.isOn = false;
    this.keyboard = keyboard;
}

Animation.prototype = {
    addSprit : function(sprite) {
        this.sprites.push(sprite);
    },
    start : function() {
        this.isOn = true;
        this.nextFrame();
    },
    nextFrame : function() {
        if (!this.isOn) return; 
        this.cleanWindow();
        for (var i in this.sprites) {            
            this.sprites[i].update(this.keyboard);
        }
        for (var i in this.sprites) 
            this.sprites[i].draw(this.contextCanvas);         
            
        var animation = this;
        requestAnimationFrame(function() {
            animation.nextFrame();
        });                   
    },
    cleanWindow : function() {
        var ctx = this.contextCanvas;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }    
}