let inp = document.querySelector("input");
let btn = document.querySelector("button");

let url = "http://universities.hipolabs.com/search?name=india&state=";

btn.addEventListener("click", async () => {
  let c = inp.value;
  //console.log(c);
  let colArr = await search(c);
  names(colArr);
});

async function search(c) {
  try {
    let d = await axios.get(url + c);
    console.log(d.data);
    return d.data;
  } catch (e) {
    //console.log(e);
    return [];
  }
}

function names(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (i of colArr) {
    let li = document.createElement("li");
    li.innerText = i.state;
    list.appendChild(li);
    //console.log(i);
  }
}
