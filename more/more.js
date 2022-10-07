// ===================== dark Ligth ============================

//vars 

const BTNdarkLight = document.querySelector('.app__header__top__dark-light');
const app = document.querySelector('body');

BTNdarkLight.addEventListener('click' , () => {
  
  app.classList.toggle('dark');
  
  
})




// ============================== get item =================================





let InfoID = localStorage.getItem('varCountry');



// =================== consumo de api ===========================


// vars 

const windowCard = document.querySelector('#content');


// card generator

const generatorCard = async (url) => {
  
  // windowCard.innerHTML = '';
  
  await fetch(url)
    .then((element) => element.json() )
    .then((data) => {
        
        
        data.forEach((e) => {
          
          
          windowCard.innerHTML += `
              <div id="more">
                <div class="more__info__img">
                  <img src="${e.flags.png}" alt="${e.flags.png}">
                </div>
                <div class="more__info__data">
                  <h3 class="more__info__title">${e.name.common}</h3>
                  <div id="flex-aside">
                    <aside class="more__info__aside-1">
                      <p class="more__info__aside__p aside-1"><b>Native name :</b> ${nameNative(e)}</p>
                      <p class="more__info__aside__p aside-1"><b>Population :</b> ${e.population}</p>
                      <p class="more__info__aside__p aside-1"><b>Region :</b> ${e.region}</p>
                    </aside> 
                    <aside class = "more__info__aside-2" >
                      <p class="more__info__aside__p aside-2"><b>Sub Region :</b> ${e.subregion}</p>
                      <p class="more__info__aside__p aside-2"><b>Capital :</b> ${e.capital[0]}
                      <p class="more__info__aside__p aside-2"><b>Top Level Domain : </b> ${e.tld[0]}</p> 
                    </aside>                  
                  </div>
                  <div class="more__info__country">
                    ${border(e.borders)}
                  </div>
                </div>
              </div>
             `;
              
              
          
        })
        
        
    })

}




function border(e) {
  
  let content = '';
  let contentAll = '';
  
  if (e) {
    
    let i = 0;
    
    
    e.forEach(() => {
      
      content += `
          <div class="more__info__country__limitrofe-div">
              <h4>${e[i]}</h4>
           </div>`;
      
      i++;
      
    })
    
    
    contentAll = `
      <h3>Border Country :</h3> 
      <div class = "more__info__country__limitrofe">
        ${content}
      </div>`
    
    
    
  }else {
    
    content = '';
    contentAll = '';
    
  }
  
  
  
  return contentAll
  
}



function nameNative(e) {
  
  let nameNative = '';
  
  if (e.altSpellings[3]) {
    
    nameNative = e.altSpellings[3];
    
  }else if(e.altSpellings[2]){
    
    nameNative = e.altSpellings[2];
    
  }else {
    
    nameNative = e.name.common
    
  }
  
  return nameNative;
  
  
}








generatorCard(`https://restcountries.com/v3.1/name/${InfoID}`);
