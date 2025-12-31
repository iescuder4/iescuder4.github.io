const questions = [
    // --- BLOC 1: Qüestions Curtes (1-5) ---
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Un tren de fira té una capacitat nominal de 48 passatgers. L'interval entre sortides consecutives és 15 minuts i el temps de trajecte, 5 minuts. Quin nombre màxim de passatgers pot transportar el tren en una hora?`,
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
        text: `En un circuit elèctric es connecten en sèrie dues resistències de tolerància ±5% i valors nominals 1,1 kΩ i 3,3 kΩ. La resistència equivalent d'aquest circuit és`,
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
            Ambdúes tenen un 5% de tolerància. Quan sumem, la tolerància relativa es manté sobre la suma total:
            \\[ \\text{Error} = 4,4 \\, \\text{k}\\Omega \\times 0,05 = 0,22 \\, \\text{k}\\Omega \\]

            <strong>3. Resultat:</strong>\\[ R = (4,4 \\pm 0,22) \\, \\text{k}\\Omega \\]
        `
    },
    
    {
        type: "questions",
        category: "material i assaig",
        text: `La tensió de ruptura del titani comercial sense aliar és \\(\\sigma_{r} = 75\\) MPa. Si apliquem una força axial de 750 N a una barra d'aquest titani, quina secció mínima ha de tenir perquè no es trenqui?`,
        options: [
            { text: "1 mm²", value: "a" },
            { text: "10 mm²", value: "b" },
            { text: "100 mm²", value: "c" },
            { text: "1000 mm²", value: "d" }
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
        text: `En un estudi sobre les emissions de \\(CO_{2}\\) a l'atmosfera provinents dels vehicles privats, es considera que la quantitat emesa d'aquest gas és independent del nombre de viatgers a partir d'una velocitat de circulació de 100 km/h. Un cotxe alimentat amb una benzina que produeix 2,45 kg de \\(CO_{2}\\) per litre consumeix, de mitjana, 7,1 L per cada 100 km de recorregut. En un viatge de 925 km, recorreguts a una velocitat mitjana de 100 km/h, quina quantitat de \\(CO_{2}\\) emet el vehicle a l'atmosfera?`,
        options: [
            { text: "1609 kg", value: "a" },
            { text: "160,9 kg", value: "b" },
            { text: "188,1 kg", value: "c" },
            { text: "1881 kg", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Consum total de combustible:</strong>\\[ L = \\frac{7,1 \\, \\text{L}}{100 \\, \\text{km}} \\times 925 \\, \\text{km} = 65,675 \\, \\text{L} \\]
            <strong>2. Càlcul de les emissions de \\(CO_{2}\\):</strong>\\[ \\text{Massa } CO_2 = 65,675 \\, \\text{L} \\times 2,45 \\, \\text{kg/L} = 160,90375 \\, \\text{kg} \\approx 160,9 \\, \\text{kg} \\]
        `
    },
    
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `La fiabilitat d'un artefacte, entesa com la probabilitat que funcioni sense avaries durant un cert temps, és del 92% per a 2400h. D'un lot inicial de 1400 unitats, quants artefactes és probable que continuïn funcionant al cap de 2400h?`,
        options: [
            { text: "1288", value: "a" },
            { text: "1260", value: "b" },
            { text: "192", value: "c" },
            { text: "112", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Càlcul de supervivència:</strong><br>
            La probabilitat de funcionament és el 92% (0,92). Per tant, el nombre d'unitats que funcionaran és:
            \\[ N = 1400 \\, \\text{unitats} \\times 0,92 = 1288 \\, \\text{unitats} \\]
        `
    },

    {
        type: "exercicis",
        category: "control logic i funcions logiques",
        text: `En una explotació vinícola es controla regularment el grau alcohòlic i l'acidesa de les vinyes. La mesura de l'acidesa indica el moment idoni per a iniciar la verema i el grau alcohòlic indica si el raïm és apte per a l'elaboració de vi. Per a elaborar un vi negre de qualitat cal que tingui un grau alcohòlic entre el 12% i el 15% vol. Utilitzant les variables d'estat següents:
               <br>acidesa: \\(ac\\) {1: raïm veremat, 0: raïm no veremat};
               <br>grau alcohòlic: \\(g_{15}\\) {1: superior al 15% vol., 0: inferior al 15% vol.};
               <br>grau alcohòlic: \\(g_{12}\\) {1: superior al 12% vol., 0: inferior al 12% vol.};
               <br>raïm: \\(r\\) {1: raïm per a vi de qualitat, 0: altres usos}.
               <br><br>
               a) Escriviu la taula de veritat del sistema i indiqueu els casos que no són possibles. [1 punt]
               <br>b) Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br>c) Dibuixeu l'esquema de portes lògiques equivalent. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Taula de veritat:</strong>
            <br>
            Cal notar que l'estat \\(g_{12}=0\\) i \\(g_{15}=1\\) és impossible físicament (un grau no pot ser superior al 15% i inferior al 12% alhora).
            <br><br>
            <table border="1" style="width:100%; text-align:center; border-collapse: collapse;">
                <tr style="background-color: #f2f2f2;">
                    <td>\\(ac\\)</td><td>\\(g_{12}\\)</td><td>\\(g_{15}\\)</td><td>\\(r\\)</td><td>Observacions</td>
                </tr>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>No veremat</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>X</td><td>Impossible</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>No veremat</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>No veremat</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>Grau < 12%</td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>X</td><td>Impossible</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>QUALITAT</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>Grau > 15%</td></tr>
            </table>
            <br>
            <strong>b) Funció lògica:</strong>
            <br>
            El raïm és de qualitat si està veremat (\\(ac=1\\)), el grau és >12% (\\(g_{12}=1\\)) i NO és >15% (\\(g_{15}=0\\)):
            \\[ r = ac \\cdot g_{12} \\cdot \\overline{g_{15}} \\]
            <br>
            <strong>c) Esquema de portes:</strong>
            <br>
            S'utilitza una porta NOT per a \\(g_{15}\\) i una porta AND de tres entrades.
        `
    },
    
    {
        type: "exercicis",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un ascensor hidràulic d'acció directa funciona mitjançant un cilindre hidràulic connectat directament a la cabina de l'ascensor. El cilindre té un diàmetre interior \\(d_{int}=94\\) mm i el diàmetre de la tija és \\(d_{tija}=60\\) mm. La massa de la cabina, la tija i la càrrega és \\(m=980\\) kg. Si el cilindre hidràulic manté en repòs la cabina, determineu:
               <br>a) La pressió relativa, \\(p_{int}\\), a l'interior del cilindre. [1 punt]
               <br>b) La tensió normal a compressió, \\(\\sigma_{tija}\\), de la tija. [0,5 punts]
               <br><br>
               Si una bomba subministra un cabal d'oli \\(q=2,3\\) L/s al cilindre, a una pressió \\(p=1,7\\) MPa, i l'ascensor puja a una velocitat constant \\(v=0,33\\) m/s, determineu:
               <br>c) La potència, \\(P_{h}\\), proporcionada per la bomba. [0,5 punts]
               <br>d) El rendiment, \\(\\eta\\), del cilindre. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Pressió relativa (\\(p_{int}\\)):</strong>
            \\[ F = m \\cdot g = 980 \\cdot 9,807 = 9611 \\, \\text{N} \\]
            \\[ S_{int} = \\frac{\\pi \\cdot 0,094^2}{4} = 6,94 \\cdot 10^{-3} \\, \\text{m}^2 \\]
            \\[ p_{int} = \\frac{F}{S_{int}} = 1,385 \\cdot 10^6 \\, \\text{Pa} = 1,385 \\, \\text{MPa} \\]
            <br>
            <strong>b) Tensió de la tija (\\(\\sigma_{tija}\\)):</strong>
            \\[ S_{tija} = \\frac{\\pi \\cdot 0,06^2}{4} = 2,827 \\cdot 10^{-3} \\, \\text{m}^2 \\]
            \\[ \\sigma_{tija} = \\frac{F}{S_{tija}} = 3,4 \\cdot 10^6 \\, \\text{Pa} = 3,4 \\, \\text{MPa} \\]
            <br>
            <strong>c) Potència de la bomba (\\(P_h\\)):</strong>
            \\[ P_h = p \\cdot q = 1,7 \\cdot 10^6 \\cdot 2,3 \\cdot 10^{-3} = 3910 \\, \\text{W} = 3,91 \\, \\text{kW} \\]
            <br>
            <strong>d) Rendiment (\\(\\eta\\)):</strong>
            \\[ P_{útil} = F \\cdot v = 9611 \\cdot 0,33 = 3171,6 \\, \\text{W} \\]
            \\[ \\eta = \\frac{P_{útil}}{P_h} = \\frac{3171,6}{3910} = 0,8111 \\implies 81,11\\% \\]
        `
    },
    
    {
        type: "exercicis",
        category: "motors reductors",
        text: `Una persiana d'amplària \\(a=3,2\\) m i alçària \\(h=2,2\\) m és feta d'un material de densitat superficial \\(\\sigma=12\\) kg/m². La persiana s'acciona mitjançant un motor reductor elèctric que s'alimenta a \\(U=230\\) V i pel qual circula un corrent \\(I=1,7\\) A. En règim de funcionament nominal, el motor reductor proporciona una potència \\(P_{s}=100\\) W a l'eix de sortida, que gira a \\(n=12\\) min⁻¹. Determineu:
               <br>a) La massa, \\(m\\), de la persiana. [0,5 punts]
               <br>b) El parell, \\(\\Gamma_{s}\\), a l'eix de sortida. [0,5 punts]
               <br>c) El rendiment electromecànic, \\(\\eta\\), del motor reductor. [0,5 punts]
               <br>d) L'energia elèctrica consumida, \\(E_{electr}\\), i l'energia dissipada en el motor, \\(E_{diss}\\), si funciona durant un temps \\(t=20\\) s en règim nominal. [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Massa de la persiana:</strong>
            \\[ m = a \\cdot h \\cdot \\sigma = 3,2 \\cdot 2,2 \\cdot 12 = 84,48 \\, \\text{kg} \\]
            <br>
            <strong>b) Parell de sortida (\\(\\Gamma_s\\)):</strong>
            \\[ \\omega = n \\cdot \\frac{2\\pi}{60} = 12 \\cdot \\frac{2\\pi}{60} = 1,257 \\, \\text{rad/s} \\]
            \\[ \\Gamma_s = \\frac{P_s}{\\omega} = \\frac{100}{1,257} = 79,58 \\, \\text{Nm} \\]
            <br>
            <strong>c) Rendiment (\\(\\eta\\)):</strong>
            \\[ P_{elèctr} = U \\cdot I = 230 \\cdot 1,7 = 391 \\, \\text{W} \\]
            \\[ \\eta = \\frac{P_s}{P_{elèctr}} = \\frac{100}{391} = 0,2558 \\implies 25,58\\% \\]
            <br>
            <strong>d) Energies (20 s):</strong>
            \\[ E_{electr} = P_{elèctr} \\cdot t = 391 \\cdot 20 = 7820 \\, \\text{J} = 7,82 \\, \\text{kJ} \\]
            \\[ E_{útil} = P_s \\cdot t = 100 \\cdot 20 = 2000 \\, \\text{J} \\]
            \\[ E_{diss} = E_{electr} - E_{útil} = 7820 - 2000 = 5820 \\, \\text{J} = 5,82 \\, \\text{kJ} \\]
        `
    },
    
    {
        type: "exercicis",
        category: "mecanismes i transmissio de moviments",
        text: `El sistema de transmissió d'una màquina és format per un motor que gira a \\(n_m = 1450 \\, \\text{min}^{-1}\\) i que acciona una politja de diàmetre \\(d_1 = 60 \\, \\text{mm}\\). Aquesta politja transmet el moviment mitjançant una corretja a una segona politja de diàmetre \\(d_2 = 150 \\, \\text{mm}\\). Solidari a la segona politja, hi ha un engranatge de \\(z_3 = 18\\) dents que engrana amb una roda de \\(z_4 = 42\\) dents, que és l'eix de sortida de la màquina. Determineu:
               <br>a) La relació de transmissió total \\(i_{tot}\\) del sistema. [1 punt]
               <br>b) La velocitat de rotació \\(n_{sortida}\\) de l'eix de sortida. [0,5 punts]
               <br>c) El parell \\(\\Gamma_{sortida}\\) a l'eix de sortida si el motor té una potència \\(P_m = 2,2 \\, \\text{kW}\\) i el rendiment de la transmissió és \\(\\eta = 0,85\\). [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Relació de transmissió total (\\(i_{tot}\\)):</strong>
            <br>
            La relació total és el producte de les relacions de cada etapa:
            \\[ i_1 = \\frac{d_1}{d_2} = \\frac{60}{150} = 0,4 \\]
            \\[ i_2 = \\frac{z_3}{z_4} = \\frac{18}{42} = 0,4286 \\]
            \\[ i_{tot} = i_1 \\cdot i_2 = 0,4 \\cdot 0,4286 = 0,1714 \\]
            <br>
            <strong>b) Velocitat de rotació de l'eix de sortida (\\(n_{sortida}\\)):</strong>
            \\[ n_{sortida} = n_m \\cdot i_{tot} = 1450 \\cdot 0,1714 = 248,57 \\, \\text{min}^{-1} \\]
            <br>
            <strong>c) Parell a l'eix de sortida (\\(\\Gamma_{sortida}\\)):</strong>
            <br>
            Primer, calculem la potència de sortida real:
            \\[ P_{sortida} = P_m \\cdot \\eta = 2200 \\cdot 0,85 = 1870 \\, \\text{W} \\]
            Convertim la velocitat de sortida a rad/s:
            \\[ \\omega_{sortida} = n_{sortida} \\cdot \\frac{2\\pi}{60} = 248,57 \\cdot \\frac{2\\pi}{60} = 26,03 \\, \\text{rad/s} \\]
            \\[ \\Gamma_{sortida} = \\frac{P_{sortida}}{\\omega_{sortida}} = \\frac{1870}{26,03} = 71,84 \\, \\text{Nm} \\]
        `
    },
    
    {
        type: "exercicis",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `Una cafetera elèctrica té tres resistències. La resistència \\(R_3\\) s'utilitza per a mantenir el cafè calent; les altres dues resistències tenen valors \\(R_1 = 145 \\, \\Omega\\) i \\(R_2 = 100 \\, \\Omega\\) i el circuit s'alimenta a una tensió \\(U = 230 \\, \\text{V}\\). Determineu:
               <br>a) La resistència inicial del circuit, \\(R_{in}\\) quan es connecta la cafetera. [0,5 punts]
               <br>b) El corrent, \\(I\\), consumit quan es connecta la cafetera. [0,5 punts]
               <br>c) El valor de les dues potències, \\(P_1\\) i \\(P_2\\), que consumeix la cafetera quan els interruptors 1 i 2 estan tancats i quan només ho està l'interruptor 2. [1 punt]
               <br>d) El valor que ha de tenir la resistència \\(R_3\\) perquè la potència consumida quan es manté el cafè calent sigui \\(P_3 = 300 \\, \\text{W}\\). [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Resistència inicial (\\(R_{in}\\)):</strong>
            <br>
            Segons l'esquema (amb Int 1 i Int 2 tancats), \\(R_1\\) i \\(R_2\\) estan en paral·lel:
            \\[ R_{in} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{145 \\cdot 100}{145 + 100} = 59,18 \\, \\Omega \\]
            <br>
            <strong>b) Corrent consumit (\\(I\\)):</strong>
            \\[ I = \\frac{U}{R_{in}} = \\frac{230}{59,18} = 3,886 \\, \\text{A} \\]
            <br>
            <strong>c) Potències consumides:</strong>
            <br>
            - Amb Int 1 i 2 tancats:
            \\[ P_{total} = \\frac{U^2}{R_{in}} = \\frac{230^2}{59,18} = 893,88 \\, \\text{W} \\]
            - Amb només Int 2 tancat:
            \\[ P_{2} = \\frac{U^2}{R_2} = \\frac{230^2}{100} = 529 \\, \\text{W} \\]
            <br>
            <strong>d) Valor de \\(R_3\\):</strong>
            \\[ R_3 = \\frac{U^2}{P_3} = \\frac{230^2}{300} = 176,33 \\, \\Omega \\]
        `
    }
];
