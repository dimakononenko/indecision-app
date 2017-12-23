const user = {
    name: 'Dima',
    cities: ['Kyiv', 'Los Angeles', 'Prague'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has been to ' + city);
        

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has been in ' + city);   
        // });
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers : [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());