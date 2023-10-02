let menuVisible = false;

document.addEventListener('DOMContentLoaded', function () {
    const cambiarTemaButton = document.getElementById('cambiar-tema');
    const body = document.body;

    let temaPreferido = localStorage.getItem('tema-preferido');

    if (!temaPreferido) {
        temaPreferido = 'tema-oscuro';
        localStorage.setItem('tema-preferido', temaPreferido);
    }

    body.classList.add(temaPreferido);
    toggleIcon(cambiarTemaButton);

    cambiarTemaButton.addEventListener('click', function () {
        body.classList.toggle('tema-claro');
        body.classList.toggle('tema-oscuro');
        toggleIcon(cambiarTemaButton);
        let temaActual = body.classList.contains('tema-claro') ? 'tema-claro' : 'tema-oscuro';
        localStorage.setItem('tema-preferido', temaActual);
    });
});

function toggleIcon(button) {
    const body = document.body;
    if (body.classList.contains('tema-oscuro')) {
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
    }
    else if (body.classList.contains('tema-claro')) {
        button.classList.remove('fa-moon');
        button.classList.add('fa-sun');
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

window.onscroll = function () {
    efectoHabilidades();
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