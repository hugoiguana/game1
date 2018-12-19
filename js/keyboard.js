
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var BACK_SPACE = 32;
var ENTER = 13;

function Keyboard(document) {

    this.key_trigger_list = [];
    this.key_press_list = [];
    this.key_down = false;

    var keyboard = this;
    document.addEventListener('keydown', function(e) {         
        //console.log(keyboard.key_trigger_list);
        keyboard.key_trigger_list[e.keyCode].isPress = true;
        keyboard.key_trigger_list[e.keyCode].func();
     });

     document.addEventListener('keyup', function(e) {
        keyboard.key_trigger_list[e.keyCode].isPress = false;
     });
      

}

Keyboard.prototype = {
    addKeyTrigger : function(key, functionCallback) {
        this.key_trigger_list[key] = { func : functionCallback, isPress : false };  
    }
}




