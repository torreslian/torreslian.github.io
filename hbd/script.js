const questionContainer = document.getElementById("question-container");
const questionHeader = document.getElementById("question-header");
const questionText = document.getElementById("question");
const clueText = document.getElementById("clue");
const answerBox = document.getElementById("answer-box");
const checkButton = document.getElementById("check-button");

const questions = [
  {
    question: "Ate Leng loves to cook. What is her specialty?",
    answer: "BUTTERED SHRIMP",
    clue: "Clue: It's buttered",
    successMessage: "She cooks it so delicious" // Unique success message
  },
  {
    question: "What is Ate Leng's favorite flower?",
    answers: ["TULIP", "TULIPS"],
    clue: "Clue: 2️⃣👄",
    successMessage: "Such a cute and unique flower"
  },
  {
    question: "What is the name of Tita Anna's first pet?",
    answer: "BARBIE",
    clue: "Clue: You can brush my hair, undress me everywhere",
    successMessage: "All her fur babies started from Barbie! We miss you :'("
  },
  {
    question: "When did Ate Leng start working and where? State the year and company (ex. 2024, jollibee)",
    answers: ["2022, PAGIBIG", "2022, PAGIBIG FUND"],
    clue: "Government agency",
    successMessage: "She does corporate planning"
  },
  {
    question: "What was the last place out of the country that Tita Anna visited?",
    answer: "HONGKONG",
    clue: "Clue: It's not China",
    successMessage: "Ni hao"
  },
  {
    question: "What is Ate Leng's favorite show of all time?",
    answer: "FRIENDS",
    clue: "Clue: It's all about friendship",
    successMessage: "Group of friends na nakatambay lagi sa coffee shop"
  },
  {
    question: "What is Tita Anna's dream country?",
    answer: "CANADA",
    clue: "Clue: Located in North America",
    successMessage: "Maple and autumn and free healthcare 😍"
  },
  {
    question: "What is Tita Anna and Ate Leng's foot size?",
    answer: "8",
    clue: "Must be a digit (number)",
    successMessage: "Ehem new shoes"
  },
  {
    question: "What is Tita Anna's legal birthday as shown in her ID?",
    answer: "OCTOBER 8, 1980",
    clue: "Format should be: (ex. September 8, 2024)",
    successMessage: "Fascinating, isn't it?"
  },
  {
    question: "What country did Tita Anna and Ate Leng go to last year?",
    answer: "JAPAN",
    clue: "Clue: Disney!!!",
    successMessage: "They went together with Andoy and Ate Cy"
  },
  // ... add other questions with success messages
];

let currentQuestion = 0;
let remainingQuestions = questions.slice();

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const question = remainingQuestions.splice(randomIndex, 1)[0];
  return question;
}

function displayQuestion() {
  const question = getRandomQuestion();
  questionHeader.innerHTML = `<h2>Question ${currentQuestion + 1}</h2>`;
  questionText.textContent = question.question;
  clueText.textContent = question.clue;
  return question;
}

let currentQuestionObject = displayQuestion();

checkButton.addEventListener("click", () => {
  const answer = answerBox.value.toUpperCase();

  if (!answer) { // Check for empty input
    Swal.fire({
      title: "Oops!",
      text: "Please provide an answer before submitting.",
      imageUrl: "", // Optional reminder image
      confirmButtonColor: "#ffc107", // Optional different color
      customClass: "swal-reminder-theme" // Optional different theme
    });
    return; // Prevent further code execution if empty
  }

  const correctAnswers = currentQuestionObject.answers || [currentQuestionObject.answer];

  if (correctAnswers.includes(answer)) {
    currentQuestion++;
    answerBox.value = "";

    Swal.fire({
      title: "Correct!",
      text: currentQuestionObject.successMessage, // Display the unique success message
      imageUrl: "", // Optional success image
      confirmButtonColor: "#ff69b4",
      customClass: "swal-barbie-theme"
    });

    if (currentQuestion < questions.length) {
      currentQuestionObject = displayQuestion();
    } else {
      Swal.fire({
        title: "Congratulations! You answered all questions correctly! Show this message to Tita Anna",
        text: "",
        imageUrl: "",
        confirmButtonColor: "#ff69b4",
        customClass: "swal-barbie-theme",
        showConfirmButton: false
      });
    }
  } else {
    Swal.fire({
      title: "Wrong answer! Try again!",
      text: "",
      imageUrl: "",
      confirmButtonColor: "#red",
      customClass: "swal-barbie-theme"
    });
  }
});
