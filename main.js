// ===================== dark Ligth ============================

//vars

const BTNdarkLight = document.querySelector(".app__header__top__dark-light");
const app = document.querySelector("body");

BTNdarkLight.addEventListener("click", () => {
  app.classList.toggle("dark");
});

// ==================== menu filter =======================

// vars

const filterBTN = document.querySelector(".app__nav__filter");
const filter = document.querySelector(".app__nav__filter__region");
const filterRegion = document.querySelectorAll("#list");

// filter show

filterBTN.addEventListener("click", () => {
  filter.classList.toggle("show");
});

filterRegion.forEach((e) => {
  e.addEventListener("click", () => {
    generatorCard(`https://restcountries.com/v3.1/region/${e.innerHTML}`);
  });
});

// =================== consumo de api ===========================

// vars

const windowCard = document.querySelector(".app__main__cards");

// card generator

const generatorCard = async (url) => {
  windowCard.innerHTML = "";

  await fetch(url)
    .then((element) => element.json())
    .then((data) => {
      data.forEach((e) => {
        windowCard.innerHTML += `
             <div class="app__main__cards__card ${e.name.common}">
               <img src="${e.flags.png}" alt="${e.flags.png}" class="app__main__cards__card__img" >
               <input type="text" hidden value="${e.name.common}" class="app__main__cards__card__input">
               <div class="app__main__cards__card__details">
                 <div class="app__main__cards__card__details__d">
                 <h5 class="app__main__cards__card__details__title">${e.name.common}</h5>
                   <div class="app__main__cards__card__details__list">
                     <p><b>Population :</b>${e.population}</p>
                     <p><b>Region :</b>${e.region}</p>
                     <p><b>Capital :</b>${e.capital[0]}</p>
                   </div>
                 </div>
               </div>
             </div>`;

        let elementCard = document.querySelectorAll(".app__main__cards__card");
        elementCard.forEach((e) => {
          e.addEventListener("click", () => {
            touchCard(`.${e.classList[1]}`);
          });
        });
      });
    });
};

generatorCard("https://restcountries.com/v3.1/all");

// ============================ search =================================

const searchInput = document.getElementById("search");
const autoComplete = document.querySelector(".show__auto_complete");
const titleComplete = document.querySelector(".show__auto_complete__myText");
let value = "";

searchInput.addEventListener("keyup", () => {
  value = searchInput.value;
  titleComplete.innerHTML = value;

  if (value == "") {
    autoComplete.style = "display: none;";
  } else {
    autoComplete.style = "display: flex;";
  }
});

searchInput.addEventListener("change", () => {
  generatorCard(`https://restcountries.com/v3.1/name/${value}`);
  autoComplete.style = "display: none;";
});

// ============================ touch card ===============================

// function

const touchCard = async (element) => {
  const vars = document.querySelector(element);
  let inputNew = vars.children[1].value;
  console.log(vars.children[1].value);

  localStorage.setItem("varCountry", ``);
  localStorage.setItem("varCountry", `${inputNew}`);
  console.log(localStorage.getItem("varCountry"))

  window.location.href = "/frontend-mentor-api-countries/more/more-Info.html";
};
