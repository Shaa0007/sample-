document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let current = 0;

    images[current].classList.add("active");

    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 3000);
  });
});
function handleSubmit(event) {
      event.preventDefault();
      alert("Thank you! We'll get back to you shortly.");
      return false; }