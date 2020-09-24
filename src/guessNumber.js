import readlineSync from 'readline-sync'
import chalk from 'chalk'

/*Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande. 
Le programme s'éxecutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur 
pour trouver le nombre secret, celui entré en argument du programe à son lancement, les messages suivant lui appaitront:

    si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
    si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
    si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert */

//appel du jeu
const guessing = () => {
    let secretNumber = true
    // set de secret number false par défaut pour initialiser la boucle et l'argument de while
    while (secretNumber) {
        // tant que secretNumber=true n'est pas trouvé la boucle tourne

        let secretNumber = Math.floor(Math.random() * 9) + 1 //random number généré est lié à la variable secretNumber

        const makeAGuess = readlineSync.question(
            'Make a guess between 0 and 9: ' //input user
        )
        if (makeAGuess > secretNumber) {
            console.log(chalk.red(`Trop grand`)) //conditions
        } else if (makeAGuess < secretNumber) {
            console.log(chalk.red(`Trop petit`)) //conditions
        } else {
            secretNumber == false //valeur false arrête la boucle
            console.log(chalk.green(`Good guess, excellent, you win!!`))
            break //arrête la boucle
        }
        if (isNaN(makeAGuess) || Number(makeAGuess.length) !== 1) {
            //si n'est pas un chiffre ou saisie supérieure à 1 chiffre alors erreur
            console.log(
                chalk.red(`Error: input must be numbers, or too much numbers`)
            )
            process.exit(1)
        }
    }
}

guessing()
