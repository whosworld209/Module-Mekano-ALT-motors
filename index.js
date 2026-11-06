const vehicles = [
    {
        name: "Landwind X7",
        type: "rent",
        category: "SUV",
        fuel: "Essence",
        transmission: "Automatique",
        power: "",
        price: "40 000 FCFA / jour",
        image: "https://alt-motors.com/storage/vehicules/11/images/x7_img_20260506081015_00_czXbvF.jpeg",
        href: "https://alt-motors.com/reservation/Y3cvAFGKaHySzsog48MGfY1bsnobzlJe/location"
    },
    {
        name: "TOYOTA Camry",
        type: "rent",
        category: "Berline",
        fuel: "Essence",
        transmission: "Manuelle",
        power: "",
        price: "30 000 FCFA / jour",
        image: "https://alt-motors.com/storage/vehicules/12/images/camry_img_20260506081814_00_iPYIoN.jpeg",
        href: "https://alt-motors.com/reservation/C8KEXuURiRrdoUVrN7QuOn5ZW4lTvSD0/location"
    },
    {
        name: "HYUNDAI Tucson",
        type: "rent",
        category: "SUV",
        fuel: "Essence",
        transmission: "Manuelle",
        power: "",
        price: "30 000 FCFA / jour",
        image: "https://alt-motors.com/storage/vehicules/13/images/tucson_img_20260506083114_00_Jv8rTS.jpeg",
        href: "https://alt-motors.com/reservation/bTzkBMlZzv9n0UiiVlz7lSq5D4e9tII5/location"
    },
    {
        name: "HYUNDAI Elantra",
        type: "rent",
        category: "Berline",
        fuel: "Essence",
        transmission: "Automatique",
        power: "",
        price: "30 000 FCFA / jour",
        image: "https://alt-motors.com/storage/vehicules/14/images/elantra_img_20260506084536_00_SVXpSR.jpeg",
        href: "https://alt-motors.com/reservation/FrLkAo5HczDrbQjbNfqrx3ivpSNFjbvV/location"
    },
    {
        name: "HYUNDAI Elantra",
        type: "rent",
        category: "Berline",
        fuel: "Essence",
        transmission: "Automatique",
        power: "",
        price: "40 000 FCFA / jour",
        image: "https://alt-motors.com/storage/vehicules/15/images/elantra_img_20260506085525_00_gOee7Z.jpeg",
        href: "https://alt-motors.com/reservation/9AFPFY1LRf0mWwhZa53lZ27V1rspBzS5/location"
    },
    {
        name: "HONDA CR-V TOURING",
        type: "sale",
        category: "SUV",
        fuel: "Essence",
        transmission: "Automatique",
        power: "190 ch",
        price: "13 000 000 FCFA",
        image: "https://alt-motors.com/storage/vehicules/2/images/cr-v-touring_img_20260304214844_00_zV29xN.jpg",
        href: "https://alt-motors.com/vehicules/vente/jLSfyx09MKUkb1NGGKzgJswvel9XQzMc"
    },
    {
        name: "BMW xDrive40i M Sport",
        type: "sale",
        category: "SUV",
        fuel: "Essence",
        transmission: "Automatique",
        power: "381 ch",
        price: "75 000 000 FCFA",
        image: "https://alt-motors.com/storage/vehicules/3/images/xdrive40i-m-sport_img_20260304221136_00_34LM5B.jpg",
        href: "https://alt-motors.com/vehicules/vente/yuxIOMlqqpengozqhTD6DPxTiwo2hcil"
    },
    {
        name: "BMW 328i",
        type: "sale",
        category: "Berline",
        fuel: "Essence",
        transmission: "Automatique",
        power: "245 ch",
        price: "5 500 000 FCFA",
        image: "https://alt-motors.com/storage/vehicules/4/images/bmw-328i_img_20260304223050_00_D6hQfL.jpg",
        href: "https://alt-motors.com/vehicules/vente/yKPgPUD3OL9DEVEHFzsINuqELlninKw9"
    },
    {
        name: "HONDA Accord",
        type: "sale",
        category: "Berline",
        fuel: "Essence",
        transmission: "Automatique",
        power: "252 ch",
        price: "5 900 000 FCFA",
        image: "",
        href: "https://alt-motors.com/vehicules/vente/SrPmHYDi0mdjrfY9UeLrw0HqBFzcVtUf"
    },
    {
        name: "TOYOTA HIGHLANDER",
        type: "sale",
        category: "SUV",
        fuel: "Essence",
        transmission: "Automatique",
        power: "270 ch",
        price: "12 500 000 FCFA",
        image: "https://alt-motors.com/storage/vehicules/7/images/highliander_img_20260306215241_00_0n08F1.jpeg",
        href: "https://alt-motors.com/vehicules/vente/4jvxHbhmxSWuSifWFuZFxudanxpRnJdo"
    },
    {
        name: "TOYOTA FORTUNER",
        type: "sale",
        category: "SUV",
        fuel: "Diesel",
        transmission: "Manuelle",
        power: "110 ch",
        price: "12 500 000 FCFA",
        image: "https://alt-motors.com/storage/vehicules/8/images/fortuner_img_20260306221419_00_02Uegg.jpeg",
        href: "https://alt-motors.com/vehicules/vente/Dn1EV3NCNVJEOPH5bbTUi4PaWIHuy2I9"
    }
];

