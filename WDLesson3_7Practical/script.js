/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateDistance() {
let x1 = parseFloat(document.getElementById("x1").value);
let y1 = parseFloat(document.getElementById("y1").value);
let x2 = parseFloat(document.getElementById("x2").value);
let y2 = parseFloat(document.getElementById("y2").value);
 let distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );
}
/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calculateCompoundInterest{
       let principal = parseFloat(document.getElementById("principal").value);
       let rate = parseFloat(document.getElementById("rate").value) / 100;
       let time = parseFloat(document.getElementById("time").value);
       let compounds = parseInt(document.getElementById("compounds").value);
       let amount = principal * Math.pow((1 + rate / compounds), compounds * time);
       let interest = amount - principal;

}


