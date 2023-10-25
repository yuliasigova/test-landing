const customSelect = document.querySelector(".form__select");
const selectBtn = document.querySelector(".form__select-block");

const selectedValue = document.querySelector(".form__select-value");
const optionsList = document.querySelectorAll(".form__select-dropdown li");

selectBtn.addEventListener("click", () => {
    // add/remove active class on the container element
    selectBtn.classList.toggle("active");
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
        "aria-expanded",
        selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
});

optionsList.forEach((option) => {
    function handler(e) {
        // Click Events
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
            selectedValue.textContent = this.children[1].textContent;
            selectBtn.classList.remove("active");
        }
        // Key Events
        if (e.key === "Enter") {
            selectedValue.textContent = this.textContent;
            selectBtn.classList.remove("active");
        }
    }

    option.addEventListener("keyup", handler);
    option.addEventListener("click", handler);
});
