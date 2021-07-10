/////////////////////////// MADE BY SOMESH /////////////////////////////////////////////////////////////////////

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
document.getElementById("register").onclick = function (e) {
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
//////////////////// MADE BY RAMLALA //////////////////////////////////////////////////////

function next(e) {
	e.preventDefault();
	let register_form = document.getElementById("register_form");
	let fname = register_form.fname.value;
	let lname = register_form.lname.value;
	let email = register_form.email.value;
	let password = register_form.password.value;
	let mobile = register_form.mobile.value;
	let city = register_form.city.value;
	let preference = register_form.preference.value;
	let how_find = register_form.find.value;
	let looking = register_form.looking.value;

	if (fname === "") {
		let f_name = document.getElementById("fname");
		// f_name.style.borderBottom = "1px solid red";

		return alert("Please Fill Required* Details");
	}

	if (lname === "") {
		return alert("Please Fill Required* Details");
	}
	if (email === "") {
		return alert("Please Fill Required* Details");
	}
	if (password === "") {
		return alert("Please Fill Required* Details");
	}
	if (mobile === "") {
		return alert("Please Fill Required* Details");
	}
	if (city === "") {
		return alert("Please Fill Required* Details");
	}
	if (preference === "") {
		return alert("Please Fill Required* Details");
	}
	if (how_find === "") {
		return alert("Please Fill Required* Details");
	}
	if (looking === "") {
		return alert("Please Fill Required* Details");
	}

	let register_obj = {
		fname,
		lname,
		email,
		password,
		mobile,
		city,
		preference,
		how_find,
		looking,
		transcations: [],
		internship: {},
		jobs: {},
		url: "https://assets.interntheory.com/creative/default-images/girlProfile.jpg",
	};

	let register_data;
	register_data = localStorage.getItem("register_data");

	if (register_data === null) {
		register_data = [];
	} else {
		register_data = JSON.parse(register_data);
	}
	let user;
	user = localStorage.getItem("user");
	if (user === null) {
		user = [];
	} else {
		user = JSON.parse(user);
	}
	user = [register_obj];
	localStorage.setItem("user", JSON.stringify(user));
	register_data.push(register_obj);
	localStorage.setItem("register_data", JSON.stringify(register_data));
	window.location.href = "step_2.html";
}

function showRemaining() {
	let full_name = document.getElementById("fname");

	full_name.addEventListener("focus", increase_by);

	let email_name = document.getElementById("email");
	email_name.addEventListener("focus", increase_by);

	let password_name = document.getElementById("password");
	password_name.addEventListener("focus", increase_by);

	let increase = 0;
	function increase_by() {
		increase++;
		if (increase == 3) {
			let disp = document.getElementById("hidden");
			disp.style.display = "block";
		}
	}
}
showRemaining();

function showSuggitions() {
	let cities = [
		"Mumbai",
		"Navi-Mumbai",
		"Banglore",
		"Haidrabaad",
		"Delhi",
		"Bhopal",
		"Jaipur",
		"Gudgav",
		"Ahemadabaad",
	];
	let preferences = [
		"Acturial Science",
		"Admin",
		"Animation",
		"Branding",
		"consulting",
		"Engineering",
	];
	let find_us = [
		"From A Friend",
		"Google Search",
		"Google Ads",
		"Social Media",
		"Yahoo Search",
		"Other",
	];
	let looking_for = ["Internships", "Jobs", "Boths"];
	autocomplete(document.getElementById("city"), cities);
	autocomplete(document.getElementById("preference"), preferences);
	autocomplete(document.getElementById("find"), find_us);
	autocomplete(document.getElementById("looking"), looking_for);

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
