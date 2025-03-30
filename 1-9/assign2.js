// Method 1
document.write('<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial">Elzero</h1>')

// Method 2
let text = document.createElement("h1");
text.textContent = "Elzero";
text.style.color = "blue";
text.style.fontSize = "80px";
text.style.fontWeight = "bold";
text.style.textAlign = "center";
text.style.fontFamily = "Arial";

document.body.appendChild(text);

// Method 3 
let text2 = document.createElement("h1")
