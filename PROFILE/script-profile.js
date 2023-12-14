// const localgetFetch = async () => {
//   const response = await fetch(
//     "http://localhost:5000/user/profile/652c1939210ac57de18eddae",
//     {
//       method: "GET",
//     }
//   );
//   const result = await response.json();

//   const profilebox$$ = document.querySelector(".profile-bg");
//   const h2$$ = document.createElement("h2");
//   h2$$.textContent = `${result.age}`;
//   profilebox$$.appendChild(h2$$);

//   console.log(result);
//   return;
// };

// const init = async () => {
//   localgetFetch();
// };
// init();

const localgetFetch = async () => {
  const token = localStorage.getItem("token")
;
  const response = await fetch(`http://localhost:5000/user/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const profilebox$$ = document.querySelector(".profile-box");
  const divprofile$$ = document.createElement("div");
  const h2$$ = document.createElement("h2");
  h2$$.classList.add("name-profile");
  const age$$ = document.createElement("p");
  const city$$ = document.createElement("p");
  const gender$$ = document.createElement("p");

  gender$$.textContent = `Gender: ${result.gender}`;
  // city$$.textContent = `${result.city}`;
  age$$.textContent = `Age: ${result.age}`;
  h2$$.textContent = `${result.username}`;

  divprofile$$.appendChild(h2$$);
  divprofile$$.appendChild(age$$);
  divprofile$$.appendChild(city$$);
  divprofile$$.appendChild(gender$$);
  divprofile$$.classList.add("profile-info");

  profilebox$$.appendChild(divprofile$$);

  // console.log(result);
};
const logOut = () =>{
  const logOut$$ = document.querySelector("#logOut");
  logOut$$.addEventListener("click", ()=>{
    localStorage.removeItem("token");
    window.location.href = "../z_LOGIN/index-login.html"
  })
}
const init = async () => {
 
  localgetFetch();
  logOut()
};
init();
