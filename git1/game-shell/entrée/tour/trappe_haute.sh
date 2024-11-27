#!/bin/bash
if [ ! -f "echelle" ]; then
    mkdir etage_1 porte;
    touch etage_1/.tresor2;
    for i in {1..100}; do
        touch "porte/bug$i"
    done
    echo "Quelques chose est caché dans cette pièce, réalise cette commande pour le découvrir : ls -a" > etage_1/README.md;
else
  echo "Construit l'échelle avant"
fi
