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
        category: "metrologia i normalitzacio",
        text: `En un plànol s'especifica que la longitud d'una peça ha de ser (146 ± 0,8) mm. S'acceptaran totes les peces de longitud`,
        options: [
            { text: "a) superior a 146,8 mm.", value: "a" },
            { text: "b) compresa entre 146 mm i 146,8 mm.", value: "b" },
            { text: "c) compresa entre 145,6 mm i 146,4 mm.", value: "c" },
            { text: "d) compresa entre 145,2 mm i 146,8 mm.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>1. Anàlisi de la tolerància:</strong><br>
            La cota nominal és 146 mm i el marge d'error permès (tolerància) és de ± 0,8 mm.
            
            <strong>2. Càlcul dels límits d'acceptació:</strong><br>
            - Límit superior: 146 + 0,8 = 146,8 mm.<br>
            - Límit inferior: 146 - 0,8 = 145,2 mm.
            
            <strong>3. Conclusió:</strong><br>
            Qualsevol peça que mesuri entre 145,2 mm i 146,8 mm compleix l'especificació del plànol.
        `
    },
    {
        type: "questions",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `Un fil de coure de 5 mm² de secció té una resistència de 0,05 Ω. La resistivitat del coure és ρ = 0,0171 μΩ·m. Quina és la longitud del fil?`,
        options: [
            { text: "a) 0,324 m", value: "a" },
            { text: "b) 14,62 m", value: "b" },
            { text: "c) 45,93 m", value: "c" },
            { text: "d) 2,92 m", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Fórmula base (Llei de Pouillet):</strong><br>
            La resistència es calcula com \\( R = \\rho \\cdot \\frac{L}{S} \\). Per trobar la longitud, aïllem: \\( L = \\frac{R \\cdot S}{\\rho} \\).
            
            <strong>2. Unificació d'unitats al Sistema Internacional:</strong><br>
            - Secció (S): 5 mm² = \\( 5 \\cdot 10^{-6} \\, m^2 \\).<br>
            - Resistivitat (\\(\\rho\\)): 0,0171 μΩ·m = \\( 0,0171 \\cdot 10^{-6} \\, \\Omega \\cdot m \\).
            
            <strong>3. Resolució:</strong><br>
            \\[ L = \\frac{0,05 \\cdot 5 \\cdot 10^{-6}}{0,0171 \\cdot 10^{-6}} = \\frac{0,25}{0,0171} = 14,6198... \\, m \\]
            Arrodonint obtenim 14,62 m.
        `
    },
    {
        type: "questions",
        category: "material i assaig",
        text: `L'acer inoxidable AISI 316 que s'utilitza en pròtesis mèdiques té una tensió de ruptura σr = 620 MPa. Quina és la força axial màxima que es pot aplicar a una barra massissa de 12 mm de diàmetre sense que es trenqui?`,
        options: [
            { text: "a) 70,12 kN", value: "a" },
            { text: "b) 140,8 kN", value: "b" },
            { text: "c) 80,5 kN", value: "c" },
            { text: "d) 56,10 kN", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Càlcul de la secció (S):</strong><br>
            La barra és cilíndrica amb diàmetre d = 12 mm.
            \\[ S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot 12^2}{4} = 113,097 \\, mm^2 \\]
            
            <strong>2. Càlcul de la força (F):</strong><br>
            Utilitzem la relació \\( \\sigma = \\frac{F}{S} \\), on \\( F = \\sigma_r \\cdot S \\).
            \\[ F = 620 \\, \\frac{N}{mm^2} \\cdot 113,097 \\, mm^2 = 70.120,35 \\, N \\]
            
            <strong>3. Conversió a kN:</strong><br>
            Dividim per 1000: \\( 70,12035 \\, kN \\), que arrodonit és 70,12 kN.
        `
    },
    {
        type: "questions",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un cilindre hidràulic, d'una sola tija, ha d'exercir una força de 20 kN en la cursa d'avanç. Si el diàmetre del cilindre és 50 mm i el de la tija, 32 mm, quina pressió ha de proporcionar el grup hidràulic?`,
        options: [
            { text: "a) 3,79 MPa", value: "a" },
            { text: "b) 10,19 MPa", value: "b" },
            { text: "c) 17,25 MPa", value: "c" },
            { text: "d) 24,87 MPa", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Secció de treball:</strong><br>
            En la cursa d'avanç, l'oli empeny tota la cara del pistó. El diàmetre útil és el del cilindre (50 mm).
            \\[ S = \\frac{\\pi \\cdot 0,05^2}{4} = 0,0019635 \\, m^2 \\]
            
            <strong>2. Càlcul de la pressió:</strong><br>
            Força (F) = 20.000 N.
            \\[ p = \\frac{F}{S} = \\frac{20000}{0,0019635} = 10.185.919,2 \\, Pa \\]
            
            <strong>3. Resultat en MPa:</strong><br>
            10,185... MPa, que arrodonit és 10,19 MPa.
        `
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Un sistema de pintatge automatitzat permet obtenir un màxim de 130 unitats per hora. Sobre cada unitat es realitzen dues operacions simultànies de t1 = 23 i t2 = 15 s de durada. Quin és el temps mitjà que transcorre entre que s'acaba una unitat i que la unitat següent està preparada per a ser pintada?`,
        options: [
            { text: "a) 4,69 s", value: "a" },
            { text: "b) 12,70 s", value: "b" },
            { text: "c) 8,70 s", value: "c" },
            { text: "d) 9,20 s", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Temps de cicle total:</strong><br>
            Si es produeixen 130 unitats en 1 hora (3600 segons):
            \\[ T_{cicle} = \\frac{3600 \\, s}{130 \\, unitats} = 27,692 \\, s/unitat \\]
            
            <strong>2. Temps de treball efectiu:</strong><br>
            Com que les operacions són simultànies, la màquina triga el temps de l'operació més llarga: \\( T_{treball} = 23 \\, s \\).
            
            <strong>3. Càlcul del temps d'espera (temps mort):</strong><br>
            És la diferència entre el temps total disponible per unitat i el que realment s'està treballant:
            \\[ T_{espera} = 27,692 - 23 = 4,692 \\, s \\]
            El resultat és 4,69 s.
        `
    },

{
        type: "exercicis",
        category: "sistemes de control",
        text: `Una premsa hidràulica es controla amb dos polsadors i un pedal. El motor de la premsa es posa en marxa si s'acciona el pedal i es prem, com a mínim, un dels polsadors. Utilitzant les variables d'estat següents:
               <br>polsadors: \\(p_1, p_2 = \\begin{cases} 1: \\text{premut} \\\\ 0: \\text{no premut} \\end{cases}\\) ; pedal: \\(p_e = \\begin{cases} 1: \\text{accionat} \\\\ 0: \\text{no accionat} \\end{cases}\\)
               <br>motor: \\(m = \\begin{cases} 1: \\text{en marxa} \\\\ 0: \\text{aturat} \\end{cases}\\)
               <br>a) Escriviu la taula de veritat del sistema. [1 punt]
               <br>b) Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br>c) Dibuixeu l'esquema de portes lògiques equivalent. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Taula de veritat:</strong>
            <br>
            El motor s'activa (m=1) només si el pedal està accionat (p_e=1) I algun dels dos polsadors (p_1 o p_2) també ho està.
            <br><br>
            <table border="1" style="width:100%; text-align:center; border-collapse: collapse;">
                <tr style="background-color: #f2f2f2;">
                    <td>\\(p_e\\)</td><td>\\(p_1\\)</td><td>\\(p_2\\)</td><td>\\(m\\)</td>
                </tr>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            </table>
            <br>
            <strong>b) Funció lògica:</strong>
            <br>
            Segons l'enunciat: "si s'acciona el pedal (\\(p_e\\)) I es prem, com a mínim, un dels polsadors (\\(p_1 + p_2\\))".
            <br>
            \\[ m = p_e \\cdot (p_1 + p_2) \\]
            <br>
            <strong>c) Esquema de portes lògiques:</strong>
            <br>
            L'esquema requereix una porta OR per als polsadors i una porta AND per multiplicar pel pedal.
            <br>
                    `
    },
    
    {
        type: "exercicis",
        category: "maquines i sistemes energetics",
        text: `Un vehicle de massa \\(m = 1725 \\, \\text{kg}\\) accelera, en una superfície horitzontal, de \\(v_1 = 0 \\, \\text{km/h}\\) a \\(v_2 = 100 \\, \\text{km/h}\\). El combustible que fa servir és gasoil, de poder calorífic \\(p_c = 43,25 \\, \\text{MJ/kg}\\). El rendiment mitjà del motor, entès com la relació entre l'energia mecànica i l'energia que proporciona el combustible, és \\(\\eta = 20,8 \\%\\). Durant l'etapa d'acceleració, determineu:
               <br>a) L'energia mecànica, \\(E_m\\), que adquireix el vehicle. [0,5 punts]
               <br>b) La quantitat de combustible, \\(m_{comb}\\), consumida. [1 punt]
               <br>Se suposa que el motor proporciona un parell \\(\\Gamma_{mot} = 320 \\, \\text{N}\\cdot\\text{m}\\) constant entre \\(n_1 = 2000 \\, \\text{min}^{-1}\\) i \\(n_2 = 3000 \\, \\text{min}^{-1}\\):
               <br>c) Representeu, de manera aproximada i indicant les escales, la corba de la potència, \\(P_m\\), que proporciona el motor per a \\(2000 \\, \\text{min}^{-1} \\le n \\le 3000 \\, \\text{min}^{-1}\\). [1 punt]`,
        correctAnswer: "",
        steps: `
            <strong>a) Energia mecànica (\\(E_m\\)):</strong><br>
            \\[ v_2 = 100 \\, \\text{km/h} = 27,78 \\, \\text{m/s} \\]
            \\[ E_m = \\frac{1}{2} m v_2^2 = 0,5 \\cdot 1725 \\cdot 27,78^2 = 665.548 \\, \\text{J} = 665,55 \\, \\text{kJ} \\]
            <br>
            <strong>b) Quantitat de combustible (\\(m_{comb}\\)):</strong><br>
            \\[ E_{comb} = \\frac{E_m}{\\eta} = \\frac{665,55 \\, \\text{kJ}}{0,208} = 3199,75 \\, \\text{kJ} \\]
            \\[ m_{comb} = \\frac{E_{comb}}{p_c} = \\frac{3199,75 \\, \\text{kJ}}{43250 \\, \\text{kJ/kg}} = 0,07398 \\, \\text{kg} \\approx 74 \\, \\text{g} \\]
            <br>
            <strong>c) Corba de potència:</strong><br>
            \\[ P = \\Gamma \\cdot \\omega \\]
            \\[ n_1 = 2000 \\to \\omega_1 = 209,44 \\, \\text{rad/s} \\to P_1 = 320 \\cdot 209,44 = 67,02 \\, \\text{kW} \\]
            \\[ n_2 = 3000 \\to \\omega_2 = 314,16 \\, \\text{rad/s} \\to P_2 = 320 \\cdot 314,16 = 100,53 \\, \\text{kW} \\]
            La gràfica és una recta que uneix aquests dos punts.
        `
    },

    {
        type: "exercicis",
        category: "fabricacio i materials",
        text: `La peça de la figura s'ha obtingut a partir d'una planxa d'acer inoxidable de gruix \\(e = 12 \\, \\text{mm}\\) i densitat \\(\\rho = 7900 \\, \\text{kg/m}^3\\). El tall s'ha fet, amb una màquina de tall per doll d'aigua, a una velocitat \\(v = 5 \\, \\text{m/min}\\) i els quatre forats de radi \\(r_2\\), amb un trepant que gira a \\(n = 1060 \\, \\text{min}^{-1}\\). Determineu:
               <br>a) La longitud del contorn exterior, \\(L_{ext}\\). [0,5 punts]
               <br>b) El temps, \\(t\\), de tall del perfil. [0,5 punts]
               <br>c) La velocitat de tall de la broca, \\(v_{tall}\\) (velocitat lineal de la perifèria de la broca). [0,5 punts]
               <br>d) La massa, \\(m\\), de la peça. [1 punt]
               <br><br>
               <em>Dades de la figura: \\(b=625\\) mm, \\(h=400\\) mm, \\(r_1=100\\) mm, \\(r_2=5\\) mm.</em>`,
        correctAnswer: "",
        steps: `
            <strong>a) Longitud del contorn exterior (\\(L_{ext}\\)):</strong><br>
            El contorn es compon de 4 trams rectes i un arc de 90° (quart de circumferència).
            <br>- Tram recte superior: \\( b - r_1 = 625 - 100 = 525 \\, \\text{mm} \\)
            <br>- Tram recte esquerre: \\( h - r_1 = 400 - 100 = 300 \\, \\text{mm} \\)
            <br>- Tram recte inferior: \\( b = 625 \\, \\text{mm} \\)
            <br>- Tram recte dret: \\( h = 400 \\, \\text{mm} \\)
            <br>- Arc de radi \\(r_1\\): \\( \\frac{2 \\cdot \\pi \\cdot r_1}{4} = \\frac{\\pi \\cdot 100}{2} = 157,08 \\, \\text{mm} \\)
            <br>
            \\[ L_{ext} = 525 + 300 + 625 + 400 + 157,08 = 2007,08 \\, \\text{mm} \\approx 2,007 \\, \\text{m} \\]
            <br>
            <strong>b) Temps de tall (\\(t\\)):</strong><br>
            \\[ t = \\frac{L_{ext}}{v} = \\frac{2,007 \\, \\text{m}}{5 \\, \\text{m/min}} = 0,4014 \\, \\text{min} \\]
            En segons: \\( 0,4014 \\cdot 60 = 24,08 \\, \\text{s} \\).
            <br>
            <strong>c) Velocitat de tall de la broca (\\(v_{tall}\\)):</strong><br>
            Radi broca \\(r_2 = 5 \\, \\text{mm}\\) (Diàmetre \\(D = 10 \\, \\text{mm} = 0,01 \\, \\text{m}\\)).
            \\[ v_{tall} = \\omega \\cdot r_2 = \\left( 1060 \\cdot \\frac{2\\pi}{60} \\right) \\cdot 0,005 \\]
            \\[ v_{tall} = 111 \\, \\text{rad/s} \\cdot 0,005 \\, \\text{m} = 0,555 \\, \\text{m/s} \\]
            <br>
            <strong>d) Massa de la peça (\\(m\\)):</strong><br>
            1. <strong>Àrea total (sense forats):</strong> Àrea rectangle ($b \\cdot h$) menys la cantonada que falta.
            La cantonada que falta és un quadrat de costat 100 menys el quart de cercle:
            \\[ A_{cantonada} = 100^2 - \\frac{\\pi \\cdot 100^2}{4} = 10000 - 7854 = 2146 \\, \\text{mm}^2 \\]
            \\[ A_{base} = (625 \\cdot 400) - 2146 = 250000 - 2146 = 247854 \\, \\text{mm}^2 \\]
            2. <strong>Àrea dels forats:</strong> 4 forats de radi 5 mm.
            \\[ A_{forats} = 4 \\cdot (\\pi \\cdot 5^2) = 4 \\cdot 78,54 = 314,16 \\, \\text{mm}^2 \\]
            3. <strong>Àrea neta:</strong>
            \\[ A_{neta} = 247854 - 314,16 = 247539,8 \\, \\text{mm}^2 \\approx 0,24754 \\, \\text{m}^2 \\]
            4. <strong>Massa:</strong>
            \\[ Volum = A_{neta} \\cdot e = 0,24754 \\, \\text{m}^2 \\cdot 0,012 \\, \\text{m} = 0,00297 \\, \\text{m}^3 \\]
            \\[ m = Volum \\cdot \\rho = 0,00297 \\cdot 7900 = 23,47 \\, \\text{kg} \\]
        `
    },

    {
        type: "exercicis",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `En la figura es mostra el circuit elèctric d’una cafetera. Quan es connecta la cafetera, els dos interruptors termostàtics estan tancats. L’interruptor 1 s’obre quan la temperatura de l’aigua arriba als 105 °C i l’interruptor 2, quan la temperatura arriba als 125 °C. La resistència \\(R_3\\), que és variable, serveix per a mantenir el cafè calent. Les altres dues resistències tenen valors \\(R_1=145 \\, \\Omega\\) i \\(R_2=100 \\, \\Omega\\) i el circuit s’alimenta a una tensió \\(U=230 \\, \\text{V}\\). Determineu:
               <br>a) La resistència inicial del circuit, \\(R_{\\text{in}}\\), quan es connecta la cafetera. [0,5 punts]
               <br>b) El corrent, \\(I\\), consumit quan es connecta la cafetera. [0,5 punts]
               <br>c) El valor de les dues potències, \\(P_1\\) i \\(P_2\\), que consumeix la cafetera quan els interruptors 1 i 2 estan tancats i quan només ho està l’interruptor 2. [1 punt]
               <br>d) El valor que ha de tenir la resistència \\(R_3\\) perquè la potència consumida quan es manté el cafè calent sigui \\(P_3=300 \\, \\text{W}\\). [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Resistència inicial del circuit (\\(R_{\\text{in}}\\)):</strong><br>
            Inicialment, els dos interruptors estan tancats.
            L'interruptor 2 tancat curtcircuita \\(R_3\\), de manera que per la branca de la dreta només tenim \\(R_2\\).
            L'interruptor 1 tancat connecta \\(R_1\\).
            Per tant, tenim \\(R_1\\) i \\(R_2\\) connectades en paral·lel a la font de tensió:
            \\[ \\frac{1}{R_{\\text{in}}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{145} + \\frac{1}{100} \\]
            \\[ R_{\\text{in}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{145 \\cdot 100}{145 + 100} = \\frac{14500}{245} = 59,18 \\, \\Omega \\]
            <br>
            <strong>b) Corrent consumit (\\(I\\)):</strong><br>
            Utilitzant la llei d'Ohm amb la resistència equivalent calculada:
            \\[ I = \\frac{U}{R_{\\text{in}}} = \\frac{230}{59,18} = 3,886 \\, \\text{A} \\]
            <br>
            <strong>c) Potències consumides (\\(P_1\\) i \\(P_2\\)):</strong><br>
            - **\\(P_1\\) (Ambdós interruptors tancats):** És la potència inicial total.
            \\[ P_1 = \\frac{U^2}{R_{\\text{in}}} = \\frac{230^2}{59,18} = 893,88 \\, \\text{W} \\]
            - **\\(P_2\\) (Només interruptor 2 tancat):** L'interruptor 1 s'obre, desconnectant \\(R_1\\). L'interruptor 2 segueix tancat, curtcircuitant \\(R_3\\). Només queda \\(R_2\\) connectada al circuit.
            \\[ P_2 = \\frac{U^2}{R_2} = \\frac{230^2}{100} = 529 \\, \\text{W} \\]
            <br>
            <strong>d) Valor de la resistència \\(R_3\\):</strong><br>
            Per mantenir el cafè calent, la temperatura ha superat els 125 °C, així que l'interruptor 2 també s'obre (l'1 ja estava obert).
            Ara el corrent ha de passar per \\(R_2\\) i per \\(R_3\\) (que estava en paral·lel amb l'interruptor 2 i ara ja no està curtcircuitada). El circuit queda amb \\(R_2\\) i \\(R_3\\) en sèrie (branca dreta), mentre la branca esquerra està oberta.
            La resistència total és \\(R_{\\text{tot}} = R_2 + R_3\\).
            Sabem que la potència desitjada és \\(P_3 = 300 \\, \\text{W}\\):
            \\[ P_3 = \\frac{U^2}{R_{\\text{tot}}} \\implies R_{\\text{tot}} = \\frac{U^2}{P_3} = \\frac{230^2}{300} = 176,33 \\, \\Omega \\]
            Com que \\(R_{\\text{tot}} = R_2 + R_3\\):
            \\[ R_3 = R_{\\text{tot}} - R_2 = 176,33 - 100 = 76,33 \\, \\Omega \\]
        `
    },
    
   {
        type: "exercicis",
        category: "maquines i sistemes energetics",
        text: `Exercici 4
               Un ariet hidràulic és una bomba d’aigua que aprofita l’energia que proporciona un dipòsit subministrador, situat a una altura h1 = 3 m, per a elevar una part de l’aigua a un dipòsit receptor, situat a una altura h2 = 25 m. La bomba funciona per mitjà del tancament sobtat i periòdic d’una vàlvula de descàrrega. El dipòsit subministrador proporciona un cabal q1 = 5 L/s i el dipòsit receptor rep un cabal q2 = 0,35 L/s. Determineu:
               <br>a) La potència hidràulica, Ph1, que proporciona el dipòsit subministrador. [1 punt]
               <br>b) El rendiment, η, de la bomba. [1 punt]
               <br>c) El volum d’aigua, V, que ha deixat anar la vàlvula de descàrrega en t = 4 h de funcionament. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <strong>a) Potència hidràulica del dipòsit subministrador (Ph1):</strong>
            <br>
            La potència hidràulica es calcula amb la fórmula: P = ρ * g * h * q
            <br>Dades: ρ = 1000 kg/m³, g = 9,81 m/s², h1 = 3 m, q1 = 5 L/s = 0,005 m³/s.
            <br><br>
            Ph1 = 1000 * 9,81 * 3 * 0,005 = <strong>147,15 W</strong>
            <br><br>
            <strong>b) Rendiment de la bomba (η):</strong>
            <br>
            El rendiment és la relació entre la potència útil (receptor) i la potència absorbida (subministrador).
            <br><br>
            Potència útil (Ph2):
            <br>Ph2 = 1000 * 9,81 * 25 * 0,00035 = 85,8375 W
            <br><br>
            Càlcul del rendiment:
            <br>η = Ph2 / Ph1 = 85,8375 / 147,15 = <strong>0,5833 (58,33%)</strong>
            <br><br>
            <strong>c) Volum d'aigua de la vàlvula de descàrrega (V):</strong>
            <br>
            El cabal de descàrrega (qd) és la diferència entre el que entra i el que s'aprofita:
            <br>qd = q1 - q2 = 5 - 0,35 = 4,65 L/s
            <br><br>
            En un temps t = 4 h (14400 segons):
            <br>V = qd * t = 4,65 * 14400 = 66960 L
            <br><br>
            Convertit a metres cúbics: <strong>66,96 m³</strong>
        `
    },

   {
        type: "questions",
        category: "maquines i sistemes electrics i electrotecnics",
        text: `Un fil de coure de 600 m de longitud té una resistència de 1,02 Ω. Si el fil es divideix en dues parts iguals de 300 m i aquestes es connecten en paral·lel, quina és la resistència entre els extrems?`,
        options: [
            { text: "a) 0,51 Ω", value: "a" },
            { text: "b) 0,255 Ω", value: "b" },
            { text: "c) 1,02 Ω", value: "c" },
            { text: "d) 2,04 Ω", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Resistència de cada tram:</strong><br>
            La resistència és proporcional a la longitud. Si dividim el fil per la meitat:
            \\[ R_{tram} = \\frac{1,02 \\, \\Omega}{2} = 0,51 \\, \\Omega \\]
            <strong>2. Connexió en paral·lel:</strong><br>
            Quan connectem dues resistències iguals en paral·lel, la resistència equivalent és la meitat d'una d'elles:
            \\[ R_{eq} = \\frac{0,51}{2} = 0,255 \\, \\Omega \\]`
    },
    {
        type: "questions",
        category: "energia",
        text: `Se substitueix una bombeta incandescent de 100 W per una bombeta de baix consum de 20 W que, segons el fabricant, produeix una intensitat de llum equivalent. Quant de temps ha de funcionar perquè la substitució produeixi un estalvi de 90 € en el consum? (Considereu el cost de 0,13 €/kWh.)`,
        options: [
            { text: "a) 6923 h", value: "a" },
            { text: "b) 5769 h", value: "b" },
            { text: "c) 7524 h", value: "c" },
            { text: "d) 8654 h", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>1. Estalvi de potència:</strong><br>
            \\[ P_{estalvi} = 100 \\, W - 20 \\, W = 80 \\, W = 0,08 \\, kW \\]
            <strong>2. Energia que cal estalviar:</strong><br>
            \\[ E = \\frac{90 \\, €}{0,13 \\, €/kWh} = 692,31 \\, kWh \\]
            <strong>3. Temps necessari:</strong><br>
            \\[ t = \\frac{692,31 \\, kWh}{0,08 \\, kW} = 8653,85 \\, h \\approx 8654 \\, h \\]`
    },
    {
        type: "questions",
        category: "sistemes pneumatics i oleohidraulics",
        text: `Un cilindre hidràulic de doble efecte té un diàmetre de cilindre D = 50 mm i un diàmetre de tija d = 32 mm. Quina pressió ha de proporcionar el grup hidràulic per a exercir una força de 10 kN en la cursa de retrocés?`,
        options: [
            { text: "a) 8,626 MPa", value: "a" },
            { text: "b) 5,093 MPa", value: "b" },
            { text: "c) 3,425 MPa", value: "c" },
            { text: "d) 12,43 MPa", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <strong>1. Secció efectiva de retrocés (àrea anular):</strong><br>
            \\[ S = \\frac{\\pi \\cdot (D^2 - d^2)}{4} = \\frac{\\pi \\cdot (50^2 - 32^2)}{4} = 1159,25 \\, mm^2 \\]
            <strong>2. Càlcul de la pressió:</strong><br>
            \\[ p = \\frac{F}{S} = \\frac{10000 \\, N}{1159,25 \\, mm^2} = 8,626 \\, MPa \\]`
    },
    {
        type: "questions",
        category: "organitzacio industrial",
        text: `Un magatzem té un estoc inicial de 1000 unitats d'un producte. Quan l'estoc arriba a 300 unitats, es fa una comanda de 800 unitats que s'incorporen immediatament al magatzem. Si al cap de 100 dies s'efectua la dotzena (12a) comanda, quantes unitats d'aquest producte s'han venut?`,
        options: [
            { text: "a) 8800", value: "a" },
            { text: "b) 9500", value: "b" },
            { text: "c) 9800", value: "c" },
            { text: "d) 9200", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>1. Vendes fins a la primera comanda:</strong><br>
            \\[ 1000 - 300 = 700 \\, \\text{unitats} \\]
            <strong>2. Vendes per a les 11 comandes següents:</strong><br>
            Cada comanda de 800 unitats es consumeix fins a tornar a arribar al punt de comanda (300).
            \\[ 11 \\times 800 = 8800 \\, \\text{unitats} \\]
            <strong>3. Total venut:</strong><br>
            \\[ 700 + 8800 = 9500 \\, \\text{unitats} \\]`
    },
    {
        type: "questions",
        category: "metrologia i normalitzacio",
        text: `Un sensor de pressió té un error total màxim del ±2% de la lectura. Si en una mesura a 45 °C el sensor indica 8 bar, quin és el valor màxim que pot tenir la pressió real?`,
        options: [
            { text: "a) 8,02 bar", value: "a" },
            { text: "b) 7,84 bar", value: "b" },
            { text: "c) 8,10 bar", value: "c" },
            { text: "d) 8,16 bar", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <strong>1. Càlcul de l'error:</strong><br>
            \\[ 8 \\, \\text{bar} \\times 0,02 = 0,16 \\, \\text{bar} \\]
            <strong>2. Pressió màxima possible:</strong><br>
            \\[ 8 + 0,16 = 8,16 \\, \\text{bar} \\]`
    }
];
