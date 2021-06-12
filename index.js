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
//Navigate to online courses page-------------------------------------------->
function online_courses() {
  window.location.href = "onlineCourses/online_courses.html";
}
//Navigate to contact us page
function contact_us() {
  window.location.href = "contact-us/contact_us.html";
}
//Navigate to home page
function home() {
  window.location.href = "index.html";
}
//Navigate to register page
function register() {
  window.location.href = "register/register.html";
}
//Navigate to logIn page
function logIn() {
  window.location.href = "logIn/student_login.html";
}
//Navigate to cart page
function cart() {
  window.location.href = "cart/cart.html";
}
//Navigate to logout
function logout() {
  let user = JSON.parse(localStorage.getItem("user"));
  user = [];
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "index.html";
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



///////////////////////////////////////////////////// Internship Object ////////////////////////////////////////////////

let intership_obj = [
  {
    post: "SAP Executive",
    company: "CYBERCITY BUILDERS & DEVELOPERS PVT LTD",
    type: "Full Time Internship",
    preference: "Management Information System",
    location: "Hyderabad",
    Stipend: "5000 - 10000 per month",
    time_left: "2 weeks left",
    image:
      "https://assets.interntheory.com/uploads/company/companylogos/7fdc91144fbd29674a052bb166a688336c24c91a/e16df33e34a0ae69d83cca7ccd8ad47dd59a619acom.jpg",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/management-information-system-internship-at-cybercity-builders-developers-pvt-ltd-tvrin",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20SAP%20Executive&amp;url=www.interntheory.com/internship/management-information-system-internship-at-cybercity-builders-developers-pvt-ltd-tvrin",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/management-information-system-internship-at-cybercity-builders-developers-pvt-ltd-tvrin",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/management-information-system-internship-at-cybercity-builders-developers-pvt-ltd-tvrin",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/management-information-system-internship-at-cybercity-builders-developers-pvt-ltd-tvrin",
    openings: "1",
    duration: "6 months",
    start: "22nd May 2021",
    deadline: "21st Jun 2021",
    intern_description: `
    Selected intern's day-to-day responsibilities include:

1. Creating requests & orders in SAP
2. Assigning of documents to the Budgeted BOQ
3. Following-up with the SCM, planning & QS departments
4. Monitoring Project activities w.r.t the daily transactions

5. Supporting End Users`,
    company_description: `Cybercity Builders and Developers Pvt Ltd is one of the most trusted realty brands in Hyderabad. All our projects be it Rainbow Vistas or Marina Skies, urban landmarks or lakeside high-rises, we have lived up our promise of improving your living and working spaces.
    `,
    perks: "Certificate of Internship, Letter of Recommendation",
    address: "KAVURI HILLS, MADHAPUR, hyderabad, 500033.",
  },
  {
    post: "Jr Sales Engineer",
    company: "Allwave AV",
    type: "Full Time Internship",
    preference: "Business Development",
    location: "Mumbai",
    Stipend: "8000 per month",
    image:
      "https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg",
    time_left: "1 week",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/business-development-internship-at-allwave-av-3sbfo",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Jr%20Sales%20Engineer&amp;url=www.interntheory.com/internship/business-development-internship-at-allwave-av-3sbfo",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/business-development-internship-at-allwave-av-3sbfo",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/business-development-internship-at-allwave-av-3sbfo",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/business-development-internship-at-allwave-av-3sbfo",
    openings: "14",
    duration: "6 months",
    start: "15th Jun 2021 - 1st Jul 2021",
    deadline: "14th Jun 2021",
    intern_description: `
    We are looking for apprentices to provide formal classroom and on-the-job training under experienced mentors which includes pay progression and certification showing he or she is fully proficient to do a job. In the vast majority of the cases these apprentices will transition directly into permanent employment after the 6 month program.
    `,
    company_description: `AllWave is an industry-leading AV solutions provider that delivers custom-built & innovative collaborative, digital media, broadcasting, and electronic security solutions to a clientele spread across PAN INDIA. Our team of technical experts works side-by-side with Industry Specialists, AV/IT consultants, Project management consultants, end-users and Space Designers to devise custom solutions that enhance your operations, improve collaboration, increase productivity, and drive ROI. 

We scale our technical products and services to any need and develop solutions for a large number of corporate enterprises, homeowners, auditoriums, educational institutions, and training centers. We also partner with the most innovative communication technology providers in the industry to give you access to the most advanced, secure, and effective AV solutions.
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Possibility of Pre Placement Offer",
    address:
      "16th Floor, D wing, Trade World, Kamala Mills Compound, Lower Parel,, mumbai, 400013.",
  },
  {
    post: "Business Development",
    company: "Intern Theory",
    type: "Work From Home Internship",
    preference: "Business Development",
    location: "Bangalore",
    Stipend: "1500 - 4000 per month",
    image:
      "https://assets.interntheory.com/uploads/company/logos/80cb6be36ae3e043c81fb0270d75f12f1ccfe008.jpg",
    time_left: "4 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/business-development-internship-at-intern-theory-pvh3q",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Business%20Development&amp;url=www.interntheory.com/internship/business-development-internship-at-intern-theory-pvh3q",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/business-development-internship-at-intern-theory-pvh3q",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/business-development-internship-at-intern-theory-pvh3q",
    whatsapp:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/business-development-internship-at-intern-theory-pvh3q",
    openings: "5",
    duration: "2 weeks",
    start: "10th Jun 2021",
    deadline: "10th Jul 2021",
    intern_description: `
    Tired with the routine work in an internship?
Want to make time for fun and work?

We present to you an opportunity that you can work upon while you're chilling at home in this lockdown.

1) Handling enquiries from students regarding our online courses

2) Converting students to enrol for our online courses.

3) Maintaining fruitful relationships with existing customers.

