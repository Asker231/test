const em = document.querySelector("#em");
const btn = document.querySelector("button");
const nom = document.querySelector("#nom");
const vOne = document.querySelector(".value_one");
const vtwo = document.querySelector(".value_two");
const main = document.querySelector(".main");

btn.addEventListener("click", out);
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

function out() {
  const m = courses.map((el) => {
    return el.prices.filter((el)=>el > em.value && el < nom.value
    )
  });
  console.log(m);
}
function valueRange() {
  em.onchange = () => {
    vOne.innerHTML = em.value;
  };
  nom.onchange = () => {
    vtwo.innerHTML = nom.value;
  };
}
valueRange();
