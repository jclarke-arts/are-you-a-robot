let bot = new RiveScript();

const brains = ["brain/subs.rive", "brain/brain.rive"];

bot.loadFile(brains).then(botReady).catch(botNotReady);

const message_container = document.querySelector(".messages");

const form = document.querySelector("form");

const input_box = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = "";
  input_box.focus();
});

window.onload(input_box.focus());

function botReply(message) {
  message_container.innerHTML += `<div class="bot">${message}</div>`;
}

function selfReply(message) {
  message_container.innerHTML += `<div class="self">${message}</div>`;

  bot
    .reply("local-user", message)
    .then(function (reply) {
      botReply(reply);
    })
    .then(function () {
      message_container.lastElementChild.scrollIntoView();
    });
}

function botReady() {
  bot.sortReplies();
}

function botNotReady(err) {
  console.log("An error has occurred.", err);
}


function teaSelectLukewarm() {
  console.log("tea temperature selected as Lukewarm");
  input_box.focus();
  document.body.style.backgroundImage = 'url("./assets/Background-01.png")';
  bot.reply("local-user", 'lukewarm')
    .then(function (reply) {
      botReply(reply);
    })
    .then(function () {
      message_container.lastElementChild.scrollIntoView();
    });
}

function teaSelectHot() {
  console.log("tea temperature selected as Hot");
  input_box.focus();
  document.body.style.backgroundImage = 'url("./assets/Background-02.png")';
  bot.reply("local-user", 'hot')
  .then(function (reply) {
    botReply(reply);
  })
  .then(function () {
    message_container.lastElementChild.scrollIntoView();
  });
}

function teaSelectExtraHot() {
  console.log("tea temperature selected as Extra Hot");
  input_box.focus();
  document.body.style.backgroundImage = 'url("./assets/Background-03.png")';
  bot.reply("local-user", 'extrahot')
  .then(function (reply) {
    botReply(reply);
  })
  .then(function () {
    message_container.lastElementChild.scrollIntoView();
  });
}