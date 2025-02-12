document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const button = document.getElementById("themeButton");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        button.innerHTML = '<i class="ri-sun-fill" style="color: white;"></i>';
    }

    button.addEventListener("click", function () {
        let icon = button.querySelector("i");
        icon.classList.add("rotate");

        setTimeout(() => {
            icon.classList.remove("rotate");
            if (body.classList.contains("dark-mode")) {
                body.classList.remove("dark-mode");
                button.innerHTML = '<i class="ri-moon-fill"></i>';
                localStorage.setItem("theme", "light");
            } else {
                body.classList.add("dark-mode");
                button.innerHTML = '<i class="ri-sun-fill" style="color: white;"></i>';
                localStorage.setItem("theme", "dark");
            }
        });
    });
});
