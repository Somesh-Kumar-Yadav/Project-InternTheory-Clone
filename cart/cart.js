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

// this event is to hide the  display the side menu on clicking outside of the side menu
document.getElementById("checkout_cart").onclick = function (e) {
  if (e.target != side_bar) {
    side_bar.style.display = "none";
    logo_btn.style.display = "inline-block";
    menu_btn.style.display = "inline-block";
    state = false;
  }
};
// this event is to hide and show the  display the side menu on clicking menu icon on left side
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

// to update cart
let opt_courses = document.getElementById("opt_courses");
let avail_courses;
avail_courses = localStorage.getItem("avail_courses");
if (avail_courses == null) {
  // This is the Object of courses
  avail_courses = [
    {
      title: "IT Stater Pack(4 Courses)",
      descp: "Learn the most demanded skills in the IT industry today Sig...",
      emi: "EMI Starting at ₹ 915/month",
      old_price: "32999",
      new_price: "15999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
      btn_option: "ADD TO CART",
    },
    {
      title: "Finance Starter Pack (3 Courses)",
      descp: "Learn the most demanded skills in the Finance industry today ...",
      emi: "EMI Starting at ₹ 687/month",
      old_price: "23999",
      new_price: "11999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/finthumbnail.jpg",
      btn_option: "ADD TO CART",
    },
    {
      title: "Digital Marketing Course",
      descp: "Learn the art of digital marketing. Sign up for this online ...",
      emi: "EMI Starting at ₹ 343/month",
      old_price: "11999",
      new_price: "5999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Stock Market Course",
      descp: "Learn how to trade and invest in stock markets. Enrol for th ...",
      emi: "EMI Starting at ₹ 343/month",
      old_price: "11999",
      new_price: "5999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/stock-market-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Data Analytics With R Programming Course",
      descp: "Learn data science online. Join this online data analytics c ...",
      emi: "EMI Starting at ₹ 343/month",
      old_price: "11999",
      new_price: "5999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Web Development Course",
      descp: "Learn the art of web design and web development. Join this o ...",
      emi: "EMI Starting at ₹ 299/month",
      old_price: "7999",
      new_price: "3999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/web-development-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Tally + GST Course",
      descp: "Sign up for this online tally and gst course and learn how t ...",
      emi: "EMI Starting at ₹ 229/month",
      old_price: "7999",
      new_price: "3999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/tally-gst-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Android App Development Using Kotlin Course",
      descp: "Learn the art of android app design and web development. Joi ...",
      emi: "EMI Starting at ₹ 229/month",
      old_price: "7999",
      new_price: "3999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "Advanced Excel Course",
      descp: "Master MS Excel. Take the online ms excel course and learn t ...",
      emi: "EMI Starting at ₹ 172/month",
      old_price: "5999",
      new_price: "2999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png",
      btn_option: "ADD TO CART",
    },
    {
      title: "R Programming Course",
      descp: "Learn r programming online. Sign up for this online r progra ...",
      emi: "EMI Starting at ₹ 172/month",
      old_price: "5999",
      new_price: "2999",
      img_source:
        "https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
      btn_option: "ADD TO CART",
    },
  ];
} else {
  avail_courses = JSON.parse(avail_courses);
}
let total_amount = 0;
for (var i = 0; i < avail_courses.length; i++) {
  if (avail_courses[i].btn_option == "CHECKOUT >>") {
    total_amount += Number(avail_courses[i].new_price);
    let opt_course = document.createElement("div");
    opt_course.setAttribute("class", "opt_courses_cart");
    opt_course.setAttribute("id", `cart_${i}`);
    opt_course.innerHTML = `
<div class="opt_courses_left">
<div id="cross" onclick="cancel(${i})">
<svg
class="cross"
focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                    >
                    <path fill="none" d="M0 0h24v24H0V0z" opacity=".87"></path>
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"
                      ></path>
                  </svg>
                </div>
                <div class="opt_courses_img">
                  <img
                  src=${avail_courses[i].img_source}
                  />
                  </div>
                <div class="opt_courses_title">
                <h3>${avail_courses[i].title}</h3>
                </div>
                </div>
              <div class="opt_courses_right">
                <p>₹ ${avail_courses[i].old_price}</p>
                <h2>₹ ${avail_courses[i].new_price}</h2>
                </div>
              `;
    opt_courses.append(opt_course);
  }
}
let amount = document.getElementById("amount");
let igst = document.getElementById("igst");
let cgst = document.getElementById("cgst");
let total_cont = document.getElementById("total_cont");
let checkout_btn = document.getElementById("check_btn");
let coupon = document.getElementById("coupon");
let go = document.getElementById("go");
let updated_price = document.getElementById("updated_price");
let promo_price = document.getElementById("promo_price");
let cart_empty = document.getElementById("cart_empty");
amount.innerHTML = `₹ ${total_amount}`;
igst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
cgst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
total_cont.innerHTML = `₹ ${Math.round(total_amount * 1.18)}`;
if (total != 0) {
  checkout_btn.innerHTML = "CHECKOUT";
  coupon.style.display = "block";
  go.style.display = "inline";
  cart_empty.style.display = "none";
} else {
  cart_empty.style.display = "block";
  coupon.style.display = "none";
  go.style.display = "none";
  checkout_btn.innerHTML = "ENROLL";
}
localStorage.setItem("total", total);
localStorage.setItem("avail_courses", JSON.stringify(avail_courses));
//This function is to remove items from the cart

