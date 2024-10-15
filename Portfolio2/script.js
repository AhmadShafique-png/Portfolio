const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const title1 = document.querySelector(".title1");
const description1 = document.querySelector(".description_1");

const title2 = document.querySelector(".title2");
const description2 = document.querySelector(".description_2");

const title3 = document.querySelector(".title3");
const description3 = document.querySelector(".description_3");

const title4 = document.querySelector(".title4");
const description4 = document.querySelector(".description_4");

const contact1 = document.querySelector(".contactinfo_1");
const contact2 = document.querySelector(".contactinfo_2");

const project1 = document.querySelector(".Projectlink1");
const project2 = document.querySelector(".Projectlink2");
const project3 = document.querySelector(".Projectlink3");
const project4 = document.querySelector(".Projectlink4");

// Function to hide all titles, descriptions, and project links (contacts always shown)
function hideAllTitlesAndDescriptions() {
    title1.classList.remove("show-title");
    description1.classList.remove("show-title");
    project1.classList.remove("show-title");

    title2.classList.remove("show-title");
    description2.classList.remove("show-title");
    project2.classList.remove("show-title");

    title3.classList.remove("show-title");
    description3.classList.remove("show-title");
    project3.classList.remove("show-title");

    title4.classList.remove("show-title");
    description4.classList.remove("show-title");
    project4.classList.remove("show-title");

    // Hide contact info if necessary (optional)
    contact1.classList.remove("show-title");
    contact2.classList.remove("show-title");
}

// Function to show contact info (called on each card click)
function showContactInfo() {
    contact1.classList.add("show-title");
    contact2.classList.add("show-title");
}

// Click events for each card
card1.onclick = function() {
    hideAllTitlesAndDescriptions(); // Hide all before showing the selected one
    title1.classList.toggle("show-title");
    description1.classList.toggle("show-title");
    project1.classList.toggle("show-title"); // Show project link 1
    showContactInfo(); // Show contact info 1 and 2 for every card
};

card2.onclick = function() {
    hideAllTitlesAndDescriptions(); // Hide all before showing the selected one
    title2.classList.toggle("show-title");
    description2.classList.toggle("show-title");
    project2.classList.toggle("show-title"); // Show project link 2
    showContactInfo(); // Show contact info 1 and 2 for every card
};

card3.onclick = function() {
    hideAllTitlesAndDescriptions(); // Hide all before showing the selected one
    title3.classList.toggle("show-title");
    description3.classList.toggle("show-title");
    project3.classList.toggle("show-title"); // Show project link 3
    showContactInfo(); // Show contact info 1 and 2 for every card
};

card4.onclick = function() {
    hideAllTitlesAndDescriptions(); // Hide all before showing the selected one
    title4.classList.toggle("show-title");
    description4.classList.toggle("show-title");
    project4.classList.toggle("show-title"); // Show project link 4
    showContactInfo(); // Show contact info 1 and 2 for every card
};
