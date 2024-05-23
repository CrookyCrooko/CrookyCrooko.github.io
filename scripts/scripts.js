function toggleSection(sectionId, toggleBar) {
    var section = document.getElementById(sectionId);
    var arrow = toggleBar.querySelector('.arrow');
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        arrow.innerHTML = "&#9650;"; // Up arrow
    } else {
        section.style.display = "none";
        arrow.innerHTML = "&#9660;"; // Down arrow
    }
}