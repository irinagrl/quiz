function render() {
    // deleteCards();

    const i = getRandomInt(quiz.length);
    createCard(quiz[i]);

}

render(quiz);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getCardElement(card) {
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.quiz__ques').innerText = card.ques;
    cardElement.querySelector('.quiz__ans').innerText = card.ans;

    return cardElement;
}

function createCard(card) {
    const gallery = document.querySelector('.quiz');
    const cardElement = getCardElement(card);
    const newCardElement = gallery.appendChild(cardElement);
    newCardElement.addEventListener('click', cardClickHandler);

}

function cardClickHandler() {
    console.log('hi');
}

// document.addEventListener('click', cardClickHandler);