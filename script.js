let currentPage = 0;
const pages = document.querySelectorAll(".page");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove("active");
        if (i === index) {
            page.classList.add("active");
        }
    });
}

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Tampilkan halaman pertama saat awal
showPage(0);
