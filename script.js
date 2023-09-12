// const hideFromRight = document.getElementById("hideRight");
// const thinkToHide = document.getElementById("hide");

// hideFromRight.addEventListener("click", function () {
// 	if (thinkToHide.style.transform == "translateX(0px)") {
// 		thinkToHide.style.transform = "translateX(-500px)";
// 	} else {
// 		thinkToHide.style.transform = "translateX(0px)";
// 	}
// });

const animatedDivPendahuluan = document.querySelector('.animated-div-pendahuluan');

// Fungsi untuk memeriksa apakah elemen dalam tampilan saat di-scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fungsi untuk menampilkan elemen dengan animasi saat elemen masuk dalam tampilan
function showElementOnScroll() {
    if (isElementInViewport(animatedDivPendahuluan)) {
        animatedDivPendahuluan.style.left = '-220px'; // Menggeser elemen ke posisi awal
    } else {
        animatedDivPendahuluan.style.left = '0px'; // Mengembalikan elemen ke posisi semula
    }
}

window.addEventListener('scroll', showElementOnScroll);
