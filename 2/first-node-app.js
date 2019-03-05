let aula = process.argv[2];

function printWelcomeMessage(aula) {
    if (aula) {
        console.log(`Hello from the ${aula} class at Platzi`);
    } else {
        console.log(`Hello from Platzi!`)
    }
}

printWelcomeMessage(aula);