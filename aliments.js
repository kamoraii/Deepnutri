const foodDB = {
    // === VIANDES ===
    "poulet": {cal:165, prot:31, lip:3.6, gluc:0, label:"Poulet (blanc)"},
    "dinde": {cal:135, prot:30, lip:1, gluc:0, label:"Dinde"},
    "boeuf": {cal:250, prot:26, lip:15, gluc:0, label:"Bœuf (steak)"},
    "steak haché": {cal:240, prot:26, lip:15, gluc:0, label:"Steak haché 5%"},
    "porc": {cal:242, prot:27, lip:14, gluc:0, label:"Porc"},
    "veau": {cal:175, prot:26, lip:7, gluc:0, label:"Veau"},
    "agneau": {cal:280, prot:25, lip:20, gluc:0, label:"Agneau"},
    "canard": {cal:337, prot:19, lip:29, gluc:0, label:"Canard"},
    "lapin": {cal:173, prot:25, lip:8, gluc:0, label:"Lapin"},

    // === CHARCUTERIE ===
    "jambon blanc": {cal:145, prot:20, lip:7, gluc:0.5, label:"Jambon blanc"},
    "jambon cru": {cal:210, prot:27, lip:11, gluc:0, label:"Jambon cru"},
    "blanc de dinde": {cal:110, prot:22, lip:2, gluc:1, label:"Blanc de dinde"},
    "saucisson": {cal:380, prot:25, lip:30, gluc:2, label:"Saucisson"},
    "merguez": {cal:330, prot:16, lip:29, gluc:2, label:"Merguez"},
    "bacon": {cal:540, prot:12, lip:50, gluc:1, label:"Bacon"},
    "lardons": {cal:420, prot:16, lip:40, gluc:1, label:"Lardons"},

    // === POISSONS ===
    "saumon": {cal:208, prot:20, lip:13, gluc:0, label:"Saumon"},
    "thon": {cal:116, prot:26, lip:1, gluc:0, label:"Thon (conserve)"},
    "cabillaud": {cal:82, prot:18, lip:0.7, gluc:0, label:"Cabillaud"},
    "sardine": {cal:208, prot:25, lip:11, gluc:0, label:"Sardine"},
    "maquereau": {cal:205, prot:19, lip:14, gluc:0, label:"Maquereau"},
    "crevettes": {cal:99, prot:24, lip:0.3, gluc:0, label:"Crevettes"},
    "moules": {cal:86, prot:12, lip:2.3, gluc:3, label:"Moules"},

    // === ŒUFS & LAITIERS ===
    "oeuf": {cal:155, prot:13, lip:11, gluc:1.1, label:"Œuf entier"},
    "fromage blanc": {cal:73, prot:8, lip:3, gluc:4, label:"Fromage blanc"},
    "yaourt nature": {cal:59, prot:5, lip:2, gluc:5, label:"Yaourt nature"},
    "lait demi-écrémé": {cal:46, prot:3.2, lip:1.6, gluc:4.8, label:"Lait demi-écrémé"},
    "beurre": {cal:717, prot:0.9, lip:81, gluc:0.1, label:"Beurre"},
    "gruyère": {cal:413, prot:29, lip:33, gluc:0, label:"Gruyère"},
    "emmental": {cal:382, prot:29, lip:29, gluc:0.5, label:"Emmental"},
    "camembert": {cal:300, prot:20, lip:24, gluc:0.5, label:"Camembert"},

    // === FÉCULENTS ===
    "riz cuit": {cal:130, prot:2.7, lip:0.3, gluc:28, label:"Riz cuit"},
    "pâtes cuites": {cal:131, prot:5, lip:1, gluc:25, label:"Pâtes cuites"},
    "pain": {cal:265, prot:9, lip:3.2, gluc:49, label:"Pain de mie"},
    "pomme de terre": {cal:77, prot:2, lip:0.1, gluc:17, label:"Pomme de terre cuite"},
    "quinoa cuit": {cal:120, prot:4.4, lip:1.9, gluc:21, label:"Quinoa cuit"},
    "flocons d'avoine": {cal:389, prot:17, lip:7, gluc:66, label:"Flocons d'avoine"},

    // === LÉGUMES ===
    "brocoli": {cal:34, prot:2.8, lip:0.4, gluc:6.6, label:"Brocoli"},
    "épinards": {cal:23, prot:2.9, lip:0.4, gluc:3.6, label:"Épinards"},
    "tomate": {cal:18, prot:0.9, lip:0.2, gluc:3.9, label:"Tomate"},
    "carotte": {cal:41, prot:0.9, lip:0.2, gluc:9.6, label:"Carotte"},
    "courgette": {cal:17, prot:1.2, lip:0.3, gluc:3.1, label:"Courgette"},
    "poivron": {cal:31, prot:1, lip:0.3, gluc:6, label:"Poivron"},
    "champignon": {cal:22, prot:3.1, lip:0.3, gluc:3.3, label:"Champignon"},
    "salade": {cal:15, prot:1.4, lip:0.2, gluc:2.8, label:"Salade verte"},
    "avocat": {cal:160, prot:2, lip:15, gluc:8.5, label:"Avocat"},
    "oignon": {cal:40, prot:1.1, lip:0.1, gluc:9.3, label:"Oignon"},

    // === LÉGUMINEUSES ===
    "lentilles cuites": {cal:116, prot:9, lip:0.4, gluc:20, label:"Lentilles cuites"},
    "pois chiches": {cal:164, prot:8.9, lip:2.6, gluc:27, label:"Pois chiches cuits"},
    "haricots rouges": {cal:127, prot:8.7, lip:0.5, gluc:22, label:"Haricots rouges cuits"},
    "flageolets": {cal:87, prot:5.5, lip:0.7, gluc:12, label:"Flageolets verts"},

    // === FRUITS ===
    "banane": {cal:89, prot:1.1, lip:0.3, gluc:23, label:"Banane"},
    "pomme": {cal:52, prot:0.3, lip:0.2, gluc:14, label:"Pomme"},
    "orange": {cal:47, prot:0.9, lip:0.1, gluc:12, label:"Orange"},
    "fraise": {cal:32, prot:0.7, lip:0.3, gluc:7.7, label:"Fraises"},
    "raisin": {cal:69, prot:0.7, lip:0.2, gluc:18, label:"Raisin"},
    "kiwi": {cal:61, prot:1.1, lip:0.5, gluc:15, label:"Kiwi"},

    // === OLÉAGINEUX ===
    "amandes": {cal:579, prot:21, lip:50, gluc:22, label:"Amandes"},
    "noix": {cal:654, prot:15, lip:65, gluc:14, label:"Noix"},
    "cacahuètes": {cal:567, prot:26, lip:49, gluc:16, label:"Cacahuètes"},
    "noisettes": {cal:628, prot:15, lip:61, gluc:17, label:"Noisettes"},
    "beurre de cacahuète": {cal:590, prot:24, lip:46, gluc:20, label:"Beurre de cacahuète"},

    // === MATIÈRES GRASSES ===
    "huile d'olive": {cal:884, prot:0, lip:100, gluc:0, label:"Huile d'olive"},
    "huile de colza": {cal:884, prot:0, lip:100, gluc:0, label:"Huile de colza"},
    "huile de tournesol": {cal:884, prot:0, lip:100, gluc:0, label:"Huile de tournesol"},

    // === SNACKING (LIDL, SOBEDO) ===
    "sandwich lidl": {cal:260, prot:9.6, lip:12, gluc:27, label:"Sandwich Lidl (100g)"},
    "sobedo sandwich jambon": {cal:240, prot:11, lip:8, gluc:29, label:"SoBedo Sandwich jambon (100g)"},
    "sobedo sandwich poulet": {cal:235, prot:12, lip:7, gluc:28, label:"SoBedo Sandwich poulet (100g)"},
    "salade piémontaise": {cal:149, prot:3.7, lip:11, gluc:7.9, label:"Salade Piémontaise (100g)"},
    "salade asiatique": {cal:150, prot:3, lip:10, gluc:13, label:"Salade asiatique (100g)"},

    // === PLATS EN CONSERVE ===
    "cassoulet": {cal:136, prot:8.6, lip:6.8, gluc:8.4, label:"Cassoulet (100g)"},
    "ravioli": {cal:86, prot:2.4, lip:2.2, gluc:13, label:"Ravioli bœuf (100g)"},
    "lentilles saucisses": {cal:106, prot:6.8, lip:4.7, gluc:7.9, label:"Lentilles aux saucisses (100g)"},
    "choucroute": {cal:130, prot:6, lip:8, gluc:4, label:"Choucroute garnie (100g)"},
    "petits pois": {cal:70, prot:4, lip:0.5, gluc:10, label:"Petits pois (100g)"},
    "ratatouille": {cal:45, prot:1.2, lip:2.5, gluc:4.5, label:"Ratatouille (100g)"},
    "piperade": {cal:40, prot:1, lip:2, gluc:4, label:"Piperade (100g)"},

    // === RILLETTES ===
    "rillettes porc": {cal:420, prot:16, lip:38, gluc:0.5, label:"Rillettes de porc"},
    "rillettes saumon": {cal:380, prot:14, lip:35, gluc:1, label:"Rillettes de saumon"},
    "rillettes thon": {cal:350, prot:13, lip:32, gluc:1, label:"Rillettes de thon"}
};