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
            La capacitat de transport depèn de quantes vegades surt el tren en una hora. L'interval és de 15 minuts.
            \\[ \\text{Sortides per hora} = \\frac{60 \\, \\text{min}}{15 \\, \\text{min/sortida}} = 4 \\, \\text{sortides} \\]

            <strong>2. Verificació del temps de trajecte:</strong><br>
            El tren triga 5 minuts a fer el recorregut. Com que 5 minuts és menor que l'interval de 15 minuts, el tren té temps de sobra per tornar i tornar a carregar passatgers abans de la següent sortida. El temps de trajecte no és una limitació aquí.

            <strong>3. Càlcul de la capacitat total:</strong><br>
            Multipliquem la capacitat de cada viatge pel nombre de viatges realitzats en una hora:
            \\[ 48 \\, \\text{passatgers/viatge} \\times 4 \\, \\text{viatges/h} = 192 \\, \\text{passatgers/h} \\]
        `
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
            <strong>1. Resistència equivalent (Sèrie):</strong><br>
            En un circuit en sèrie, la resistència total és la suma de les resistències individuals:
            \\[ R_{eq} = R_1 + R_2 = 1,1 \\, \\text{k}\\Omega + 3,3 \\, \\text{k}\\Omega = 4,4 \\, \\text{k}\\Omega \\]

            <strong>2. Càlcul de la tolerància absoluta:</strong><br>
            Totes dues resistències tenen una tolerància del 5% (0,05). Quan sumem components, l'error o tolerància total s'aplica sobre el valor final de la suma:
            \\[ \\text{Tolerància} = 4,4 \\, \\text{k}\\Omega \\times 0,05 = 0,22 \\, \\text{k}\\Omega \\]

            <strong>3. Resultat final:</strong><br>
            Expressem el valor nominal seguit del seu marge d'error:
            \\[ R = (4,4 \\pm 0,22) \\, \\text{k}\\Omega \\]
        `
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
            <strong>1. Definició de tensió (σ):</strong><br>
            La tensió és la força aplicada per unitat de superfície. La fórmula és:
            \\[ \\sigma = \\frac{F}{S} \\implies S = \\frac{F}{\\sigma} \\]

            <strong>2. Conversió d'unitats:</strong><br>
            És vital treballar en unitats del SI. Sabem que 1 MPa = 1.000.000 Pa (N/m²).
            \\[ 75 \\, \\text{MPa} = 75 \\times 10^6 \\, \\text{N/m}^2 \\]

            <strong>3. Càlcul de la secció en m²:</strong><br>
            \\[ S = \\frac{750 \\, \\text{N}}{75 \\times 10^6 \\, \\text{N/m}^2} = 10^{-5} \\, \\text{m}^2 \\]

            <strong>4. Conversió a mm²:</strong><br>
            Com que \\( 1 \\, \\text{m}^2 = 10^6 \\, \\text{mm}^2 \\):
            \\[ 10^{-5} \\, \\text{m}^2 \\times 10^6 = 10 \\, \\text{mm}^2 \\]
        `
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
            <strong>1. Consum total de combustible:</strong><br>
            Primer calculem quants litres de benzina necessitem per recórrer 925 km segons el seu consum mitjà:
            \\[ \\text{Litres} = \\frac{7,1 \\, \\text{L}}{100 \\, \\text{km}} \\times 925 \\, \\text{km} = 65,675 \\, \\text{L} \\]

            <strong>2. Càlcul de les emissions de CO₂:</strong><br>
            Sabent que cada litre cremat allibera 2,45 kg de CO₂, multipliquem:
            \\[ \\text{CO}_2 = 65,675 \\, \\text{L} \\times 2,45 \\, \\text{kg/L} = 160,90375 \\, \\text{kg} \\]

            <strong>Nota:</strong> La velocitat (100 km/h) és una dada irrellevant per al càlcul final d'emissions totals si ja coneixem el consum mitjà per distància.
        `
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
        steps: `
            <strong>1. Concepte de Fiabilitat R(t):</strong><br>
            La fiabilitat (0,92) representa la probabilitat que un component funcioni sense fallades durant un temps determinat. En termes estadístics, ens diu quin percentatge d'un lot sobreviurà.

            <strong>2. Aplicació al lot de producció:</strong><br>
            Per trobar el nombre d'unitats funcionals (esperança matemàtica), multipliquem la mida del lot inicial per la taxa de fiabilitat:
            \\[ N_{\\text{funcionant}} = N_{\\text{total}} \\times \\text{Fiabilitat} \\]
            \\[ 1400 \\, \\text{unitats} \\times 0,92 = 1288 \\, \\text{unitats} \\]

            <strong>3. Interpretació:</strong><br>
            Això significa que, estadísticament, s'espera que 1.288 unitats segueixin funcionant i que 112 hagin fallat després de les 2.400 hores.
        `
    }
];
