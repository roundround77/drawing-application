


function shapeTool(canvas) {
    this.name = "shapeTool";
    this.icon = "./assets/shape.png";
    this.canvas = canvas;

    var editButton;
    var finishButton;
    
    var editMode = false;    
    var currentShape = []

    editButton = createButton('Edit Shape');

    editButton.mousePressed(function () {
        if (editMode) {
            editMode = false;
            editButton.html("add Vertices");
        }
    })

    finishButton = createButton('finish shape');

    finishButton.mousePressed(function () {
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
    })

    this.draw = function () {
        updatePixels();
        if (mousePressOnCanvas(this.canvas) && mouseIsPressed) {
            if (!editMode) {
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else {
                for (var i = 0; i < currentShape.length; i++) {
                    if (dist(currentShape[i].x, currentShape[i].y, mouseX, MouseY) < 15) {
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }

        }

        beginShape();

        for (var i = 0; i < currentShape.length; i++) {

            
            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode) {
                fill('red');
                ellipse(currentShape[i] / x, currentShape[i].y, 10);
                noFill();
            }
            endShape();
        }

    };

    mousePressOnCanvas =function(canvas) {

        if (mouseX > canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft + canvas.width) && mouseY > canvas.elt.offsetTop && mouseY < (canvas.elt.offsetTop + canvas.height)) {
            return true;
        }
        return false;


    }


}