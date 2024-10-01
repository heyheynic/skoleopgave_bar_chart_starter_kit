"use strict";

const list = document.querySelector("ul");
let statsArray = [];

window.setInterval(generateStat, 1000);


function generateStat() {
  let number = Math.floor(Math.random() * 100) + 1;
  const li = document.createElement("li");
  li.style.setProperty("--height", number);


  if (statsArray.length >= 20) {
    statsArray.shift();
    list.removeChild(list.firstElementChild);
  }

  statsArray.push(number);
  console.log(statsArray);

  list.appendChild(li);
}

// Start fx med at sætte en setInterval op der generer en ny søjle. Du skal finde en måde at holde styr på når der er flere søjler end 20, så skal du begynde at fjerne dem igen. Prøv at kigge i bunden af appendChild linket ovenfor og se om der er noget du kan bruge.

// firstElementChild  property’en returnerer et elements første child element.

// uppdateras varje sekund, setInterval
// håller en historik över senaste 20
// scrollar från höger till vänster
// Math.Random 0 100 + 1,
// Desa nummer ska in i ett array med 20 platser (myArray.length)

// Forestil dig en webside der viser det antal kunder der er i en kø lige nu

// Den opdateres hvert sekund og holder en historik over de sidste 20 værdier som et “animeret” søjlediagram hvor det nuværende antal kunder er vist i den søjle der er længst til højre og så “scroller” værdien/søjlen til venstre.

// Fake data

// Da du ikke har adgang til rigtig data må du simulere det ved at lave en funktion der kan generere et random nummer mellem 0 og 100 der så vil være antallet af kunder og bestemme din søjles højde.

// Du skal vedligeholde et array med 20 værdier i .

// Et arrays længde får du med myArray.length.

// Du får brug for setInteval.

// Der en zip fil med der indeholder hvad du skal bruge.

// Zip filen er sat op sådan at den generer en søjle til DOM’en med document.createElement/appendChild,  prøv at eksperimenter med at sætte --height til noget andet i javeScripten.

// Start fx med at sætte en setInterval op der generer en ny søjle. Du skal finde en måde at holde styr på når der er flere søjler end 20, så skal du begynde at fjerne dem igen. Prøv at kigge i bunden af appendChild linket ovenfor og se om der er noget du kan bruge.

// firstElementChild  property’en returnerer et elements første child element.

// eller

// Hvis du vil arbejde med DOM’en på en anden måde kan du udkommentere linje 3 til 5 i javaScripten og indkommentere li’erne i HTML’en og linje 12 i CSS’en så har du 20 søjler du kan arbejde med.

// Så kan du jo lave et array med 20 værdier og lave en funktion der viser disse 20 værdier til en start.

// Lav en setInterval der opdaterer array’et og få dem vist.

// Krav

// Antallet af kunder skal være en værdi mellem 0 og 100

// Der skal vises 20 søjler og den yderst til højre skal være den nyeste. Det kan godt være at diagrammet først skal fyldes før du når op på 20 søjler, det kommer an på hvordan du laver det.

// En ny måling/søjle skal tilføjes hvert sekund.
