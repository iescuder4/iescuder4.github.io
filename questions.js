const questions = [
    {
        type: "questions",
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
            \\text{Nombre màxim de passatgers per hora} = 48 \\times 4 = 192
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,
        images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`
    },
    {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `Qüestió 2<br>
        En un circuit elèctric es connecten en sèrie dues resistències de tolerància ±5 % i
        valors nominals 1,1 kΩ i 3,3 kΩ. La resistència equivalent d’aquest circuit és:`,
        options: [
            { text: "(4,4 ± 0,055) kΩ", value: "a" },
            { text: "(4,4 ± 0,11) kΩ", value: "b" },
            { text: "(4,4 ± 0,22) kΩ", value: "c" },
            { text: "(4,4 ± 0,44) kΩ", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>Càlcul de la resistència total:</strong><br>
            \\[ R_{\\text{total}} = 1,1 + 3,3 = 4,4 \\, \\text{k}\\Omega \\]
            <br><strong>Càlcul de la tolerància total:</strong><br>
            \\[ \\text{Tolerància} = 0,05 \\times 4,4 = 0,22 \\, \\text{k}\\Omega \\]`
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `Qüestió 3<br>
        La tensió de ruptura del titani comercial sense aliar és σ<sub>r</sub> = 75 MPa.
        Si apliquem una força axial de 750 N a una barra d’aquest titani, quina secció mínima
        ha de tenir perquè no es trenqui?`,
        options: [
            { text: "1 mm²", value: "a" },
            { text: "10 mm²", value: "b" },
            { text: "100 mm²", value: "c" },
            { text: "1 000 mm²", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[ S = \\frac{F}{\\sigma} = \\frac{750}{75 \\times 10^6} = 10 \\, \\text{mm}^2 \\]`
    },
    {
        type: "questions",
        category: "energia",
        text: `Qüestió 4<br>
        Un cotxe que consumeix 7,1 L/100 km i produeix 2,45 kg de CO₂ per litre de benzina
        fa un viatge de 925 km a 100 km/h. Quina quantitat de CO₂ emet?`,
        options: [
            { text: "1 609 kg", value: "a" },
            { text: "160,9 kg", value: "b" },
            { text: "188,1 kg", value: "c" },
            { text: "1 881 kg", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[ 7,1 \\, \\text{L/100km} \\times 925 \\, \\text{km} = 65,675 \\, \\text{L} \\]
            \\[ 65,675 \\times 2,45 = 160,9 \\, \\text{kg CO}_2 \\]`
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Qüestió 5<br>
        La fiabilitat d’un artefacte és del 92 % per a 2 400 h.
        D’un lot inicial de 1 400 unitats, quants artefactes és probable que continuïn funcionant?`,
        options: [
            { text: "1 288", value: "a" },
            { text: "1 260", value: "b" },
            { text: "192", value: "c" },
            { text: "112", value: "d" }
        ],
        correctAnswer: "a",
        steps: `\\[ 1400 \\times 0,92 = 1288 \\]`
    }
];
