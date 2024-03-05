var questions = [
    {
        question: "Երբ է ծնվել Սայաթ-Նովան",
        answers: ["1722", "1755", "1765", "1743"],
        correctAnswer: "1722"
    },
    {
        question: "Ինչ գործիք էր նվագում Սայաթ-Նովան",
        answers: ["քամանչա", "դհոլ", "կիթառ", "շվի"],
        correctAnswer: "քամանչա"
    },
    {
        question: "Որ լեզվով Սայաթ-Նովան չի ստեղծագործել",
        answers: ["ֆրանսերեն", "Վրացերեն", "թուրքերեն", "արաբերեն"],
        correctAnswer: "ֆրանսերեն"
    },
    {
        question: "Ինչպես է թարգմանվում Սայաթ-Նովա անունը",
        answers: ["երգի որսորդ", "երգի աստված", "սոխակի ձայն", "երգի վարպետ"],
        correctAnswer: "երգի որսորդ"
    },
    {
        question: "Որ ժամանակահատվածում է Սայաթ-Նովան եղել պալատում",
        answers: ["1742-1752", "1752-1758", "1723-1746", "երբեք"],
        correctAnswer: "1742-1752"
    },
    {
        question: "Ինչ անուն է ստանում Սայաթ-Նովան օծվելուց հետո ",
        answers: ["տեր Ստեփանոս", "տեր Սարգիս", "տեր Սմբատ", "տեր Վազգեն"],
        correctAnswer: "տեր Ստեփանոս"
    },
    {
        question: "Ում հետ է ամուսնանում Սայաթ-Նովան",
        answers: ["սանահինցի Մարմարի", "սանահինցի ալմաստի", "սանահինցի ռուբինի", "սանահինցի Մարիամի"],
        correctAnswer: "սանահինցի Մարմարի"
    },
    {
        question: "Քանի երեխա է ունենում Սայաթ-Նովան",
        answers: ["1", "5", "7", "4"],
        correctAnswer: "4"
    },
    {
        question: "Որ թվականին է Սայաթ-Նովան եղել Էնզելի նավահանգստի եկեզեցու քաղհանա",
        answers: ["1761", "1751", "1721", "1741"],
        correctAnswer: "1761"
    },
    {
        question: "երբ է մահացել Սայաթ-Նովան",
        answers: ["1795", "1786", "1803", "1794"],
        correctAnswer: "1795"
    },
    
];

// Function to remove all content from the HTML page
function removeAllContent() {
    var heading = document.querySelector('.heading');
    if (heading) {
        heading.remove();
    }
    var text = document.querySelector('.text');
    if (text) {
        text.remove();
    }
    var startButton = document.querySelector('.start');
    if (startButton) {
        startButton.remove();
    }
}

// Function to generate a new question
function generateQuestion() {
    removeAllContent(); // Remove existing content

    // Randomly select a question from the questions array
    var randomIndex = Math.floor(Math.random() * questions.length);
    var questionObj = questions[randomIndex];

    var questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    // Add question text
    var questionText = document.createElement('p');
    questionText.textContent = questionObj.question;
    questionDiv.appendChild(questionText);

    // Shuffle answer options randomly
    var answers = questionObj.answers.slice(); // Make a copy of the answers array
    answers.sort(function() { return 0.5 - Math.random() });

    // Add answer options
    answers.forEach(function(answer) {
        var answerLabel = document.createElement('label');
        var radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.value = answer;
        answerLabel.appendChild(radioInput);
        answerLabel.appendChild(document.createTextNode(answer));
        questionDiv.appendChild(answerLabel);
        questionDiv.appendChild(document.createElement('br'));
    });

    // Add submit button
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Հաջորդը';
    submitButton.className = "submitBtn"
    submitButton.addEventListener('click', function() {
        var selectedAnswer = document.querySelector('input[name=answer]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === questionObj.correctAnswer) {
                // Correct answer selected
                alert('ճիշտ է');
                questionDiv.remove(); // Remove the current question from the DOM
                questions.splice(randomIndex, 1); // Remove the current question from the array
                if (questions.length > 0) {
                    generateQuestion(); // Generate a new question if there are more questions remaining
                } else {
                    alert('Շնորհավորում եմ: Դուք ճիշտ պատասխանել եք բոլոր հարցերին։'); // Display message when all questions are answered
                }
            } else {
                // Incorrect answer selected
                alert('Սխալ է');
            }
        } else {
            // No answer selected
            alert('Պատասխանեք հարցին');
        }
    });
    questionDiv.appendChild(submitButton);

    // Add the question div to the body
    document.querySelector('.app').appendChild(questionDiv);
}