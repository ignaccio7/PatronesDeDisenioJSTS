class PersonTS {
  public name : string
  public lastName : string
  public age : number
  public country : string
  public city : string
  public hobbies : string[]

  constructor(
    name : string,
    lastName : string,
    age : number,
    country : string,
    city : string,
    hobbies : string[]
  ){
    this.name = name
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.hobbies = hobbies
  }

  getFullName():string {
    return `${this.name} ${this.lastName}`
   }

}

// este sera el contrato que debe respetar todos los builders
// que implementen este contrato
interface PersonBuilder {
  name : string;
  lastName : string;
  age : number;
  country : string;
  city : string;
  hobbies : string[];

  setName(name: string): this;
  setLastName(lastName: string): this;
  setAge(age: number): this;
  setCountry(country: string): this;
  setCity(city: string): this;
  addHobby(hobby: string): this;
  build() : PersonTS;
}

class NormalPersonBuilder implements PersonBuilder {
  name : string
  lastName : string
  age : number
  country : string
  city : string
  hobbies : string[]

  constructor(){
    this.name = ""
    this.lastName = ""
    this.age = 0
    this.country = ""
    this.city = ""
    this.hobbies = []
  }

  reset() : void{
    this.name = ""
    this.lastName = ""
    this.age = 0
    this.country = ""
    this.city = ""
    this.hobbies = []
  }

  setName(name: string): this {
    this.name = name
    return this
  }

  setLastName(lastName: string): this {
    this.lastName = lastName
    return this
  }

  setAge(age: number): this {
    this.age = age
    return this
  }

  setCountry(country: string): this {
    this.country = country
    return this
  }

  setCity(city: string): this {
    this.city = city
    return this
  }

  addHobby(hobby: string): this{
    this.hobbies.push(hobby)
    return this
  }

  build(): PersonTS {
    const personts = new PersonTS(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    )
    this.reset()
    return personts
  }
  
}

// creacion 1 
const personBuilderTS = new NormalPersonBuilder()

const nestorTS = personBuilderTS.setName("nestor")
                      .setLastName("rojas")
                      .setCity("La Paz")
                      .addHobby("Comer")
                      .build()
            
console.log(nestorTS);

const juanTS = personBuilderTS.setName("Juan")
                          .setAge(20)
                          .addHobby("Comer")
                          .setCountry("Bolivia")
                          .build()

console.log(juanTS);

// Aqui con director

class PersonDirector {

  private personBuilderTS: PersonBuilder

  constructor(personBuilder : PersonBuilder){
    this.personBuilderTS = personBuilder
  }

  setPersonBuilder(personBuilder: PersonBuilder){
    this.personBuilderTS = personBuilder
  }

  createSimplePerson(name:string, lastName:string){
    this.personBuilderTS.setName(name)
                  .setLastName(lastName)
  }

}

const directorTS = new PersonDirector(personBuilderTS)
directorTS.createSimplePerson("John", "Cena")
const JohnCena = personBuilderTS.build()
console.log(JohnCena);























