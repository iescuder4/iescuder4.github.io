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
        category: "maquines i sistemes energetics",
        text: `Un aerogenerador consta, bàsicament, d'un rotor amb pales, d'un multiplicador de la velocitat de gir i d'un generador. Considerem que el rendiment del multiplicador, \\(\\eta_{mult}\\), i el del generador, \\(\\eta_{gen}\\), són constants. L'aerogenerador de la figura té una relació de transmissió \\(\\tau = \\omega_2 / \\omega_1 = 73\\) i un sistema de control que permet que la potència elèctrica generada es mantingui constant en \\(P_{electr} = 750 \\, \\text{kW}\\) per a una velocitat de gir del rotor \\(15 \\, \\text{min}^{-1} \\le n \\le 35 \\, \\text{min}^{-1}\\). Determineu:
               <br>a) La potència subministrada, \\(P_1\\), pel rotor al multiplicador. [0,5 punts]
               <br>b) El parell màxim a l'eix d'entrada, \\(\\Gamma_1\\), i a l'eix de sortida, \\(\\Gamma_2\\), del multiplicador. [1 punt]
               <br>c) La potència dissipada en el multiplicador, \\(P_{mult}\\), i en el generador, \\(P_{gen}\\). [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Potència subministrada pel rotor (\\(P_1\\)):</strong><br>
            La potència elèctrica és el resultat de la potència d'entrada multiplicada pels rendiments de la cadena:
            \\[ P_{electr} = P_1 \\cdot \\eta_{mult} \\cdot \\eta_{gen} \\]
            [cite_start]Segons la figura[cite: 116]: \\(\\eta_{mult} = 0,68\\) i \\(\\eta_{gen} = 0,87\\).
            \\[ P_1 = \\frac{P_{electr}}{\\eta_{mult} \\cdot \\eta_{gen}} = \\frac{750}{0,68 \\cdot 0,87} = 1267,75 \\, \\text{kW} \\]
            <br>
            <strong>b) Parell màxim (\\(\\Gamma_1\\) i \\(\\Gamma_2\\)):</strong><br>
            [cite_start]El parell és màxim quan la velocitat de gir és mínima (\\(n_{min} = 15 \\, \\text{min}^{-1}\\))[cite: 119]:
            \\[ \\omega_1 = 15 \\cdot \\frac{2\\pi}{60} = 1,5708 \\, \\text{rad/s} \\]
            \\[ \\Gamma_1 = \\frac{P_1}{\\omega_1} = \\frac{1267,75 \\cdot 10^3}{1,5708} = 807.073 \\, \\text{Nm} \\]
            Per a l'eix de sortida (eix 2):
            \\[ P_2 = P_1 \\cdot \\eta_{mult} = 1267,75 \\cdot 0,68 = 862,07 \\, \\text{kW} \\]
            \\[ \\omega_2 = \\omega_1 \\cdot \\tau = 1,5708 \\cdot 73 = 114,67 \\, \\text{rad/s} \\]
            \\[ \\Gamma_2 = \\frac{P_2}{\\omega_2} = \\frac{862,07 \\cdot 10^3}{114,67} = 7517,8 \\, \\text{Nm} \\]
            <br>
            <strong>c) Potència dissipada:</strong><br>
            \\[ P_{mult} = P_1 - P_2 = 1267,75 - 862,07 = 405,68 \\, \\text{kW} \\]
            \\[ P_{gen} = P_2 - P_{electr} = 862,07 - 750 = 112,07 \\, \\text{kW} \\]
        `
    },
    
    {
        type: "exercicis",
        category: "termodinamica",
        text: `Una cafetera elèctrica escalfa l'aigua en dues fases. En la primera fase, escalfa l'aigua fins a \\(T_1 = 105 \\, ^\\circ\\text{C}\\) mitjançant dues resistències que proporcionen una potència \\(P_1 = 850 \\, \\text{W}\\). En la segona fase, es desconnecta una de les resistències per a obtenir una potència \\(P_2 = 500 \\, \\text{W}\\) i escalfa l'aigua fins a \\(T_2 = 125 \\, ^\\circ\\text{C}\\). Un cop el cafè ja està fet, una tercera resistència proporciona una potència mitjana \\(P_3 = 250 \\, \\text{W}\\) per a mantenir-lo calent. La cafetera escalfa mig litre d'aigua, que inicialment està a temperatura \\(T_0 = 25 \\, ^\\circ\\text{C}\\). Tenint en compte que la calor específica de l'aigua és \\(c_e = 4,18 \\, \\text{kJ/(kg} \\cdot ^\\circ\\text{C)}\\) i el cost de l'energia elèctrica és \\(c_{electr} = 0,125 \\, \\text{€/(kWh)}\\), determineu:
               <br>a) Les energies, \\(E_1\\) i \\(E_2\\), necessàries per a escalfar l'aigua en les dues fases. [1 punt]
               <br>b) Els temps de durada, \\(t_1\\) i \\(t_2\\), de cadascuna de les dues fases. [0,5 punts]
               <br>c) L'energia elèctrica consumida, \\(E_{electr}\\), en kWh, i el cost econòmic, \\(c_{econ}\\), de tot el procés si, un cop fet, el cafè es manté calent durant \\(t_3 = 4 \\, \\text{h}\\). [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Energies (\\(E_1\\) i \\(E_2\\)):</strong><br>
            [cite_start]Massa d'aigua (\\(m\\)) = 0,5 kg (mig litre)[cite: 129].
            \\[ E_1 = m \\cdot c_e \\cdot (T_1 - T_0) = 0,5 \\cdot 4,18 \\cdot (105 - 25) = 167,2 \\, \\text{kJ} \\]
            \\[ E_2 = m \\cdot c_e \\cdot (T_2 - T_1) = 0,5 \\cdot 4,18 \\cdot (125 - 105) = 41,8 \\, \\text{kJ} \\]
            <br>
            <strong>b) Temps de durada (\\(t_1\\) i \\(t_2\\)):</strong><br>
            \\[ t_1 = \\frac{E_1}{P_1} = \\frac{167,2 \\cdot 10^3}{850} = 196,71 \\, \\text{s} \\]
            \\[ t_2 = \\frac{E_2}{P_2} = \\frac{41,8 \\cdot 10^3}{500} = 83,6 \\, \\text{s} \\]
            <br>
            <strong>c) Energia total i cost:</strong><br>
            Energia de manteniment (\\(E_3\\)):
            \\[ E_3 = P_3 \\cdot t_3 = 250 \\, \\text{W} \\cdot 4 \\, \\text{h} = 1000 \\, \\text{Wh} = 1 \\, \\text{kWh} \\]
            Energia de les fases 1 i 2 en kWh:
            \\[ E_{1+2} = \\frac{167,2 + 41,8}{3600} = 0,05806 \\, \\text{kWh} \\]
            \\[ E_{total} = 1 + 0,05806 = 1,0581 \\, \\text{kWh} \\]
            \\[ c_{econ} = E_{total} \\cdot c_{electr} = 1,0581 \\cdot 0,125 = 0,1323 \\, \\text{€} \\]
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
            <strong>1. Identificar la fórmula (Llei de Pouillet):</strong><br>
            La resistència d'un conductor es calcula com: \\( R = \\rho \\cdot \\frac{L}{S} \\).<br>
            Per tant, la longitud és: \\( L = \\frac{R \\cdot S}{\\rho} \\).

            <strong>2. Conversió d'unitats al SI:</strong><br>
            - Secció (\\(S\\)): \\( 5 \\, \\text{mm}^2 = 5 \\times 10^{-6} \\, \\text{m}^2 \\).<br>
            - Resistivitat (\\(\\rho\\)): \\( 0,0171 \\, \\mu\\Omega\\cdot m = 0,0171 \\times 10^{-6} \\, \\Omega\\cdot m \\).

            <strong>3. Càlcul:</strong><br>
            \\[ L = \\frac{0,05 \\cdot 5 \\times 10^{-6}}{0,0171 \\times 10^{-6}} = \\frac{0,25}{0,0171} = 14,62 \\, \\text{m} \\]
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `L'acer inoxidable AISI 316 té una tensió de ruptura σr = 620 MPa. Quina és la força axial màxima que pot suportar una barra d'aquest material de 12 mm de diàmetre sense trencar-se?`,
        options: [
            { text: "70,12 kN", value: "a" },
            { text: "140,8 kN", value: "b" },
            { text: "80,5 kN", value: "c" },
            { text: "56,10 kN", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Càlcul de la secció circular (\\(S\\)):</strong><br>
            \\[ S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot 12^2}{4} = 113,1 \\, \\text{mm}^2 \\]

            <strong>2. Relació entre tensió i força:</strong><br>
            Sabem que \\( \\sigma = \\frac{F}{S} \\), per tant: \\( F = \\sigma \\cdot S \\).

            <strong>3. Càlcul de la força:</strong><br>
            \\[ F = 620 \\, \\text{N/mm}^2 \\cdot 113,1 \\, \\text{mm}^2 = 70.122 \\, \\text{N} \\]
            Convertint a kilonewtons: \\( F = 70,12 \\, \\text{kN} \\).
        `
    },
    {
        type: "questions",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Es vol que un cilindre hidràulic de 50 mm de diàmetre interior pugui exercir una força de 20 kN. Quina pressió ha de tenir l'oli en el cilindre?`,
        options: [
            { text: "3,79 MPa", value: "a" },
            { text: "10,19 MPa", value: "b" },
            { text: "17,25 MPa", value: "c" },
            { text: "24,87 MPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Càlcul de l'àrea del pistó:</strong><br>
            El diàmetre és \\( 50 \\, \\text{mm} = 0,05 \\, \\text{m} \\).<br>
            \\[ S = \\frac{\\pi \\cdot 0,05^2}{4} = 1,9635 \\times 10^{-3} \\, \\text{m}^2 \\]

            <strong>2. Càlcul de la pressió (\\(p = F/S\\)):</strong><br>
            \\[ p = \\frac{20.000 \\, \\text{N}}{1,9635 \\times 10^{-3} \\, \\text{m}^2} = 10.185.892 \\, \\text{Pa} \\]
            Convertint a megapascals: \\( p \\approx 10,19 \\, \\text{MPa} \\).
        `
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Una estació de treball d'una línia de producció ha de lliurar 130 unitats per hora. L'estació consta de dues operacions que es fan simultàniament que duren 23 s i 15 s, respectivament. Quin és el temps mort de cada cicle?`,
        options: [
            { text: "4,69 s", value: "a" },
            { text: "12,70 s", value: "b" },
            { text: "8,70 s", value: "c" },
            { text: "9,20 s", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Càlcul del temps de cicle (\\(T_c\\)):</strong><br>
            Si s'han de produir 130 unitats en una hora (3600 segons):
            \\[ T_c = \\frac{3600 \\, \\text{s}}{130 \\, \\text{unitats}} = 27,692 \\, \\text{s/unitat} \\]

            <strong>2. Determinació del temps de treball real (\\(T_w\\)):</strong><br>
            Com que les operacions són simultànies, el temps de treball efectiu el marca la més llarga:
            \\[ T_w = \\max(23 \\, \\text{s}, 15 \\, \\text{s}) = 23 \\, \\text{s} \\]

            <strong>3. Càlcul del temps mort (\\(T_m\\)):</strong><br>
            \\[ T_m = T_c - T_w = 27,692 - 23 = 4,692 \\, \\text{s} \\]
        `
    },
    {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `En un plànol de fabricació s'especifica que la longitud d'una peça ha de ser (146 ± 0,8) mm. S'acceptaran totes les peces que tinguin una longitud`,
        options: [
            { text: "superior a 146,8 mm.", value: "a" },
            { text: "compresa entre 146 mm i 146,8 mm.", value: "b" },
            { text: "compresa entre 145,6 mm i 146,4 mm.", value: "c" },
            { text: "compresa entre 145,2 mm i 146,8 mm.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>1. Anàlisi de la tolerància:</strong><br>
            La cota nominal és 146 mm i la tolerància és de ±0,8 mm.

            <strong>2. Càlcul dels límits:</strong><br>
            - Límit superior: \\( 146 + 0,8 = 146,8 \\, \\text{mm} \\).<br>
            - Límit inferior: \\( 146 - 0,8 = 145,2 \\, \\text{mm} \\).

            <strong>3. Conclusió:</strong><br>
            S'accepten les peces dins de l'interval [145,2 , 146,8].
        `
    }
];
