let ansBox = document.querySelectorAll(".top");
let none = 1;;
ansBox.forEach((val) => {
    val.addEventListener("click", (e) => {
        let ans = document.querySelector(`#ans${val.getAttribute("id")}`);
        if (none) {
            ans.style.display = "block";
        }
        else ans.style.display = "none";
        none = !none;
    });
});