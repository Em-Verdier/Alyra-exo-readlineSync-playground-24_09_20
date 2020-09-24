import readlineSync from 'readline-sync'
import chalk from 'chalk'

/* Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter*/
const isAdult = () => {
    //input prénom et vérification du type de l'argument
    let firstName = readlineSync.question("Prénom j'vous prie: ")
    if (!isNaN(firstName)) {
        console.log(chalk.red(`Error, letters only.`))
        process.exit(1)
    }

    //input prénom et vérification du type de l'argument
    let lastName = readlineSync.question("Nom j'vous prie: ")
    if (!isNaN(lastName)) {
        console.log(chalk.red(`Error, letters only.`))
        process.exit(1)
    }

    //input age et vérification du type de l'argument
    let stringAge = readlineSync.question("Age j'vous prie: ")
    let age = parseInt(stringAge)
    if (isNaN(age) && Int(age)) {
        console.log(chalk.red(`{age} is not a number`))
        process.exit(1)
    }

    age >= 18
        ? console.log(
              chalk.green`${firtName} ${lastName} tu as${age}ans, vous êtes majeur, welcome`
          )
        : console.log(
              chalk.red`${age}ans fait que vous n'êtes pas prêt! Allez bisous `
          )
}

isAdult()
