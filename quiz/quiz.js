// const quizQuestions = [
//     {
//       description:
//         "A ninja with a dream of becoming the strongest ninja and leader of his village.",
//       answer: "Naruto",
//       point: 5,
//       coverImg : "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
//       character : "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
//     },
//     {
//       description:
//         "A high school student who gains the powers of a death god and uses them to bring justice.",
//       answer: "Death Note",
//       point: 10,
//       coverImg : "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//       character : "/assets/img/death.png"
//     },
//     {
//       description:
//         "A group of friends embark on an adventure to find a mysterious treasure.",
//       answer: "One Piece",
//       point: 2,
//       coverImg:"https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
//       character : "/assets/img/onePiece.png"
//     },
//   ];

let makeQuestions = (description, answer, point, coverImg, character) => {
  let obj = {};
  obj.description = description;
  obj.answer = answer;
  obj.point = point;
  obj.coverImg = coverImg;
  obj.character = character;
  return obj;
};

let naruto = makeQuestions(
  "A ninja with a dream of becoming the strongest ninja and leader of his village.",
  "Naruto",
  5,
  "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
  "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
);
let deathNote = makeQuestions(
  "A high school student who gains the powers of a death god and uses them to bring justice.",
  "Death Note",
  10,
  "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "./assets/img/death.png"
);
let onePiece = makeQuestions(
  "A group of friends embark on an adventure to find a mysterious treasure.",
  "One Piece",
  2,
  "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
  "./assets/img/onePiece.png"
);

let quiz = [naruto, deathNote, onePiece];

// let score = 0;
// let index = 0;

// document.querySelector("#question").innerText = quiz[index].description;
// document.querySelector("#score").innerText = score;
// document.querySelector("#cover").src = quiz[index].coverImg;
// document.querySelector("#character").src = quiz[index].character;

// function nextQuestion() {
//   let answer = document.querySelector("#answer").value.toLowerCase();

//   if (answer === quiz[index].answer.toLowerCase()) {
//     document.querySelector("#yes").play();
//     score += quiz[index].point;
//     document.querySelector("#score").innerText = score;
//     index++;
//     document.querySelector("#answer").value = ""
//     document.querySelector("#question").innerText = quiz[index].description;
//     document.querySelector("#cover").src = quiz[index].coverImg;
//     document.querySelector("#character").src = quiz[index].character;
//   }
//   else {
//       alert("Wrong Answer! Try again");
//       document.querySelector("#gun").play();
//       document.querySelector("#youShD").play();
//     }
//     if (index === quiz.length) {
//         alert("Quiz completed! Your final score is: " + score);F
// }
// }

// let questionIndex = 0;

// document.getElementById("question").innerText=quiz[questionIndex].description
// document.querySelector("#cover").src=quiz[questionIndex].coverImg
// document.querySelector("#character").src=quiz[questionIndex].character

// let nextQuestion = () => {
// questionIndex++
// document.getElementById("question").innerText=quiz[questionIndex].description
// document.querySelector("#cover").src=quiz[questionIndex].coverImg
// document.querySelector("#character").src=quiz[questionIndex].character
// };

$("#root").addClass("d-flex justify-content-around align-items-center");
$("#root").css({ height: "100vh" });
for (let i = 0; i < quiz.length; i++) {
  $("#root").append(`
<div>
<h2>${quiz[i].answer}</h2>
<img src=${quiz[i].coverImg} loading="lazy" width="300" height="300">
</div>`);
}

$("#root").fadeIn(500);
$("#root").fadeOut(500);
