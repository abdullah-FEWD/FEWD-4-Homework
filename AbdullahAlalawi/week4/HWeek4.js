// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
// If the number contains 3 as a factor, output ‘Pling’.
// If the number contains 5 as a factor, output ‘Plang’.
// If the number contains 7 as a factor, output ‘Plong’.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
function myFunction() {
  var x = document.getElementById("Number").value;
  var greeting;
   if (x % 3 === 0 && x % 5 === 0 && x % 7 === 0)  {
    greeting = "Pling Plang Plong";}
    else if (x % 3 === 0 && x % 5 === 0)  {
    greeting = "Pling Plang";}
    else if (x  % 3 === 0 && x % 7 === 0) {
    greeting = "Pling Plong";}
    else if (x  % 3 === 0 ) {
     greeting = "Pling";}
    else if (x  % 5 === 0 ) {
    greeting = "Plang";}
    else if (x  % 7 === 0 ) {
    greeting = "Plong";}
    else if (x === 0)  {
    greeting = "Enter a number";}
    else {
    greeting = x;}
document.getElementById("Result").innerHTML = greeting;}