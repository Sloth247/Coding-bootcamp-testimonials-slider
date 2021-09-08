const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const sliders = document.querySelectorAll(".slider");



prevBtns.forEach((prevBtn) =>{
prevBtn.addEventListener("click", () =>{
    sliders.forEach((slider) => {
        slider.classList.toggle("slide-hide");
    })
    
})});

nextBtns.forEach((nextBtn) =>{
    nextBtn.addEventListener("click", () =>{
        sliders.forEach((slider) => {
            slider.classList.toggle("slide-hide");
        })
    })});