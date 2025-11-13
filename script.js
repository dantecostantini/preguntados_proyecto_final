let preguntas = [];
let opciones1 = [];
let opciones2 = [];
let opciones3 = [];
let correctas = [];

preguntas[0] = "¿Quien interpreta a Iron Man en las peliculas de Marvel?";
opciones1[0] = "Tom Holland";
opciones2[0] = "La Chabona";
opciones3[0] = "Robert Downey jr";
correctas[0] = 3 

preguntas[1] = "¿Que peronaje vive en una piña debajo del mar?";
opciones1[1] = "Harry Potter";
opciones2[1] = "Bob Esponja";
opciones3[1] = "Tinkerbell";
correctas[1] = 2;

preguntas[2] = "¿Quien es la famosa creadora de la frase 'acompañenon'?";
opciones1[2] = "La coqueta";
opciones2[2] = "Lali";
opciones3[2] = "Pampita";
correctas[2] = 1;

preguntas[3] = "¿Cual de estos es un Brainrot?";
opciones1[3] = "Ballerina Cappucina";
opciones2[3] = "Tung Tung Sahur";
opciones3[3] = "Todas son correctas";
correctas[3] = 3;

preguntas[4] = '¿Que cantante lanzo la cancion "despacito" junto a Daddy Yankee?';
opciones1[4] = "Maluma";
opciones2[4] = "Luis fonsi";
opciones3[4] = "Enrique Iglesias";
correctas[4] = 2;

preguntas[5] = "¿Que programa conduce Santiago del Moro actualmente?";
opciones1[5] = "Gran Hermano";
opciones2[5] = "Los 8 escalones";
opciones3[5] = "Pasapalabra";
correctas[5] = 1;

preguntas[6] = "¿quien fue el cuerno de la relacion de Icardi y Wanda Nara?";
opciones1[6] = "La Coqueta";
opciones2[6] = "pampita";
opciones3[6] = "La China Suarez";
correctas[6] = 3;

preguntas[7] = "¿Que famoso conductor usa la frase 'Buenas noches, america'?";
opciones1[7] = "Guido Kaczka";
opciones2[7] = "Marcelo Tinelli";
opciones3[7] = "Marley";
correctas[7] = 2;

preguntas[8] = "¿Donde se realizara el mundial 2026?";
opciones1[8] = "Argentina";
opciones2[8] = "Brasil";
opciones3[8] = "Estados unidos";
correctas[8] = 3;

preguntas[9] = "¿Que futbolista argentino fue pareja de la cantante Tini Stoessel?";
opciones1[9] = "Rodrigo De Paul";
opciones2[9] = "Paulo Dybala";
opciones3[9] = "Lautaro Martinez";
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