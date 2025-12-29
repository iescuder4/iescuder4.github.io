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
            <strong>1. Concepte de tolerància dimensional:</strong><br>
            La tolerància indica el marge d'error acceptable sobre una mesura nominal. El símbol ± ens indica que hem de sumar i restar aquest valor a la mesura base per trobar l'interval de valors vàlids.
            
            <strong>2. Càlcul dels límits:</strong><br>
            \\[ \\text{Límit superior} = 146 + 0,8 = 146,8 \\, \\text{mm} \\]
            \\[ \\text{Límit inferior} = 146 - 0,8 = 145,2 \\, \\text{mm} \\]
            
            <strong>3. Conclusió:</strong><br>
            S'acceptarà qualsevol peça que estigui dins de l'interval [145,2 , 146,8] mm. Qualsevol mesura fora d'aquest rang es considera fora de tolerància. 
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
            <strong>1. Llei de Pouillet:</strong><br>
            La resistència d'un conductor depèn de la seva resistivitat (ρ), la seva longitud (L) i la seva secció (S). La fórmula és: 
            \\[ R = \\rho \\frac{L}{S} \\implies L = \\frac{R \\cdot S}{\\rho} \\]
            
            <strong>2. Conversió d'unitats al Sistema Internacional:</strong><br>
            - Secció (S): \\( 5 \\, \\text{mm}^2 = 5 \\times 10^{-6} \\, \\text{m}^2 \\)
            - Resistivitat (ρ): \\( 0,0171 \\, \\mu\\Omega\\cdot m = 0,0171 \\times 10^{-6} \\, \\Omega\\cdot m \\)
            
            <strong>3. Càlcul de la longitud:</strong><br>
        \\[ L = \\frac{0,05 \\cdot 5 \\times 10^{-6}}{0,0171 \\times 10^{-6}} = \\frac{0,25}{0,0171} = 14,62 \\, \\text{m} \\] 
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `L'acer inoxidable AISI 316 té una tensió de ruptura σr = 620 MPa. Quina és la força axial màxima que es pot aplicar a una barra massissa de 12 mm de diàmetre sense que es trenqui?`,
        options: [
            { text: "70,12 kN", value: "a" },
            { text: "140,8 kN", value: "b" },
            { text: "80,5 kN", value: "c" },
            { text: "56,10 kN", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Àrea de la secció circular:</strong><br>
            La barra és massissa i circular, per tant la seva superfície es calcula amb el diàmetre (d = 12 mm):
            \\[ S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot 12^2}{4} = 113,1 \\, \\text{mm}^2 \\]
            
            <strong>2. Relació Força i Tensió:</strong><br>
            La força màxima (F) abans de la ruptura es defineix com:
            \\[ F = \\sigma_r \\cdot S \\]
            
            <strong>3. Càlcul final:</strong><br>
            \\[ F = 620 \\, \\text{N/mm}^2 \\times 113,1 \\, \\text{mm}^2 = 70122 \\, \\text{N} \\]
          Convertint a quilonewtons (dividir per 1000): \\( F \\approx 70,12 \\, \\text{kN} \\).
        `
    },
    {
        type: "questions",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un cilindre hidràulic ha d'exercir una força de 20 kN en l'avanç. Si el diàmetre del cilindre és 50 mm i el de la tija 32 mm, quina pressió ha de proporcionar el grup?`,
        options: [
            { text: "3,79 MPa", value: "a" },
            { text: "10,19 MPa", value: "b" },
            { text: "17,25 MPa", value: "c" },
            { text: "24,87 MPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Superfície de treball en l'avanç:</strong><br>
            En la cursa d'avanç, el fluid actua sobre tota la cara del pistó. El diàmetre és 50 mm:
            \\[ S = \\frac{\\pi \\cdot 50^2}{4} = 1963,5 \\, \\text{mm}^2 = 1,9635 \\times 10^{-3} \\, \\text{m}^2 \\]
            
            <strong>2. Càlcul de la pressió:</strong><br>
           Utilitzem la fórmula de la pressió hidràulica \\( p = \\frac{F}{S} \\):
            \\[ p = \\frac{20000 \\, \\text{N}}{1,9635 \\times 10^{-3} \\, \\text{m}^2} = 10.185.892 \\, \\text{Pa} \\]
            
            <strong>3. Resultat en MegaPascals:</strong><br>
           \\( 10.185.892 \\, \\text{Pa} \\approx 10,19 \\, \\text{MPa} \\).
            <br><em>Nota: El diàmetre de la tija només s'utilitzaria si ens demanessin el retrocés.</em>
        `
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Un sistema de pintatge permet obtenir un màxim de 130 unitats/h. Sobre cada unitat es fan dues operacions simultànies de t1=23s i t2=15s. Quin és el temps mort o d'espera entre unitats?`,
        options: [
            { text: "4,69 s", value: "a" },
            { text: "12,70 s", value: "b" },
            { text: "8,70 s", value: "c" },
            { text: "9,20 s", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Temps de cicle total (T):</strong><br>
            Calculem el temps total assignat a cada unitat segons la producció horària (3600 segons):
            \\[ T_{total} = \\frac{3600 \\, \\text{s}}{130 \\, \\text{unitats}} = 27,69 \\, \\text{s/unitat} \\]
            
            <strong>2. Temps d'operació real:</strong><br>
            Com que les operacions són <strong>simultànies</strong>, el temps de treball real és el de la tasca més llarga:
            \\[ T_{treball} = \\max(23, 15) = 23 \\, \\text{s} \\]
            
            <strong>3. Càlcul del temps mort:</strong><br>
            El temps mort és el temps que el sistema espera entre acabar una unitat i començar la següent:
           \\[ T_{mort} = T_{total} - T_{treball} = 27,69 - 23 = 4,69 \\, \\text{s} \\]
        `
    }
];
const exerciseBodega = {
    type: "exercise",
    category: "control logic i funcions logiques",
    text: `<strong>Exercici: Control de la Bodega de Vi</strong><br>
    Una bodega de vi té dues premses (p1 i p2) i un equip d'embotellament (pe). Per raons elèctriques, s'ha de controlar el funcionament d'aquests equips mitjançant un sistema d'alarma (r) que s'activarà (r=1) en els casos següents:
    <ul>
        <li>Quan funcionin simultàniament les dues premses i l'equip d'embotellament.</li>
        <li>Quan funcionin les dues premses, però no l'equip d'embotellament, i un interruptor general (g12) estigui activat.</li>
        <li>Quan funcioni l'equip d'embotellament i una de les dues premses (només una), i un interruptor general (g15) estigui activat.</li>
    </ul>
    A més, s'ha de tenir en compte que l'estat en què només funciona una de les dues premses i l'equip d'embotellament no funciona és una situació impossible (X).`,
    steps: `
        <strong>a) Taula de Veritat:</strong><br>
        Definim les variables d'entrada: <em>p1, p2</em> (premses), <em>pe</em> (embotellament), <em>g12</em> i <em>g15</em> (interruptors). Per simplificar la taula segons la solució oficial, agrupem les combinacions de premses (p1 i p2) com <em>ac</em> (ambdues connectades) i <em>so</em> (només una).
        <br><br>
        <table border="1" style="width:100%; text-align:center; border-collapse: collapse;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>p1, p2 (Premses)</th>
                    <th>pe (Embotellament)</th>
                    <th>g12 / g15</th>
                    <th>r (Alarma)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>0 (Cap)</td><td>0</td><td>X</td><td>0</td></tr>
                <tr><td>0 (Cap)</td><td>1</td><td>X</td><td>0</td></tr>
                <tr><td>so (Només una)</td><td>0</td><td>X</td><td><strong>X (Impossible)</strong></td></tr>
                <tr><td>so (Només una)</td><td>1</td><td>g15=0</td><td>0</td></tr>
                <tr><td>so (Només una)</td><td>1</td><td>g15=1</td><td>1</td></tr>
                <tr><td>ac (Ambdues)</td><td>0</td><td>g12=0</td><td>0</td></tr>
                <tr><td>ac (Ambdues)</td><td>1</td><td>X</td><td>1</td></tr>
                <tr><td>ac (Ambdues)</td><td>0</td><td>g12=1</td><td>1</td></tr>
            </tbody>
        </table>
        <br>
        
        <strong>b) Funció Lògica simplificada:</strong><br>
        A partir de les condicions de l'enunciat i la taula, la funció de l'alarma (r) es pot expressar sumant els casos on r=1. Si considerem que l'estat impossible (X) no s'ha d'activar (X=0), la funció queda:
        \\[ r = (p1 \\cdot p2 \\cdot pe) + (p1 \\cdot p2 \\cdot \\overline{pe} \\cdot g_{12}) + ((p1 \\oplus p2) \\cdot pe \\cdot g_{15}) \\]
        
        <em>Simplificació segons la pauta oficial:</em><br>
        \\[ r = ac \\cdot pe + ac \\cdot \\overline{pe} \\cdot g_{12} + so \\cdot pe \\cdot g_{15} \\]
        On:
        <ul>
            <li><strong>ac</strong>: p1 i p2 funcionant (p1 · p2).</li>
            <li><strong>so</strong>: Només una premsa funcionant (p1 ⊕ p2).</li>
        </ul>

        <strong>c) Esquema de portes lògiques:</strong><br>
        L'esquema representa la implementació de la funció anterior. Utilitzem:
        <ul>
            <li>Portes <strong>AND</strong> (per a les multiplicacions lògiques/condicions simultànies).</li>
            <li>Portes <strong>OR</strong> (per a la suma de condicions que activen l'alarma).</li>
            <li>Portes <strong>NOT</strong> (per a les inversions, com \\(\\overline{pe}\\)).</li>
            <li>Portes <strong>XOR</strong> (per detectar quan només funciona una de les dues premses).</li>
        </ul>
        <br>
        <img src="ruta/a/esquema_logic_bodega.jpg" alt="Esquema de portes lògiques de la bodega">
    `
};
