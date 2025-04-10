let ele1 = document.querySelector(".one");
let ele2 = document.querySelector(".two");

let title = ele1.title;
ele1.title = ele2.title;
ele2.title = title;

let text = ele1.innerHTML;
ele1.innerHTML = ele2.innerHTML;
ele2.innerHTML = `${text} ${ele1.attributes.length}`;
