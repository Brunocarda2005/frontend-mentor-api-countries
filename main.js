// ===================== dark Ligth ============================

//vars 

const BTNdarkLight = document.querySelector('.app__header__top__dark-light');
const app = document.querySelector('body');

BTNdarkLight.addEventListener('click' , () => {
  
  app.classList.toggle('dark');
  
  
})














// ==================== menu filter =======================

// vars

const filterBTN = document.querySelector('.app__nav__filter');
const filter = document.querySelector('.app__nav__filter__region');
const filterRegion = document.querySelectorAll('#list');

// filter show

filterBTN.addEventListener('click' , () => {
  
  
  filter.classList.toggle('show');
  
  
})


filterRegion.forEach( (e) => {
  
  
  e.addEventListener('click' , () => {
    
    generatorCard(`https://restcountries.com/v3.1/region/${e.innerHTML}`);
    
  })
  
  
})






// =================== consumo de api ===========================


// vars 

const windowCard = document.querySelector('.app__main__cards');


// card generator

const generatorCard = async (url) => {
  
  windowCard.innerHTML = '';
  
  
  await fetch(url)
    .then((element) => element.json() )
    .then((data) => {
        
        
        data.forEach((e) => {
          
          windowCard.innerHTML += `
             <div class="app__main__cards__card" id="${e.name.common}">
               <img src="${e.flags.png}" alt="${e.flags.png}">
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
             </div>`
          
          touchCard('.app__main__cards__card');
          
          
        })
        
        
    })

}

generatorCard('https://restcountries.com/v3.1/all');










// ============================ search =================================



const searchInput = document.getElementById('search');
const autoComplete = document.querySelector('.show__auto_complete');
const titleComplete = document.querySelector('.show__auto_complete__myText');
let value = '';



searchInput.addEventListener('keyup' , () => {
  
  value = searchInput.value;
  titleComplete.innerHTML = value;
  
  if (value == '') {
    
    autoComplete.style = 'display: none;'
    
  }else {
    
    autoComplete.style = 'display: flex;'
    
  }
  
})



searchInput.addEventListener('change' , () => {
  
  generatorCard(`https://restcountries.com/v3.1/name/${value}`);
  autoComplete.style = 'display: none;'
  
})







// ============================ touch card ===============================



// function


export const touchCard = async (element) => {
  
  const vars = document.querySelectorAll(element);
  let array ;
  
  vars.forEach( (e) => {
    
    e.addEventListener('click' , () => {
      
      localStorage.setItem('varCountry' , e.id);
      window.location.href = 'https://brunocarda2005.github.io/frontend-mentor-api-countries-/more/more-Info.html';
      
    })
    
    
  })
  
}