const featuredSlides = [
    {
        make: "Audi RS 6",
        model: "Avant GT 2024",
        message: "Des voitures qui marquent. Des services qui rassurent.",
        image: "https://alt-motors.com/templates/utilisateur/images/slider1.jpg",
        alt: "Audi RS 6 Avant GT"
    },
    {
        make: "Cadillac",
        model: "Celestiq 2024",
        message: "Du rêve à la route, votre véhicule idéal vous attend.",
        image: "https://alt-motors.com/templates/utilisateur/images/slider3.jpg",
        alt: "Cadillac Celestiq"
    },
    {
        make: "Xiaomi",
        model: "SU7 2021",
        message: "Vitesse, confort, prestige. Redécouvrez l’automobile autrement.",
        image: "https://alt-motors.com/templates/utilisateur/images/slider2.jpg",
        alt: "Xiaomi SU7"
    }
];

const whatsappUrl = "https://wa.me/22897759232";
let currentSlide = 0;
let slideTimer;
let selectedVehicle = null;

document.addEventListener("DOMContentLoaded", () => {
    renderVehicles(vehicles);
    renderSlide(currentSlide);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        slideTimer = window.setInterval(() => changeSlide(1), 6500);
    }
});

function renderSlide(index) {
    const item = featuredSlides[index];
    const image = document.getElementById("heroImage");
    const content = document.getElementById("sliderContent");
    const dots = document.getElementById("sliderDots");

    image.src = item.image;
    image.alt = item.alt;
    content.innerHTML = `
        <p class="hero-kicker">Véhicules à la une</p>
        <h1>${item.make}<span>${item.model}</span></h1>
        <div class="hero-rule" aria-hidden="true"></div>
        <p class="hero-subtitle">${item.message}</p>
    `;
    dots.innerHTML = featuredSlides.map((slide, dotIndex) => `
        <button class="hero-dot" type="button" aria-label="Afficher ${slide.make} ${slide.model}" aria-current="${dotIndex === index}" onclick="goToSlide(${dotIndex})"></button>
    `).join("");
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + featuredSlides.length) % featuredSlides.length;
    renderSlide(currentSlide);
    resetSlideTimer();
}

function goToSlide(index) {
    currentSlide = index;
    renderSlide(currentSlide);
    resetSlideTimer();
}

function resetSlideTimer() {
    if (!slideTimer) return;
    window.clearInterval(slideTimer);
    slideTimer = window.setInterval(() => changeSlide(1), 6500);
}

function renderVehicles(data) {
    const rentals = data.filter(vehicle => vehicle.type === "rent");
    const sales = data.filter(vehicle => vehicle.type === "sale");
    document.getElementById("location").hidden = rentals.length === 0;
    document.getElementById("vente").hidden = sales.length === 0;
    document.getElementById("rentalGrid").innerHTML = rentals.map(createVehicleCard).join("");
    document.getElementById("saleGrid").innerHTML = sales.map(createVehicleCard).join("");
    document.getElementById("emptyResults").hidden = data.length > 0;
}

