class Animal {

    /**
     * Constructor de la clase Animal.
     * @param {string} name - El nombre del animal.
     * @param {number} age - La edad del animal.
     * @param {string} especie - La especie del animal.
     */
    constructor(name, age, especie) {
        this.name = name;
        this.age = age;
        this.especie = especie;
    }

    /**
     * Saluda al usuario presentandose.
     */
    saludar() {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy un ${this.especie}`);
    }

    
}

module.exports = Animal;