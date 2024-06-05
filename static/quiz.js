const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".info_btn .quit");
const continue_btn = info_box.querySelector(".info_btn .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timecount = quiz_box.querySelector(".timer_sec");
const timeline = quiz_box.querySelector("header  .time_line");
const result_box = document.querySelector(".result_box");
const retry_btn = result_box.querySelector(".result_btn .retry_btn");
const quit_btn = result_box.querySelector(".result_btn .quit_btn");
const score_text = result_box.querySelector(".score_text");
const timeoff = quiz_box.querySelector("header .timer");
const mhcet = document.querySelector(".entrance_btn_list #MH-CET");
const jeemains = document.querySelector(".entrance_btn_list #JEE-MAINS");
const neet = document.querySelector(".entrance_btn_list #NEET");
const start = document.querySelector(".start_btn");
const choose = document.querySelector(".choose");
// start btn
mhcet.addEventListener("click", () => {
  info_box.classList.add("activeinfo");
  choose.classList.add("deactivechoose");
});

// exit button
exit_btn.addEventListener("click", () => {
  // info_box.classList.remove("activeinfo");
  // choose.classList.add("activechoose");
  // start.classList.add("deactivestart")
  window.location.reload();
});

// continue button towards quiz
continue_btn.addEventListener("click", () => {
  quiz_box.classList.add("activequiz");
  showquestions(0);
  quecounter(1);
  starttimer(60);
  starttimerline(0);
});
quit_btn.addEventListener("click", () => {
  window.location.reload();
});
retry_btn.addEventListener("click", () => {
  quiz_box.classList.add("activequiz"); //show the quizbox
  result_box.classList.remove("activeresult"); //hide the result box

  que_count = 0;
  que_numb = 1;
  timevalue = 60;
  widthvalue = 0;
  userscore = 0;
  showquestions(que_count);
  quecounter(que_numb);
  clearInterval(counter);
  clearInterval(counterline);
  starttimer(timevalue);
  starttimerline(widthvalue);
  timeoff.textContent = "Time Left";
  next_btn.classList.remove("show");
});
mhcet.addEventListener("click", () => {
  start.classList.add("activestart");
  choose.classList.add("deactivechoose");
});

// showing questions

let que_count = 0;
let que_numb = 1;
let counter;
let timevalue = 60;
let counterline;
let widthvalue = 0;
let userscore = 0;

const next_btn = document.querySelector(".next_btn button");
next_btn.addEventListener("click", () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showquestions(que_count);
    quecounter(que_numb);
    clearInterval(counter);
    starttimer(timevalue);
    clearInterval(counterline);
    starttimerline(widthvalue);
    next_btn.style.display = "none";
    timeoff.textContent = "Time Left";
  } else {
    clearInterval(counter);
    starttimer(timevalue);
    clearInterval(counterline);
    console.log("questions are completed");
    showresultbox();
  }
});
// showing the quizbox
function showquestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    `<span>` +
    questions[index].numb +
    "." +
    " " +
    questions[index].question +
    `</span>`;

  let option_tag =
    `<div class="option"><span>` +
    questions[index].options[0] +
    `</span></div>` +
    `<div class="option"><span>` +
    questions[index].options[1] +
    `</span></div>` +
    `<div class="option"><span>` +
    questions[index].options[2] +
    `</span></div>` +
    `<div class="option"><span>` +
    questions[index].options[3] +
    `</span></div>`;
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionselected(this)");
  }
}
// showing the current question in which you are present which is show n at the bottom of box
function quecounter(que_numb) {
  const bottom_que_counter = quiz_box.querySelector(".total_que");
  let bottom_que_counter_tag =
    `<span> <p>` +
    que_numb +
    `</p> of <p>` +
    questions.length +
    `</p> Questions</span>`;
  bottom_que_counter.innerHTML = bottom_que_counter_tag;
}

