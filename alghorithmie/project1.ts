function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }


  
function motdepasse(): void {
      var alphabetmin: string = "abcdefghijklmnopqrstuvwxyz" 
      var alphabetMaj: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var chiffre: string ="0123456789"
      var symbole : string = "@ç'(/<-}&"
      let mdp : string = ""
      const taillemdp: number = Number(prompt(" quelle taille de mdp veut tu ?"))
      const min : boolean = confirm("Veut tu des minuscule")
      const maj : boolean = confirm("Veut tu des majuscule")
      const chif : boolean = confirm("Veut tu des chiffre")
      const sym : boolean = confirm("Veut tu des symbole")

       
      for (let i=0; i<taillemdp; i++) {
  
        let randomverticale: number = getRandomInt(4)
  
        let resultat : string = ""
  
        while(randomverticale == 0 && min == false || randomverticale == 1 && maj == false || randomverticale == 2 && chif == false || randomverticale == 3 && sym == false ){
            randomverticale = getRandomInt(4)
        }

        if (randomverticale == 0 && min == true ) {
          let randommin: number = getRandomInt(alphabetmin.length+1)
  
          resultat = alphabetmin[randommin]
  
        } else if (randomverticale == 1 && maj == true ) {
          let randomMaj: number = getRandomInt(alphabetMaj.length+1)
  
           resultat = alphabetMaj[randomMaj]
  
        } else if (randomverticale == 2 && chif == true){
          let randomchiffre: number = getRandomInt(chiffre.length+1)
  
           resultat = chiffre[randomchiffre]
  
        } else if (randomverticale == 3 && sym == true) {
           let randomcaractere: number = getRandomInt(symbole.length+1)
  
           resultat = symbole[randomcaractere]
        }
  
        mdp = mdp + resultat 
      }
  
      console.log(mdp)
  }
  
  
  motdepasse()