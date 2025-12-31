const questions = [
    // --- BLOC 1: Qüestions Curtes (1-5) ---
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
        category: "maquines i sistemes electrics i electrotecnics",
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

    // --- BLOC 2: Qüestions Curtes (6-10) ---
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
        type: "questions",
        category: "organitzacio industrial",
        text: `130 unitats/h. Operacions simultànies de 23s i 15s. Temps mort?`,
        options: [
            { text: "4,69 s", value: "a" },
            { text: "12,70 s", value: "b" },
            { text: "8,70 s", value: "c" },
            { text: "9,20 s", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Temps cicle:</strong> 3600 / 130 = 27,69 s.<br>
            <strong>2. Treball real:</strong> max(23, 15) = 23 s.<br>
            <strong>3. Mort:</strong> 27,69 - 23 = 4,69 s.
        `
    },

    // --- BLOC 3: Exercicis Complexos (Opció A) ---
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
    },
    {
        type: "exercicis",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un ascensor hidràulic d’acció directa funciona mitjançant un cilindre hidràulic connectat directament a la cabina de l’ascensor. El cilindre té un diàmetre interior \\(d_{\\text{int}} = 94 \\, \\text{mm}\\) i el diàmetre de la tija és \\(d_{\\text{tija}} = 60 \\, \\text{mm}\\). La massa de la cabina, la tija i la càrrega és \\(m = 980 \\, \\text{kg}\\). Si el cilindre hidràulic manté en repòs la cabina, determineu:
               <br><strong>a)</strong> La pressió relativa, \\(p_{\\text{int}}\\), a l’interior del cilindre. [1 punt]
               <br><strong>b)</strong> La tensió normal a compressió, \\(\\sigma_{\\text{tija}}\\), de la tija. [0,5 punts]
               <br><br>
               Si una bomba subministra un cabal d’oli \\(q = 2{,}3 \\, \\text{L/s}\\) al cilindre, a una pressió \\(p = 1{,}7 \\, \\text{MPa}\\), i l’ascensor puja a una velocitat constant \\(v = 0{,}33 \\, \\text{m/s}\\), determineu:
               <br><strong>c)</strong> La potència, \\(P_h\\), proporcionada per la bomba. [0,5 punts]
               <br><strong>d)</strong> El rendiment, \\(\\eta\\), del cilindre. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Càlcul de la pressió relativa a l'interior del cilindre:</strong>
            <br>
            La força que ha de suportar el cilindre és el pes total (massa $\\times$ gravetat). Considerem \\(g = 9{,}81 \\, \\text{m/s}^2\\).
            \\[
            F = m \\cdot g = 980 \\, \\text{kg} \\cdot 9{,}81 \\, \\text{m/s}^2 = 9613{,}8 \\, \\text{N}
            \\]
            L'àrea efectiva del cilindre (pistó) es calcula amb el diàmetre interior \\(d_{\\text{int}} = 94 \\, \\text{mm} = 0{,}094 \\, \\text{m}\\):
            \\[
            S_{\\text{int}} = \\frac{\\pi \\cdot d_{\\text{int}}^2}{4} = \\frac{\\pi \\cdot (0{,}094)^2}{4} = 6{,}939 \\cdot 10^{-3} \\, \\text{m}^2
            \\]
            La pressió necessària per mantenir l'equilibri és:
            \\[
            p_{\\text{int}} = \\frac{F}{S_{\\text{int}}} = \\frac{9613{,}8}{6{,}939 \\cdot 10^{-3}} = 1.385.473 \\, \\text{Pa} \\approx 1{,}39 \\, \\text{MPa}
            \\]
            <br>
            <strong>b) Tensió normal a compressió de la tija:</strong>
            <br>
            La tija suporta la mateixa força de compressió (el pes de la cabina). Calculem la seva secció amb \\(d_{\\text{tija}} = 60 \\, \\text{mm} = 0{,}06 \\, \\text{m}\\):
            \\[
            S_{\\text{tija}} = \\frac{\\pi \\cdot d_{\\text{tija}}^2}{4} = \\frac{\\pi \\cdot (0{,}06)^2}{4} = 2{,}827 \\cdot 10^{-3} \\, \\text{m}^2
            \\]
            La tensió (\\(\\sigma\\)) és força dividit per secció:
            \\[
            \\sigma_{\\text{tija}} = \\frac{F}{S_{\\text{tija}}} = \\frac{9613{,}8}{2{,}827 \\cdot 10^{-3}} = 3.400.707 \\, \\text{Pa} \\approx 3{,}40 \\, \\text{MPa}
            \\]
            <br>
            <strong>c) Potència proporcionada per la bomba:</strong>
            <br>
            La potència hidràulica es calcula com el producte de la pressió pel cabal.
            <br>Primer convertim les unitats al SI:
            <br>- Pressió: \\(p = 1{,}7 \\, \\text{MPa} = 1{,}7 \\cdot 10^6 \\, \\text{Pa}\\)
            <br>- Cabal: \\(q = 2{,}3 \\, \\text{L/s} = 2{,}3 \\cdot 10^{-3} \\, \\text{m}^3/\\text{s}\\)
            \\[
            P_h = p \\cdot q = 1{,}7 \\cdot 10^6 \\cdot 2{,}3 \\cdot 10^{-3} = 3910 \\, \\text{W} = 3{,}91 \\, \\text{kW}
            \\]
            <br>
            <strong>d) Rendiment del cilindre:</strong>
            <br>
            El rendiment (\\(\\eta\\)) és la relació entre la potència útil (mecànica) i la potència absorbida (hidràulica).
            <br>La potència útil és la força per la velocitat d'ascens:
            \\[
            P_{\\text{útil}} = F \\cdot v = 9613{,}8 \\, \\text{N} \\cdot 0{,}33 \\, \\text{m/s} = 3172{,}55 \\, \\text{W}
            \\]
            Finalment, el rendiment:
            \\[
            \\eta = \\frac{P_{\\text{útil}}}{P_h} = \\frac{3172{,}55}{3910} = 0{,}811 \\quad (81{,}1 \\%)
            \\]
        `
    },
    {
        type: "exercicis",
        category: "motors reductors",
        text: `Una persiana d’amplària \\(a = 3{,}2 \\, \\text{m}\\) i alçària \\(h = 2{,}2 \\, \\text{m}\\) és feta d’un material de densitat superficial \\(\\sigma = 12 \\, \\text{kg/m}^2\\). La persiana s’acciona mitjançant un motor reductor elèctric que s’alimenta a \\(U = 230 \\, \\text{V}\\) i pel qual circula un corrent \\(I = 1{,}7 \\, \\text{A}\\). En règim de funcionament nominal, el motor reductor proporciona una potència \\(P_s = 100 \\, \\text{W}\\) a l’eix de sortida, que gira a \\(n = 12 \\, \\text{min}^{-1}\\).
               <br><br>
               Determineu:
               <br><strong>a)</strong> La massa, \\(m\\), de la persiana. [0,5 punts]
               <br><strong>b)</strong> El parell, \\(\\Gamma_s\\), a l’eix de sortida. [0,5 punts]
               <br><strong>c)</strong> El rendiment electromecànic, \\(\\eta\\), del motor reductor. [0,5 punts]
               <br><strong>d)</strong> L’energia elèctrica consumida, \\(E_{\\text{elèctr}}\\), i l’energia dissipada en el motor, \\(E_{\\text{diss}}\\), si funciona durant un temps \\(t = 20 \\, \\text{s}\\) en règim nominal. [1 punt]
               <br><br>
               <img src="img/esquema_persiana.png" alt="Esquema de la persiana i dades del motor">`,
        correctAnswer: "",
        steps: `
            <strong>a) Càlcul de la massa de la persiana:</strong>
            <br>
            La massa total s'obté multiplicant la superfície de la persiana per la seva densitat superficial (\\(\\sigma\\)):
            \\[
            m = a \\cdot h \\cdot \\sigma = 3{,}2 \\, \\text{m} \\cdot 2{,}2 \\, \\text{m} \\cdot 12 \\, \\text{kg/m}^2 = 84{,}48 \\, \\text{kg}
            \\]
            <br>
            <strong>b) Càlcul del parell a l'eix de sortida (\\(\\Gamma_s\\)):</strong>
            <br>
            La potència mecànica de rotació es defineix com \\(P = \\Gamma \\cdot \\omega\\). Primer, hem de convertir la velocitat de rotació \\(n\\) de minuts a radians per segon:
            \\[
            \\omega = n \\cdot \\frac{2\\pi}{60} = 12 \\cdot \\frac{2\\pi}{60} = 0{,}4\\pi \\approx 1{,}257 \\, \\text{rad/s}
            \\]
            Ara aïllem el parell de la fórmula de la potència:
            \\[
            \\Gamma_s = \\frac{P_s}{\\omega} = \\frac{100 \\, \\text{W}}{1{,}257 \\, \\text{rad/s}} = 79{,}58 \\, \\text{N}\\cdot\\text{m}
            \\]
            <br>
            <strong>c) Càlcul del rendiment electromecànic (\\(\\eta\\)):</strong>
            <br>
            El rendiment compara la potència útil que treu el motor (mecànica) amb la que consumeix de la xarxa (elèctrica).
            <br>Primer calculem la potència elèctrica absorbida:
            \\[
            P_{\\text{elèc}} = U \\cdot I = 230 \\, \\text{V} \\cdot 1{,}7 \\, \\text{A} = 391 \\, \\text{W}
            \\]
            Finalment, el rendiment:
            \\[
            \\eta = \\frac{P_{\\text{útil}}}{P_{\\text{absorbida}}} = \\frac{P_s}{P_{\\text{elèc}}} = \\frac{100}{391} \\approx 0{,}2558 \\quad (25{,}58 \\%)
            \\]
            <br>
            <strong>d) Balanç d'energies (consumida i dissipada):</strong>
            <br>
            - <strong>Energia elèctrica consumida</strong> en 20 segons:
            \\[
            E_{\\text{elèctr}} = P_{\\text{elèc}} \\cdot t = 391 \\, \\text{W} \\cdot 20 \\, \\text{s} = 7820 \\, \\text{J} = 7{,}82 \\, \\text{kJ}
            \\]
            - <strong>Energia dissipada</strong> (calor/pèrdues):
            És la diferència entre l'energia que entra i l'energia útil que s'aprofita per moure la persiana.
            \\[
            E_{\\text{útil}} = P_s \\cdot t = 100 \\, \\text{W} \\cdot 20 \\, \\text{s} = 2000 \\, \\text{J}
            \\]
            \\[
            E_{\\text{diss}} = E_{\\text{elèctr}} - E_{\\text{útil}} = 7820 - 2000 = 5820 \\, \\text{J} = 5{,}82 \\, \\text{kJ}
            \\]
        `
    },
    {
        type: "exercicis",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `Una cafetera elèctrica té tres resistències. La resistència \\(R_1 = 145 \\, \\Omega\\) i la resistència \\(R_2 = 100 \\, \\Omega\\) s'utilitzen per escalfar l'aigua. La resistència \\(R_3\\) s'utilitza per mantenir el cafè calent. El circuit s'alimenta a una tensió \\(U = 230 \\, \\text{V}\\).
               <br><br>
               Determineu:
               <br><strong>a)</strong> La resistència inicial del circuit, \\(R_{\\text{in}}\\), quan es connecta la cafetera (amb els interruptors 1 i 2 tancats). [0,5 punts]
               <br><strong>b)</strong> El corrent, \\(I\\), consumit quan es connecta la cafetera. [0,5 punts]
               <br><strong>c)</strong> El valor de les dues potències, \\(P_1\\) i \\(P_2\\), que consumeix la cafetera quan els interruptors 1 i 2 estan tancats i quan només ho està l'interruptor 2. [1 punt]
               <br><strong>d)</strong> El valor que ha de tenir la resistència \\(R_3\\) perquè la potència consumida per mantenir el cafè calent sigui \\(P_3 = 300 \\, \\text{W}\\). [0,5 punts]
               <br><br>
               <img src="img/esquema_cafetera.png" alt="Esquema elèctric de la cafetera">`,
        correctAnswer: "",
        steps: `
            <strong>a) Resistència inicial del circuit (\\(R_{\\text{in}}\\)):</strong>
            <br>
            Quan els interruptors 1 i 2 estan tancats, les resistències \\(R_1\\) i \\(R_2\\) estan connectades en paral·lel.
            \\[
            \\frac{1}{R_{\\text{in}}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{145} + \\frac{1}{100}
            \\]
            \\[
            R_{\\text{in}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{145 \\cdot 100}{145 + 100} = \\frac{14500}{245} \\approx 59{,}18 \\, \\Omega
            \\]
            <br>
            <strong>b) Corrent consumit (\\(I\\)):</strong>
            <br>
            Utilitzant la Llei d'Ohm amb la resistència equivalent calculada:
            \\[
            I = \\frac{U}{R_{\\text{in}}} = \\frac{230 \\, \\text{V}}{59{,}18 \\, \\Omega} \\approx 3{,}886 \\, \\text{A}
            \\]
            <br>
            <strong>c) Potències consumides (\\(P_1\\) i \\(P_2\\)):</strong>
            <br>
            - <strong>Cas 1: Interruptors 1 i 2 tancats.</strong> La potència total és la suma de les potències de cada branca (o bé usant \\(R_{\\text{in}}\\)):
            \\[
            P_{\\text{total}} = \\frac{U^2}{R_{\\text{in}}} = \\frac{230^2}{59{,}18} \\approx 893{,}88 \\, \\text{W}
            \\]
            - <strong>Cas 2: Només l'interruptor 2 tancat.</strong> En aquest cas, només circula corrent per \\(R_2\\):
            \\[
            P_2 = \\frac{U^2}{R_2} = \\frac{230^2}{100} = 529 \\, \\text{W}
            \\]
            <br>
            <strong>d) Càlcul de la resistència \\(R_3\\):</strong>
            <br>
            Sabem que la potència desitjada és \\(P_3 = 300 \\, \\text{W}\\). Utilitzem la fórmula de la potència per aïllar la resistència:
            \\[
            P_3 = \\frac{U^2}{R_3} \\implies R_3 = \\frac{U^2}{P_3}
            \\]
            \\[
            R_3 = \\frac{230^2}{300} = \\frac{52900}{300} \\approx 176{,}33 \\, \\Omega
            \\]
        `
    },
    {
        type: "exercicis",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un ariet hidràulic és una bomba d’aigua que aprofita l’energia que proporciona un dipòsit subministrador, situat a una altura \\(h_1 = 3 \\, \\text{m}\\), per a elevar una part de l’aigua a un dipòsit receptor, situat a una altura \\(h_2 = 25 \\, \\text{m}\\). La bomba funciona per mitjà del tancament sobtat i periòdic d’una vàlvula de descàrrega. El dipòsit subministrador proporciona un cabal \\(q_1 = 5 \\, \\text{L/s}\\) i el dipòsit receptor rep un cabal \\(q_2 = 0{,}4 \\, \\text{L/s}\\).
               <br><br>
               Determineu:
               <br><strong>a)</strong> El rendiment, \\(\\eta\\), de l’ariet. [1 punt]
               <br><strong>b)</strong> El volum d’aigua que es perd per la vàlvula de descàrrega en una hora, \\(V_{\\text{cua}}\\). [1 punt]
               <br><strong>c)</strong> L’energia potencial, \\(\\Delta E_p\\), que guanya l’aigua elevada al dipòsit receptor en una hora. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Rendiment de l'ariet (\\(\\eta\\)):</strong>
            <br>
            El rendiment es calcula comparant l'energia útil (la que s'usa per pujar l'aigua a l'alçada \\(h_2\\)) amb l'energia total disponible (la que proporciona el cabal total des de l'alçada \\(h_1\\)).
            <br>La fórmula del rendiment per a un ariet hidràulic és:
            \\[
            \\eta = \\frac{q_2 \\cdot h_2}{q_1 \\cdot h_1}
            \\]
            Substituint els valors:
            \\[
            \\eta = \\frac{0{,}4 \\cdot 25}{5 \\cdot 3} = \\frac{10}{15} = 0{,}6667 \\quad (66{,}67 \\%)
            \\]
            <br>
            <strong>b) Volum d'aigua perdut per la vàlvula (\\(V_{\\text{cua}}\\)):</strong>
            <br>
            El cabal que es perd (\\(q_{\\text{cua}}\\)) és la diferencia entre el cabal que entra i el que realment s'eleva:
            \\[
            q_{\\text{cua}} = q_1 - q_2 = 5 \\, \\text{L/s} - 0{,}4 \\, \\text{L/s} = 4{,}6 \\, \\text{L/s}
            \\]
            Per trobar el volum total en una hora (\\(t = 3600 \\, \\text{s}\\)):
            \\[
            V_{\\text{cua}} = q_{\\text{cua}} \\cdot t = 4{,}6 \\, \\text{L/s} \\cdot 3600 \\, \\text{s} = 16.560 \\, \\text{L} = 16{,}56 \\, \\text{m}^3
            \\]
            <br>
            <strong>c) Energia potencial guanyada (\\(\\Delta E_p\\)):</strong>
            <br>
            L'energia potencial és \\(m \\cdot g \\cdot h\\). Primer calculem la massa d'aigua elevada en una hora:
            \\[
            V_2 = q_2 \\cdot t = 0{,}4 \\, \\text{L/s} \\cdot 3600 \\, \\text{s} = 1440 \\, \\text{L} \\implies m_2 = 1440 \\, \\text{kg}
            \\]
            Ara calculem el guany d'energia potencial respecte al nivell d'entrada (\\(h_2 - h_1\\)) o el treball d'elevació total des de la bomba:
            \\[
            \\Delta E_p = m_2 \\cdot g \\cdot (h_2 - h_1) = 1440 \\, \\text{kg} \\cdot 9{,}81 \\, \\text{m/s}^2 \\cdot (25 - 3) \\, \\text{m}
            \\]
            \\[
            \\Delta E_p = 1440 \\cdot 9{,}81 \\cdot 22 = 310.977{,}6 \\, \\text{J} \\approx 311 \\, \\text{kJ}
            \\]
        `
    },
    {
        type: "exercicis",
        category: "energia i balanços energetics",
        text: `Un aerogenerador té un rotor de tres pales de diàmetre \\(d = 80 \\, \\text{m}\\). El coeficient de potència de l’aerogenerador és \\(c_p = 0{,}4\\). Quan el vent bufa a una velocitat \\(v = 11 \\, \\text{m/s}\\) i la densitat de l’aire és \\(\\rho = 1{,}2 \\, \\text{kg/m}^3\\), determineu:
               <br><strong>a)</strong> La potència del vent, \\(P_{\\text{vent}}\\), que incideix sobre el rotor. [1 punt]
               <br><strong>b)</strong> La potència elèctrica, \\(P_{\\text{elèctr}}\\), que proporciona l’aerogenerador, si el rendiment del multiplicador i de l’alternador és \\(\\eta = 0{,}9\\). [0,5 punts]
               <br><br>
               Si l’aerogenerador funciona en un lloc on el vent bufa de mitjana 2.200 hores/any a la velocitat de 11 m/s (i la resta del temps està aturat o bufa a velocitats inferiors), determineu:
               <br><strong>c)</strong> L’energia elèctrica anual produïda, \\(E_{\\text{anual}}\\), expressada en \\(\\text{kW} \\cdot \\text{h}\\). [0,5 punts]
               <br><strong>d)</strong> La massa de combustible equivalent, \\(m_{\\text{ce}}\\), que caldria per a produir aquesta mateixa energia elèctrica en una central tèrmica amb un rendiment del 35 %, si el poder calorífic del combustible és \\(p_c = 40 \\, \\text{MJ/kg}\\). [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Potència del vent (\\(P_{\\text{vent}}\\)):</strong>
            <br>
            La potència del vent depèn de la secció de l'aire (àrea del cercle que formen les pales), la densitat i el cub de la velocitat.
            \\[
            S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot 80^2}{4} = 5026{,}5 \\, \\text{m}^2
            \\]
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\cdot \\rho \\cdot S \\cdot v^3 = \\frac{1}{2} \\cdot 1{,}2 \\cdot 5026{,}5 \\cdot 11^3
            \\]
            \\[
            P_{\\text{vent}} = 4.016.208 \\, \\text{W} \\approx 4{,}016 \\, \\text{MW}
            \\]
            <br>
            <strong>b) Potència elèctrica proporcionada (\\(P_{\\text{elèctr}}\\)):</strong>
            <br>
            La potència aprofitada és la del vent multiplicada pel coeficient de potència (Llei de Betz) i el rendiment dels components mecànics/elèctrics.
            \\[
            P_{\\text{elèctr}} = P_{\\text{vent}} \\cdot c_p \\cdot \\eta = 4{,}016 \\cdot 10^6 \\cdot 0{,}4 \\cdot 0{,}9
            \\]
            \\[
            P_{\\text{elèctr}} = 1.445.835 \\, \\text{W} \\approx 1{,}446 \\, \\text{MW}
            \\]
            <br>
            <strong>c) Energia elèctrica anual produïda (\\(E_{\\text{anual}}\\)):</strong>
            <br>
            L'energia és potència per temps. Passem la potència a kW i usem les hores donades:
            \\[
            E_{\\text{anual}} = P_{\\text{elèctr, kW}} \\cdot t = 1445{,}8 \\, \\text{kW} \\cdot 2200 \\, \\text{h/any}
            \\]
            \\[
            E_{\\text{anual}} = 3.180.760 \\, \\text{kWh/any}
            \\]
            <br>
            <strong>d) Massa de combustible equivalent (\\(m_{\\text{ce}}\\)):</strong>
            <br>
            Primer, passem l'energia anual de kWh a Joules (1 kWh = 3,6 MJ):
            \\[
            E_{\\text{J}} = 3.180.760 \\cdot 3{,}6 \\cdot 10^6 = 1{,}145 \\cdot 10^{13} \\, \\text{J}
            \\]
            L'energia que ha d'aportar el combustible (\\(E_{\\text{comb}}\\)) tenint en compte el rendiment de la central (35%):
            \\[
            E_{\\text{comb}} = \\frac{E_{\\text{J}}}{\\eta_{\\text{central}}} = \\frac{1{,}145 \\cdot 10^{13}}{0{,}35} = 3{,}271 \\cdot 10^{13} \\, \\text{J}
            \\]
            Finalment, usem el poder calorífic (\\(p_c = 40 \\cdot 10^6 \\, \\text{J/kg}\\)):
            \\[
            m_{\\text{ce}} = \\frac{E_{\\text{comb}}}{p_c} = \\frac{3{,}271 \\cdot 10^{13}}{40 \\cdot 10^6} = 817.750 \\, \\text{kg} \\approx 817{,}75 \\, \\text{t}
            \\]
        `
    },
    {
        type: "exercicis",
        category: "maquines i sistemes energetics",
        text: `Un automòbil de massa \\(m = 1725 \\, \\text{kg}\\) accelera des del repòs fins a una velocitat \\(v = 100 \\, \\text{km/h}\\). El motor de combustió té un rendiment \\(\\eta = 23\\%\\) i utilitza un combustible amb un poder calorífic \\(\\rho_c = 41 \\, \\text{MJ/kg}\\).
               <br><br>
               Determineu:
               <br><strong>a)</strong> L’energia mecànica, \\(E_m\\), que ha subministrat el motor per a realitzar aquesta acceleració (suposant que no hi ha pèrdues per fricció). [0,5 punts]
               <br><strong>b)</strong> La massa de combustible, \\(m_{\\text{comb}}\\), consumida en l’acceleració. [0,5 punts]
               <br><br>
               El motor té les corbes de potència i de parell motor que es mostren en el gràfic adjunt. Si el motor treballa a una velocitat de rotació \\(n_1 = 2000 \\, \\text{min}^{-1}\\) i després a \\(n_2 = 3000 \\, \\text{min}^{-1}\\), determineu:
               <br><strong>c)</strong> Les potències \\(P_1\\) i \\(P_2\\) que proporciona el motor en aquests dos règims de gir. [1 punt]
               <br><strong>d)</strong> El parell motor \\(\\Gamma\\) en cada un d’aquests casos. [0,5 punts]
               <br><br>
               <img src="img/grafic_motor.png" alt="Gràfic de potència i parell motor">`,
        correctAnswer: "",
        steps: `
            <strong>a) Energia mecànica subministrada (\\(E_m\\)):</strong>
            <br>
            L'energia mecànica necessària per accelerar el vehicle des del repòs equival a la seva energia cinètica final.
            <br>Primer passem la velocitat a m/s: \\(100 \\, \\text{km/h} = 27{,}78 \\, \\text{m/s}\\).
            \\[
            E_m = \\Delta E_c = \\frac{1}{2} \\cdot m \\cdot v^2 = \\frac{1}{2} \\cdot 1725 \\cdot (27{,}78)^2
            \\]
            \\[
            E_m = 665.500 \\, \\text{J} = 665{,}5 \\, \\text{kJ}
            \\]
            <br>
            <strong>b) Massa de combustible consumida (\\(m_{\\text{comb}}\\)):</strong>
            <br>
            L'energia total que ha d'alliberar el combustible (\\(E_{\\text{comb}}\\)) és l'energia mecànica dividida pel rendiment:
            \\[
            E_{\\text{comb}} = \\frac{E_m}{\\eta} = \\frac{665{,}5 \\cdot 10^3 \\, \\text{J}}{0{,}23} = 2.893.478 \\, \\text{J}
            \\]
            Ara usem el poder calorífic (\\(\\rho_c = 41 \\cdot 10^6 \\, \\text{J/kg}\\)):
            \\[
            m_{\\text{comb}} = \\frac{E_{\\text{comb}}}{\\rho_c} = \\frac{2.893.478}{41 \\cdot 10^6} = 0{,}07057 \\, \\text{kg} \\approx 70{,}57 \\, \\text{g}
            \\]
            <br>
            <strong>c) Potències segons el gràfic (\\(P_1\\) i \\(P_2\\)):</strong>
            <br>
            Observant les corbes del gràfic per a cada velocitat de gir:
            <br>- Per a \\(n_1 = 2000 \\, \\text{min}^{-1}\\): La potència llegida a la corba superior és \\(P_1 \\approx 67 \\, \\text{kW}\\).
            <br>- Per a \\(n_2 = 3000 \\, \\text{min}^{-1}\\): La potència llegida a la corba superior és \\(P_2 \\approx 100{,}5 \\, \\text{kW}\\).
            <br>
            <strong>d) Parell motor (\\(\\Gamma\\)):</strong>
            <br>
            Utilitzem la relació \\(P = \\Gamma \\cdot \\omega\\). Primer convertim les \\(n\\) a rad/s:
            \\[
            \\omega_1 = \\frac{2000 \\cdot 2\\pi}{60} = 209{,}44 \\, \\text{rad/s} ; \\quad \\omega_2 = \\frac{3000 \\cdot 2\\pi}{60} = 314{,}16 \\, \\text{rad/s}
            \\]
            \\[
            \\Gamma_1 = \\frac{P_1}{\\omega_1} = \\frac{67000}{209{,}44} = 319{,}9 \\, \\text{N}\\cdot\\text{m}
            \\]
            \\[
            \\Gamma_2 = \\frac{P_2}{\\omega_2} = \\frac{100500}{314{,}16} = 319{,}9 \\, \\text{N}\\cdot\\text{m}
            \\]
            *(Nota: En aquest motor el parell es manté constant en aquest tram).*
        `
    },
    {
        type: "exercicis",
        category: "mecanismes i transmissio de moviments",
        text: `El sistema de transmissió d’una màquina està format per un motor que gira a \\(n_m = 1450 \\, \\text{min}^{-1}\\) i que acciona una politja de diàmetre \\(d_1 = 60 \\, \\text{mm}\\). Aquesta politja transmet el moviment mitjançant una corretja a una segona politja de diàmetre \\(d_2 = 150 \\, \\text{mm}\\). Solidari a la segona politja, hi ha un engranatge de \\(z_3 = 18\\) dents que engrana amb una roda de \\(z_4 = 42\\) dents, que és l’eix de sortida de la màquina.
               <br><br>
               Determineu:
               <br><strong>a)</strong> La relació de transmissió total, \\(i_{\\text{total}}\\), del sistema. [1 punt]
               <br><strong>b)</strong> La velocitat de rotació de l’eix de sortida, \\(n_{\\text{sortida}}\\). [0,5 punts]
               <br><strong>c)</strong> El parell a l’eix de sortida, \\(\\Gamma_{\\text{sortida}}\\), si el motor té una potència \\(P_m = 2{,}2 \\, \\text{kW}\\) i el rendiment de la transmissió és \\(\\eta = 0{,}85\\). [1 punt]
               <br><br>
               <img src="img/esquema_transmissio.png" alt="Esquema del sistema de transmissió amb politges i engranatges">`,
        correctAnswer: "",
        steps: `
            <strong>a) Relació de transmissió total (\\(i_{\\text{total}}\\)):</strong>
            <br>
            La relació de transmissió total és el producte de les relacions de cada etapa.
            <br>1a Etapa (politges): \\(i_1 = \\frac{d_1}{d_2} = \\frac{60}{150} = 0{,}4\\)
            <br>2a Etapa (engranatges): \\(i_2 = \\frac{z_3}{z_4} = \\frac{18}{42} \\approx 0{,}4286\\)
            \\[
            i_{\\text{total}} = i_1 \\cdot i_2 = 0{,}4 \\cdot 0{,}4286 = 0{,}1714
            \\]
            *(Això significa que l'eix de sortida gira 0,1714 vegades per cada volta del motor).*
            <br>
            <strong>b) Velocitat de rotació de l'eix de sortida (\\(n_{\\text{sortida}}\\)):</strong>
            <br>
            Multipliquem la velocitat del motor per la relació de transmissió total:
            \\[
            n_{\\text{sortida}} = n_m \\cdot i_{\\text{total}} = 1450 \\, \\text{min}^{-1} \\cdot 0{,}1714 = 248{,}57 \\, \\text{min}^{-1}
            \\]
            <br>
            <strong>c) Parell a l'eix de sortida (\\(\\Gamma_{\\text{sortida}}\\)):</strong>
            <br>
            Primer, calculem la potència a la sortida considerant el rendiment:
            \\[
            P_{\\text{sortida}} = P_m \\cdot \\eta = 2200 \\, \\text{W} \\cdot 0{,}85 = 1870 \\, \\text{W}
            \\]
            Passem la velocitat de sortida a rad/s:
            \\[
            \\omega_{\\text{sortida}} = n_{\\text{sortida}} \\cdot \\frac{2\\pi}{60} = 248{,}57 \\cdot \\frac{2\\pi}{60} = 26{,}03 \\, \\text{rad/s}
            \\]
            Finalment, aïllem el parell de la fórmula de la potència (\\(P = \\Gamma \\cdot \\omega\\)):
            \\[
            \\Gamma_{\\text{sortida}} = \\frac{P_{\\text{sortida}}}{\\omega_{\\text{sortida}}} = \\frac{1870}{26{,}03} = 71{,}84 \\, \\text{N}\\cdot\\text{m}
            \\]
        `
    }
];
