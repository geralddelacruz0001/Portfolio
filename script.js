
/* =========================
   BURGER MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close menu after clicking link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   GO TO PORTFOLIO
========================= */

function goToPortfolio() {

    document
        .getElementById("portfolio")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   COPY EMAIL
========================= */

function copyEmail() {

    const email = "yewefi3726@cwsgear.com";

    navigator.clipboard.writeText(email)

        .then(() => {

            document.getElementById("copyMessage").textContent =
                "Email copied ✓";

            setTimeout(() => {

                document.getElementById("copyMessage").textContent =
                    "";

            }, 2500);

        })

        .catch(() => {

            document.getElementById("copyMessage").textContent =
                email;

        });

}


/* =========================
   DOWNLOAD PORTFOLIO
========================= */

function downloadPortfolio() {

    const portfolio = `
GERALD DELA CRUZ
==============================

Creative Developer
UI/UX Enthusiast
Technology Enthusiast


ABOUT ME
------------------------------

I'm Gerald Dela Cruz, a developer and
technology enthusiast who enjoys creating
projects, experimenting with ideas and
learning new technologies.


PROJECTS
------------------------------

01 - Project Alpha

Modern web project focused on clean UI,
responsive design and smooth interactions.


02 - Project Nova

Futuristic interface concept designed with
a dark glassmorphism aesthetic.


03 - Project Vision

Experimental frontend project focused on
modern interactions and animations.


CONTACT
------------------------------

Email:
yewefi3726@cwsgear.com


© 2026 Gerald Dela Cruz
`;

    const blob = new Blob(
        [portfolio],
        {
            type: "text/plain;charset=utf-8"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Gerald_Dela_Cruz_Portfolio.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}
