$(window).load(function () {
  $("#preloader").fadeOut("slow");
});

$(document).ready(function () {
  new WOW().init();
  $("#top-nav").onePageNav({
    currentClass: "current",
    changeHash: true,
    scrollSpeed: 1200,
  });

  //animated header class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("animated");
    } else {
      //console.log('a');
      $(".navigation").removeClass("animated");
    }
  });

  $year = $("#countdown_dashboard").data("year");
  $month = $("#countdown_dashboard").data("month");
  $day = $("#countdown_dashboard").data("day");
  /*
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      $day,
            'month':    $month,
            'year':     $year,
            'hour':     23,
            'min':      59,
            'sec':      59,
        },
        omitWeeks: true
    });

    $(".about-slider").owlCarousel(
        {
        singleItem: true,
        pagination : true,
        autoPlay : 5000,
        }
    );
    */
});

$("#vobil-form-btn").click((e) => {
  const accept = document.querySelector("#accept:checked");
  const errorAccept = document.querySelector("#accept~span.error");
  if (accept == null) {
    if (!errorAccept.classList.contains("show"))
      errorAccept.classList.add("show");
    return;
  }
  errorAccept.classList.remove("show");

  e.preventDefault();
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#gender").value;
  const zipcode = document.querySelector("#zipcode").value;
  const phone = document.querySelector("#phone").value;

  checkInput("name", name);
  checkInput("age", age);
  checkInput("gender", gender);
  checkInput("zipcode", zipcode);
  checkInput("phone", phone);

  if (
    name === "" ||
    age === "" ||
    gender === "" ||
    zipcode === "" ||
    phone === ""
  )
    return;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("age", age);
  formData.append("gender", gender);
  formData.append("zip", zipcode);
  formData.append("phone", phone);
  formData.append("block", "Vobil");

  const loading = document.querySelector("#form-submit");
  if (!loading.classList.contains("show")) loading.classList.add("show");

  dataLayer.push({
    'event': 'form-submit',
    'data': {
      'name': name,
      'age': age,
      'gender':gender,
      'zipcode': zipcode,
      'phone': phone
    }
  })

  fetch(
    "https://cors.seasalt.ai/https://script.google.com/macros/s/AKfycbzmVEBYVXnDqPCpeKjxP0SAX5dMNSy5OWEPj0w4OiPVOEifoRvPNLGq_bk9nKoMmZTa_Q/exec",
    {
      method: "POST",
      body: formData,
      headers: {
        "x-requested-with": "",
      },
    }
  )
    .then((response) => {
      loading.classList.remove("show");
      document.querySelector("#name").value = "";
      document.querySelector("#age").value = "";
      document.querySelector("#gender").value = "";
      document.querySelector("#zipcode").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#accept").checked = false;
    })
    .catch((error) => {
      //錯誤結果處理
      loading.classList.remove("show");
    });
});

const genderInput = document.querySelector("#gender");
const genderOptions = document.querySelector("#gender-options");

genderInput.addEventListener("click", (e) => {
  if (!genderOptions.classList.contains("show")) {
    genderOptions.classList.add("show");
    return;
  }
  genderOptions.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (e.target.id === "gender") return;
  if (e.target.id === "gender-options") return;

  if (genderOptions.classList.contains("show"))
    genderOptions.classList.remove("show");
});

genderOptions.addEventListener("click", (e) => {
  // prevent press and drag
  if (e.target.innerText.includes("\n")) {
    genderOptions.classList.remove("show");
    return;
  }
  genderInput.value = e.target.innerText;
});

function checkInput(key, value) {
  const input = document.querySelector(`#${key}`);
  const error = document.querySelector(`#${key}~span.error`);
  if (value === "") {
    if (!input.classList.contains("error")) {
      input.classList.add("error");
      error.classList.add("show");
    }
  } else {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
      error.classList.remove("show");
    }
  }
}
