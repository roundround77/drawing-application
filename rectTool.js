function rectTool(){
    //set an icon and a name for the object
	this.icon = "assets/R.png";
	this.name = "rect";
    
    var previousMouseX = -1;
    var previousMouseY = -1;
    var firstMouseX = -1;
    var firstMouseY = -1;
    
    this.draw = function(){
        //if the mouse is pressed
        if(mouseIsPressed){
            //check if the previousX and Y are -1. Set them to the current
            //mouse X and Y if they are.
            if(previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
                firstMouseX = mouseX;
                firstMouseY = mouseY;
            }
            else{
                updatePixels();
                var rLength = (mouseX-firstMouseX);
                var rWidth = (mouseY - firstMouseY);
                rect(firstMouseX, firstMouseY, rLength, rWidth);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        //if the user has released the mouse we want to set the previousMouse values //back to -1
        else{
            previousMouseX = -1;
            previousMouseY = -1;
            //save the pixel
            loadPixels();
        }
    };
}