4) Planning and overseeing new marketing initiatives.

5) Strategizing and working closely with the manager
Perform a little bit of Marketing and Social Media Activity. Come on, now that's easy!

Apply while you can. See you Aboard ;)
    `,
    company_description: `
    We began as a quartet of 20-somethings, headed with one objective, to help our fellow mates land an internship. One year since, and we are a team of 12, with an extended family of thousands of students and companies using our services. Our fondest memory is that of the earliest calls we received from students who were ecstatic about landing an internship via our portal. Thats when we knew that what we began was actually serving a purpose. And we are not stopping any time soon!
    `,
    perks:
      "Certificate of Internship, Flexible Hours, Casual Attire, Incentives over and above fixed stipend.",
    address: "Work from Home",
  },
  {
    post: "SEO Interns SEARCH ENGINE OPTIMIZATION",
    company: "INCREMENTORS",
    type: "Full Time Internship",
    preference: "Advertising",
    location: "Delhi",
    Stipend: "6000 - 10000 per month",
    image:
      "https://assets.interntheory.com/uploads/company/logos/898cbc2aaa08121c2478d6b356f49fcd2b60e012.jpg",
    time_left: "4 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/advertising-internship-at-incrementors-zplqb",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20SEO%20Interns%20SEARCH%20ENGINE%20OPTIMIZATION%20&amp;url=www.interntheory.com/internship/advertising-internship-at-incrementors-zplqb",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/advertising-internship-at-incrementors-zplqb",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/advertising-internship-at-incrementors-zplqb",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/advertising-internship-at-incrementors-zplqb",
    openings: "8",
    duration: "6 months",
    start: "8th Jun 2021",
    deadline: "8th Jul 2021",
    intern_description: `
    This is a creative position for young and social-media savvy candidates who can:

Monitor company and brand social media channels.
Make marketing plans for the business
Create content for multiple social media pages like Facebook, Twitter, LinkedIn and Instagram
Understand the latest social media trends and use them while posting
Build relationships with social media influencers
Keep up-to-date with what competitors are doing
Create social media reports.
Fresher Can Apply
    `,
    company_description: `
    We are a Digital Media Marketing Agency which believe in providing Quality Solutions and Services efficiently.
    `,
    perks: "Certificate of Internship, Possibility of Pre Placement Offer",
    address: "Delhi",
  },
  {
    post: "Blog writer intern",
    company: "Oddy Labs",
    type: "Full Time Internship",
    preference: "Content Writing",
    location: "Hyderabad",
    Stipend: "4000 per month",
    image:
      "https://assets.interntheory.com/uploads/company/logos/76a0ec84f95f4b7a450d53b5953bdf17802f62ce.jpg",
    time_left: "4 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/content-writing-internship-at-oddy-labs-0gwn0",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Blog%20writer%20intern&amp;url=www.interntheory.com/internship/content-writing-internship-at-oddy-labs-0gwn0",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/content-writing-internship-at-oddy-labs-0gwn0",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/content-writing-internship-at-oddy-labs-0gwn0",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/content-writing-internship-at-oddy-labs-0gwn0",
    openings: "3",
    duration: "6 months",
    start: "8th Jun 2021",
    deadline: "8th Jul 2021",
    intern_description: `1. Generate new ideas for the posts for Social Media and other resources.
