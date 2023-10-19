let menuOpcionesVisible = false;
let menuIdiomasVisible = false;

document.addEventListener('DOMContentLoaded', function () {
    const cambiarTemaButton = document.getElementById('cambiar-tema');
    const body = document.body;
    const banderaIdioma = document.getElementById('bandera-idioma');

    let temaPreferido = localStorage.getItem('tema-preferido');
    switch (temaPreferido) {
        case 'tema-oscuro':
        case 'tema-claro':
            break;
        default:
            temaPreferido = 'tema-oscuro';
            localStorage.setItem('tema-preferido', temaPreferido);
            break;
    }

    body.classList.add(temaPreferido);
    toggleIcon(cambiarTemaButton);
    console.log('Tema Cargado: ' + temaPreferido);

    // TODO: Gestionar idiomas al acceder a la página
    let idiomaPreferido = localStorage.getItem('idioma-preferido');
    switch (idiomaPreferido) {
        case 'ES':
            translate_espanol();
            console.log('Idioma Cargado: Español(ES)');
            banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Español.jpg';
            break;
        case 'FR':
            translate_frances();
            console.log('Idioma Cargado: Frances(FR)');
            banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Frances.png';
            break;
        case 'EN':
            translate_ingles();
            console.log('Idioma Cargado: Ingles(EN)');
            banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Ingles.png';
            break;
        case 'PT':
            translate_portugues();
            console.log('Idioma Cargado: Portugues(PT)');
            banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Portugues.png';
            break;
        default:
            idiomaPreferido = 'ES';
            localStorage.setItem('idioma-preferido', idiomaPreferido);
            translate_espanol();
            console.log('Idioma Cargado por defecto: Español(ES)');
            banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Español.jpg';
            break;
    }

    cambiarTemaButton.addEventListener('click', function () {
        body.classList.toggle('tema-claro');
        body.classList.toggle('tema-oscuro');
        toggleIcon(cambiarTemaButton);
        let temaActual = body.classList.contains('tema-claro') ? 'tema-claro' : 'tema-oscuro';
        localStorage.setItem('tema-preferido', temaActual);
        console.log('Tema Seleccionado: ' + temaActual);
    });

    document.getElementById('espanol').addEventListener('click', function () {
        console.log('Idioma Seleccionado: Español(ES)');
        mostrarOcultarMenuIdiomas();
        translate_espanol();
        idiomaPreferido = 'ES';
        localStorage.setItem('idioma-preferido', idiomaPreferido);
        banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Español.jpg';
    });

    document.getElementById('frances').addEventListener('click', function () {
        console.log('Idioma Seleccionado: Francés(FR)');
        mostrarOcultarMenuIdiomas();
        translate_frances();
        idiomaPreferido = 'FR';
        localStorage.setItem('idioma-preferido', idiomaPreferido);
        banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Frances.png';
    });

    document.getElementById('ingles').addEventListener('click', function () {
        console.log('Idioma Seleccionado: Inglés(EN)');
        mostrarOcultarMenuIdiomas();
        translate_ingles();
        idiomaPreferido = 'EN';
        localStorage.setItem('idioma-preferido', idiomaPreferido);
        banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Ingles.png';
    });

    document.getElementById('portugues').addEventListener('click', function () {
        console.log('Idioma Seleccionado: Portugués(PT)');
        mostrarOcultarMenuIdiomas();
        translate_portugues();
        idiomaPreferido = 'PT';
        localStorage.setItem('idioma-preferido', idiomaPreferido);
        banderaIdioma.src = 'resources/img/Portfolio/Idiomas/Portugues.png';
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
};

function mostrarOcultarMenuOpciones() {
    document.getElementById("menu-idiomas").classList = "";
    if (menuOpcionesVisible) {
        document.getElementById("nav").classList = "";
        menuOpcionesVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuOpcionesVisible = true;
    }
};

function mostrarOcultarMenuIdiomas() {
    document.getElementById("nav").classList = "";
    if (menuIdiomasVisible) {
        document.getElementById("menu-idiomas").classList = "";
        menuIdiomasVisible = false;
    } else {
        document.getElementById("menu-idiomas").classList = "active";
        menuIdiomasVisible = true;
    }
};

function seleccionarOpcion() {
    document.getElementById("nav").classList = "";
    menuOpcionesVisible = false;
};

window.onscroll = function () {
    efectoHabilidades();
};

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
};