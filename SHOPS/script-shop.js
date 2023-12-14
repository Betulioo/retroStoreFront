// const allshops$$ = document.querySelector("allshops");

const getAllShops = async () => {
  const response = await fetch("http://localhost:5000/shops/allshops", {
    method: "GET",
  });
  const result = await response.json();

  for (const shop of result) {
    const h2$$ = document.createElement("h2");
    h2$$.textContent = shop.name;
    h2$$.classList.add("h2Shop");

    const div$$ = document.createElement("div");
    div$$.appendChild(h2$$);

    const section$$ = document.querySelector(".divs-shops");
    section$$.appendChild(div$$);

    document.body.appendChild(section$$);

  }
  // console.log(result);
  return result;
};

const init = async () => {
  getAllShops();
};
init();
