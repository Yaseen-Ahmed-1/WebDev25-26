/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateArea() {
  let length = document.getElementById("l").value;
  let width = document.getElementById("w").value;

  length = Number(length);
  width = Number(width);

  let area = length * width;

  document.getElementById("result").innerHTML =
    "Area of Rectangle: " + area;
}

function calculatePerimeter() {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;

  length = Number(length);
  width = Number(width);

  let perimeter = 2 * (length + width);

  document.getElementById("result").innerHTML =
    "Perimeter of Rectangle: " + perimeter;
}



/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea() {
  
  let radius = document.getElementById("radius").value;

 
  let area = pi * radius * radius;

  
  document.getElementById("result").innerHTML =
    "Area of Circle: " + area;
}

function cirPerimeter() {
  
  let radius = document.getElementById("radius").value;

 
  let perimeter = 2 * pi * radius;

  
  document.getElementById("result").innerHTML =
    "Circumference of Circle: " + perimeter;
}



/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}