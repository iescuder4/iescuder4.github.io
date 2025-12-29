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
 },
          {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `Qüestió 2<br>
        En un circuit elèctric es connecten en sèrie dues resistències de tolerància ±5 % i
        valors nominals 1,1 kΩ i 3,3 kΩ. La resistència equivalent d’aquest circuit és:
        <br>a) (4,4 ± 0,055) kΩ
        <br>b) (4,4 ± 0,11) kΩ
        <br>c) (4,4 ± 0,22) kΩ
        <br>d) (4,4 ± 0,44) kΩ`,
        correctAnswer: "c",
        steps: `
            <strong>Càlcul de la resistència total:</strong><br>
            En un circuit en sèrie, les resistències es sumen directament:<br>
            \\[
            R_{\\text{total}} = R_1 + R_2 = 1,1 \\, \\text{k}\\Omega + 3,3 \\, \\text{k}\\Omega = 4,4 \\, \\text{k}\\Omega
            \\]
            <br><strong>Càlcul de la tolerància total:</strong><br>
            La tolerància es calcula sumant les toleràncies relatives de cada resistència:<br>
            \\[
            \\text{Tolerància total} = 0,05 \\times 4,4 = 0,22 \\, \\text{k}\\Omega
            \\]
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `Qüestió 3<br>
        La tensió de ruptura del titani comercial sense aliar és σ<sub>r</sub> = 75 MPa.
        Si apliquem una força axial de 750 N a una barra d’aquest titani, quina secció mínima
        ha de tenir perquè no es trenqui?
        <br>a) 1 mm²
        <br>b) 10 mm²
        <br>c) 100 mm²
        <br>d) 1 000 mm²`,
        correctAnswer: "b",
        steps: `
            <strong>Càlcul de la secció mínima:</strong><br>
            La tensió es calcula amb la fórmula \\( \\sigma = \\frac{F}{S} \\), on \\(F\\) és la força i \\(S\\) és la secció.<br>
            Per tant, la secció mínima serà:<br>
            \\[
            S = \\frac{750}{75 \\times 10^6} = 1 \\times 10^{-5} \\, \\text{m}^2 = 10 \, \\text{mm}^2
            \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Qüestió 4<br>
        Un cotxe que consumeix 7,1 L/100 km i produeix 2,45 kg de CO₂ per litre de benzina
        fa un viatge de 925 km a 100 km/h. Quina quantitat de CO₂ emet?
        <br>a) 1 609 kg
        <br>b) 160,9 kg
        <br>c) 188,1 kg
        <br>d) 1 881 kg`,
        correctAnswer: "b",
        steps: `
            <strong>Càlcul del consum de benzina:</strong><br>
            El cotxe consumeix 7,1 L per cada 100 km, per tant per 925 km el consum total serà:<br>
            \\[
            7,1 \, \\text{L/100 km} \\times 925 \, \\text{km} = 65,7 \, \\text{L}
            \\]
            <br><strong>Càlcul de CO₂ emès:</strong><br>
            El cotxe emet 2,45 kg de CO₂ per cada litre de benzina:<br>
            \\[
            65,7 \\times 2,45 = 160,9 \, \\text{kg de CO₂}
            \\]
        `
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Qüestió 5<br>
        La fiabilitat d’un artefacte és del 92 % per a 2 400 h.
        D’un lot inicial de 1 400 unitats, quants artefactes és probable que continuïn funcionant?
        <br>a) 1 288
        <br>b) 1 260
        <br>c) 192
        <br>d) 112`,
        correctAnswer: "a",
        steps: `
            <strong>Càlcul de la quantitat d'artefactes funcionant:</strong><br>
            Sabem que la fiabilitat és del 92%, per tant la quantitat d'artefactes que continuaran funcionant serà:<br>
            \\[
            0,92 \\times 1400 = 1288
            \\]
        `
    }
