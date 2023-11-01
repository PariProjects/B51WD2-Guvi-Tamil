// Q1)
// 1a) Write a constructor for the class Movie,
 //which takes a String representing the title of the movie, 
 //a String representing the studio made that movie, 
 //and a String representing the rating as its arguments,
 //and sets the respective class properties to these values.

 class movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let Movie = new movie("Bigil"," AGS Entertainment","PG13");
Movie.Title();
Movie.Studio();
Movie.Rating();

// 1b) The constructor for the class Movie will set 
//the class property rating to "PG" as default when no rating is provided.

class KMovie{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let Movie2 = new KMovie("SooraraiPottru","2D Entertainment");
Movie2.Title();
Movie2.Studio();
Movie2.Rating();

// 1C) Write a method getPG, which takes an array of base type
//    Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances.
//    The returned array need not be full.

class TMovies{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
    }
class   MovieNew extends TMovies {
   
getPG(){
      console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
 }
let TelMovie= new MovieNew("Arundhathi","Mallemala Entertainments","PG13");
TelMovie.Title();
TelMovie.Studio();
TelMovie.Rating();
TelMovie.getPG();

// 1D) Write a piece of code that creates an instance of the class Movie
      //with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

      class Hmovie{
        constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        }
        }
    var HMovie=new Hmovie('Casino Royale','Eon Productions','PG13');
    console.log(HMovie);


// Q2) Convert the UML diagram to Typescript class. - use number for double

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    toString(radius = this.radius) {
        this.radius = radius;
        return `after converting to string 
        radius = ${(this.radius).toString()+" colour = "+(this.color).toString()}`
    }
    circle() {
        return `Constructor with no parameter
        color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius) {
        this.radius = radius;
        return `Constructor with one parameter
        radius is ${this.radius}`;
    }
    circle(radius, color) {
        this.radius = radius;
        this.color = color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius = 3.4) {
        this.radius = radius;
        return `the radius by set is ${this.radius}`;
    }
    getRadius(radius = 2.5) {
        this.radius = radius;
        return `the radius by get is ${this.radius}`;
    }
    setColor(color = "red") {
        this.color = color;
        return `the color by set is ${this.color}`;
    }
    getColor(color ="Black") {
        this.color = color;
        return `the color by get is ${this.color}`;
    }
    getArea() {
        return `Area Of Circle = ${(this.radius)*(this.radius)+(Math.PI)*4}`;
    }
    getCircumference() {
        return `Circumference Of Circle = ${(this.radius)+(Math.PI)}`;
    }
}
let cir = new Circle(6, "Green");
console.log(cir);
console.log(cir.circle());
console.log(cir.circle(5));
console.log(cir.circle(4, "white"));
console.log(cir.getRadius());
console.log(cir.setRadius());
console.log(cir.getColor());
console.log(cir.setColor());
console.log(cir.toString());
cir.setRadius();
console.log(cir.getArea());
console.log(cir.getCircumference());


// Q3) Write a “person” class to hold all the details.

class PersonDetails {
    constructor(Name, Age, DOB, Native, Mobile, Email_ID, Batch) {
        this.Name     = Name;
        this.Age      = Age;
        this.DOB      = DOB;
        this.Native   = Native;
        this.Mobile   = Mobile;
        this.Email_ID = Email_ID;
        this.Batch    = Batch;
    }
}
let Person = new PersonDetails("Atchay", "29", "07-April-1995", "Chennai", "7397271382", "soniyatchay07@gmail.com", "B51_WD2_TAMIL");
console.log(Person);



// Q4) write a class to calculate uber price.

class Uber {
    constructor(BaseFare =50, CostPerMile =2, CostPerMinute =1 ,BookingFee =10, Time =1, Mile =2){
    this.BaseFare      = BaseFare;
    this.CostPerMile   = CostPerMile
    this.CostPerMinute = CostPerMinute;
    this.BookingFee    = BookingFee;
    this.time          = Time;
    this.mile          = Mile;
    }
    TotalPrice(time=this.Time ,mile =this.mile){
        console.log(this.BaseFare)+(this.BookingFee)+
        (this.CostPerMinute)+(this.time)+(this.mile)
    }
}
let Car = new Uber();
Car.TotalPrice(10,100); 
Car.TotalPrice(15,20);