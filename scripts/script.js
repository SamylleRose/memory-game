// const cards = document.querySelectorAll(".card");
// timeTag = document.querySelector(".time b");
// flipsTag = document.querySelector(".flips b");
// refreshBtn = document.querySelector(".details button");

// let maxTime = 20;
// let timeLeft = maxTime;
// let flips = 0;
// let matchedCards = 0;
// let dissableDeck = false;
// let isPlaying = false;
// let cardOne, cardTwo, timer;

// function initTimer() {
//   if (timeLeft <= 0) {
//     return clearInterval(timer);
//   }
//   timeLeft--;
//   timeTag.innerText = timeLeft;
// }

// function flipCard({ target: clickedCard }) {
//   if (!isPlaying) {
//     isPlaying = true;
//     timer = setInterval(initTimer, 1000);
//   }
//   if (clickedCard != cardOne && !dissableDeck && timeLeft > 0) {
//     flips++;
//     flipsTag.innerText = flips;
//     clickedCard.classList.add("flip");
//   }
//   if (!cardOne) {
//     return (cardOne = clickedCard);
//   }
//   cardTwo = clickedCard;
//   dissableDeck = true;
//   let cardOneImg = cardOne.querySelector(".back-view img").classList.value;
//   cardTwoImg = cardTwo.querySelector(".back-view img").classList.value;
//   matchedCards(cardOneImg, cardTwoImg);
// }

// function matchedCards(img1, img2) {
//   if (img1 === img2) {
//     matchedCards++;
//     if (matchedCards == 6 && timeLeft > 0) {
//       return clearInterval(timer);
//     }
//     cardOne.removeEventListener("click", flipCard);
//     cardTwo.removeEventListener("click", flipCard);
//     cardOne = cardTwo = "";
//     return (dissableDeck = false);
//   }
//   setTimeout(() => {
//     cardOne.classList.add("shake");
//     cardTwo.classList.add("shake");
//   }, 400);

//   setTimeout(() => {
//     cardOne.classList.remove("shake", "flip");
//     cardTwo.classList.remove("shake", "flip");
//   }, 1200);
// }

// function shuffleCards() {
//   timeLeft = maxTime;
//   flips = matchedCards = 0;
//   cardOne = cardTwo = "";
//   clearInterval(timer);
//   timeTag.innerText = timeLeft;
//   flipsTag.innerText = flips;

//   dissableDeck = isPlaying = false;

//   let arr = [
//     "assets/caranguejo.png",
//     "assets/coala.png",
//     "assets/porco.png",
//     "assets/rato.png",
//     "assets/tigre.png",
//     "assets/tucano.png",
//     "assets/caranguejo.png",
//     "assets/coala.png",
//     "assets/porco.png",
//     "assets/rato.png",
//     "assets/tigre.png",
//     "assets/tucano.png",
//   ];
//   arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

//   cards.forEach((card, index) => {
//     card.classList.remove("flip");
//     let imgTag = card.querySelector(".back-view img");
//     setTimeout(() => {
//       imgTag.classList.value = "bx ${arr[index]}";
//     }, 500);
//     card.addEventListener("click", flipCard);
//   });
// }

// shuffleCards();
// refreshBtn.addEventListener("click", shuffleCards);
// cards.forEach((card) => {
//   card.addEventListener("click", flipCard);
// });
const cards = document.querySelectorAll(".card");
const timeTag = document.querySelector(".time strong");
const flipsTag = document.querySelector(".flips strong");
const refreshBtn = document.querySelector(".details button");

let maxTime = 20;
let timeLeft = maxTime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    return;
  }
  timeLeft--;
  timeTag.innerText = timeLeft;
}

function flipCard(e) {
  const clickedCard = e.target.closest(".card");
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }
  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");
    if (!cardOne) {
      cardOne = clickedCard;
      return;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src;
    let cardTwoImg = cardTwo.querySelector(".back-view img").src;
    checkMatchedCards(cardOneImg, cardTwoImg);
  }
}

function checkMatchedCards(img1, img2) {
  if (img1 === img2) {
    matchedCards++;
    if (matchedCards === 6 && timeLeft > 0) {
      clearInterval(timer);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    resetCards();
  } else {
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      resetCards();
    }, 1200);
  }
}

function resetCards() {
  cardOne = cardTwo = "";
  disableDeck = false;
}

function shuffleCards() {
  timeLeft = maxTime;
  flips = matchedCards = 0;
  cardOne = cardTwo = "";
  clearInterval(timer);
  timeTag.innerText = timeLeft;
  flipsTag.innerText = flips;

  disableDeck = isPlaying = false;

  let arr = [
    "assets/caranguejo.png",
    "assets/coala.png",
    "assets/porco.png",
    "assets/rato.png",
    "assets/tigre.png",
    "assets/tucano.png",
    "assets/caranguejo.png",
    "assets/coala.png",
    "assets/porco.png",
    "assets/rato.png",
    "assets/tigre.png",
    "assets/tucano.png",
  ];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    setTimeout(() => {
      imgTag.src = arr[index];
    }, 500);
    card.addEventListener("click", flipCard);
  });
}

shuffleCards();
refreshBtn.addEventListener("click", shuffleCards);
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
