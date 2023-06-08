function askname() {
    let nom = prompt("quel est votre nom")
    let hello = "Bonjour" + " " + nom
    return document.body.innerHTML += '<h2>' + hello + '</h2>'
}

function askbirthname() {
    let currentmonth = 6
    let yearnow = 2023
    let birthdate = prompt("quelle est votre annee de naissance")
    let birthmonth = prompt("quel est votre mois de naissance ?")
    let age = yearnow - birthdate

    if (currentmonth > birthmonth) {
        age = age - 1
    }
    let votreage = "Vous avez" + " " + age


    return document.body.innerHTML += '<h3>' + votreage + " " + "ans" + " " + '</h3>'
}
askname()
askbirthname()