function cancel(id) {
  let total = localStorage.getItem("total");
  promo_price.style.display = "none";
  let avail_courses = JSON.parse(localStorage.getItem("avail_courses"));
  avail_courses[id].btn_option = "ADD TO CART";
  let total_amount = 0;
  for (var i = 0; i < avail_courses.length; i++) {
    if (avail_courses[i].btn_option == "CHECKOUT >>") {
      total_amount += Number(avail_courses[i].new_price);
    }
  }
  let opt_course = document.getElementById(`cart_${id}`);
  opt_course.style.display = "none";
  let amount = document.getElementById("amount");
  let igst = document.getElementById("igst");
  let cgst = document.getElementById("cgst");
  let total_cont = document.getElementById("total_cont");
  total = Number(total) - 1;
  if (total != 0) {
    total_block.innerHTML = `${total}`;
    total_block.style.visibility = "visible";
    checkout_btn.innerHTML = "CHECKOUT";
    coupon.style.display = "block";
    go.style.display = "inline";
    cart_empty.style.display = "none";
  } else {
    total_block.style.visibility = "hidden";
    cart_empty.style.display = "block";
    coupon.style.display = "none";
    go.style.display = "none";
    checkout_btn.innerHTML = "ENROLL";
  }
  amount.innerHTML = `₹ ${total_amount}`;
  igst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
  cgst.innerHTML = `₹ ${Math.round(total_amount * 0.09)}`;
  total_cont.innerHTML = `₹ ${Math.round(total_amount * 1.18)}`;
  localStorage.setItem("total", total);
  localStorage.setItem("avail_courses", JSON.stringify(avail_courses));
}
//Move to online _course page
function online_course() {
  window.location.href = "../onlineCourses/online_courses.html";
}
//coupon promocode

