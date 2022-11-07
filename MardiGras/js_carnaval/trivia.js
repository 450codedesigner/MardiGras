window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
         " &#10003; True <br> or <br> &#10005; False <br><br> 1.The first organised Mardi Gras celebration in America took place in New Orleans." : ['True', 'False', 1], 
          
          "2. Which of the following is not one of New Orleans' Mardi Gras colors?" : ['Green', 'Yellow' , 'Blue', 'Purple', 2],
          
          "3.Which of the New Orleans Mardi Gras colors is not a Mobilian Mardi Gras color?" : ['Blue', 'Purple', 'Green', 'Yellow', 2],
  
          "4. What medieval tradition can Mardi Gras be traced back to?" : ['ordinary citizens dressing in costume to celebrate Lent', 'parading held in celebration of Lent', 'feasting before the arrival of Lent', 'the throwing of trinkets by children to celebrate Lent', 2],
  
          "5. What does the French expression 'Mardi Gras' literally translate to in English?" : ['Fat Tuesday', 'Fat Wednesday', 'Thin Wednesday', 'Thin Tuesday', 0],
  
          "6. What is the name of the first mystic society, created in 1830?" : ['Crewe of Comos', 'Order of Myths', 'The Lost Cause Minstrels', 'Cowbellion de Rakin Society', 3],
  
          "7. When did this original mystic society hold its parade?" : ['Mardi Gras Day', 'Easter Sunday', 'Christmas Eve', "New Year's Eve", 3],
  
          "8. How did the Spanish add their touch to the French Mardi Gras?" : ['by holding lighted torch parades', 'by throwing woven Spanish dolls off of the floats', 'by changing the name to "Martes Gordo" ', "by marching on a different day", 0],
  
          "9. Which of the following was New Orleans' first mystic society?" : ['Order of Inca', 'Crewe of Columbus', 'Comic Cowboys', "Crewe of Comos", 3],
  
          "10. Which of the following individuals gained fame for reviving Mardi Gras after the Civil War?" : ['Michael Kraft', 'Ethel Hodgson', 'Daniel E. Huger', "Joseph Cain", 3]
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    var counter = 0;
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is same as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);
          counter++;             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Game Over';
          answerArea.innerHTML = '';
          document.getElementById("id_score").innerHTML = counter;
          console.log(counter)
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
