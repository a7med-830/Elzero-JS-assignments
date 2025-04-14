document.querySelector("p").remove();

let ele1 = document.createElement("div");
ele1.className = "start";
ele1.title = "Start Element";
ele1.setAttribute("data-value", "Start");
ele1.innerText = "Start";

let ele2 = document.createElement("div");
ele2.className = "end";
ele2.title = "End Element";
ele2.setAttribute("data-value", "End");
ele2.innerText = "End";


document.querySelector(".our-element").before(ele1);
document.querySelector(".our-element").after(ele2);