function promocode() {
  let go_value = document.querySelector(".apply_coupon").value;
  if (
    go_value == "somesh05" ||
    go_value == "ramlala10" ||
    go_value == "naveen15" ||
    go_value == "masai30"
  ) {
    if (go_value == "somesh05") {
      let previous_price = document.getElementById("total_cont").innerText;
      previous_price = previous_price.slice(2, previous_price.length);
      previous_price = Number(previous_price);
      promo_price.style.display = "block";
      alert("You are eligibile for discount of 5%");
      updated_price.innerHTML = `₹ ${Math.round(previous_price * 0.95)}`;
    }
    if (go_value == "ramlala10") {
      let previous_price = document.getElementById("total_cont").innerText;
      previous_price = previous_price.slice(2, previous_price.length);
      previous_price = Number(previous_price);
      promo_price.style.display = "block";
      alert("You are eligibile for discount of 10%");
      updated_price.innerHTML = `₹ ${Math.round(previous_price * 0.9)}`;
    }
    if (go_value == "naveen15") {
      let previous_price = document.getElementById("total_cont").innerText;
      previous_price = previous_price.slice(2, previous_price.length);
      previous_price = Number(previous_price);
      promo_price.style.display = "block";
      alert("You are eligibile for discount of 15%");
      updated_price.innerHTML = `₹ ${Math.round(previous_price * 0.85)}`;
    }
    if (go_value == "masai30") {
      let previous_price = document.getElementById("total_cont").innerText;
      previous_price = previous_price.slice(2, previous_price.length);
      previous_price = Number(previous_price);
      promo_price.style.display = "block";
      alert("You are eligibile for discount of 30%");
      updated_price.innerHTML = `₹ ${Math.round(previous_price * 0.7)}`;
    }
  } else {
    alert("Invalid Promocode");
  }
}
function checkout_click() {
  if (document.getElementById("check_btn").innerText == "CHECKOUT") {
    // alert("Thank you for choosing us");
    let course_name = "";
    let avail_course = JSON.parse(localStorage.getItem("avail_courses"));
    for (let i = 0; i < avail_course.length; i++) {
      if (avail_course[i].btn_option == "CHECKOUT >>") {
        course_name += avail_course[i].title + " , ";
      }
    }
    course_name = course_name.slice(0, course_name.length - 2);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    let d = new Date();
    let hours = String(d.getHours()).padStart(2, "0");
    let min = String(d.getMinutes()).padStart(2, "0");
    d = hours + ":" + min;
    let register_data = JSON.parse(localStorage.getItem("register_data"));
    let user = JSON.parse(localStorage.getItem("user"));
    let trans_amount = amount.innerHTML;
    let trans_igst = igst.innerHTML;
    let trans_cgst = cgst.innerHTML;
    let trans_total_cont = total_cont.innerHTML;
    let discounted_price = updated_price.innerHTML;
    let total = localStorage.getItem("total");
    let transcation = {
      course_name: course_name,
      amount: trans_amount,
      igst: trans_igst,
      cgst: trans_cgst,
      total_cont: trans_total_cont,
      discounted_price: discounted_price,
      date: today,
      time: d,
    };
    user[0].transcations.push(transcation);
    for (let i = 0; i < register_data.length; i++) {
      if (
        register_data[i].fname == user[0].fname &&
        register_data[i].email == user[0].email &&
        register_data[i].lname == user[0].lname &&
        register_data[i].password == user[0].password
      ) {
        register_data[i].transcations.push(transcation);
        break;
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("register_data", JSON.stringify(register_data));
    let avail_courses = JSON.parse(localStorage.getItem("avail_courses"));
    total = 0;
    for (let i = 0; i < avail_courses.length; i++) {
      avail_courses[i].btn_option = "ADD TO CART";
    }
    localStorage.setItem("avail_courses", JSON.stringify(avail_courses));
    localStorage.setItem("total", total);
    window.location.href = "checkout_cart.html";
  } else {
    window.location.href = "../onlineCourses/online_courses.html";
  }
}
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
  window.location.href = "../register/register.html";
}
//Navigate to logIn page
function logIn() {
  window.location.href = "../logIn/student_login.html";
}
//Navigate to cart page
function cart() {
  window.location.href = "cart.html";
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
//Navigate to internship page
function intern_ship() {
  window.location.href = "../internship/internship.html";
}
//Navigate to logout
function logout() {
  let user = JSON.parse(localStorage.getItem("user"));
  user = [];
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../index.html";
}
//for login---------------------------------------------------------
user = localStorage.getItem("user");
if (user == null) {
  user = [];
} else {
  user = JSON.parse(user);
}
localStorage.setItem("user", JSON.stringify(user));
let when_login = document.getElementsByClassName("when_login");
let after_login = document.getElementsByClassName("after_login");
if (user.length != 0) {
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
let full_name = document.getElementById("full_name");
let mobile_no = document.getElementById("mobile_no");
let user_active = JSON.parse(localStorage.getItem("user"));
if (user_active.length != 0) {
  full_name.innerText = `${user_active[0].fname} ${user_active[0].lname}`;
  mobile_no.innerHTML = `${user_active[0].mobile}`;
}
// /profile photo
if (user.length != 0) {
  let profile_img = document.getElementsByClassName("profile_img");
  if (
    user[0].url !=
    "https://assets.interntheory.com/creative/default-images/girlProfile.jpg"
  ) {
    for (let i = 0; i < profile_img.length; i++) {
      let file_name = user[0].url;
      file_name = file_name.slice(12, file_name.length);
      profile_img[i].src = "../images/" + file_name;
    }
  }
}
