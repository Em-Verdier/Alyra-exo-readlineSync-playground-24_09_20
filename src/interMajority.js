import readlineSync from 'readline-sync'
import chalk from 'chalk'

/*Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21

Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18

Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

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

    age >= byCountryMajority
        ? console.log(
              chalk.green`${firtName} ${lastName} tu as${age}ans, vous êtes majeur, vous pouvez voter`
          )
        : console.log(
              chalk.red`${age}ans fait que vous n'êtes pas prêt! Allez bisous `
          )
}

const byCountryMajority = process.argv[2]

isAdult()
