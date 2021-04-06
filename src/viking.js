// Soldier
class Soldier {
constructor(health, strength){
    this.health = health
    this.strength = strength
}

attack = () =>{

    return this.strength
}

receiveDamage = (damage) =>{
    this.health -= damage
}
}
let rambo = new Soldier(100, 95)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage = (damage) => {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = () => {
        return "Odin Owns You All!";
    }

}
let thor = new Viking ("Thorrrrr!", 100, 90)

console.log(thor.receiveDamage(rambo.attack()))
console.log(thor.battleCry())
console.log(rambo.receiveDamage(thor.attack()))
console.log(thor.receiveDamage(rambo.attack()))



// Saxon
class Saxon extends Soldier {
    receiveDamage = (thedamage) => {
        this.health -= thedamage;
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
}
}

let annSaxon = new Saxon (100, 33)

console.log(annSaxon.receiveDamage(rambo.attack()));
console.log(rambo.receiveDamage(annSaxon.attack()));
console.log(annSaxon.receiveDamage(rambo.attack()));


// War
class War {
    constructor(){
        this.vikingArmy= []
        this.saxonArmy=[]
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let attacker = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length) ]
        let defender = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
        
        let message = defender.receiveDamage(attacker.strength)
        if (defender.health <= 0) {
            this.saxonArmy.splice(defender)
        }

    }
    // saxonAttack()
    // showStatus()

}   
let billy = new Viking('Billy', 100, 30)
let bill = new Viking('Bill', 100, 80)
let bob = new Viking('Bob', 100, 65)
let jake = new Viking('Jake', 100, 92)
let maria = new Saxon(100, 100)
let jessie = new Saxon(90, 200)
let kim = new Saxon(100, 20)
let charles = new Saxon(100, 70)
let WW3 = new War()

WW3.addViking([billy,bill,bob,jake])
WW3.addSaxon([maria, jessie, kim, charles])
