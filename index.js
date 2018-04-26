'use strict';
var questions = [{
  "ques":"What is the most popular sleeping position?",
  "opt":["Fetal","Log","Freefall","Soldier","Sitting-up"],
  "a": "1"},{
  "ques":"According to webmd.com, sleep deprivation was one of the sole reason that an accident had occured at which place?",
  "opt":["1979 Nuclear Accident at Three Mile Island","Massive Exxon Valdez Oil Spill", "1986 Nuclear Meltdown at Chernobyl", "2012, End of the World ", "All the Choices"],
  "a": "3",},{
  "ques":"What can you feel on a baby when they are dehydrated?",
  "opt":["Fontanelles","Fingertips", "Lips", "Stomach", "Toes"],
  "a": "1",},{
  "ques":"What is the age range for an infant?",
  "opt":["1 Month to 2 Years Old","1 Year to 3 Years Old", "1 Month to 1 Year Old", "6 months to 1 Year Old", "18 Years Old and Beyond"],
  "a": "3",},{
  "ques":"Tommy saved someone's life after falling down a hill and got a Boo-boo from it.  Who did he save?",
  "opt":["Chuckie (His Best Friend)","Angelica", "Dil (His Brother)", "Drew (His Dad)", "The Creator of This Quiz"],
  "a": "1",},{
  "ques":"Tommy loves break-dancing.  What is this move called?<br> <img class=\"mainTommy\" src=\"https://media.giphy.com/media/lvClsfvqyb7S8/giphy.gif\" alt=\"Break-dancer at competition doing windmills.\"></img>",
  "opt":["1990's","Shoulder-spins", "Windmill", "Flare", "Barrel-roll"],
  "a": "3",},{
  "ques":"Tommy wants to be a gymnast one day, but he doesn't know which is physically the easiest?",
  "opt":["Backflip","Frontflip", "Sideflip", "The Splits", "All of the choices"],
  "a": "1",},{
  "ques":"Tommy wants to become a doctor one day because chuckie fell on the floor and was unconscious.  What is the rate of compressions for a two rescuer-infant?",
  "opt":["15:2","7:5", "30:2", "15:4", "100:2"],
  "a": "1",},{
  "ques":"Tommy is in love with Science Fiction, what is the best movie ever made?",
  "opt":["Star Wars","A Quiet Place", "E.T. The Extra-Terrestrial", "The Wizard of Oz", "Star Trek"],
  "a": "1",},{
  "ques":"Tommy wants to eat.  What should you give him?",
  "opt":["French fries","Brocolli", "Coca-Cola", "Bacon strips", "Pizza"],
  "a": "2",}];
  
var correctAnswers = 0;
var i = 0;

function runQuestionFunction(questions){
  if (i >= 10){
    endPageFunction();
  }
  else{
    return `
      <h3> Question ${i+1}: </h3>
      <h3> ${questions[i].ques} </h3>
      <div class="">
      <input type="radio" name="choice" value="1" class = "choice1" checked> ${questions[i].opt[0]} <br>
      <input type="radio" name="choice" value="2" class = "choice2" > ${questions[i].opt[1]} <br>
      <input type="radio" name="choice" value="3" class = "choice3" > ${questions[i].opt[2]} <br>
      <input type="radio" name="choice" value="4" class = "choice4" > ${questions[i].opt[3]} <br>
      <input type="radio" name="choice" value="5" class = "choice5" > ${questions[i].opt[4]} <br>
      <div>
      <button id="submitBTN" type="submit" class="center" value="send">Submit</button>`;
    }
}

function submitAnswer(){
  $("#js-question-form").submit(function(event){
    event.preventDefault();
    var radioval = $("input[name='choice']:checked").val();
    var radiovalcorrect = questions[i].a;
    if(radioval === radiovalcorrect){
      correctAnswers++;
      renderHappyTommy();
      i++;
      renderFunction();
      $("#resultHistory").show("slow",function(){
    });
    }
    else {
      i++;
      renderSadTommy();
      renderFunction();
    }
  });
}

function showHappyTommy(){
  return `
  Tommy is happy because you got the Question right!<br>
  <img class="reportTommy" src="http://nick.mtvnimages.com/nick-assets/shows/images/rugrats/flipbooks/characters/tommy-1.jpg" alt="Tommy pounding his fist in the air"></img>`;
}

function showSadTommy(){
  if (i >= 10){ return}
  else {
    var correctNumber = questions[i].a;
    return `
  Tommy is sad because you missed the last Question!<br>
  The correct answer was ${questions[i-1].opt[correctNumber-1]} <br>
      <img class="reportTommy" src="https://i.ytimg.com/vi/fP3g9iTzI3A/hqdefault.jpg" alt="Tommy is confused"></img>`;
  }
}

function renderSadTommy(){
  let answerTommy;
  answerTommy = showSadTommy();
  $('#showTommy').html(answerTommy);
  if(i>=10){
    $('#showTommy').hide();}
}

function renderHappyTommy(){
  let answerTommy;
  answerTommy = showHappyTommy();
  $('#showTommy').html(answerTommy);
  if(i>=10){
    $('#showTommy').hide();}
}

function youWin(){
  return `
  <h3>Tommy is extremely happy!  Tommy thinks you are his parent.  Goodluck paying child support :)! </h3> <br>
  <img class="reportTommy" src="https://vignette.wikia.nocookie.net/rugrats/images/2/2a/Your_diapers_on_your_head.png/revision/latest/scale-to-width-down/640?cb=20150411182713" alt="Tommy has a diaper on his head"></img> <br>
  <button id="restart" type="submit" class="center" value="send">Play Again?</button>`
}

function youLose(){
  return `
  <h3>Tommy is extremely sad!  Tommy thinks no-one loves him.  Tommy does not need you anymore and changes his diapers.</h3>
  <img class="reportTommy" src="https://vignette.wikia.nocookie.net/rugrats/images/0/01/Tommy_putting_his_diaper_back_on_3.png/revision/latest?cb=20150411183421" alt="Tommy is changing his diaper"></img>
  <button id="restart" type="submit" class="center" value="send">Play Again?</button>`
}

function hideScreen(){
  $("#firstScreen").click(function(){
    $("#firstScreen").hide("slow",function(){
      renderFunction();
    });
  });
}

function endPageFunction() {
  if (correctAnswers >= 7) {
    youWinFunction();
  }
  else{
    youLoseFunction();
  }
}

function youLoseFunction(){
  let result;
  result = youLose();
  $('#questionList').html(result);
  restart();
  resultHistory();
}

function youWinFunction(){
  let result;
  result = youWin();
  $('#questionList').html(result);
  $("showTommy").hide();
  restart();
}

function resultHistory() {
  if (i>=11){
    return `
      <h3> Your Score was ${correctAnswers}`;
  }
  else if (i>=1){
    let resultHis;
    resultHis = resultHistoryStatement();
    $("#resultHistory").html(resultHis);
  }
  else{
    return console.log("This program works");
  }
}

function resultHistoryStatement(){
  return `
  <h3>Your current score is:  ${correctAnswers} out of ${i} questions.</h3>`;
}

function restart(){
  $("#restart").click(function(){
    i=0;
    correctAnswers=0;
    renderFunction();
    $("#resultHistory").hide("slow",function(){
    });
  });
}

function renderFunction(){
  let result;
  result = runQuestionFunction(questions);
  $('#questionList').html(result);
  resultHistory();
}

function handleFunction(){
  hideScreen();
  submitAnswer();
}

handleFunction();