const jeemains1 = document.querySelector(".entrance_btn_list #JEE-MAINS");
// jeemains1.addEventListener("click",()=>{
//     start.classList.add("activestart");
//     choose.classList.add("deactivechoose");
//     // const CET=7;
// });
// if(CET == 7)
// {
jeemains1.addEventListener("click", () => {
  const start_btn1 = document.querySelector(".start_btn button");
  const info_box1 = document.querySelector(".info_box");
  const exit_btn1 = info_box1.querySelector(".info_btn .quit");
  const continue_btn1 = info_box1.querySelector(".info_btn .restart");
  const quiz_box1 = document.querySelector(".quiz_box");
  const option_list1 = document.querySelector(".option_list");
  const timecount1 = quiz_box1.querySelector(".timer_sec");
  const timeline1 = quiz_box1.querySelector("header  .time_line");
  const result_box1 = document.querySelector(".result_box");
  const retry_btn1 = result_box1.querySelector(".result_btn .retry_btn");
  const quit_btn1 = result_box1.querySelector(".result_btn .quit_btn");
  const score_text1 = result_box1.querySelector(".score_text");
  const timeoff1 = quiz_box1.querySelector("header .timer");
  const mhcet1 = document.querySelector(".entrance_btn_list #MH-CET");
  // const jeemains1=document.querySelector(".entrance_btn_list #JEE-MAINS");
  const neet1 = document.querySelector(".entrance_btn_list #NEET");
  const start1 = document.querySelector(".start_btn");
  const choose1 = document.querySelector(".choose");
  // start btn
  jeemains1.addEventListener("click", () => {
    info_box1.classList.add("activeinfo");
  });

  // exit button
  exit_btn1.addEventListener("click", () => {
    //     info_box1.classList.remove("activeinfo");
    //     choose1.classList.add("activechoose");
    // start1.classList.add("deactivestart")
    window.location.reload();
  });

  // continue button towards quiz
  continue_btn1.addEventListener("click", () => {
    quiz_box1.classList.add("activequiz");
    showquestions1(0);
    quecounter1(1);
    starttimer1(60);
    starttimerline1(0);
  });
  quit_btn1.addEventListener("click", () => {
    window.location.reload();
  });
  retry_btn1.addEventListener("click", () => {
    quiz_box1.classList.add("activequiz"); //show the quizbox
    result_box1.classList.remove("activeresult"); //hide the result box

    que_count1 = 0;
    que_numb1 = 1;
    timevalue1 = 60;
    widthvalue1 = 0;
    userscore1 = 0;
    showquestions1(que_count1);
    quecounter1(que_numb1);
    clearInterval(counter1);
    clearInterval(counterline1);
    starttimer1(timevalue1);
    starttimerline1(widthvalue1);
    timeoff1.textContent = "Time Left";
    next_btn1.classList.remove("show");
  });
  jeemains1.addEventListener("click", () => {
    start1.classList.add("activestart");
    choose1.classList.add("deactivechoose");
  });

  // showing questions

  let que_count1 = 0;
  let que_numb1 = 1;
  let counter1;
  let timevalue1 = 60;
  let counterline1;
  let widthvalue1 = 0;
  let userscore1 = 0;

  const next_btn1 = document.querySelector(".next_btn button");
  next_btn1.addEventListener("click", () => {
    if (que_count1 < questions1.length - 1) {
      que_count1++;
      que_numb1++;
      showquestions1(que_count1);
      quecounter1(que_numb1);
      clearInterval(counter1);
      starttimer1(timevalue1);
      clearInterval(counterline1);
      starttimerline1(widthvalue1);
      next_btn1.style.display = "none";
      timeoff1.textContent = "Time Left";
    } else {
      clearInterval(counter);
      starttimer1(timevalue);
      clearInterval(counterline);
      console.log("questions are completed");
      showresultbox1();
    }
  });
  // showing the quizbox
  function showquestions1(index1) {
    const que_text1 = document.querySelector(".que_text");
    let que_tag1 =
      `<span>` +
      questions1[index1].numb1 +
      "." +
      " " +
      questions1[index1].question1 +
      `</span>`;

    let option_tag1 =
      `<div class="option"><span>` +
      questions1[index1].options1[0] +
      `</span></div>` +
      `<div class="option"><span>` +
      questions1[index1].options1[1] +
      `</span></div>` +
      `<div class="option"><span>` +
      questions1[index1].options1[2] +
      `</span></div>` +
      `<div class="option"><span>` +
      questions1[index1].options1[3] +
      `</span></div>`;
    que_text1.innerHTML = que_tag1;
    option_list1.innerHTML = option_tag1;
    const option1 = option_list1.querySelectorAll(".option");
    for (let i = 0; i < option1.length; i++) {
      option1[i].setAttribute("onclick", "optionselected1(this)");
    }
  }
  // showing the current question in which you are present which is show n at the bottom of box
  function quecounter1(que_numb1) {
    const bottom_que_counter1 = quiz_box1.querySelector(".total_que");
    let bottom_que_counter_tag1 =
      `<span> <p>` +
      que_numb1 +
      `</p> of <p>` +
      questions1.length +
      `</p> Questions</span>`;
    bottom_que_counter1.innerHTML = bottom_que_counter_tag1;
  }

  let tickicon1 = ` <div class="icon_tick"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.88px" height="23.88px" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88" xml:space="preserve"><g><path fill="#6BBE66" d="M34.388,67.984c-0.286-0.308-0.542-0.638-0.762-0.981c-0.221-0.345-0.414-0.714-0.573-1.097 c-0.531-1.265-0.675-2.631-0.451-3.934c0.224-1.294,0.812-2.531,1.744-3.548l0.34-0.35c2.293-2.185,5.771-2.592,8.499-0.951 c0.39,0.233,0.762,0.51,1.109,0.827l0.034,0.031c1.931,1.852,5.198,4.881,7.343,6.79l1.841,1.651l22.532-23.635 c0.317-0.327,0.666-0.62,1.035-0.876c0.378-0.261,0.775-0.482,1.185-0.661c0.414-0.181,0.852-0.323,1.3-0.421 c0.447-0.099,0.903-0.155,1.356-0.165h0.026c0.451-0.005,0.893,0.027,1.341,0.103c0.437,0.074,0.876,0.193,1.333,0.369 c0.421,0.161,0.825,0.363,1.207,0.604c0.365,0.231,0.721,0.506,1.056,0.822l0.162,0.147c0.316,0.313,0.601,0.653,0.85,1.014 c0.256,0.369,0.475,0.766,0.652,1.178c0.183,0.414,0.325,0.852,0.424,1.299c0.1,0.439,0.154,0.895,0.165,1.36v0.23 c-0.004,0.399-0.042,0.804-0.114,1.204c-0.079,0.435-0.198,0.863-0.356,1.271c-0.16,0.418-0.365,0.825-0.607,1.21 c-0.238,0.377-0.518,0.739-0.832,1.07l-27.219,28.56c-0.32,0.342-0.663,0.642-1.022,0.898c-0.369,0.264-0.767,0.491-1.183,0.681 c-0.417,0.188-0.851,0.337-1.288,0.44c-0.435,0.104-0.889,0.166-1.35,0.187l-0.125,0.003c-0.423,0.009-0.84-0.016-1.241-0.078 l-0.102-0.02c-0.415-0.07-0.819-0.174-1.205-0.31c-0.421-0.15-0.833-0.343-1.226-0.575l-0.063-0.04 c-0.371-0.224-0.717-0.477-1.032-0.754l-0.063-0.06c-1.58-1.466-3.297-2.958-5.033-4.466c-3.007-2.613-7.178-6.382-9.678-9.02 L34.388,67.984L34.388,67.984z M61.44,0c16.96,0,32.328,6.883,43.453,17.987c11.104,11.125,17.986,26.493,17.986,43.453 c0,16.961-6.883,32.329-17.986,43.454C93.769,115.998,78.4,122.88,61.44,122.88c-16.961,0-32.329-6.882-43.454-17.986 C6.882,93.769,0,78.4,0,61.439C0,44.48,6.882,29.112,17.986,17.987C29.112,6.883,44.479,0,61.44,0L61.44,0z M96.899,25.981 C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685c-9.073,9.073-14.684,21.609-14.684,35.458 c0,13.851,5.611,26.387,14.684,35.46s21.609,14.685,35.46,14.685c13.85,0,26.386-5.611,35.459-14.685s14.684-21.609,14.684-35.46 C111.583,47.59,105.973,35.054,96.899,25.981L96.899,25.981z"/></g></svg></div>`;
  let crossicon1 = `<div class="icon_cross"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.88px" height="23.879px" viewBox="0 0 122.88 122.879" enable-background="new 0 0 122.88 122.879" xml:space="preserve"><g><path fill="#FF4141" d="M61.44,0c16.96,0,32.328,6.882,43.453,17.986c11.104,11.125,17.986,26.494,17.986,43.453 c0,16.961-6.883,32.328-17.986,43.453C93.769,115.998,78.4,122.879,61.44,122.879c-16.96,0-32.329-6.881-43.454-17.986 C6.882,93.768,0,78.4,0,61.439C0,44.48,6.882,29.111,17.986,17.986C29.112,6.882,44.48,0,61.44,0L61.44,0z M73.452,39.152 c2.75-2.792,7.221-2.805,9.986-0.026c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.077,12.25 c2.728,2.77,2.689,7.256-0.081,10.021c-2.772,2.766-7.229,2.758-9.954-0.012L61.445,71.541L49.428,83.729 c-2.75,2.793-7.22,2.805-9.985,0.025c-2.763-2.775-2.776-7.291-0.026-10.082L51.48,61.435l-12.078-12.25 c-2.726-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.954,0.013L61.435,51.34L73.452,39.152L73.452,39.152z M96.899,25.98C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685 c-9.073,9.073-14.684,21.609-14.684,35.459s5.611,26.387,14.684,35.459c9.073,9.074,21.609,14.686,35.46,14.686 c13.85,0,26.386-5.611,35.459-14.686c9.073-9.072,14.684-21.609,14.684-35.459S105.973,35.054,96.899,25.98L96.899,25.98z"/></g></svg></div>`;
  // it is used for selecting the options
  function optionselected1(answer1) {
    console.log("option is working");
    console.log("select is working");
    clearInterval(counter1);
    clearInterval(counterline1);
    let userans1 = answer1.textContent;
    let correctans1 = questions1[que_count1].answer1;
    let alloption1 = option_list1.children.length;
    if (userans1 == correctans1) {
      userscore1 += 1;
      console.log(userscore1);
      answer1.classList.add("correct");
      answer1.insertAdjacentHTML("beforeend", tickicon1);
      console.log("answer is correct");
    } else {
      answer1.classList.add("incorrect");
      answer1.insertAdjacentHTML("beforeend", crossicon1);
      console.log("answer is wrong");
      // if answer is wrong then automatically select the correct answer
      for (let i = 0; i < alloption1; i++) {
        if (option_list1.children[i].textContent == correctans1) {
          option_list1.children[i].setAttribute("class", "option correct");
          option_list1.children[i].insertAdjacentHTML("beforeend", tickicon1);
        }
      }
    }
    //    for making all optins disabled
    for (let i = 0; i < alloption1; i++) {
      option_list1.children[i].classList.add("disabled");
    }
    next_btn1.style.display = "block";
  }

  // it is used for showing the resultbox
  function showresultbox1() {
    info_box1.classList.remove("activeinfo"); //hide the infobox
    quiz_box1.classList.remove("activequiz"); //hide the quizbox
    result_box1.classList.add("activeresult"); //show thw result box

    if (userscore1 > 3) {
      let scoretag1 =
        `<span> and Congrats, you got <p>` +
        userscore1 +
        `</p> out of <p>` +
        questions1.length +
        `</p></span>`;
      score_text1.innerHTML = scoretag1;
    } else if (userscore1 > 1) {
      let scoretag1 =
        `<span> and nice, you got <p>` +
        userscore1 +
        `</p> out of <p>` +
        questions1.length +
        `</p></span>`;
      score_text1.innerHTML = scoretag1;
    } else {
      let scoretag1 =
        `<span> and sorry, you got only <p>` +
        userscore1 +
        `</p> out of <p>` +
        questions1.length +
        `</p></span>`;
      score_text1.innerHTML = scoretag1;
    }
  }

  function starttimer1(time1) {
    counter1 = setInterval(timer1, 1000);
    function timer1() {
      timecount1.textContent = time1;
      time1--;
      if (time1 < 9) {
        let addzero1 = timecount1.textContent;
        timecount1.textContent = "0" + addzero1;
      }
      if (time1 < 0) {
        clearInterval(counter1);
        timecount1.textContent = "00";
        timeoff1.textContent = "Time Off";

        let correctans1 = questions1[que_count1].answer1;
        let alloption1 = option_list1.children.length;

        // if answer is wrong then automatically select the correct answer
        for (let i = 0; i < alloption1; i++) {
          if (option_list1.children[i].textContent == correctans1) {
            option_list1.children[i].setAttribute("class", "option correct");
            option_list1.children[i].insertAdjacentHTML("beforeend", tickicon1);
          }
        }
        //    for making all optins disabled
        for (let i = 0; i < alloption1; i++) {
          option_list1.children[i].classList.add("disabled");
        }
        next_btn1.style.display = "block";
      }
    }
  }
  function starttimerline1(time1) {
    counterline1 = setInterval(timer1, 23.4);
    function timer1() {
      time1 += 1;
      timeline1.style.width = time1 + "px";

      if (time1 > 690) {
        clearInterval(counterline1);
      }
    }
  }
  // }
});
