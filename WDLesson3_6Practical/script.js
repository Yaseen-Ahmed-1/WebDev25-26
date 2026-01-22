// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function calculateSlope(x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    return slope;
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function calculateBMI(weight, height) {
    let bmi = (weight / (height * height)) * 703;
    return bmi;
}
