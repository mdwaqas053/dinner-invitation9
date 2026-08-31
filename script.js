
// Get pages

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");


// Buttons

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


// Variables

let selectedRestaurant = "";
let selectedTime = "";


// YES button

yesBtn.addEventListener("click", function () {

    page1.classList.add("hidden");

    page2.classList.remove("hidden");

});


// NO button runs away

noBtn.addEventListener("mouseover", function () {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;

    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;

    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

});


// Restaurant selection

const restaurants = document.querySelectorAll(".restaurant");


restaurants.forEach(function (restaurant) {

    restaurant.addEventListener("click", function () {

        restaurants.forEach(function (item) {

            item.classList.remove("selected");

        });


        restaurant.classList.add("selected");


        selectedRestaurant = restaurant.dataset.name;

    });

});


// Restaurant Next button

document.getElementById("restaurantNext").addEventListener("click", function () {

    if (selectedRestaurant === "") {

        alert("Please choose a restaurant ❤️");

        return;

    }


    page2.classList.add("hidden");

    page3.classList.remove("hidden");

});


// Time selection

const timeButtons = document.querySelectorAll(".timeBtn");


timeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        timeButtons.forEach(function (item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");

        selectedTime = button.innerText;

    });

});


// Confirm button

document.getElementById("confirmBtn").addEventListener("click", function () {

    const selectedDate = document.getElementById("dateInput").value;


    if (selectedDate === "") {

        alert("Please select a date 📅");

        return;

    }


    if (selectedTime === "") {

        alert("Please select a time ⏰");

        return;

    }


    // Show final details

    document.getElementById("finalRestaurant").innerText =
        selectedRestaurant;


    document.getElementById("finalDate").innerText =
        selectedDate;


    document.getElementById("finalTime").innerText =
        selectedTime;


    page3.classList.add("hidden");

    page4.classList.remove("hidden");

});