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
document.getElementById("checkout").onclick = function (e) {
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
//Navigate to online courses page-------------------------------------------->
function online_courses() {
	window.location.href = "../onlineCourses/online_courses.html";
}
//Navigate to contact us page
function contact_us() {
	window.location.href = "../contact-us/contact_us.html";
}
//Navigate to jobs page
function jobs() {
	window.location.href = "../jobs/jobs.html";
}
//Navigate to transactions page
function transcations() {
	window.location.href = "../transcations/transcations.html";
}
//Navigate to home page
function home() {
	window.location.href = "../index.html";
}
//Navigate to dash_board page
function dash_board() {
	window.location.href = "../dashboard/profile.html";
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

////////////////////////////changes in content
let index_ = user[0].transcations.length - 1;

let course_name = document.getElementById("course_name");
let date = document.getElementById("date");
let time = document.getElementById("time");
let amount = document.getElementById("amount");
let igst = document.getElementById("igst");
let cgst = document.getElementById("cgst");
let total_ = document.getElementById("total_");
let dis_total = document.getElementById("dis_total");
course_name.innerHTML = `Courses Name: ${user[0].transcations[index_].course_name}`;
date.innerHTML = `Date: ${user[0].transcations[index_].date}`;
time.innerHTML = `Time: ${user[0].transcations[index_].time}`;
amount.innerHTML = `Amount: ${user[0].transcations[index_].amount}`;
igst.innerHTML = `IGST: ${user[0].transcations[index_].igst}`;
cgst.innerHTML = `CGST: ${user[0].transcations[index_].cgst}`;
total_.innerHTML = `Total: ${user[0].transcations[index_].total_cont}`;
if (user[0].transcations[index_].discounted_price != "") {
	dis_total.innerHTML = `Discounted Total: ${user[0].transcations[index_].discounted_price}`;
} else {
	dis_total.innerHTML = `Discounted Total: ${user[0].transcations[index_].total_cont}`;
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
