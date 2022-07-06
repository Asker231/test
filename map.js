const rangeOne = document.querySelector("#rangeOne");
const btn = document.querySelector("button");
const rangeTwo = document.querySelector("#rangeTwo");
const vOne = document.querySelector(".value_one");
const vtwo = document.querySelector(".value_two");
const outPrice = document.querySelector('.outPrice');



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
  const fillterCourses = courses.map((el) => {
    el.filter((elem)=>elem.prices > rangeOne.value && elem.prices < rangeTwo.value)
    return  fillterCourses.name;
  });
  console.log(fillterCourses);
}
function valueRange() {
  rangeOne.addEventListener('input',()=>{
    vOne.innerHTML = rangeOne.value;
  })
 rangeTwo.addEventListener('input',()=>{
  vtwo.innerHTML = rangeTwo.value;
 })

}
valueRange();
