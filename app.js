let question = document.querySelector('.question')
let answerbox = document.querySelector('.answer-container')
let quizbox = document.querySelector('.quiz-container')
let answer1 = document.getElementById('a1')
let answer2 = document.getElementById('a2')
let answer3 = document.getElementById('a3')
let answer4 = document.getElementById('a4')
let answers = document.getElementsByClassName('answer')
let submitBtn = document.getElementById('submit-btn')
let currentquestion = 0
let currentscore = 0

const questionsData = [{
    question: "How old am I?",
    answers: {
      a: "18",
      b: "21",
      c: "25",
      d: "35",
    },
    correctAnswer: "b"
  },
  {
    question: "What is my favorite color?",
    answers: {
      a: "Purple",
      b: "Green",
      c: "Black",
      d: "Red",
    },
    correctAnswer: "c"
  },
  {
    question: "What is my middle name?",
    answers: {
      a: "Albert",
      b: "David",
      c: "Graham",
      d: "John",
    },
    correctAnswer: "d"
  },
]

const loadquestion = () => {
  console.log('working!!!')
  //GETTING THE CORRECT ANSWER //
  let correctAnswer = (questionsData[currentquestion].correctAnswer)
  console.log(correctAnswer)
  //RESET CLICK WHEN CLICKED OUTSIDE
  const clickreset = (e) => {
    if (e.target !== quizbox) {
      // console.log(answer1.checked)
      answer1.checked = false
      answer2.checked = false
      answer3.checked = false
      answer4.checked = false
    } else {
    }
  }
  window.addEventListener('click', clickreset)
  // console.log(questionsData[currentquestion].answers)
  //INPUTTING THE QUESTIONS AND ANSWERS FROM THE QUIZDATE
  question.innerText = questionsData[currentquestion].question
  answer1.innerText = questionsData[currentquestion].answers.a
  answer2.innerText = questionsData[currentquestion].answers.b
  answer3.innerText = questionsData[currentquestion].answers.c
  answer4.innerText = questionsData[currentquestion].answers.d
  for (i = 0; i < answers.length; i++) {
    let answerels = answers[i];
    //RESETTING THE SELECTED ANSWER WHEN THE USER MOVES ON TO THE NEXT QUESTION
    answerels.checked = false
  }

  currentquestion++
}

loadquestion()

const endofquiz = () => {
  //GIVING RESULTS AT THE END
  question.innerText = 'You answered ___ out of ___'
  answer1.style.opacity = '0'
  answer2.style.opacity = '0'
  answer3.style.opacity = '0'
  answer4.style.opacity = '0'
  submitBtn.innerText = 'Restart Quiz'
  submitBtn.addEventListener('click', () => {
    location.reload()
  })
}

submitBtn.addEventListener('click', () => {

  //KEEP TRACK OF QUESTIONS UNTIL QUIZ IS FINISHED
  if (currentquestion < questionsData.length) {
    for (i = 0; i < answers.length; i++) {
      let answerels = answers[i];
      //CHECK TO SEE IF USER HAS SELECTED AN ANSWER
      if (answerels.checked == true) {
        //CHECK TO SEE IF USER HAS SELECTED AN ANSWER
        //MOVE ON TO NEXT QUESTION
        loadquestion()
        // console.log('checked!')
      } else {
        //STOP USER FROM GOING TO NEXT QUESTION WITHOUT SELECTING AN ANSWER
        // console.log('not checked! :(')
      }
    }
  } else {
    // SHOW RESULTS 
    endofquiz()
  }
})