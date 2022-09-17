const questions = [
    {
        question: "Which one of the following is a java keyword?",
        choices: ["switch", "while", "public", "void", "all of the above"],
        correctAnswer: 2,
    },
    {
        question: "Java declaration statement must end with?",
        choices: ["A comma", "a semicolon", "a colon", "fullstop"],
        correctAnswer: 1,
    },
    {
        question: "The loop keyword of java is?",
        choices: ["Byte", "While", "Double", "FLoat"],
        correctAnswer: 1,
    },
    {
        question: "Java does not define which type modifier?",
        choices: ["Auto", "Extern", "Register", "all of the above"],
        correctAnswer: 3,
    },
    {
        question: "	Which one of the following is access keyword?",
        choices: ["public", "private", "protected", "all of the above"],
        correctAnswer: 3,
    },
    {
        question:
            "Which one of the following languages is pure object oriented language?",
        choices: ["java", "c++", "object pascal", "c"],
        correctAnswer: 0,
    },
    {
        question: "	Which one of the following is not a java keyword?",
        choices: ["break", "class", "static", "study"],
        correctAnswer: 3,
    },
    {
        question: "POP is a/an",
        choices: [
            "Object oriented programming",
            "Object optional programming",
            "Optional object programming",
            "None of these",
        ],
        correctAnswer: 0,
    },

];

const currentQuestion = 0;
const correctAnswers = 0;
const quizOver = false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();




});