function createVehicleCard(vehicle) {
    const action = vehicle.type === "rent" ? "Réserver" : "Voir le véhicule";
    const requestAction = vehicle.type === "rent" ? "Réserver" : "Acheter";
    const vehicleIndex = vehicles.indexOf(vehicle);
    const image = vehicle.image
        ? `<img class="vehicle-image" src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">`
        : '<span class="vehicle-image-missing">Photo non disponible</span>';
    const power = vehicle.power ? `<span>${vehicle.power}</span>` : "";
    return `
        <article class="vehicle-card">
            <div class="vehicle-image-wrap">
                ${image}
                <span class="vehicle-category">${vehicle.category}</span>
            </div>
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <div class="vehicle-meta"><span>${vehicle.fuel}</span><span>${vehicle.transmission}</span>${power}</div>
                <div class="vehicle-bottom">
                    <span class="vehicle-price"><small>${vehicle.type === "rent" ? "Tarif" : "Prix affiché"}</small>${vehicle.price}</span>
                    <div class="vehicle-actions">
                        <button class="vehicle-action" type="button" onclick="openBookingModal(${vehicleIndex})">${requestAction}</button>
                        <a class="vehicle-details" href="${vehicle.href}" target="_blank" rel="noreferrer">${action} ↗</a>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function filterVehicles() {
    const type = document.getElementById("filterType").value;
    const category = document.getElementById("filterCategory").value;
    const transmission = document.getElementById("filterTransmission").value;
    const filtered = vehicles.filter(vehicle =>
        (type === "all" || vehicle.type === type) &&
        (category === "all" || vehicle.category === category) &&
        (transmission === "all" || vehicle.transmission === transmission)
    );
    renderVehicles(filtered);
}

function resetFilters() {
    document.getElementById("filterType").value = "all";
    document.getElementById("filterCategory").value = "all";
    document.getElementById("filterTransmission").value = "all";
    renderVehicles(vehicles);
}

function updatePartsSearch() {
    const type = document.getElementById("searchType").value;
    const input = document.getElementById("partsQuery");
    input.placeholder = type === "oem" ? "Entrez la référence OEM" : "Entrez le VIN ou la plaque";
    input.setAttribute("aria-label", type === "oem" ? "Référence pièce OEM" : "VIN ou plaque d'immatriculation");
}

function openBookingModal(index) {
    selectedVehicle = vehicles[index];
    if (!selectedVehicle) return;

    const isRental = selectedVehicle.type === "rent";
    document.getElementById("modalTitle").textContent = isRental ? "Réserver ce véhicule" : "Demander l'achat";
    document.getElementById("modalIntro").textContent = "Indiquez vos coordonnées et votre préférence de paiement. La demande sera transmise après validation du message WhatsApp.";
    document.getElementById("modalBody").innerHTML = `
        <div class="booking-summary"><strong>${selectedVehicle.name}</strong><br>${selectedVehicle.price}</div>
        <form class="booking-form" onsubmit="confirmVehicleRequest(event)">
            <label>Nom complet<input name="name" type="text" autocomplete="name" required></label>
            <label>Téléphone / WhatsApp<input name="phone" type="tel" autocomplete="tel" placeholder="+228" required></label>
            ${isRental ? '<label>Date souhaitée<input name="date" type="date" required></label>' : ""}
            <label>Mode de paiement souhaité<select name="payment" required><option value="T-Money">T-Money</option><option value="Flooz">Flooz</option><option value="WhatsApp">Confirmation via WhatsApp</option></select></label>
            <button type="submit">Continuer sur WhatsApp <span aria-hidden="true">↗</span></button>
            <p class="request-status" id="vehicleStatus" aria-live="polite"></p>
        </form>
    `;

    const modal = document.getElementById("bookingModal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector("input")?.focus();
}

function closeBookingModal() {
    const modal = document.getElementById("bookingModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function confirmVehicleRequest(event) {
    event.preventDefault();
    if (!selectedVehicle) return;
    const formData = new FormData(event.currentTarget);
    const requestType = selectedVehicle.type === "rent" ? "louer" : "acheter";
    const request = [
        `Bonjour ALT Motors, je souhaite ${requestType} le véhicule ${selectedVehicle.name}.`,
        `Prix affiché : ${selectedVehicle.price}.`,
        `Nom : ${formData.get("name")}. Téléphone : ${formData.get("phone")}.`,
        formData.get("date") ? `Date souhaitée : ${formData.get("date")}.` : "",
        `Paiement préféré : ${formData.get("payment")}.`
    ].filter(Boolean).join(" ");
    showWhatsappRequest("vehicleStatus", request);
}

function searchPartsByVin(event) {
    event.preventDefault();
    const value = document.getElementById("partsQuery").value.trim();
    if (!value) return;

    const searchType = document.getElementById("searchType").value;
    const label = searchType === "oem" ? "Référence OEM" : "Immatriculation ou VIN";
    const request = `Bonjour ALT Motors, pouvez-vous vérifier la disponibilité et la compatibilité des pièces ? ${label} : ${value}.`;
    showWhatsappRequest("partsResults", request, "La compatibilité doit être confirmée par l'équipe.");
}

function handleMekanoBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const request = `Bonjour ALT Motors, je souhaite demander une prestation Mekano. Service : ${formData.get("service")}. Date : ${formData.get("date")}. Lieu : ${formData.get("location")}. Nom : ${formData.get("name")}. Téléphone : ${formData.get("phone")}.`;
    showWhatsappRequest("mekanoStatus", request);
}

function showWhatsappRequest(statusId, request, context = "") {
    const link = document.createElement("a");
    const url = `${whatsappUrl}?text=${encodeURIComponent(request)}`;
    link.className = "request-whatsapp";
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Ouvrir WhatsApp pour envoyer le message ↗";

    const status = document.getElementById(statusId);
    const message = context ? `${context} ` : "";
    status.replaceChildren(document.createTextNode(`${message}Votre demande sera transmise à ALT Motors après l'envoi du message WhatsApp. `), link);
    window.open(url, "_blank", "noopener,noreferrer");
}

function toggleMobileMenu() {
    const menu = document.getElementById("mainNav");
    const toggle = document.getElementById("menuToggle");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
    menu.classList.toggle("is-open", !expanded);
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeBookingModal();
        const toggle = document.getElementById("menuToggle");
        if (toggle?.getAttribute("aria-expanded") === "true") toggleMobileMenu();
    }
});

document.addEventListener("click", event => {
    if (event.target.closest("#mainNav a")) {
        document.getElementById("mainNav").classList.remove("is-open");
        document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
        document.getElementById("menuToggle").setAttribute("aria-label", "Ouvrir le menu");
    }
});