let tickicon = ` <div class="icon_tick"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.88px" height="23.88px" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88" xml:space="preserve"><g><path fill="#6BBE66" d="M34.388,67.984c-0.286-0.308-0.542-0.638-0.762-0.981c-0.221-0.345-0.414-0.714-0.573-1.097 c-0.531-1.265-0.675-2.631-0.451-3.934c0.224-1.294,0.812-2.531,1.744-3.548l0.34-0.35c2.293-2.185,5.771-2.592,8.499-0.951 c0.39,0.233,0.762,0.51,1.109,0.827l0.034,0.031c1.931,1.852,5.198,4.881,7.343,6.79l1.841,1.651l22.532-23.635 c0.317-0.327,0.666-0.62,1.035-0.876c0.378-0.261,0.775-0.482,1.185-0.661c0.414-0.181,0.852-0.323,1.3-0.421 c0.447-0.099,0.903-0.155,1.356-0.165h0.026c0.451-0.005,0.893,0.027,1.341,0.103c0.437,0.074,0.876,0.193,1.333,0.369 c0.421,0.161,0.825,0.363,1.207,0.604c0.365,0.231,0.721,0.506,1.056,0.822l0.162,0.147c0.316,0.313,0.601,0.653,0.85,1.014 c0.256,0.369,0.475,0.766,0.652,1.178c0.183,0.414,0.325,0.852,0.424,1.299c0.1,0.439,0.154,0.895,0.165,1.36v0.23 c-0.004,0.399-0.042,0.804-0.114,1.204c-0.079,0.435-0.198,0.863-0.356,1.271c-0.16,0.418-0.365,0.825-0.607,1.21 c-0.238,0.377-0.518,0.739-0.832,1.07l-27.219,28.56c-0.32,0.342-0.663,0.642-1.022,0.898c-0.369,0.264-0.767,0.491-1.183,0.681 c-0.417,0.188-0.851,0.337-1.288,0.44c-0.435,0.104-0.889,0.166-1.35,0.187l-0.125,0.003c-0.423,0.009-0.84-0.016-1.241-0.078 l-0.102-0.02c-0.415-0.07-0.819-0.174-1.205-0.31c-0.421-0.15-0.833-0.343-1.226-0.575l-0.063-0.04 c-0.371-0.224-0.717-0.477-1.032-0.754l-0.063-0.06c-1.58-1.466-3.297-2.958-5.033-4.466c-3.007-2.613-7.178-6.382-9.678-9.02 L34.388,67.984L34.388,67.984z M61.44,0c16.96,0,32.328,6.883,43.453,17.987c11.104,11.125,17.986,26.493,17.986,43.453 c0,16.961-6.883,32.329-17.986,43.454C93.769,115.998,78.4,122.88,61.44,122.88c-16.961,0-32.329-6.882-43.454-17.986 C6.882,93.769,0,78.4,0,61.439C0,44.48,6.882,29.112,17.986,17.987C29.112,6.883,44.479,0,61.44,0L61.44,0z M96.899,25.981 C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685c-9.073,9.073-14.684,21.609-14.684,35.458 c0,13.851,5.611,26.387,14.684,35.46s21.609,14.685,35.46,14.685c13.85,0,26.386-5.611,35.459-14.685s14.684-21.609,14.684-35.46 C111.583,47.59,105.973,35.054,96.899,25.981L96.899,25.981z"/></g></svg></div>`;
let crossicon = `<div class="icon_cross"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.88px" height="23.879px" viewBox="0 0 122.88 122.879" enable-background="new 0 0 122.88 122.879" xml:space="preserve"><g><path fill="#FF4141" d="M61.44,0c16.96,0,32.328,6.882,43.453,17.986c11.104,11.125,17.986,26.494,17.986,43.453 c0,16.961-6.883,32.328-17.986,43.453C93.769,115.998,78.4,122.879,61.44,122.879c-16.96,0-32.329-6.881-43.454-17.986 C6.882,93.768,0,78.4,0,61.439C0,44.48,6.882,29.111,17.986,17.986C29.112,6.882,44.48,0,61.44,0L61.44,0z M73.452,39.152 c2.75-2.792,7.221-2.805,9.986-0.026c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.077,12.25 c2.728,2.77,2.689,7.256-0.081,10.021c-2.772,2.766-7.229,2.758-9.954-0.012L61.445,71.541L49.428,83.729 c-2.75,2.793-7.22,2.805-9.985,0.025c-2.763-2.775-2.776-7.291-0.026-10.082L51.48,61.435l-12.078-12.25 c-2.726-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.954,0.013L61.435,51.34L73.452,39.152L73.452,39.152z M96.899,25.98C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685 c-9.073,9.073-14.684,21.609-14.684,35.459s5.611,26.387,14.684,35.459c9.073,9.074,21.609,14.686,35.46,14.686 c13.85,0,26.386-5.611,35.459-14.686c9.073-9.072,14.684-21.609,14.684-35.459S105.973,35.054,96.899,25.98L96.899,25.98z"/></g></svg></div>`;
// it is used for selecting the options
function optionselected(answer) {
  console.log("select is working");
  clearInterval(counter);
  clearInterval(counterline);
  let userans = answer.textContent;
  let correctans = questions[que_count].answer;
  let alloption = option_list.children.length;
  if (userans == correctans) {
    userscore += 1;
    console.log(userscore);
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickicon);
    console.log("answer is correct");
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossicon);
    console.log("answer is wrong");
    // if answer is wrong then automatically select the correct answer
    for (let i = 0; i < alloption; i++) {
      if (option_list.children[i].textContent == correctans) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
      }
    }
  }
  //    for making all optins disabled
  for (let i = 0; i < alloption; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}

// it is used for showing the resultbox
function showresultbox() {
  info_box.classList.remove("activeinfo"); //hide the infobox
  quiz_box.classList.remove("activequiz"); //hide the quizbox
  result_box.classList.add("activeresult"); //show thw result box

  if (userscore > 3) {
    let scoretag =
      `<span> and Congrats, you got <p>` +
      userscore +
      `</p> out of <p>` +
      questions.length +
      `</p></span>`;
    score_text.innerHTML = scoretag;
  } else if (userscore > 1) {
    let scoretag =
      `<span> and nice, you got <p>` +
      userscore +
      `</p> out of <p>` +
      questions.length +
      `</p></span>`;
    score_text.innerHTML = scoretag;
  } else {
    let scoretag =
      `<span> and sorry, you got only <p>` +
      userscore +
      `</p> out of <p>` +
      questions.length +
      `</p></span>`;
    score_text.innerHTML = scoretag;
  }
}

function starttimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timecount.textContent = time;
    time--;
    if (time < 9) {
      let addzero = timecount.textContent;
      timecount.textContent = "0" + addzero;
    }
    if (time < 0) {
      clearInterval(counter);
      timecount.textContent = "00";
      timeoff.textContent = "Time Off";

      let correctans = questions[que_count].answer;
      let alloption = option_list.children.length;

      // if answer is wrong then automatically select the correct answer
      for (let i = 0; i < alloption; i++) {
        if (option_list.children[i].textContent == correctans) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
        }
      }
      //    for making all optins disabled
      for (let i = 0; i < alloption; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.style.display = "block";
    }
  }
}
function starttimerline(time) {
  counterline = setInterval(timer, 23.4);
  function timer() {
    time += 1;
    timeline.style.width = time + "px";

    if (time > 690) {
      clearInterval(counterline);
    }
  }
}
