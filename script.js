let preguntas = [];
let opciones1 = [];
let opciones2 = [];
let opciones3 = [];
let correctas = [];
preguntas[0] = "¿Capital de Argentina?";
opciones1[0] = "Cordoba";
opciones2[0] = "Mendoza";
opciones3[0] = "Buenos Aires";
correctas[0] = 3;

preguntas[1] = "¿Argentino campeón en 2022?";
opciones1[1] = "Neymar";
opciones2[1] = "Messi";
opciones3[1] = "Mbappe";
correctas[1] = 2;

preguntas[2] = "¿Equipo con más Libertadores?";
opciones1[2] = "Independiente";
opciones2[2] = "River Plate";
opciones3[2] = "Boca Juniors";
correctas[2] = 1;

preguntas[3] = "¿Qué selección tiene más Mundiales?";
opciones1[3] = "Alemania";
opciones2[3] = "Argentina";
opciones3[3] = "Brasil";
correctas[3] = 3;

preguntas[4] = "¿Dónde se encuentran las Cataratas del Iguazú?";
opciones1[4] = "Corrientes";
opciones2[4] = "Misiones";
opciones3[4] = "Entre Ríos";
correctas[4] = 2;

preguntas[5] = "¿Qué provincia es la más extensa de Argentina?";
opciones1[5] = "Buenos Aires";
opciones2[5] = "Santa Cruz";
opciones3[5] = "Mendoza";
correctas[5] = 1;

preguntas[6] = "¿Qué color no es primario?";
opciones1[6] = "Rojo";
opciones2[6] = "Amarillo";
opciones3[6] = "Violeta";
correctas[6] = 3;

preguntas[7] = "El río más largo del mundo es:";
opciones1[7] = "Nilo";
opciones2[7] = "Amazonas";
opciones3[7] = "Yangtse";
correctas[7] = 2;

preguntas[8] = "¿Quién pintó la Mona Lisa?";
opciones1[8] = "Picasso";
opciones2[8] = "Vicent Van Gogh";
opciones3[8] = "Leonardo Da Vinci";
correctas[8] = 3;

preguntas[9] = "¿La montaña más alta del mundo es?";
opciones1[9] = "Monte Everest";
opciones2[9] = "El K2";
opciones3[9] = "Kangchenjunga";
correctas[9] = 1;

let nPregunta = 0;
function mostrarPregunta(n) {
    document.querySelector('#textoPregunta').textContent = preguntas[n];
    document.querySelector('#opciones1').textContent = opciones1[n];
    document.querySelector('#opciones2').textContent = opciones2[n];
    document.querySelector('#opciones3').textContent = opciones3[n];
}
mostrarPregunta(nPregunta);
function evaluar(x) {
    let btn = document.querySelector("#opciones" + x);
    btn.classList.remove("f-gris");
    if (correctas[nPregunta] == x) {
        btn.classList.add("f-correcto");
    } else {
        btn.classList.add("f-incorrecto");
        let correcta = correctas[nPregunta];
        let btnCorrecto = document.querySelector("#opciones" + correcta);
        btnCorrecto.classList.remove("f-gris");
        btnCorrecto.classList.add("f-correcto");
    }
    setTimeout(() => {
        ["1", "2", "3"].forEach(i => {
            let b = document.querySelector("#opciones" + i);
            b.classList.remove("f-correcto", "f-incorrecto");
            b.classList.add("f-gris");
        });
        nPregunta++;
        if (nPregunta >= preguntas.length) {
            document.querySelector("#textoPregunta").textContent = "🎉 ¡Fin del juego!";
            // Ocultar botones de opciones
            document.querySelectorAll("#opciones1,#opciones2,#opciones3").forEach(b => {
                b.classList.add("oculto");
            });
            // Mostrar botón volver
            document.querySelector("#btn-volver").classList.remove("oculto");
            return;
        }
        mostrarPregunta(nPregunta);
    }, 1000);
}
document.querySelector("#iniciar-preguntados").addEventListener("click", () => {
    document.querySelector("#pantalla-portada").classList.add("oculto");
    document.querySelector("#preguntados").classList.remove("oculto");
    // 3. Carga la primera pregunta
    mostrarPregunta(nPregunta);
});
document.querySelector("#btn-volver").addEventListener("click", () => {
    nPregunta = 0;
    document.querySelector("#preguntados").classList.add("oculto");
    document.querySelector("#btn-volver").classList.add("oculto");
    document.querySelector("#pantalla-portada").classList.remove("oculto");
});