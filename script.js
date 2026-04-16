let selectedPath = null;

// Initialisation JSColor
const pickerInput = document.querySelector('.jscolor');
const picker = new jscolor(pickerInput, {
    onFineChange: 'changeGeneralColor(this)'
});

// -----------------------------
// SÉLECTION D'UN PATH
// -----------------------------
function selectPath(path) {
    if (selectedPath) selectedPath.classList.remove('selected');

    selectedPath = path;
    selectedPath.classList.add('selected');

    // Mettre le picker sur la couleur actuelle du path sélectionné
    picker.fromString(selectedPath.getAttribute('fill'));
}

// -----------------------------
// CHANGEMENT DE COULEUR VIA PICKER
// -----------------------------
function changeGeneralColor(pickerInstance) {
    const color = pickerInstance.toHEXString();
    if (selectedPath) {
        selectedPath.setAttribute('fill', color);
    } else {
        document.querySelectorAll('.product svg path').forEach(path => path.setAttribute('fill', color));
    }
}

// -----------------------------
// COULEURS PRÉDÉFINIES
// -----------------------------
function setGeneralColor(color) {
    if (selectedPath) {
        selectedPath.setAttribute('fill', color);
    } else {
        document.querySelectorAll('.product svg path').forEach(path => path.setAttribute('fill', color));
    }

    picker.fromString(color);
}

// -----------------------------
// ÉVÉNEMENTS SUR LES PATHS
// -----------------------------
document.querySelectorAll('.product svg path').forEach(path => {
    path.addEventListener('click', (e) => {
        e.stopPropagation();
        selectPath(path);
    });
});

// -----------------------------
// DÉSELECTION SI CLIC HORS PATH OU PICKER
// -----------------------------
document.querySelector('.customizer').addEventListener('click', (e) => {
    if (
        !e.target.closest('svg path') &&
        !e.target.closest('.jscolor') &&
        !e.target.closest('.color-box')
    ) {
        if (selectedPath) selectedPath.classList.remove('selected');
        selectedPath = null;
    }
});

// -----------------------------
// POPUP
// -----------------------------
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function(e) {
    const popup = document.getElementById("popup");
    if (e.target === popup) popup.style.display = "none";
};

// -----------------------------
// MENU BURGER
// -----------------------------
function toggleMenu() {
    document.querySelector('.burger').classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
}