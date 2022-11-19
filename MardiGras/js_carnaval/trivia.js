window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
         " -1-<br>The first Mardi Gras in America <br> was in New Orleans." : ['I. True', 'II. False', 1], 
          
          "-2-<br> Which of the following <br> is not one of New Orleans' <br> Mardi Gras colors?" : ['I. Green', 'II. Yellow' , 'III. Blue', 'IV. Purple', 2],
          
          "-3-<br>Which of the New Orleans <br> Mardi Gras colors <br>is not a Mobilian<br> Mardi Gras color?" : ['I. Blue', 'II. Purple', 'III. Green', 'IV. Yellow', 2],
  
          "-4- <br>What medieval tradition <br> can Mardi Gras be traced back to?" : ['I. ordinary citizens dressing in costume to celebrate Lent', 'II. parading held in celebration of Lent', 'III. feasting before the arrival of Lent', 'IV. the throwing of trinkets by children to celebrate Lent', 2],
  
          "-5- <br>What does<br> the French expression <br> 'Mardi Gras'<br> literally translate to in English?" : ['I. Fat Tuesday', 'II. Fat Wednesday', 'III. Thin Wednesday', 'IV. Thin Tuesday', 0],
  
          "-6- <br>What is the name <br> of the first mystic society <br> created in 1830?" : ['I. Crewe of Comos', 'II. Order of Myths', 'III. The Lost Cause Minstrels', 'IV. Cowbellion de Rakin Society', 3],
  
          "-7- <br>When did this original <br>mystic society hold its parade?" : ['I. Mardi Gras Day', 'II. Easter Sunday', 'III. Christmas Eve', "IV. New Year's Eve", 3],
  
          "-8- <br>How did the Spanish<br> add their touch to<br> the French Mardi Gras?" : ['I. by holding lighted torch parades', 'II. by throwing woven Spanish dolls off of the floats', 'III. by changing the name to "Martes Gordo" ', "IV. by marching on a different day", 0],
  
          "-9- <br>Which of the following <br> was New Orleans' <br> first mystic society?" : ['I. Order of Inca', 'II. Crewe of Columbus', 'III. Comic Cowboys', "IV. Crewe of Comos", 3],
  
          "-10- <br>Which of the following  <br>individuals gained fame<br> for reviving Mardi Gras <br>after the Civil War?" : ['I. Michael Kraft', 'II. Ethel Hodgson', 'III. Daniel E. IV. Huger', "V. Joseph Cain", 3]
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
