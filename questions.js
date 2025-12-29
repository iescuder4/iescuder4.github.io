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
            <strong>1. Anàlisi de la freqüència de sortides:</strong><br>
            La capacitat de transport depèn de quantes vegades surt el tren en una hora (60 minuts). Si l'interval entre sortides és de 15 minuts:
            \\[ \\text{Sortides per hora} = \\frac{60 \\, \\text{min}}{15 \\, \\text{min/sortida}} = 4 \\, \\text{sortides} \\]

            <strong>2. Verificació del temps de trajecte:</strong><br>
            El tren triga 5 minuts a fer el recorregut. Com que 5 minuts és menor que l'interval de 15 minuts, el tren té temps suficient per anar, tornar i estar llest per a la següent sortida. Per tant, el temps de trajecte no limita la capacitat.

            <strong>3. Càlcul de la capacitat total:</strong><br>
            Multipliquem la capacitat de cada viatge pel nombre de sortides:
            \\[ 48 \\, \\text{passatgers/viatge} \\times 4 \\, \\text{viatges/h} = 192 \\, \\text{passatgers/h} \\]
        `
    },
    {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `En un circuit elèctric es connecten en sèrie dues resistències de tolerància ±5 % i valors nominals 1,1 kΩ i 3,3 kΩ. La resistència equivalent d’aquest circuit és:`,
        options: [
            { text: "(4,4 ± 0,055) kΩ", value: "a" },
            { text: "(4,4 ± 0,11) kΩ", value: "b" },
            { text: "(4,4 ± 0,22) kΩ", value: "c" },
            { text: "(4,4 ± 0,44) kΩ", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <strong>1. Càlcul de la Resistència Equivalent:</strong><br>
            En un circuit en sèrie, la resistència total (equivalent) és la suma algebraica de les resistències individuals:
            \\[ R_{eq} = R_1 + R_2 = 1,1 \\, \\text{k}\\Omega + 3,3 \\, \\text{k}\\Omega = 4,4 \\, \\text{k}\\Omega \\]

            <strong>2. Determinació de la Tolerància:</strong><br>
            Ambdues resistències tenen una tolerància del 5%. En sumar components del mateix tipus i tolerància, la tolerància relativa es manté sobre el total:
            \\[ \\text{Tolerància Absoluta} = R_{eq} \\times \\text{Tolerància \\%} \\]
            \\[ 4,4 \\, \\text{k}\\Omega \\times 0,05 = 0,22 \\, \\text{k}\\Omega \\]

            <strong>3. Expressió del Resultat:</strong><br>
            La resistència es defineix com el valor nominal més/menys el marge d'error:
            \\[ R = (4,4 \\pm 0,22) \\, \\text{k}\\Omega \\]
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `La tensió de ruptura del titani comercial sense aliar és σr = 75 MPa. Si apliquem una força axial de 750 N a una barra d’aquest titani, quina secció mínima ha de tenir perquè no es trenqui?`,
        options: [
            { text: "1 mm²", value: "a" },
            { text: "10 mm²", value: "b" },
            { text: "100 mm²", value: "c" },
            { text: "1 000 mm²", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Relació entre Tensió, Força i Secció:</strong><br>
            La tensió (\\( \\sigma \\)) es defineix com la força aplicada dividida per l'àrea de la secció transversal:
            \\[ \\sigma = \\frac{F}{S} \\implies S = \\frac{F}{\\sigma} \\]

            <strong>2. Homogeneïtzació d'unitats (SI):</strong><br>
            Hem de passar la tensió de MegaPascals (MPa) a Pascals (N/m²):
            \\[ 75 \\, \\text{MPa} = 75 \\times 10^6 \\, \\text{N/m}^2 \\]

            <strong>3. Càlcul de la Secció (S):</strong><br>
            \\[ S = \\frac{750 \\, \\text{N}}{75 \\times 10^6 \\, \\text{N/m}^2} = 10^{-5} \\, \\text{m}^2 \\]

            <strong>4. Conversió a unitats pràctiques (mm²):</strong><br>
            Sabem que \\( 1 \\, \\text{m}^2 = 10^6 \\, \\text{mm}^2 \\):
            \\[ S = 10^{-5} \\, \\text{m}^2 \\times 10^6 = 10 \\, \\text{mm}^2 \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Un cotxe que consumeix 7,1 L/100 km i produeix 2,45 kg de CO₂ per litre de benzina fa un viatge de 925 km a 100 km/h. Quina quantitat de CO₂ emet?`,
        options: [
            { text: "1 609 kg", value: "a" },
            { text: "160,9 kg", value: "b" },
            { text: "188,1 kg", value: "c" },
            { text: "1 881 kg", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Consum de combustible:</strong><br>
            Primer calculem el total de litres consumits en el trajecte de 925 km:
            \\[ \\text{Litres totals} = \\frac{7,1 \\, \\text{L}}{100 \\, \\text{km}} \\times 925 \\, \\text{km} = 65,675 \\, \\text{L} \\]

            <strong>2. Càlcul d'emissions:</strong><br>
            Si cada litre emet 2,45 kg de CO₂, multipliquem el consum total per aquest factor:
            \\[ \\text{Massa de CO}_2 = 65,675 \\, \\text{L} \\times 2,45 \\, \\text{kg/L} = 160,903 \\dots \\, \\text{kg} \\]

            <strong>Nota:</strong> La dada de la velocitat (100 km/h) no és necessària per a aquest càlcul, ja que el consum per distància ja està definit.
        `
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `La fiabilitat d’un artefacte és del 92 % per a 2 400 h. D’un lot inicial de 1 400 unitats, quants artefactes és probable que continuïn funcionant?`,
        options: [
            { text: "1 288", value: "a" },
            { text: "1 260", value: "b" },
            { text: "192", value: "c" },
            { text: "112", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Concepte de Fiabilitat:</strong><br>
            La fiabilitat (R) és la probabilitat que un sistema realitzi la seva funció sota unes condicions i temps determinats. En aquest cas, R = 0,92 (92%).

            <strong>2. Càlcul del nombre esperat d'unitats:</strong><br>
            Per conèixer el nombre d'artefactes que sobreviuran a les 2.400 hores, apliquem el percentatge al total del lot inicial:
            \\[ N_{final} = N_{inicial} \\times R \\]
            \\[ N_{final} = 1400 \\, \\text{unitats} \\times 0,92 = 1288 \\, \\text{unitats} \\]

            <strong>3. Interpretació del resultat:</strong><br>
            D'acord amb la probabilitat, s'espera que 1.288 unitats continuïn operatives, mentre que la resta (112 unitats) haurien fallat.
        `
    }
];
