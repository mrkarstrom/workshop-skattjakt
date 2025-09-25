// Hämta alla skatter (element med klassen .treasure)
const treasures = document.querySelectorAll(".treasure");

// Hämta elementen för räknare och timer
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

let foundCount = 0;   // hur många skatter som hittats
let time = 0;         // tid i sekunder
let timer;            // referens till setInterval

// Starta timern direkt när sidan laddas
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

// Lägg till klick-händelse på alla skatter
treasures.forEach(treasure => {
  treasure.addEventListener("click", () => {
    // Kolla så inte samma skatt räkna två gånger, dvs lägg till klasen found
    if (!treasure.classList.contains("found")) {
      treasure.classList.add("found");   // Markera skatten som hittad
      foundCount++;
      foundCountEl.textContent = foundCount;  // Uppdatera räknaren
      alert("Grattis! Du hittade en skatt! 🎉");

      // Ändra stil på skatten (exempel: färgändring) - var kreativa i gruppen med denna del!
      treasure.style.color = "red";

      // Om alla 10 skatter är hittade
      if (foundCount === 10) {
        clearInterval(timer); // stoppa timern
        alert("Du har hittat alla skatter på " + time + " sekunder!");
      }
    }
  });
});
