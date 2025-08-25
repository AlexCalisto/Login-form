document.body.style.fontFamily = "Arial";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.backgroundColor = "#f4f4f4";

document.getElementById("title").style.marginBottom = "20px";
document.getElementById("title").style.color="#0057daff";

const container = document.getElementById("form-container");
container.style.backgroundColor = "#fff";
container.style.padding = "30px";
container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.19)";
container.style.borderRadius = "10px";

["username", "password"].forEach(id => {
  const input = document.getElementById(id);
  input.style.padding = "10px";
  input.style.width = "250px";
  input.style.marginBottom = "10px";
  input.style.border = "1px solid #919cfdff";
  input.style.borderRadius = "50px";
});

const button = document.getElementById("loginBtn");
button.style.width = "270px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#0057daff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "50px";
button.style.cursor = "pointer";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#003c99";
  button.style.transform = "scale(1.05)";
  button.style.transition = "0.3s";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#0057daff";
  button.style.transform = "scale(1)";
});
