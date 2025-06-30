const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// İlk sayacı yükle
fetch("/.netlify/functions/getCounter")
  .then((res) => res.json())
  .then((data) => (counterEl.textContent = data.count));

// Butona tıklayınca artır
incrementBtn.addEventListener("click", () => {
  fetch("/.netlify/functions/incrementCounter", { method: "POST" })
    .then((res) => res.json())
    .then((data) => (counterEl.textContent = data.count));
});
