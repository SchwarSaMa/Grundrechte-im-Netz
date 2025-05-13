const tabs = document.querySelectorAll('.tab-content');

function openTab(event, tabName){
    tabs.forEach(tab => {
        tab.classList.remove('active');
    })
    document.getElementById(tabName).classList.add('active');
}

function showTabs(){
    const tabNavigation = document.querySelector('#tab');
    const landingPage = document.querySelector('#landing');

    tabNavigation.style.display = 'flex';
    landingPage.style.display = 'none';
    tabs[0].classList.add('active');
}

/* Get form data and validate it */
function retrieveFormData(){
        const privacyForm = document.querySelector('#privacy-mini-quizz');
        const privacyMiniQuizz = new FormData(privacyForm);
        const formInput = [];
        for(const value of privacyMiniQuizz.values()){
            formInput.push(value);
        }
    
        if(formInput.length < 8){
            alert('Please answer all questions');
        } else{
            return formInput;
        }
}

function validateQuizzAnswers(){
    const userAnswers = retrieveFormData();
    const correctAnswers = ['b','b','b','c','c','b','a','b'];
    let validatedAnswers = [];
    let result = 0;

    validatedAnswers = correctAnswers.map((answer, index) => {
        return userAnswers[index] === answer ? true : false;
    });

    for(let i = 0; i < validatedAnswers.length; i++){
        if(validatedAnswers[i] === true){
            result++;
        }
    }

    return [validatedAnswers, result/validatedAnswers.length];
}

function printQuizzResults(){
    const [validatedAnswers, percentageCorrect] = validateQuizzAnswers();
    const quizResult = document.querySelector('#quiz-result');
    const privacyQuestions = document.querySelectorAll('#privacy-mini-quizz > fieldset');
    let passed = false;
    
    privacyQuestions.forEach((question, index) => {
        validatedAnswers[index] === true 
        ? question.style.borderLeftColor = 'rgb(61, 135, 61)'
        : question.style.borderLeftColor = 'rgb(168, 55, 55)';
    });

    if(percentageCorrect < 0.8){
        quizResult.textContent = 'Dranbleiben. Versuche es nochmal!'
        quizResult.style.color = 'rgb(168, 55, 55)';
        passed = false;
    } else {
        quizResult.textContent = 'Herzlichen Glückwunsch! Du hast den Test bestanden.'
        quizResult.style.color = 'rgb(61, 135, 61)';
        passed = true;
    }
    return passed;
}

/* Update Progress Bar */
function updateProgressBar(event){
    event.preventDefault();
    const passed = printQuizzResults();
    const totalInfoCards = document.querySelectorAll('.info-card').length;
    const privacyInfoCards = document.querySelectorAll('#privacy > .info-card').length;
    const circle = document.querySelector('.progress-circle');
    const progress = privacyInfoCards / totalInfoCards;
    const complete = 2198;
    if(passed === true){
        circle.style.strokeDashoffset = `${complete * (1 - progress)}`;
    }
}