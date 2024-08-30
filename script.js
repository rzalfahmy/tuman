// script.js
let currentPage = 1;
const totalPages = 5;

function updatePageNumber() {
  document.getElementById("page-number").innerText = `Halaman ${currentPage} dari ${totalPages}`;
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById(`page-${page}`).classList.add("active");
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    updatePageNumber();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updatePageNumber();
  }
}

function goToPage() {
  const page = parseInt(document.getElementById("goto-page").value, 10);
  if (!isNaN(page) && page >= 1 && page <= totalPages) {
    currentPage = page;
    showPage(currentPage);
    updatePageNumber();
  } else {
    alert("Halaman tidak valid");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage);
  updatePageNumber();
});

document.addEventListener("keydown", function (event) {
  // Cegah akses Ctrl+U
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
  }

  // Cegah akses Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+S, dan F12
  if ((event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "J") || (event.ctrlKey && event.key === "s") || event.key === "F12") {
    event.preventDefault();
  }
});

// Cegah klik kanan
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
