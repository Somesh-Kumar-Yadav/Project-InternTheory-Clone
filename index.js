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
document.getElementById("container").onclick = function (e) {
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
//Navigate to online courses page
function online_courses() {
  window.location.href = "onlineCourses/online_courses.html";
}
//Navigate to contact us page
function contact_us() {
  window.location.href = "contact-us/contact_us.html";
}
//Navigate to home page
function home() {
  window.location.href = "contact-us/contact_us.html";
}
//////////////////////////Section -6 part/////////////////////
const slide = [
  {
    name: "Harshil Bhadra",
    image: "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
    position: "Intern at Porsche",
    content: `
        "If you are more than satisfied with
        particular product/firm who gives you more 
        than you expect then there’s no need to
        find a substitute. Its similar with Intern
        Theory, the best team who makes continuous
        efforts and always ready to help! Thanks
        for giving me the best start."
        `,
  },
  {
    name: "Amani Nagda",
    image: "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
    position: "Intern at Viacom18",
    content: `
        "I was on a look out for an internship to
        spend my summer productively and I
        stumbled upon Inter Theory. Their team was
        very kind and kept me updated. I applied
        for Viacom18 and got through. I thank
        Intern Theory team for giving me this
        opportunity."
        `,
  },
  {
    name: "Siddharth Viyyapu",
    image: "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
    position: "Intern at Gooseberry Homes",
    content: `
        "I created my profile because I had before
        Intern Theory, not come across a
        consultancy that would execute the
        responsibility of getting a result for
        your application irrespective of being
        failure or success the way they did.
        They've set the bars really high! Kudos
        team!"
        `,
  },
  {
    name: "Sshikha Bodwaani",
    image: "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
    position: "Sr. Exec. HR at BookMyShow",
    content: `
        "We have been using InternTheory for over a year now and are very
        happy with the quality of applications that we receive. Their team
        has been very helpful in screening applications for the various
        internship requirements we had. It has been a delight working with
        them."
        `,
  },
];
let slide_img = document.querySelector(".section_6_cart_sec_1 > img");
let slide_content = document.querySelector(".section_6_cart_sec_2 > p");
let slide_name = document.querySelector(".section_6_cart_sec_1 > h5");
let slide_position = document.querySelector(".section_6_cart_sec_1 > span");
let slide_img_2 = document.querySelector(".section_6_cart_sec_1_2 > img");
let slide_content_2 = document.querySelector(".section_6_cart_sec_2_2 > p");
let slide_name_2 = document.querySelector(".section_6_cart_sec_1_2 > h5");
let slide_position_2 = document.querySelector(".section_6_cart_sec_1_2 > span");
let sld = 0;
let sld_2 = 1;
setInterval(slide_show, 3000);
function slide_show() {
  if (sld == 4) {
    sld = 0;
  }
  if (sld_2 == 4) {
    sld_2 = 0;
  }
  slide_img.src = slide[sld].image;
  slide_name.innerHTML = `${slide[sld].name}`;
  slide_position.innerHTML = `${slide[sld].position}`;
  slide_content.innerHTML = `${slide[sld].content}`;
  slide_img_2.src = slide[sld_2].image;
  slide_name_2.innerHTML = `${slide[sld_2].name}`;
  slide_position_2.innerHTML = `${slide[sld_2].position}`;
  sld++;
  sld_2++;
}
function right() {
  sld += 1;
  sld_2 += 1;
  slide_show();
}
function left() {
  sld -= 1;
  sld_2 -= 1;
  slide_show();
}
