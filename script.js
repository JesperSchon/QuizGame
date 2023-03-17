const quizImage = document.getElementById("quiz-image");
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");




const questions = [
  {
    image: "images/image3.jpeg",
    question: "Vilket datum är vår förlovningsdag?",
    answers: ["3 juni", "19 juni", "9 juni", "24 juni"],
    correctAnswer: 2
  },
  {
    image: "images/image4.jpeg",
    question: "Vilket datum flyttade jag till Gotland?",
    answers: ["16 augusti", "18 augusti", "20 augusti", "22 augusti"],
    correctAnswer: 1
  },
  {
    image: "images/image6.jpeg",
    question: "Hur många gånger var jag på Gotland innan jag flyttade hit?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: 2
  },
  {
    image: "images/image7.jpeg",
    question: "Vad älskar jag mest hos dig?",
    answers: ["Ditt utseende", "Att du alltid får mig att skratta", "Du är omtänksam", "Din matlagning"],
    correctAnswer: 1
  },
  {
    image: "images/image8.png",
    question: "Vem tog initiativet till att börja flörta av oss två?",
    answers: ["Jag / Mikaela", "Du/Mathias", "Jesper", "Min Mormor"],
    correctAnswer: 1
  },
  {
    image: "images/lamm.jpg",
    question: "Vilket djur blev Stella biten av på Gotlands djurpark när hon var liten?",
    answers: ["En häst", "En kanin", "Ett lamm", "En känguru"],
    correctAnswer: 0
  },
  {
    image: "images/preggo.jpg",
    question: "Vilken månad på året fick vi reda på att jag var gravid med Rio?",
    answers: ["Mars", "April", "Maj", "Juni"],
    correctAnswer: 2
  },
  {
    image: "images/image11.jpg",
    question: "Vilket är ett av mina bästa minnen från vårt förhållande?",
    answers: ["När vi bodde på hotell i Stockholm", "Första gången jag kom till Gotland", "Kvällsbad med barnen på sommaren", "En sommarkväll innan barnen när vi cyklade runt hela Klinte"],
    correctAnswer: 3
  },
  {
    image: "images/image13",
    question: "Hur många fingrar har vi tillsammans i vår familj?",
    answers: ["Ingen aning", "Varför undrar du?", "42", "1022"],
    correctAnswer: 1
  },
  {
    image: "images/image9.jpeg",
    question: "Mathias vill du gifta dig med mig?",
    answers: ["JA", "-", "-", "-"],
    correctAnswer: 0,
    finalQuestion: true,
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let lastAnswerIndex;

function loadQuestion() {
  const q = questions[currentQuestion];
  quizImage.src = q.image;
  question.textContent = q.question;
  
  options.forEach((option, index) => {
    option.textContent = q.answers[index];
  });
}

function showResults() {
    const q = questions[currentQuestion - 1];
  
    // Check if the last question was answered correctly and it was the final question
    if (q.finalQuestion && q.correctAnswers.includes(lastAnswerIndex)) {
      window.location.href = "other-page.html"; // Redirect to another page
    } else {
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      resultContainer.querySelector(".score").innerText = `${correct} / ${questions.length}`;
    }
  }
  

  function checkAnswer(answer) {
    const q = questions[currentQuestion];
    const correctAnswer = q.correctAnswer;
    const isFinalQuestion = q.finalQuestion;
  
    if (answer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      if (isFinalQuestion && answer === correctAnswer) {
        alert(`Your score: ${score}/${questions.length}`)
        window.location.href = "winscreen.html"; // Redirect to another page
      } else {
        alert(`Quiz completed! Your score: ${score}/${questions.length}`);
        // Optionally, reload the page or redirect to another page
        location.reload();
      }
    }
  }
  

options.forEach((option, index) => {
  option.addEventListener("click", () => checkAnswer(index));
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    // Optionally, reload the page or redirect to another page
    location.reload();
  }
});

loadQuestion();
