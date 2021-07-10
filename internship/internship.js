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
document.getElementById("internship").onclick = function (e) {
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

icons_count = [0];
function show_icons(id) {
	let icons = document.getElementById(id);
	let index = Number(id);
	if (icons_count[index] % 2 == 0) {
		icons.style.display = "flex";
	} else {
		icons.style.display = "none";
	}
	icons_count[index]++;
}

let intership_obj = JSON.parse(localStorage.getItem("internship_obj"));

for (let i = 0; i < intership_obj.length; i++) {
	icons_count.push(0);
}
///intialising the search
let search_intern = localStorage.getItem("search_intern");

search_intern = JSON.parse(search_intern);

// / search
let search_cities_ = document.getElementById("search_cities");
let search_types_ = document.getElementById("search_types");
let search_preferences_ = document.getElementById("search_preference");
let search_post_ = document.getElementById("search_post");
let search_btn_ = document.getElementById("search_btn_");
search_cities_.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addSearch();
	}
});
search_btn_.addEventListener("click", function () {
	let serh = JSON.parse(localStorage.getItem("search_intern"));
	serh[0].post = search_post_.value;
	serh[0].cities = "";
	serh[0].type = "";
	serh[0].preference = "";
	localStorage.setItem("search_intern", JSON.stringify(serh));
	show_content();
});
search_types_.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addSearch();
	}
});
search_preferences_.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addSearch();
	}
});
let content_div = document.getElementById("intern_add");
function show_content() {
	let searh = JSON.parse(localStorage.getItem("search_intern"));
	let city = searh[0].cities.toLowerCase();
	let type = searh[0].type.toLowerCase();
	let per = searh[0].preference.toLowerCase();
	let pos = searh[0].post.toLowerCase();
	content_div.innerHTML = "";
	for (let i = 0; i < intership_obj.length; i++) {
		let city_ = intership_obj[i].location.toLowerCase();
		let type_ = intership_obj[i].type.toLowerCase();
		let per_ = intership_obj[i].preference.toLowerCase();
		let pos_ = intership_obj[i].post.toLowerCase();
		if (
			city_.includes(city) &&
			type_.includes(type) &&
			per_.includes(per) &&
			pos_.includes(pos)
		) {
			let create_cart = document.createElement("div");
			create_cart.setAttribute("class", "internship_content");
			create_cart.innerHTML = `
          <div class="internship_content_left">
          <div class="internship_content_img_div">
              <img
                src= "${intership_obj[i].image}"
                alt="images"
              />
              </div>
            <div class="internship_content_middle">
              <p class="header">${intership_obj[i].post}</p>
              <p>${intership_obj[i].company} </p>
              <p class="color_gray">${intership_obj[i].type}</p>
              <p class="color_gray">${intership_obj[i].preference}</p>
              <p class="color_gray">${intership_obj[i].location}</p>
              <h3 class="color_g">${intership_obj[i].Stipend}</h3>
              </div>
          </div>
          <div class="internship_content_right">
          <div>
              <p>${intership_obj[i].time_left}</p>
              </div>
            <div onclick="show_icons(${i + 1})">
            <img
                class="share_icon_img"
                class="onclick_show"
                src="https://cdn4.iconfinder.com/data/icons/sports-technology-and-people/1000/2-35-512.png"
                alt="Share Image"
              />
              </div>
            <div class="icons" id="${i + 1}">
              <div>
              <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].facebook}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                      material-icons
                        jss244
                        jss1392
                        fab
                        fa-facebook-square
                      "
                      aria-hidden="true"
                      ></span></span
                      ><span class="jss237"></span
                      ></a>
                      </div>
                      <div>
                      <a
                      class="jss154 jss148 jss1391"
                      tabindex="0"
                      role="button"
                      href="${intership_obj[i].twitter}"
                      target="_blank"
                      ><span class="jss153"
                      ><span
                      class="
                      material-icons
                      jss244
                      jss245
                      jss1393
                      fab
                      fa-twitter-square
                      "
                      aria-hidden="true"
                    ></span></span
                  ><span class="jss237"></span
                ></a>
                </div>
              <div>
                <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].google}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                        material-icons
                        jss244
                        jss246
                        jss1394
                        fab
                        fa-google-plus-square
                      "
                      aria-hidden="true"
                    ></span></span
                  ><span class="jss237"></span
                ></a>
                </div>
              <div>
                <a
                class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].linkedin}"
                  target="_blank"
                  ><span class="jss153"
                  ><span
                      class="
                        material-icons
                        jss244
                        jss246
                        jss1396
                        fab
                        fa-linkedin
                      "
                      aria-hidden="true"
                      ></span></span
                      ><span class="jss237"></span
                ></a>
              </div>
              <div>
                <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].whatsapp}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                        material-icons
                        jss244
                        jss247
                        jss1395
                        fab
                        fa-whatsapp-square
                      "
                      aria-hidden="true"
                    ></span></span
                    ><span class="jss237"></span
                ></a>
                </div>
            </div>
            <div onclick="apply_page(${i})">
            <p
                class="upgrade_skill"
                >VIEW AND APPLY
              </p>
            </div>
            </div>
        `;
			content_div.append(create_cart);
		}
	}
}
show_content();

