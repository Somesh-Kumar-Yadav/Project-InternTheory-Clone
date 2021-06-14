let state = false;
let div_1 = false;
let div_2 = false;
let div_3 = false;
let count = 0;
let menu_btn = document.querySelector("#menu_btn");
let menu_btn_2 = document.querySelector("#menu_btn_2");
let side_bar = document.querySelector("#side_bar");
let logo_btn = document.querySelector("#logo_btn");
let div_1_1 = document.querySelector("#div_1_1");
let div_1_2 = document.querySelector("#div_1_2");
let drop_down_1 = document.querySelector("#drop_down_1");
let drop_up_1 = document.querySelector("#drop_up_1");
let drop_down_2 = document.querySelector("#drop_down_2");
let drop_up_2 = document.querySelector("#drop_up_2");
let drop_down_3 = document.querySelector("#drop_down_3");
let drop_up_3 = document.querySelector("#drop_up_3");
menu_btn.addEventListener("click", openMenu);
menu_btn_2.addEventListener("click", openMenu);
document.getElementById("register_step_2").onclick = function (e) {
  if (e.target != side_bar) {
    side_bar.style.display = "none";
    logo_btn.style.display = "inline-block";
    menu_btn.style.display = "inline-block";
    state = false;
  }
};
function openMenu() {
  state = !state;
  if (state) {
    side_bar.style.display = "inline-block";
    menu_btn.style.display = "none";
    logo_btn.style.display = "none";
  } else {
    side_bar.style.display = "none";
    logo_btn.style.display = "inline-block";
    menu_btn.style.display = "inline-block";
  }
}
function disappear(i) {
  if (i == 1) {
    div_1 = !div_1;
    if (div_1) {
      div_1_1.style.display = "flex";
      div_1_2.style.display = "flex";
      drop_down_1.style.display = "none";
      drop_up_1.style.display = "inline";
      count += 1;
    } else {
      count -= 1;
      drop_down_1.style.display = "inline";
      drop_up_1.style.display = "none";
      div_1_1.style.display = "none";
      div_1_2.style.display = "none";
    }
  }
  if (i == 2) {
    div_2 = !div_2;
    if (div_2) {
      count += 1;
      div_2_1.style.display = "flex";
      div_2_2.style.display = "flex";
      drop_down_2.style.display = "none";
      drop_up_2.style.display = "inline";
    } else {
      count -= 1;
      div_2_1.style.display = "none";
      div_2_2.style.display = "none";
      drop_down_2.style.display = "inline";
      drop_up_2.style.display = "none";
    }
  }
  if (i == 3) {
    div_3 = !div_3;
    if (div_3) {
      div_3_1.style.display = "flex";
      count += 1;
      div_3_2.style.display = "flex";
      drop_down_3.style.display = "none";
      drop_up_3.style.display = "inline";
    } else {
      count -= 1;
      div_3_1.style.display = "none";
      div_3_2.style.display = "none";
      drop_down_3.style.display = "inline";
      drop_up_3.style.display = "none";
    }
  }
  if (count < 2) {
    side_bar.style.overflow = "visible";
  } else {
    side_bar.style.overflow = "scroll";
  }
}

// for total courses in carts
let total_block = document.getElementById("total");
let total;
total = localStorage.getItem("total");
if (total == null) {
  total = 0;
}
if (total != 0) {
  total_block.innerHTML = `${total}`;
  total_block.style.visibility = "visible";
} else {
  total_block.style.visibility = "hidden";
}
localStorage.setItem("total", total);
//////////////////// MADE BY RAMLALA //////////////////////////////////////////////////////

function next_step_2(e) {
  e.preventDefault();
  let register_form_step_2 = document.getElementById("step_2_form");
  let education = register_form_step_2.education.value;
  let institute = register_form_step_2.institute.value;
  let degree = register_form_step_2.degree.value;
  let year = register_form_step_2.year.value;

  if (education === "") {
    return alert("Please Fill Required* Details");
  }
  if (institute === "") {
    return alert("Please Fill Required* Details");
  }
  if (degree === "") {
    return alert("Please Fill Required* Details");
  }
  if (year === "") {
    return alert("Please Fill Required* Details");
  }

  let register_obj_step_2 = {
    education,
    institute,
    degree,
    year,
  };

  let register_data_step_2;
  register_data_step_2 = localStorage.getItem("register_data_step_2");

  if (register_data_step_2 === null) {
    register_data_step_2 = [];
  } else {
    register_data_step_2 = JSON.parse(register_data_step_2);
  }

  register_data_step_2.push(register_obj_step_2);
  localStorage.setItem(
    "register_data_step_2",
    JSON.stringify(register_data_step_2)
  );
  let user = JSON.parse(localStorage.getItem("user"));
  let when_login = document.getElementsByClassName("when_login");
  let after_login = document.getElementsByClassName("after_login");
  if (user == []) {
    for (let i = 0; i < when_login.length; i++) {
      when_login[i].style.display = "flex";
    }
    for (let i = 0; i < after_login.length; i++) {
      after_login[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < after_login.length; i++) {
      after_login[i].style.display = "flex";
    }
    for (let i = 0; i < when_login.length; i++) {
      when_login[i].style.display = "none";
    }
  }
  window.location.href = "../index.html";
}

function showSuggitions() {
  let education = [
    "DOCTRATE",
    "",
    "POST GRADUATION",
    "GRADUATION",
    "DIPLOMA",
    "12TH EQUIVALENT",
    "10TH EQUIVALENT",
    "Advance Cerificate course",
    "Certificate Course",
  ];
  let institute = [
    "IIT",
    "NIT",
    "MNIT",
    "IIM",
    "STATE COLLEGE",
    "PRIVATE COLLEGE",
  ];
  let degree = ["BE", "BSC", "BCA", "", "BTECH", "Other"];
  let year = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fouth Year",
    "Fifth Year",
    "Already Completed",
  ];
  autocomplete(document.getElementById("education"), education);
  autocomplete(document.getElementById("institute"), institute);
  autocomplete(document.getElementById("degree"), degree);
  autocomplete(document.getElementById("year"), year);

  function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function (e) {
      var a,
        b,
        i,
        val = this.value;

      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;

      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      this.parentNode.appendChild(a);

      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;

            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });

    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;

        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      if (!x) return false;

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;

      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }
}
showSuggitions();
//Navigate to online courses page-------------------------------------------->
function online_courses() {
  window.location.href = "../onlineCourses/online_courses.html";
}
//Navigate to contact us page
function contact_us() {
  window.location.href = "../contact-us/contact_us.html";
}
//Navigate to home page
function home() {
  window.location.href = "../index.html";
}
//Navigate to register page
function register() {
  window.location.href = "register.html";
}
//Navigate to logIn page
function logIn() {
  window.location.href = "../logIn/student_login.html";
}
//Navigate to cart page
function cart() {
  window.location.href = "../cart/cart.html";
}
//Navigate to internship page
function intern_ship() {
  window.location.href = "../internship/internship.html";
}
//Navigate to jobs page
function jobs() {
  window.location.href = "../jobs/jobs.html";
}
//Navigate to dash_board page
function dash_board() {
  window.location.href = "../dashboard/profile.html";
}
//Navigate to transactions page
function transcations() {
  window.location.href = "../transcations/transcations.html";
}
//Navigate to logout
function logout() {
  let user = JSON.parse(localStorage.getItem("user"));
  user = [];
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../index.html";
}
