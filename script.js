const firstPagePhoto = document.querySelector(".firstPagePhoto");
const firstPage = document.querySelector(".firstPage")
const secondPage = document.querySelector(".secondPage");
const body = document.querySelector("body");
firstPagePhoto.addEventListener("click",()=> {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    secondPage.style.flexDirection = "column";
    secondPage.style.justifyContent = "center";
    secondPage.style.alignItems = "center";
    secondPage.style.textAlign = "center";
    body.style.backgroundColor = "lightgreen"
})