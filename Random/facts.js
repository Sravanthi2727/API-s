let url = "https://catfact.ninja/fact";
let url1 = "https://dog.ceo/api/breeds/image/random";
let urlj = "https://icanhazdadjoke.com/";

let btn = document.querySelector("#all");
let btnc = document.querySelector("#cat");
let btnd = document.querySelector("#dog");
let btnj = document.querySelector("#joke");

let p = document.querySelector("#pc");
let i = document.querySelector("img");
let m = document.querySelector("#p");
let j = document.querySelector("#j");

async function fact(p, img, j) {
  try {
    let res = await axios.get(url);
    let img = await axios.get(url1);
    let data = { headers: { Accept: "application/json" } };
    let resj = await axios.get(urlj, data);
    p.innerText = res.data.fact;
    i.setAttribute("src", img.data.message);
    j.innerText = resj.data.joke;
  } catch (e) {
    p.innerText = "SERVER ISSUE";
    m.innerText = "SERVER ISSUE";
    j.innerText = "SERVER ISSUE";
  }
}

async function factc(p) {
  try {
    let res = await axios.get(url);
    p.innerText = res.data.fact;
  } catch (e) {
    p.innerText = "SERVER ISSUE";
  }
}

async function factd(img) {
  try {
    let img = await axios.get(url1);
    i.setAttribute("src", img.data.message);
  } catch (e) {
    m.innerText = "SERVER ISSUE";
  }
}

async function joke(j) {
  try {
    let data = { headers: { Accept: "application/json" } };
    let res = await axios.get(urlj, data);
    console.log(res.data.joke);
    j.innerText = res.data.joke;
  } catch (e) {
    j.innerText = "SERVER ISSUE";
  }
}

btn.addEventListener("click", async () => {
  await fact(p, i, j);
});

btnc.addEventListener("click", async () => {
  await factc(p);
});

btnd.addEventListener("click", async () => {
  await factd(i);
});

btnj.addEventListener("click", async () => {
  await joke(j);
});
