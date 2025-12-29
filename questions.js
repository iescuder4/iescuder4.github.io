const questions = [
{
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un tren de fira té una capacitat nominal de 48 passatgers. L’interval entre sortides consecutives és 15 minuts i el temps de trajecte, 5 minuts. Quin nombre màxim de passatgers pot transportar el tren en una hora?`,
        options: [
            { text: "96", value: "a" },
            { text: "576", value: "b" },
            { text: "288", value: "c" },
            { text: "192", value: "d" }
        ],
        correctAnswer: "d",
       steps: `
\\[
\\text{Capacitat nominal del tren} = 48 \\, \\text{passatgers}
\\]
\\[
\\text{Interval entre sortides} = 15 \\, \\text{minuts}
\\]
\\[
\\text{Temps disponible (1 hora)} = 60 \\, \\text{minuts}
\\]
\\[
\\text{Nombre de sortides per hora} = \\frac{60}{15} = 4
\\]
\\[
\\text{Descomposició de la capacitat: } 48 = 40 + 8
\\]
\\[
40 \\times 4 = 160
\\]
\\[
8 \\times 4 = 32
\\]
\\[
160 + 32 = 192
\\]
\\[
\\text{Comprovació: el temps de trajecte (5 min) és menor que l'interval (15 min), per tant no limita la capacitat horària.}
\\]
\\[
\\text{Nombre màxim de passatgers per hora} = 48 \\times 4 = 192
\\]
 <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">` 
 }
];

