class Person {
 constructor(name, lastName, age, country, city, hobbies) {
  this.name = name
  this.lastName = lastName
  this.age = age
  this.country = country
  this.city = city
  this.hobbies = hobbies
 } 

 getFullName() {
  return `${this.name} ${this.lastName}`
 }

}

// este sera el constructor el fabricador
class PersonBuilder {
  constructor() {
    this.reset()
   } 

   reset(){
    this.name = ""
    this.lastName = ""
    this.age = 0
    this.country = ""
    this.city = ""
    this.hobbies = []
  }

  setName(name) {
    this.name = name
    //console.log(this); // nos devuelve un obj del tipo PersonBuilder
    return this // de esta manera encadenamos
  }

  setLastName(lastName) {
    this.lastName = lastName
    return this // de esta manera encadenamos
  }
  setAge(age) {
    this.age = age
    return this // de esta manera encadenamos
  }
  setCountry(country) {
    this.country = country
    return this // de esta manera encadenamos
  }
  setCity(city) {
    this.city = city
    return this // de esta manera encadenamos
  }
  addHobby(hobby) {
    this.hobbies.push(hobby)
    return this // de esta manera encadenamos
  }

  // este metodo va construir un objeto de tipo persona 
  build() {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies,
    )
    this.reset()
    return person
  }

}

const personBuilder = new PersonBuilder()

// de esta manera podemos encadenar
const nestor = personBuilder.setName("Nestor")
                              .setLastName("Rojas")
                              .addHobby("Comer")
                              .addHobby("Dormir")
                              .build()

console.log(nestor);
/**
 * Person {
  name: 'Nestor',
  lastName: 'Rojas',
  age: 0,
  country: '',
  city: '',
  hobbies: [ 'Comer', 'Dormir' ]
}

 */

const juan = personBuilder.setName("Juan")
                          .setAge(20)
                          .addHobby("Comer")
                          .setCountry("Bolivia")
                          .build()

console.log(juan);