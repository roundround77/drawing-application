function starTool() {
    this.name = "starTool";
    this.icon = "./assets/star.png";

    let star = loadImage('./assets/star.png')

    this.draw = function ( starSizeSlider, nStarSlider) {


        if (mouseIsPressed) {


            console.log(starSizeSlider,nStarSlider);
  
            for (var i = 0; i < nStarSlider; i++) {
                var starSize = starSizeSlider;

                var starX = random((mouseX - starSize / 2) - 10, (mouseX - starSize / 2) + 10)
                var starY = random((mouseY - starSize / 2) - 10, (mouseY - starSize / 2) + 10)
                
                image(star, starX, starY, starSize, starSize);
            }
        }

    };
}