function go_to_online_course() {
	window.location.href = "../onlineCourses/online_courses.html";
}
//for login---------------------------------------------------------
user = localStorage.getItem("user");
if (user == null) {
	user = [];
} else {
	user = JSON.parse(user);
}
// localStorage.setItem("user", JSON.stringify(user));
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
	window.location.href = "../cart/cart.html";
}
//Navigate to internship page
function intern_ship() {
	window.location.href = "internship.html";
}
//Navigate to jobs page
function jobs() {
	window.location.href = "../jobs/jobs.html";
}
//Navigate to transactions page
function transcations() {
	window.location.href = "../transcations/transcations.html";
}
//Navigate to dash_board page
function dash_board() {
	window.location.href = "../dashboard/profile.html";
}
//Navigate to logout
function logout() {
	let user = JSON.parse(localStorage.getItem("user"));
	user = [];
	localStorage.setItem("user", JSON.stringify(user));
	window.location.href = "../index.html";
}
let search_form = document.getElementById("search_form");
let cities = search_form.search_cities.value;

function showSuggitions() {
	let cities = [
		"Ahmedabad",
		"Delhi",
		"Bangalore",
		"Pune",
		"Gurugram",
		"Jalandhar",
		"Nagpur",
		"Aurangabaad",
		"Indore",
		"Bhopal",
		"Agra",
		"Hyderabad",
		"Mumbai",
		"Valsad",
		"New Delhi",
		"Jaipur",
		"Kota",
		"Faridabaad",
		"Jalgaav",
		"Chandigarh",
		"Kolkata",
	];
	let types = ["Full Time", "Part Time", "Work From Home"];
	let preferance = [
		"Advertising",
		"Branding",
		"Content Writing",
		"Digital Marketing",
		"Journalism",
		"Logistics",
		"Marketings",
		"Operations",
		"Others",
		"Photography",
		"Sales",
		"Social Media",
		"Software Development",
	];
	autocomplete(document.getElementById("search_cities"), cities);
	autocomplete(document.getElementById("search_types"), types);
	autocomplete(document.getElementById("search_preference"), preferance);
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

						set_items_localstorage(inp.value);
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

function refresh() {
	localStorage.removeItem("search_items");
}

function set_items_localstorage(set) {
	let obj = {
		item: set,
	};
	let arr;

	arr = localStorage.getItem("search_items");
	if (arr === null) {
		arr = [];
	} else {
		arr = JSON.parse(arr);
	}
	arr.push(obj);
	localStorage.setItem("search_items", JSON.stringify(arr));
}
// For cities

var c_count = 0;
var t_count = 0;
var p_count = 0;
function show_cities_items() {
	let abc = document.getElementById("cities");
	if (c_count % 2 == 0) {
		abc.style.display = "block";
	} else {
		abc.style.display = "none";
	}
	c_count++;
}

function show_none_cities() {
	let abc = document.getElementById("cities");
	abc.style.display = "none";
}

// For Types

function show_types_items() {
	let abc = document.getElementById("types");
	if (t_count % 2 == 0) {
		abc.style.display = "block";
	} else {
		abc.style.display = "none";
	}

	t_count++;
}

function show_types_none() {
	let abc = document.getElementById("types");
	abc.style.display = "none";
}

//For  Preference

function show_p_items() {
	let abc = document.getElementById("preference");
	if (p_count % 2 == 0) {
		abc.style.display = "block";
		abc.style.zIndex = -1;
	} else {
		abc.style.display = "none";
	}

	p_count++;
}

function show_p_none() {
	let abc = document.getElementById("preference");
	abc.style.display = "none";
}
///apply page function
/////////apply page json

function apply_page(id) {
	let apply_page = localStorage.getItem("view_apply");
	if (apply_page == null) {
		apply_page = id;
	} else {
		apply_page = id;
	}

	localStorage.setItem("view_apply", apply_page);
	window.location.href = "management.html";
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

function addSearch() {
	search_intern[0].cities = search_cities_.value;
	search_intern[0].type = search_types_.value;
	search_intern[0].preference = search_preferences_.value;
	search_intern[0].post = "";

	let city = search_intern[0].cities.toLowerCase();
	let type = search_intern[0].type.toLowerCase();
	let per = search_intern[0].preference.toLowerCase();

	content_div.innerHTML = "";
	for (let i = 0; i < intership_obj.length; i++) {
		let city_ = intership_obj[i].location.toLowerCase();
		let type_ = intership_obj[i].type.toLowerCase();
		let per_ = intership_obj[i].preference.toLowerCase();

		if (city_.includes(city) && type_.includes(type) && per_.includes(per)) {
			let create_cart = document.createElement("div");
			create_cart.setAttribute("class", "internship_content");
			create_cart.innerHTML = `
          <div class="internship_content_left">
          <div class="internship_content_img_div">
              <img
                src= "${intership_obj[i].image}"
                alt="images"
              />
              </div>
            <div class="internship_content_middle">
              <p class="header">${intership_obj[i].post}</p>
              <p>${intership_obj[i].company} </p>
              <p class="color_gray">${intership_obj[i].type}</p>
              <p class="color_gray">${intership_obj[i].preference}</p>
              <p class="color_gray">${intership_obj[i].location}</p>
              <h3 class="color_g">${intership_obj[i].Stipend}</h3>
              </div>
          </div>
          <div class="internship_content_right">
          <div>
              <p>${intership_obj[i].time_left}</p>
              </div>
            <div onclick="show_icons(${i + 1})">
            <img
                class="share_icon_img"
                class="onclick_show"
                src="https://cdn4.iconfinder.com/data/icons/sports-technology-and-people/1000/2-35-512.png"
                alt="Share Image"
              />
              </div>
            <div class="icons" id="${i + 1}">
              <div>
              <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].facebook}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                      material-icons
                        jss244
                        jss1392
                        fab
                        fa-facebook-square
                      "
                      aria-hidden="true"
                      ></span></span
                      ><span class="jss237"></span
                      ></a>
                      </div>
                      <div>
                      <a
                      class="jss154 jss148 jss1391"
                      tabindex="0"
                      role="button"
                      href="${intership_obj[i].twitter}"
                      target="_blank"
                      ><span class="jss153"
                      ><span
                      class="
                      material-icons
                      jss244
                      jss245
                      jss1393
                      fab
                      fa-twitter-square
                      "
                      aria-hidden="true"
                    ></span></span
                  ><span class="jss237"></span
                ></a>
                </div>
              <div>
                <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].google}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                        material-icons
                        jss244
                        jss246
                        jss1394
                        fab
                        fa-google-plus-square
                      "
                      aria-hidden="true"
                    ></span></span
                  ><span class="jss237"></span
                ></a>
                </div>
              <div>
                <a
                class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].linkedin}"
                  target="_blank"
                  ><span class="jss153"
                  ><span
                      class="
                        material-icons
                        jss244
                        jss246
                        jss1396
                        fab
                        fa-linkedin
                      "
                      aria-hidden="true"
                      ></span></span
                      ><span class="jss237"></span
                ></a>
              </div>
              <div>
                <a
                  class="jss154 jss148 jss1391"
                  tabindex="0"
                  role="button"
                  href="${intership_obj[i].whatsapp}"
                  target="_blank"
                  ><span class="jss153"
                    ><span
                      class="
                        material-icons
                        jss244
                        jss247
                        jss1395
                        fab
                        fa-whatsapp-square
                      "
                      aria-hidden="true"
                    ></span></span
                    ><span class="jss237"></span
                ></a>
                </div>
            </div>
            <div onclick="apply_page(${i})">
            <p
                class="upgrade_skill"
                >VIEW AND APPLY
              </p>
            </div>
            </div>
        `;
			content_div.append(create_cart);
		}
	}
	localStorage.setItem("search_intern", JSON.stringify(search_intern));
}
