let button = document.querySelector(".no");

function moveButton() {
  console.log("Button moved");
  let x = Math.floor(Math.random() * window.innerWidth - 100);
  let y = Math.floor(Math.random() * window.innerHeight - 50);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

setTimeout(function () {
  window.location.href = "card.html"; // Replace with your target URL
}, 15000);