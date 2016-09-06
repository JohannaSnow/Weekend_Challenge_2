////global variables///
console.log('sourced!');
var count = 0;
var i = 0;

// student array

var students = [];

//url for the JSON student info
var jsonURL = 'http://devjana.net/pi/pi_students.json';

//make a call to the server to get (or retrieve) the JSON info
var getStudents = function () {
        //run the onload
console.log('called function getStudents');
//write an ajax to access the server
$.ajax({
  //data is located on this url
  url: jsonURL,
  dataType: 'JSON',
//then we need a function for what to do once the response (data) is returned
  success: function(data){
  console.log( 'in success:', data.students);

//need to loop through the data and push to the global array
  for (var i = 0; i < data.students.length; i++) {
    students.push(data.students[i]);
  } //display student function
  displayStudents();
}//end ajax object and success
 });
      };


//make a function to display the students
// it's called from the success function of the getStudents

var displayStudents = function (count) {
    console.log('in displayStudents global students arr= ', students);
    // empty the outputDiv
    $('#outputDiv').empty();
    $('#buttonDiv').empty();

    //create a new header
var newHeader = document.createElement('h2');
  newHeader.textContent = students[i].first_name+ ' ' + students[i].last_name;

    // new paragraph with info
var newParagraph = document.createElement('p');
          //fill with info text
newParagraph.textContent = students[i].info;
          //create student counter
var studentNumber = document.createElement('p');
  studentNumber.setAttribute("class","studentNumber");
  studentNumber.textContent = (i + 1) + ' / ' +students.length;
           //create NextButton
 var nextButton = '<button onClick="nextClick()" class="btn btn-info"> Next </button>';
           //create previousButton
 var previousButton ='<button onClick ="previousClick()" class="btn btn-info"> Prev </button>';
           //append to the DOM
           $('#outputDiv').append(newHeader);
           $('#outputDiv').append(newParagraph);
           $('#outputDiv').append(studentNumber);
           $('#buttonDiv').append(previousButton);
           studentButton();
           $('#buttonDiv').append(nextButton);
};



    var studentButton = function() {
      for (var i = 0; i < students.length; i++) {
        var individualButton = '<button id=" '+ i +' " class="studentButton btn btn-info btn-xs">'+ students[ i ].first_name +'</button>';
      $('#buttonDiv').append(individualButton);
 }
 };//end for loop
//end studentButton
//
