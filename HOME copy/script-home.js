const allgames$$ = document.querySelector(".all-videogames");

const localgetFetch = async () => {
  const response = await fetch(
    "http://localhost:5000/videogames/getallvideogames",
    { method: "GET" }
  );
  const result = await response.json();
  // console.log(result);
  for (const videogame of result) {
    const div$$ = document.createElement("div");
    div$$.classList="row videogame-bg-div";
    const divCol$$ = document.createElement("div");
    const divContain$$ = document.createElement("div");
    const title$$ = document.createElement("h2");
    const year$$ = document.createElement("p");
    const genre$$ = document.createElement("p");
    const country$$ = document.createElement("p");
    const image$$ = document.createElement("img");
    const detailButton$$ = document.createElement("button");


    image$$.setAttribute("src", videogame.image);
    image$$.classList.add("game-image");
    country$$.textContent = videogame.country;
    country$$.classList.add("info-games");
    genre$$.textContent = videogame.genre;
    genre$$.classList.add("info-games");
    year$$.textContent = videogame.year;
    year$$.classList.add("info-games");
    title$$.textContent = videogame.title;
    title$$.classList.add("info-games");
    title$$.classList.add("game-title");
    divCol$$.classList="videogame-bg col";
    divContain$$.classList="videogame-divContain";
    detailButton$$.classList="btn btn-primary detailBtn";
    detailButton$$.setAttribute("type","button");
    detailButton$$.textContent="Ver"
    divContain$$.appendChild(title$$);
    divContain$$.appendChild(genre$$);
    divContain$$.appendChild(year$$);
    divContain$$.appendChild(country$$);
    divContain$$.appendChild(image$$);
    divCol$$.appendChild(divContain$$);
    div$$.appendChild(detailButton$$);

    div$$.appendChild(divCol$$);

   
     const section$$ = document.querySelector(".videogames");
    section$$.appendChild(div$$);
    
    document.body.appendChild(section$$);
  }
  return result;
};

const paginationCreate = () =>{
  const sectionDiv$$ = document.querySelector(".videogames");

  const navPag$$ = document.createElement("nav");
  const ulPag$$ =  document.createElement("ul");
  const liPag$$ = document.createElement("li");
  const aPag$$ = document.createElement("a");
  const spanPag$$ = document.createElement("span");
  const spanPag2$$ = document.createElement("span");
  const liPag2$$ = document.createElement("li");  
  const aPag2$$ = document.createElement("a");
  const spanPag3$$ = document.createElement("span");
  const spanPag4$$ = document.createElement("span");

  navPag$$.setAttribute("aria-label", "Page navigation example");
  ulPag$$.classList.add("pagination")
  liPag$$.classList.add("page-item");
  aPag$$.classList.add("page-link");
  aPag$$.setAttribute("href","") 
  aPag$$.setAttribute("aria-label","Previous") 
  spanPag$$.setAttribute("aria-hidden","true")
  spanPag$$.textContent="<";
  spanPag2$$.classList.add("sr-only")
  spanPag2$$.textContent="Previous"


  liPag2$$.classList.add("page-item");
  aPag2$$.classList.add("page-link");
  aPag2$$.setAttribute("href","") 
  aPag2$$.setAttribute("aria-label","Next") 
  spanPag3$$.setAttribute("aria-hidden","true")
  spanPag3$$.textContent=">";
  spanPag4$$.classList.add("sr-only")
  spanPag4$$.textContent="Next"

  aPag$$.appendChild(spanPag$$);
  aPag$$.appendChild(spanPag2$$);
  liPag$$.appendChild(aPag$$);
  ulPag$$.appendChild(liPag$$);

  ulPag$$.innerHTML=`            <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>`

  
  aPag2$$.appendChild(spanPag3$$)
  aPag2$$.appendChild(spanPag4$$)
  liPag2$$.appendChild(aPag2$$)
  ulPag$$.appendChild(liPag2$$)

  navPag$$.appendChild(ulPag$$);
  sectionDiv$$.appendChild(navPag$$)


  console.log(sectionDiv$$)
}

const agarraInput$$ = (arrayGames) => {
    const input$$ = document.querySelector("input");
  
    input$$.addEventListener("input", () =>
      searchGames(input$$.value, arrayGames)
    );
  };

  
  const searchGames = (filtro, games) => {
    let gamesSearched = games.filter((game) =>
      game.title.toLowerCase().includes(filtro.toLowerCase())
    );
  
    pintaGames(gamesSearched);
  };

const pintaGames = (gamesSearched) => {
  const sectiondiv$$ = document.querySelector(".videogames")
  sectiondiv$$.innerHTML=""
  for (const videogame of gamesSearched) {
  
      const div$$ = document.createElement("div");
      div$$.classList="row videogame-bg-div";
      const divCol$$ = document.createElement("div");
      const divContain$$ = document.createElement("div");
      const title$$ = document.createElement("h2");
      const year$$ = document.createElement("p");
      const genre$$ = document.createElement("p");
      const country$$ = document.createElement("p");
      const image$$ = document.createElement("img");
      const detailButton$$ = document.createElement("button");
  
  
      image$$.setAttribute("src", videogame.image);
      image$$.classList.add("game-image");
      country$$.textContent = videogame.country;
      country$$.classList.add("info-games");
      genre$$.textContent = videogame.genre;
      genre$$.classList.add("info-games");
      year$$.textContent = videogame.year;
      year$$.classList.add("info-games");
      title$$.textContent = videogame.title;
      title$$.classList.add("info-games");
      title$$.classList.add("game-title");
      divCol$$.classList="videogame-bg col";
      divContain$$.classList="videogame-divContain";
      detailButton$$.classList="btn btn-primary detailBtn";
      detailButton$$.setAttribute("type","button");
      detailButton$$.textContent="Ver"
      divContain$$.appendChild(title$$);
      divContain$$.appendChild(genre$$);
      divContain$$.appendChild(year$$);
      divContain$$.appendChild(country$$);
      divContain$$.appendChild(image$$);
      divCol$$.appendChild(divContain$$);
      div$$.appendChild(detailButton$$);
  
      div$$.appendChild(divCol$$);
  
     
       const section$$ = document.querySelector(".videogames");
      section$$.appendChild(div$$);
      
      document.body.appendChild(section$$);
    
  }
  return
    
}

const logOut = () =>{
  const logOut$$ = document.querySelector("#logOut");
  logOut$$.addEventListener("click", ()=>{
    localStorage.removeItem("token");
    window.location.href = "../z_LOGIN/index-login.html"
  })
}
const init = async () => {
   const arrayGames = await localgetFetch();
    agarraInput$$(arrayGames);
    paginationCreate();
    logOut();
    // const arrayGames = await localgetFetch()
//   console.log(arrayGames);
//   drawInput$$(arrayGames);
//   searchGames();
};
init();
