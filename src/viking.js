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

}
let thor = new Viking ("Thorrrrr!", 100, 90)

// Saxon
class Saxon {}

// War
class War {}