2. Writing, Editing, publishing as well as promoting the content after the research.
3. Promoting new posts through various emails, journals, advertisements, social media to attract new people who read.
4. Should have information about SEO (search engine optimization) Keywords.
5. Checking the responses daily where ever it is posted.
6. Make a database of the same for the number of reviews received on the topics searched, written, edited, and published daily.
7. Creating stronger and very creative content that engages the professionals reading the content.
8. Ability to work on the tasks and give the appropriate results within the specified time frame.
    `,
    company_description: `
    We at OddyLabs provide quality and grade improver assignment help in short deadlines. Our expert writers are working in this industry for years and have helped hundreds of international students in completing their assignments and projects in the stipulated deadlines.
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Possibility of Pre Placement Offer, Flexible Hours",
    address:
      "Oddy Labs, 4th Floor, Vasista Bhavan, GoStartX Co-working, opp. Syala Kitchen restaurant, near DLF Cyber City, Gachibowli, Hyderabad, Telangana 500032, hyderabad, 500032.",
  },
  {
    post: "Content Writer",
    company: "Natural Coders",
    type: "Work From Home Internship",
    preference: "Content Writing",
    location: "Chandigarh",
    Stipend: "None",
    image:
      "https://assets.interntheory.com/uploads/company/logos/8432b6792fde976dc17ebd7da1080275098b3773.jpg",
    time_left: "3 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Content%20Writer&amp;url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    openings: "5",
    duration: "1 months",
    start: "10th Jun 2021",
    deadline: "6th Jul 2021",
    intern_description: `
    INTERNSHIP TYPE: VIRTUAL / WORK FROM HOME

1. We will provide you certain topics and if you have any topics, then you can work on that topics.
2. Your author profile will be created over website where your all articles will be available.
3. You can take 3-5 days to write 1 single Article.
4. Content must be Plagiriasm Free and Unique. It must not be spin article.
    `,
    company_description: `
   Natural Coders is IT Firm which is established in 2018. Our expertise is backed by five years of made expertise in client satisfaction and world Delivery. Have helped numerous start-ups grow by mentoring, hand holding, and taking them through funding stages.

We also Provide Training in various field like Digital Marketing, Search Engine Optimisation and Web Development. We specially designed our courses according to Companies Requirement because In Natural Coders Training Provide by who already have more than 5 Years of Experience and deliver their best work in Specific Field. And Natural Coders simply believe in Practical work instead of Just Theory.
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Flexible Hours",
    address: "Chandigarh",
  },
  {
    post: "Graphic Designer",
    company: "Natural Coders",
    type: "Work From Home Internship",
    preference: "Graphic Designing",
    location: "Chandigarh",
    Stipend: "None",
    image:
      "https://assets.interntheory.com/uploads/company/logos/8432b6792fde976dc17ebd7da1080275098b3773.jpg",
    time_left: "3 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Content%20Writer&amp;url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/content-writing-internship-at-natural-coders-t2reo",
    openings: "5",
    duration: "1 months",
    start: "10th Jun 2021",
    deadline: "6th Jul 2021",
    intern_description: `
    INTERNSHIP TYPE: VIRTUAL / WORK FROM HOME

1. We will provide you certain topics and if you have any topics, then you can work on that topics.
2. Your author profile will be created over website where your all articles will be available.
3. You can take 3-5 days to write 1 single Article.
4. Content must be Plagiriasm Free and Unique. It must not be spin article.
    `,
    company_description: `
   Natural Coders is IT Firm which is established in 2018. Our expertise is backed by five years of made expertise in client satisfaction and world Delivery. Have helped numerous start-ups grow by mentoring, hand holding, and taking them through funding stages.

We also Provide Training in various field like Digital Marketing, Search Engine Optimisation and Web Development. We specially designed our courses according to Companies Requirement because In Natural Coders Training Provide by who already have more than 5 Years of Experience and deliver their best work in Specific Field. And Natural Coders simply believe in Practical work instead of Just Theory.
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Flexible Hours",
    address: "Chandigarh",
  },
  {
    post: "Graphic Designing for Social Media Marketing",
    company: "Cloud Clothing",
    type: "Work From Home Internship",
    preference: "Graphic Designing",
    location: "Kolkata",
    Stipend: "None",
    image:
      "https://assets.interntheory.com/uploads/company/logos/7eb18458b78fecdbb421b213580d8680c8988904.jpg",
    time_left: "3 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/graphic-designing-internship-at-cloud-clothing-aiaan",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Graphic%20Designing%20for%20Social%20Media%20Marketing&amp;url=www.interntheory.com/internship/graphic-designing-internship-at-cloud-clothing-aiaan",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/graphic-designing-internship-at-cloud-clothing-aiaan",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/graphic-designing-internship-at-cloud-clothing-aiaan",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/graphic-designing-internship-at-cloud-clothing-aiaan",
    openings: "3",
    duration: "1 months",
    start: "6th Jun 2021",
    deadline: "6th Jul 2021",
    intern_description: `
    Responsibilities:

1. Catalog designing.

2. Social media marketing material Designing.

3. Online survey regarding certain topics provided by us.

Compensation:

1. Certificate of appreciation.

2. Quality of work recognition and appreciation
    `,
    company_description: `
    CLOUD CLOTHING.co.in Let Us Introduce Ourselves Branding is reinforcing principles and facts by capturing the attention of the human mind through creativity. Actions and ideas formed out of the best of intentions often lack the ability to affect minds due to ineffective branding. We, at Cloud Clothing have decided to reinvent customization by providing tailored solutions to exponentially increase your accessibility. We, at Cloud Clothing, have decided to revolutionize branding 
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Flexible Hours",
    address: "Kolkata",
  },
  {
    post: "Sports Journalist",
    company: "Arsedevils",
    type: "Work From Home Internship",
    preference: "Content Writing",
    location: "Ahmedabad",
    Stipend: "1000 - 3000 per month",
    image:
      "https://assets.interntheory.com/uploads/company/logos/7b5955fb445f8e137cfbf7c7f98c1dd6c275d2eb.jpg",
    time_left: "3 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/content-writing-internship-at-arsedevils-spyww",
    twitter:
      "https://twitter.com/share?text=Apply%20for%20Sports%20Journalist&amp;url=www.interntheory.com/internship/content-writing-internship-at-arsedevils-spyww",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/content-writing-internship-at-arsedevils-spyww",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/content-writing-internship-at-arsedevils-spyww",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/content-writing-internship-at-arsedevils-spyww",
    openings: "10",
    duration: "2 months",
    start: "6th Jun 2021",
    deadline: "6th Jul 2021",
    intern_description: `
    About the Internship:

We are looking for passionate and high quality writers to join our growing team of skilled and dedicated writers to work along with us at Arsedevils.com Right now we are looking for writers in the following positions:

1. Match Previews and predicted line-ups

2. Tactical analysis and match reviews

3. Regular news writers
    `,
    company_description: `
    Latest Arsenal and Manchester United News, Transfer Updates, Match Day previews and reviews of EPL and Champions League. Blog by passionate supporters. We believe that passion is the key to success and what we do is for the love of the beautiful game. What we seek is seer dedication and focus and self-motivating people who are passionate about their work too.
    `,
    perks:
      "Certificate of Internship, Letter of Recommendation, Possibility of Pre Placement Offer",
    address: "Ahmedabad",
  },
  {
    post: "Science Curator",
    company: "GYANPRO Educational Innovation",
    type: "Part Time Internship",
    preference: "Teaching/Training",
    location: "Bangalore",
    Stipend: " 2000 - 3999 per month",
    image:
      "https://assets.interntheory.com/uploads/company/companylogos/c0a99ef6b2fb576f926ba05b2baaa4f3b4e5cb99/feea93c5bf663ff02366857053b1d8e8055ad11ccom.jpg",
    time_left: "3 weeks left",
    facebook:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/teaching-internship-at-gyanpro-educational-innovation-vzaur",
    twitter:
      "http://www.facebook.com/sharer.php?u=www.interntheory.com/internship/teaching-internship-at-gyanpro-educational-innovation-vzaur",
    google:
      "https://plus.google.com/share?url=www.interntheory.com/internship/teaching-internship-at-gyanpro-educational-innovation-vzaur",
    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship/teaching-internship-at-gyanpro-educational-innovation-vzaur",
    whatsapp:
      "https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship/teaching-internship-at-gyanpro-educational-innovation-vzaur",
    openings: "8",
    duration: "3 months",
    start: "2nd Jun 2021",
    deadline: "2nd Jul 2021",
    intern_description: `
    We are a STEAM (Science, Technology ,Engineering, Art and Math) based Organisation, where we research, promote and teach conceptual learning of Science. At GYANPRO, we believe that Science is the curious consciousness that drives one to re-analyse things that often comes across as routine. Hence we strive to renew and refresh the young minds with the art of Science by utilizing evidence-based instructional practices, connecting in and out-of-school learning, facilitating effective Science communication and mentoring students, we seek to kindle scientific temper by honing reasoning skills and logical thinking amongst children. GyanPro aims to create an experiential Science education program to make learning fun, inspiring and interactive for children. 

To know more about our services or work, please visit www.gyanpro.com
    `,
    company_description: `
    GYANPRO provides the missing practical half of the scientific education taught to children of age 05 to 14 years in schools. We believe in developing a well-rounded mind through a creative learning experience using various mediums such as laboratory projects, nature explorations, hands-on-activities, science expeditions and science workshops.
    `,
    perks: "Certificate of Internship, Flexible Hours",
    address: "Bangalore",
  },
];

localStorage.setItem("intership_obj", JSON.stringify(intership_obj));
