function generateBornDateFromAge(age) {
    return 2020 - age;
}

function generateUserDescription(name, surName, age) {
    const fullName = `${name} ${surName}`;
    const bornDate = generateBornDateFromAge(age);

    return `${fullName} is ${age} old and was born in ${bornDate}`
}

const userInformation = generateUserDescription("Claudeilton", "Dantas", 13);
console.log(userInformation)
