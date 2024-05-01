class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    information(){
        console.log(`Імя людини : ${this.name} та вік ${this.age}`)
    }
}
class Auto{
    constructor(marka,model,registration,licensePlate,owner){
        this.marka=marka;
        this.model = model;
        this.registration =registration;
        this.licensePlate = licensePlate;
        if(owner instanceof Person && owner.age >= 18){
            this.owner = owner
        }else{
            console.log('Дочекайтесь повноліття')
        }
    }
    autoInfo(){
        
        console.log(`Інформація стосовно автомобіля : Марка авто : ${this.marka}; Модель автомобіля : ${this.model}; Реєстрація авто : ${this.registration}; Номерний знак : ${this.licensePlate}`)
    if(this.owner){
        console.log("Інформація про власника:");
        this.owner.information();
    }else{
        console.log('Власник ще не зявився. Поки що він власник велосипеду')
    }
    }
}
const person1 = new Person('Ivan', 20);
const person2 = new Person('Igor', 27);
const person3 = new Person('Stepan', 10);
const person4 = new Person('Andriy', 30);

const auto1 = new Auto('Opel', 'Astra', 2006, 'КВ 1992 ВГ',person1);
const auto2 = new Auto('Bugatti', 'Veron', 2012, 'AВ 1993 ВА',person2)
const auto3 = new Auto('BMW', 'E34', 2022, 'КA 1994 АА',person3)
const auto4 = new Auto('Renault', '5', 1990, 'НВ 1995 ФА',person4)

auto1.autoInfo();
auto2.autoInfo();
auto3.autoInfo();
auto4.autoInfo();