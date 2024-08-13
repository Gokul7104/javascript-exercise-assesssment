// Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create 
// different methods
// 2. Create a Dog and Cat child class from the Animal Class.

// Level 2

// Override the method you create in Animal class

// Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, 
// median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency 
// distribution of the sample. You can create a class called Statistics and create all the 
// functions which do statistical calculations as method for the Statistics class. 
// Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

//answer//
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    walk() {
        console.log(`${this.name} is walking.`);
    }
}
class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }
    bark() {
        console.log(`${this.name} is barking.`);
    }
    overrideEat() {
        console.log(`${this.name} is eating dog food.`);
    }
}
class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }
    meow() {
        console.log(`${this.name} is meowing.`);
    }
    overrideEat() {
        console.log(`${this.name} is eating cat food.`);
    }
}
let dog = new Dog('Buddy', 3, 'brown', 4);
dog.eat(); 
dog.overrideEat();
let cat = new Cat('Whiskers', 2, 'gray', 4);
cat.eat(); 
cat.overrideEat();
class Statistics {
    constructor(data) {
        this.data = data;
    }
    count() {
        return this.data.length;
    }
    sum() {
        return this.data.reduce((a, b) => a + b, 0);
    }
    min() {
        return Math.min(...this.data);
    }
    max() {
        return Math.max(...this.data);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        this.data.sort((a, b) => a - b);
        let middleIndex = Math.floor(this.data.length / 2);
        if (this.data.length % 2 === 0) {
            return (this.data[middleIndex - 1] + this.data[middleIndex]) / 2;
        } else {
            return this.data[middleIndex];
        }
    }
    mode() {
        let frequency = {};
        for (let num of this.data) {
            if (frequency[num]) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        }
        let maxFrequency = Math.max(...Object.values(frequency));
        let modes = Object.keys(frequency).filter(key => frequency[key] === maxFrequency);
        return { mode: modes, count: maxFrequency };
    }
    var() {
        let mean = this.mean();
        let sum = this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0);
        return sum / this.count();
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        let frequency = {};
        for (let num of this.data) {
            if (frequency[num]) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        }
        let freqDist = Object.keys(frequency).map(key => [(frequency[key] / this.count()) * 100, parseInt(key)]);
        freqDist.sort((a, b) => b[0] - a[0]);
        return freqDist;
    }
}
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
let statistics = new Statistics(ages);
console.log('Count:', statistics.count()); 
console.log('Sum: ', statistics.sum()); 
console.log('Min: ', statistics.min()); 
console.log('Max: ', statistics.max()); 
console.log('Range: ', statistics.range()); 
console.log('Mean: ', statistics.mean()); 
console.log('Median: ', statistics.median()); 
console.log('Mode: ', statistics.mode()); 
console.log('Variance: ', statistics.var()); 
console.log('Standard Deviation: ', statistics.std()); 
console.log('Variance: ', statistics.var()); 