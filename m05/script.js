
/*Ask for number/table*/
var table = parseInt(prompt("Enter a number from 0 to 10:"));

/*Verify number between 0 - 10 */
if (table >= 0 && table <= 10) {
    /* Initialize msg */
    var msg = '<h2>Multiplication Table</h2>';

//var operator = 'addition'; 

    //create the multiplacation table using for loop to go thru 10 times
  
    for (var i = 1; i <= 10; i++) {
         msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
    }
    

    var el = document.getElementById('blackboard');
    el.innerHTML = msg;
} else {
    /* Display an error message if the entered number is not 0-10 */
    alert("Please enter a number from 0 to 10.");
}




