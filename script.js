// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ================= NAVBAR EFECTO SCROLL =================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
        header.style.boxShadow = "none";
    }
});


// ================= REVEAL ANIMATION =================
const reveals = document.querySelectorAll(".menu-card, .experience-text, .experience-images, .gallery-grid img, .testimonial, .contact-grid");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// ================= BOTÓN WHATSAPP DINÁMICO =================
const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const numero = "573000000000"; // CAMBIA ESTO
        const mensaje = "Hola, quiero hacer una reserva en Aroli Restaurant";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
}


// ================= BOTÓN RESERVA =================
const botonesReserva = document.querySelectorAll(".btn");

botonesReserva.forEach(btn => {
    if (btn.textContent.toLowerCase().includes("reservar")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const numero = "573105241126"; // CAMBIAR
            const mensaje = "Hola, quiero reservar una mesa";

            window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
        });
    }
});


// ================= EFECTO APARICIÓN INICIAL =================
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
