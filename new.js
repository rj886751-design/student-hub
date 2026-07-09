const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});