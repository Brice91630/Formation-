function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

function JeuDuPendu (): void {

    var motsAleatoire : string[] = ["Emma", "Liam","Sofia","Noah","Olivia","Mason","Ava","Elijah","Isabella","James","Mia","Lucas","Charlotte","Oliver","Amelia","Ethan","Harper","Benjamin","Evelyn","Alexander"]

    let mots : string = motsAleatoire[getRandomInt(motsAleatoire.length)];
    const mot: string = mots.toLowerCase(); 
    const cache: string[] = new Array(mot.length).fill('-');
    let essais: number = 6; 


    const lettrePresente = (lettre: string): boolean => {
        return mot.includes(lettre);
    };

    const essaisEpuise = (): boolean => {
        return essais <= 0;
    };

    const montreleMot = (): void => {
        alert("Le mot est: " + cache.join('')); 
    };
    const lettreTrouve = (lettre: string): void => {
        for (let i = 0; i < mot.length; i++) {
            if (mot[i] === lettre) {
                cache[i] = lettre;
            }
        }
    };
    const victoire = (): boolean => {
        return !cache.includes('-');
    };

    const deviner = (letter: string): void => {
        if (lettrePresente(letter)) {
            lettreTrouve(letter);
            alert(`Bonne reponse: '${letter}'!`); 
        } else {
            essais--; 
            alert(`Desole, '${letter}' n'est pas dans le mot. Vous avez ${essais} essais restants.`); 
        }

        montreleMot();

        if (victoire()) {
        } else if (essaisEpuise()) {
            alert("Vous êtes pendu! Le mot était :" + mot);
        }
    };

  while (!victoire() && !essaisEpuise()) {
        const letter: string | null = prompt("Deviner une lettre (ou appuyer sur annuler pour quitter):");
        if (letter === null) {
            alert("Jeu annulé. Merci d’avoir joué!"); 
            return; 
        }     
        if (letter.length === 1) {
            deviner(letter.toLowerCase()); 
        } else {
            alert("Veuillez saisir une seule lettre."); 
        }
    }

    if (victoire()) {
        alert("Félicitations! Vous avez deviné le mot: " + mot + " Bien joué!"); 
    } else {
        alert("Game over! Plus de chance la prochaine fois! Le mot était : " + mot); 
  
    }
    console.log(mot)
}

JeuDuPendu();