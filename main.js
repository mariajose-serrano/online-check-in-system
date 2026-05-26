/* =========================================
   PALACIO VELARDE — JavaScript principal
   ========================================= */

/* --- NAV SCROLL --- */
const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true },
);

/* --- MOBILE MENU --- */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

burger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  document.body.style.overflow = menuOpen ? "hidden" : "";
  // Animación burger → X
  const spans = burger.querySelectorAll("span");
  if (menuOpen) {
    spans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
    spans[1].style.transform = "rotate(-45deg) translate(4px, -4px)";
  } else {
    spans[0].style.transform = "";
    spans[1].style.transform = "";
  }
});

// Cerrar menú al hacer clic en enlace
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    const spans = burger.querySelectorAll("span");
    spans[0].style.transform = "";
    spans[1].style.transform = "";
  });
});

/* --- SCROLL REVEAL --- */
const revealEls = document.querySelectorAll(
  ".numbers__item, .room-card, .exp-card, .gastro__content, .testimonial__inner, .booking__inner, .footer__brand, .footer__links, .footer__newsletter",
);

revealEls.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Pequeño delay escalonado para grupos
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

/* --- TOAST --- */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

/* --- BOOKING FORM --- */
function handleBooking(e) {
  e.preventDefault();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    showToast("Por favor, selecciona las fechas de entrada y salida.");
    return;
  }

  const d1 = new Date(checkin);
  const d2 = new Date(checkout);

  if (d2 <= d1) {
    showToast("La fecha de salida debe ser posterior a la de llegada.");
    return;
  }

  const noches = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  const suite = document.getElementById("suite").value;
  const suiteNombre = suite
    ? document.getElementById("suite").options[
        document.getElementById("suite").selectedIndex
      ].text
    : "Cualquier suite disponible";

  showToast(
    `✦ Consultando disponibilidad · ${suiteNombre} · ${noches} noche${noches > 1 ? "s" : ""}`,
  );

  // Simular respuesta del servidor
  setTimeout(() => {
    showToast(
      "¡Disponibilidad confirmada! Nos pondremos en contacto en breve.",
    );
  }, 2200);
}

/* --- NEWSLETTER --- */
function handleNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  if (email) {
    showToast("✦ Gracias. Bienvenido al círculo Velarde.");
    e.target.reset();
  }
}

/* --- PARALLAX SUAVE EN HERO --- */
const heroBg = document.querySelector(".hero__bg");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
  },
  { passive: true },
);

/* --- CONTADOR ANIMADO EN NUMBERS --- */
function animateValue(el, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();
  const isDecimal = String(end).includes(".");

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const value = start + range * ease;
    el.textContent = isDecimal ? value.toFixed(0) : Math.round(value);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Observar los números
const numbersSection = document.querySelector(".numbers__grid");
if (numbersSection) {
  const numObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const values = [24, 1924, 5, 2];
        const els = document.querySelectorAll(".numbers__value");
        const originals = ["24", "1924", "5★", "2ha"];

        els.forEach((el, i) => {
          if (originals[i].includes("★") || originals[i].includes("ha")) {
            // No animar los que tienen símbolos especiales
            return;
          }
          animateValue(el, 0, values[i], 1200);
        });

        numObserver.disconnect();
      }
    },
    { threshold: 0.5 },
  );
  numObserver.observe(numbersSection);
}

/* --- FECHAS MÍNIMAS EN FORMULARIO --- */
const today = new Date().toISOString().split("T")[0];
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");

if (checkinInput) {
  checkinInput.min = today;
  checkinInput.addEventListener("change", () => {
    checkoutInput.min = checkinInput.value;
    if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
      checkoutInput.value = "";
    }
  });
}

/* --- SMOOTH SCROLL con offset por la nav --- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
