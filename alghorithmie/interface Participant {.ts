interface Participant {
    nom: string;
    score: number;
}

const Participants: Participant[] = [
    { nom: "Natacha", score: 18 },
    { nom: "Rania", score: 90 },
    { nom: "Ilian", score: 61 },
    { nom: "Brice", score: 55 },
    { nom: "Anis", score: 97 },
    { nom: "Ramzy", score: 12 },
    { nom: "Jaafar", score: 87 },
    { nom: "Nathan", score: 42 },
    { nom: "Hafssa", score: 12 },
    { nom: "Zineba", score: 25 },
    { nom: "Gabriel", score: 35 },
    { nom: "Gildas", score: 1 },
];

function classerParticipants(): Participant[] {
    return Participants.sort((a: Participant, b: Participant) => b.score - a.score);
}

function distribuerPrix(): void {
    const classement: Participant[] = classerParticipants();
    const premier: Participant = classement[0];

    console.log(`Félicitations à ${premier.nom} ! Vous êtes le 1er.`);

    let choixOrdinateur: string | null = prompt(`${premier.nom}, choisissez entre un PC gaming ou un Mac : `);

    if (choixOrdinateur && choixOrdinateur.toLowerCase() === "mac") {
        let choixCouleur: string | null = prompt("Choisissez la couleur de votre Mac : Noir ou Blanc ? ");

        if (choixCouleur && choixCouleur.toLowerCase() === "blanc") {
            console.log("Vous avez choisi un Mac blanc. Voulez-vous ajouter une souris blanche soldée ? ");
            let choixSouris: string | null = prompt("Tapez 'oui' pour accepter la souris blanche soldée.");
            if (choixSouris && choixSouris.toLowerCase() === "oui") {
                console.log("Vous recevrez également une souris blanche soldée.");
            }
        }
    }
    distribuerPrix();

function distribuerPrix1(): void {
    const classement: Participant[] = classerParticipants();
    const deuxieme: Participant = classement[1];

    console.log(`Félicitations à ${deuxieme.nom} ! Vous êtes le 2eme.`);
    let choixconsole: string | null = prompt(`${deuxieme.nom},  choix entre switch et nintendo 3DXL Edition Limitée Pokémon : `);

    if (choixconsole && choixconsole.toLowerCase() === "3DXL") {
        let choixCouleur: string | null = prompt("Choisissez la couleur de votre 3DXL : bleu ou rouge ? ");

        if (choixCouleur && choixCouleur.toLowerCase() === "bleu") {
            console.log("Vous avez choisi un 3DXL bleu ");
            let reductionpokemon: string | null = prompt("-30% jeu pokémon");
            
            }
        }
    }
    distribuerPrix1();


function distribuerPrix2(): void {
    const classement: Participant[] = classerParticipants();
    const troisieme: Participant = classement[2];

    console.log(`Félicitations à ${troisieme.nom} ! Vous êtes le 3eme.`);
    let choixcasque: string | null = prompt(`${troisieme.nom},  choix en bon d'achat de 100 euros sur notre boutique ou casqueXenon gris ou noir.`);

    if (choixcasque && choixcasque.toLowerCase() === " casqueXenon") {
        let choixCouleur: string | null = prompt("Choisissez la couleur de votre  casqueXenon : gris ou noir ? ");

        if (choixCouleur && choixCouleur.toLowerCase() === "noir") {
            console.log("Vous avez choisi un  casqueXenon noir ");
            
            }
        }
    }
    distribuerPrix2();

    function distribuerPrixgroupes1(): void {
        const classement: Participant[] = classerParticipants();
        for (let i = 3; i < classement.length; i++) { 
            const participant = classement[i];
    
            if (i >= 3 && i <= 7) { 
                let statutEtudiant: string | null = prompt(${participant.nom}, êtes-vous étudiant ? (oui/non));
                if (statutEtudiant && statutEtudiant.toLowerCase() === "oui") {
                    console.log(Félicitations à ${participant.nom} ! Vous recevez un bon d'achat de 50 euros.);
                } else {
                    console.log(Félicitations à ${participant.nom} ! Vous recevez un bon d'achat de 30 euros.);
                }
    
    distribuerPrixgroupes1();
            }


function distribuerPrixgroupes2(): void {
    const classement: Participant[] = classerParticipants();
    for (let i = 8; i < classement.length; i++) { 
        const participant = classement[i];

        if (i >= 8 && i <= 11) {
    console.log(`Félicitations à ${participant.nom} ! Vous êtes nul mais bon on verra pour la prochaine fois.`);
    let reductionmanga: string | null = prompt(`${participant.nom}, t'as au moins droit à un prix de réconciliation -50% sur les mangas du 30/09 au 17/10 (uniquement utilisable chez leaderprice).`);
}
    distribuergroupes2();
    }