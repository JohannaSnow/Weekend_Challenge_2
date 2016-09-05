console.log('sourced!');

//global student array

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
    // students.push(data.students[i]);
    var studentButton = $('<button/>').attr( {
      id: i
    });
      studentButton.html(data.students[i].first_name);
      studentButton.data('fullName', data.students[i].first_name + ' ' + data.students[i].last_name);
      studentButton.data('info', data.students[i].info);
      studentButton.data('placement', i + 1 + '/18');
      studentButton.addClass('namedButton');
      $('#buttonSpot').append(studentButton);
    } //end loop

  //display tha data
  displayStudents();
}
    });
  };
//make a function to display the students
// it's called from the success function of the getStudents

var displayStudents = function() {
    console.log('in displayStudents global students arr= ' , students);
    $('#outputDiv').empty();
    for (var i = 0; i < students.length; i++) {




    //new header for the names of student
// var newHeader = document.createElement('h2');
//   newHeader.textContent = students[i].first_name + ' ' + students[i].last_name;
//   console.log('newHeader =', newHeader);
//
//   var newParagraph = document.createElement( 'p' );
//   //set textContent
//   newParagraph.textContent = students[i].info ;
//   // append student info to page
//   $("#outputDiv").append( newHeader );
//   $("#outputDiv").append( newParagraph );
  };
  }; // end displayStudents
