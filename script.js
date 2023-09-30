let menuVisible = false;

document.addEventListener('DOMContentLoaded', function () {
    const cambiarTemaButton = document.getElementById('cambiar-tema');
    const body = document.body;

    // Verificar si se almacenó un tema preferido
    const temaPreferido = localStorage.getItem('tema-preferido');

    if (temaPreferido) {
        body.classList.add(temaPreferido);
    }

    cambiarTemaButton.addEventListener('click', function () {
        body.classList.toggle('tema-claro');
        body.classList.toggle('tema-oscuro');
        toggleIcon(cambiarTemaButton);

        // // Almacenar el tema preferido en localStorage
        // const temaActual = body.classList.contains('tema-claro') ? 'tema-claro' : 'tema-oscuro';
        // localStorage.setItem('tema-preferido', temaActual);
    });
});

function toggleIcon(button) {
    if (button.classList.contains('fa-moon')) {
        button.classList.remove('fa-moon');
        button.classList.add('fa-sun');
    } else {
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
    }
}

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlCss")
        habilidades[1].classList.add("javascript")
        habilidades[2].classList.add("java")
        habilidades[3].classList.add("cSharp")
        habilidades[4].classList.add("mySQL")
        habilidades[5].classList.add("androidStudio")
        habilidades[6].classList.add("unity")
        habilidades[7].classList.add("git")
        habilidades[8].classList.add("comunicacion")
        habilidades[9].classList.add("trabajo-equipo")
        habilidades[10].classList.add("creatividad")
        habilidades[11].classList.add("dedicacion")
    }
}

window.onscroll = function () {
    efectoHabilidades();
}