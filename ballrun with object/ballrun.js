var ballObject = {}

function constructBall() {
  // When this function runs, we should:
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector(".ball"))
  ballObject.radius = 20;
  ballObject.position = {x: 350, y: 350};
  ballObject.color = "green";
  ballObject.velocity = {x: 10, y: 0};
  ballObject.domElement = document.querySelector(".ball");
  // Add the following starting styles to the domElement:
  //  - width = radius + "px"
  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
  ballObject.domElement.style.width = ballObject.radius + "px";
  ballObject.domElement.style.height = ballObject.radius + "px";
  ballObject.domElement.style.backgroundColor = ballObject.color;
  ballObject.domElement.style.top = ballObject.position.y + "px";
  ballObject.domElement.style.left = ballObject.position.x + "px";
}

function move() {
  setPosition();
  drawPosition();

}

function setPosition() {
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
  // The position of the ball should be the current position plus the velocity.
ballObject.position.x = ballObject.position.x + ballObject.velocity.x
ballObject.position.y = ballObject.position.y + ballObject.velocity.y
}
function drawPosition() {

  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"

      ballObject.domElement.style.width = (ballObject.radius *2) + "px"
      ballObject.domElement.style.height = (ballObject.radius *2) + "px"
      ballObject.domElement.style.top = (ballObject.position.y + 15) + "px"
      ballObject.domElement.style.left = (ballObject.position.x + 20) + "px"

}

var ballObject2 = {}

function constructBall2() {
  ballObject2.radius = 10;
  ballObject2.position = {x: 250, y: 250};
  ballObject2.color = "red";
  ballObject2.velocity = {x: 10, y: 0};
  ballObject2.domElement = document.querySelector(".ball2");

    ballObject2.domElement.style.width = ballObject2.radius + "px";
    ballObject2.domElement.style.height = ballObject2.radius + "px";
    ballObject2.domElement.style.backgroundColor = ballObject2.radius + "px";
    ballObject2.domElement.style.top = ballObject2.radius + "px";
    ballObject2.domElement.style.left = ballObject2.radius + "px";

}

function move(){
  setPosition();
  drawPosition();
}

function setPosition(){

  ballObject2.position.x = ballObject2.position.x + ballObject2.velocity.x
  ballObject2.position.y = ballObject2.position.y + ballObject2.velocity.y
}

function drawPosition(){
  ballObject2.domElement.style.width = (ballObject2.radius *3) + "px"
  ballObject2.domElement.style.height = (ballObject2.radius *3) + "px"
  ballObject2.domElement.style.top = (ballObject2.position.y + 30) + "px"
  ballObject2.domElement.style.left = (ballObject2.position.x + 40) + "px"
}
