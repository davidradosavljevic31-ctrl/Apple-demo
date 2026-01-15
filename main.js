const iphones = [
    ["iPhone", "2007"],
    ["iPhone 3G / 3GS", "2008–2009"],
    ["iPhone 4 / 4s", "2010–2011"],
    ["iPhone 5 / 5s / 5c", "2012–2013"],
    ["iPhone 6 / 6s", "2014–2015"],
    ["iPhone 7 / 8", "2016–2017"],
    ["iPhone X", "2017"],
    ["iPhone XR / XS", "2018"],
    ["iPhone 11", "2019"],
    ["iPhone 12", "2020"],
    ["iPhone 13", "2021"],
    ["iPhone 14", "2022"],
    ["iPhone 15", "2023"]
];

const demo = document.getElementById("demo");

iphones.forEach((phone, i) => {
    const div = document.createElement("div");
    div.className = "slide" + (i === 0 ? " active" : "");
    div.innerHTML = `<h1>${phone[0]}</h1><p>${phone[1]}</p>`;
    demo.appendChild(div);
});

let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);
