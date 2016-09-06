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
//     $('<button/>').attr( {
//       id: i
//     });
//       studentButton.html(data.students[i].first_name);
//       studentButton.data('fullName', data.students[i].first_name + ' ' + data.students[i].last_name);
//       studentButton.data('info', data.students[i].info);
//       studentButton.data('placement', i + 1 + '/18');
//       studentButton.addClass('namedButton');
//       $('#buttonSpot').append(studentButton);
//     } //end loop
// });



//   // adds a next button
// var nextButton = $('<button/>').attr({
//   id: 'next'
// });
//     nextButton.html('Next');
// $('#buttonSpot').append(nextButton);

//displays the first index on DOM load
// var startWill = function(){
// $('#studentInfo').html(data.students[0].first_name + ' ' + data.students[0].last_name + '<br>' + data.students[0].info  + '<br>' + '1/18');
// buttonNumber = 0;
//
// };

//make a function to display the students
// it's called from the success function of the getStudents
//
// var displayStudents = function (count) {
//     console.log('in displayStudents global students arr= ', students);
//     $('#outputDiv').empty();
//     $('buttonDiv').empty();
//
//     //create a new header
//   var newHeader = document.createElement('h2');
//   newHeader.textContent = students[i].first_name+ ' ' + students[i] .last_name;
//
//       // $('#studentsOutput').append(newHeader);
// var newParagraph = document.createElement('p');
//           //fill with info text
// newParagraph.textContent = students[i].info;
//           //create student counter
// var studentNumber = document.createElement('p');
//   studentNumber.setAttribute("class","studentNumber");
//   studentNumber.textContent = (count + 1) + ' / ' +students.length;
//            //create NextButton
//            var nextButton = '<button onClick="nextClick()" class="btn btn-info"> Next </button>';
//            //create previousButton
//            var previousButton ='<button onClick ="previousClick()" class="btn btn-info"> Prev </button>';
//            //append to the DOM
//            $('#outputDiv').append(newHeader);
//            $('#outputDiv').append(newParagraph);
//            $('#outputDiv').append(studentNumber);
//            $('#buttonDiv').append(previousButton);
//            studentButton();
//            $('#buttonDiv').append(nextButton);
//
//           //append to the DOM
//  $('#outputDiv').append(newHeader);
//  $('#outputDiv').append(newParagraph);
//  $('#outputDiv').append(studentNumber);
 // $('#buttonDiv').append(previousButton);
 // studentButton();
 // $('#buttonDiv').append(nextButton);


//create a student button
//
//    var studentButton= function(){
//      for ( i = 0; i < students.length; i++) {
//        var individualButton = '<button id=" '+ i +' " class="studentButton btn btn-info btn-xs">'+ students[ i ].first_name +'</button>';
//        $('#buttonDiv').append(individualButton);
//   }//end for loop
//
// }; //end studentButton

  //studentButton onClick
//  $(document).ready(function(){
//    timer();
// $('body').on('click', ".studentButton", function(){
//   //get id number
//   var idNumber = parseInt($(this).attr('id').replace(/^"|"$/g, ""));
//   //set count = to id number
//   count =idNumber;
//   //show student
//   $('#outputDiv').fadeOut('fast', function(){
//     $(this).empty();
//     displayStudents();
//   }).fadeIn('fast');
// //   totalSeconds=0;
// });//end studentButton on click
// });//end document ready

// var studentButton = function (){
//       console.log('in clickButton');
//       $('#studentsOutput').on('click',function(){
//       console.log('Clicked studentButton!');
//
//
//         });
//       };
//       var nextStudent = function (){
//         console.log('in clickButton');
//         $('#nextButton').on('click',function(){
//           console.log('Clicked nextStudent!');
//
//           for (var i = 0; i <students.length; i++) {
//             $('#displayClickedStudent').append(students[i].first_name);
//           }
//
//         });
//       };


//
//  for (var i = 0; i < students.length; i++) {
//     new header for the names of student
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
  // };
  // }; // end displayStudents
