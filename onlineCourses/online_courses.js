let total_block = document.getElementById("total");
let total;
total = localStorage.getItem("total");
if (total == null) {
  total = 0;
}
let avail_courses;
avail_courses = localStorage.getItem("avail_courses");
if (avail_courses == null) {
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
let carts = document.getElementById("carts");
for (var i = 0; i < avail_courses.length; i++) {
  let cart = document.createElement("div");
  cart.setAttribute("class", "cart");
  cart.setAttribute("id", `${i}`);
  cart.innerHTML = `
            <div>
              <img
                style="height: 115px"
                src=${avail_courses[i].img_source}
                alt="image"
              />
            </div>
            <div class="padding">
              <div>
                <h4 class="color_black">${avail_courses[i].title}</h4>
                <p class="color_gray">
                 ${avail_courses[i].descp}
                </p>
              </div>
              <div class="border_bottom"></div>
              <div class="left_align">
                <h5 class="color_gray line_through">₹ ${avail_courses[i].old_price}</h5>
                <h3 class="color_black">₹ ${avail_courses[i].new_price}</h3>
              </div>
              <div>
                <a class="left_align color_yellow" href="#"
                  >${avail_courses[i].emi}
                  <span class="border_radius color_yellow">?</span>
                </a>
              </div>
            </div>
            <div class="left_align">
              <a class="color_green" href="#">KNOW MORE</a>
              <button class="button" id="button_${i}" onclick="checkOut(${i})">${avail_courses[i].btn_option}</button>
            </div>`;
  carts.append(cart);
}
function checkOut(id) {
  avail_courses = JSON.parse(localStorage.getItem("avail_courses"));
  let status = document.getElementById("button_" + id);
  if (status.innerText == "ADD TO CART") {
    status.innerText = "CHECKOUT >>";
    total = Number(total) + 1;
    avail_courses[id].btn_option = "CHECKOUT >>";
    localStorage.setItem("avail_courses", JSON.stringify(avail_courses));
    localStorage.setItem("total", total);
  } else {
    window.location.href = "../cart/cart.html";
  }
  if (total != 0) {
    total_block.innerHTML = `${total}`;
    total_block.style.visibility = "visible";
  } else {
    total_block.style.visibility = "hidden";
  }
}
if (total != 0) {
  total_block.innerHTML = `${total}`;
  total_block.style.visibility = "visible";
} else {
  total_block.style.visibility = "hidden";
}
localStorage.setItem("total", total);
localStorage.setItem("avail_courses", JSON.stringify(avail_courses));
// Move to cart Page
function cart_page() {
  window.location.href = "../cart/cart.html";
}
//Navigate to online courses page-------------------------------------------->
function online_courses() {
  window.location.href = "online_courses.html";
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
