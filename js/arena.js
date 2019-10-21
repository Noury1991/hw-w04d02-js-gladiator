class Gladiator {
    constructor(name, weapson) {
      this.name = name;
      this.weapson = weapson;
    }
  }
  const max = new Gladiator("Maximus", "Trident");
  console.log(max.name);
  console.log(max.weapon);

  
class Arena extends Gladiator{
     constructor(name){
        super(name,weapson);
         this.name = name;
     }
 }
 const colosseum = new Arena("Colosseum");
console.log(colosseum.name);

const colosseum = new Arena("megalopolis");
console.log(colosseum.name);

const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators);

const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Sword");
const andronicus = new Gladiator("Andronicus","Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); 