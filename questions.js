const questions = [
    {
        type: "questions",
        category: "organitzacio industrial",
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
            El tren triga 5 minuts a fer el recorregut. Com que 5 minuts és menor que l'interval de 15 minuts, el tren té temps suficient per anar, tornar i estar llest per a la següent sortida.

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
            En un circuit en sèrie, la resistència total és la suma de les resistències individuals:
            \\[ R_{eq} = R_1 + R_2 = 1,1 \\, \\text{k}\\Omega + 3,3 \\, \\text{k}\\Omega = 4,4 \\, \\text{k}\\Omega \\]

            <strong>2. Determinació de la Tolerància:</strong><br>
            Ambdues tenen un 5% de tolerància. Quan sumem, la tolerància relativa es manté sobre la suma total:
            \\[ \\text{Error} = 4,4 \\, \\text{k}\\Omega \\times 0,05 = 0,22 \\, \\text{k}\\Omega \\]

            <strong>3. Resultat:</strong>\\[ R = (4,4 \\pm 0,22) \\, \\text{k}\\Omega \\]
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
            <strong>1. Fórmula de la tensió:</strong>\\[ \\sigma = \\frac{F}{S} \\implies S = \\frac{F}{\\sigma} \\]
            <strong>2. Unitats:</strong>\\[ 75 \\, \\text{MPa} = 75 \\times 10^6 \\, \\text{N/m}^2 \\]
            <strong>3. Càlcul:</strong>\\[ S = \\frac{750}{75 \\times 10^6} = 10^{-5} \\, \\text{m}^2 \\]
            <strong>4. Conversió:</strong>\\[ 10^{-5} \\, \\text{m}^2 \\times 10^6 = 10 \\, \\text{mm}^2 \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Un cotxe que consumeix 7,1 L/100 km i produeix 2,45 kg de CO₂ per litre de benzina fa un viatge de 925 km. Quina quantitat de CO₂ emet?`,
        options: [
            { text: "1 609 kg", value: "a" },
            { text: "160,9 kg", value: "b" },
            { text: "188,1 kg", value: "c" },
            { text: "1 881 kg", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Consum total:</strong>\\[ L = \\frac{7,1}{100} \\times 925 = 65,675 \\, \\text{L} \\]
            <strong>2. Emissions:</strong>\\[ CO_2 = 65,675 \\times 2,45 = 160,9 \\, \\text{kg} \\]
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
            <strong>1. Càlcul de supervivència:</strong>\\[ N = 1400 \\times 0,92 = 1288 \\, \\text{unitats} \\]
        `
    },
    {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `En un plànol s'especifica que la longitud d'una peça ha de ser (146 ± 0,8) mm. S'acceptaran totes les peces de longitud:`,
        options: [
            { text: "superior a 146,8 mm.", value: "a" },
            { text: "compresa entre 146 mm i 146,8 mm.", value: "b" },
            { text: "compresa entre 145,6 mm i 146,4 mm.", value: "c" },
            { text: "compresa entre 145,2 mm i 146,8 mm.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>1. Límits:</strong><br>
            Límit superior: 146 + 0,8 = 146,8 mm.<br>
            Límit inferior: 146 - 0,8 = 145,2 mm.
        `
    },
    {
        type: "questions",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `Un fil de coure de 5 mm² de secció té una resistència de 0,05 Ω. La resistivitat del coure és ρ = 0,0171 μΩ·m. Quina és la longitud del fil?`,
        options: [
            { text: "0,324 m", value: "a" },
            { text: "14,62 m", value: "b" },
            { text: "45,93 m", value: "c" },
            { text: "2,92 m", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Llei de Pouillet:</strong>\\[ L = \\frac{R \\cdot S}{\\rho} \\]
            <strong>2. Unitats:</strong>\\[ S = 5 \\times 10^{-6} \\, \\text{m}^2 ; \\rho = 0,0171 \\times 10^{-6} \\, \\Omega\\cdot m \\]
            <strong>3. Càlcul:</strong>\\[ L = \\frac{0,05 \\cdot 5}{0,0171} = 14,62 \\, \\text{m} \\]
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `L'acer inoxidable AISI 316 té σr = 620 MPa. Quina és la força axial màxima per a 12 mm de diàmetre?`,
        options: [
            { text: "70,12 kN", value: "a" },
            { text: "140,8 kN", value: "b" },
            { text: "80,5 kN", value: "c" },
            { text: "56,10 kN", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Àrea:</strong>\\[ S = \\frac{\\pi \\cdot 12^2}{4} = 113,1 \\, \\text{mm}^2 \\]
            <strong>2. Força:</strong>\\[ F = 620 \\times 113,1 = 70122 \\, \\text{N} = 70,12 \\, \\text{kN} \\]
        `
    },
    {
        type: "questions",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Cilindre de 50 mm diàmetre per exercir 20 kN. Quina pressió necessita?`,
        options: [
            { text: "3,79 MPa", value: "a" },
            { text: "10,19 MPa", value: "b" },
            { text: "17,25 MPa", value: "c" },
            { text: "24,87 MPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Àrea:</strong>\\[ S = \\frac{\\pi \\cdot 0,05^2}{4} = 1,963 \\times 10^{-3} \\, \\text{m}^2 \\]
            <strong>2. Pressió:</strong>\\[ p = \\frac{20000}{1,963 \\times 10^{-3}} = 10,19 \\, \\text{MPa} \\]
        `
    },
{
    type: "exercicis",
    category: "control logic i funcions logiques",
    text: `En una explotació vinícola es controla el grau alcohòlic i l’acidesa per determinar el moment de la verema i l’ús del raïm. Per elaborar un vi negre de qualitat, cal que el raïm estigui veremat i que tingui un grau alcohòlic d’entre el 12 % i el 15 % vol. Les variables d’estat són l’acidesa \\(ac\\) (\\(ac = 1\\) si el raïm és veremat; \\(ac = 0\\) si no ho és), el grau alcohòlic \\(g_{12}\\) (\\(g_{12} = 1\\) si és superior al 12 % vol.; \\(g_{12} = 0\\) si és inferior) i el grau alcohòlic \\(g_{15}\\) (\\(g_{15} = 1\\) si és superior al 15 % vol.; \\(g_{15} = 0\\) si és inferior). La sortida és \\(r\\) (\\(r = 1\\) si el raïm és per a vi de qualitat; \\(r = 0\\) per a altres usos).
           <br><br>
           Determineu:
           <br><strong>a)</strong> La taula de veritat del sistema. [1 punt]
           <br><strong>b)</strong> La funció lògica simplificada \\(r\\) entre les variables d’estat, si la situació impossible es considera que no ha de donar raïm de qualitat (\\(X = 0\\)). [0,5 punts]
           <br><strong>c)</strong> L’esquema lògic mitjançant portes lògiques. [1 punt]`,
    correctAnswer: "", 
    steps: `
        <strong>a) Taula de veritat:</strong>
        <br>
        Hem de tenir en compte que hi ha estats impossibles (no pot ser que el grau sigui superior al 15 % i alhora inferior al 12 %).
        <br><br>
        <table border="1" style="width:100%; text-align:center; border-collapse: collapse; font-family: Arial, sans-serif;">
            <tr style="background-color: #f2f2f2;">
                <td><strong>\\(ac\\)</strong></td>
                <td><strong>\\(g_{12}\\)</strong></td>
                <td><strong>\\(g_{15}\\)</strong></td>
                <td><strong>\\(r\\) (Sortida)</strong></td>
                <td><strong>Observacions</strong></td>
            </tr>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>No veremat</td></tr>
            <tr><td>0</td><td>0</td><td>1</td><td><strong>X</strong></td><td>Impossible</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>No veremat</td></tr>
            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>No veremat</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>Grau < 12%</td></tr>
            <tr><td>1</td><td>0</td><td>1</td><td><strong>X</strong></td><td>Impossible</td></tr>
            <tr><td>1</td><td>1</td><td>0</td><td><strong>1</strong></td><td><strong>Vi qualitat</strong></td></tr>
            <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>Grau > 15%</td></tr>
        </table>
        <br>
        <strong>b) Funció lògica simplificada (amb \\(X = 0\\)):</strong>
        <br>
        Perquè la sortida \\(r\\) sigui 1, s'han de complir simultàniament tres condicions: que estigui veremat (\\(ac\\)), que el grau sigui > 12% (\\(g_{12}\\)) i que NO sigui > 15% (\\(\\overline{g_{15}}\\)).
        \\[
        r = ac \\cdot g_{12} \\cdot \\overline{g_{15}}
        \\]
        <br>
        <strong>c) Esquema de portes lògiques:</strong>
        <br>
        L'esquema es construeix amb una porta <strong>NOT</strong> per invertir la senyal de \\(g_{15}\\) i una porta <strong>AND</strong> de tres entrades per realitzar el producte lògic:
        <br><br>
        <img src="img/esquema_logic_vi.png" alt="Esquema de portes lògiques del control de vi">
    `
}
];
