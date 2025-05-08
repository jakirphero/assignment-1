"use strict";
{
    //Problem-1
    const toString = (input, toUpper) => {
        if (toUpper) {
            return input.toUpperCase();
        }
        else {
            return input.toLocaleLowerCase();
        }
    };
    const result1 = toString('hello', false);
    //problem-2
    const filterByRating = (items) => {
        return items.filter(item => item.rating >= 4);
    };
    const books = [
        { name: 'Child book', rating: 4 },
        { name: 'Hand book', rating: 3.5 },
        { name: 'node book', rating: 4 },
        { name: 'java book', rating: 2 }
    ];
    const result2 = filterByRating(books);
    //Problem-4
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(model, make, year) {
            super(make, year);
            this.model = model;
        }
        geModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car('Corolla', 'Toyota', 2025);
    myCar.getInfo();
    myCar.geModel();
    //Problem-5
    const processValue = (value) => {
        if (typeof value === 'string') {
            return `Output: ${value.length}`;
        }
        else {
            return `Output ${value * 2}`;
        }
    };
    const result3 = processValue(12);
    const getMostHeightProduct = (products) => {
        if (products.length === 0)
            return null;
        let maxProduct = products[0];
        for (const product of products) {
            if (product.price > maxProduct.price) {
                maxProduct = product;
            }
        }
        return maxProduct;
    };
    const result4 = getMostHeightProduct([
        { name: 'Phone', price: 30000 },
        { name: 'Laptop', price: 60000 },
        { name: 'Apple Phone', price: 120000 }
    ]);
    //Problem-7 
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    const getDayType = (day) => {
        if (day === Day.Friday || day === Day.Saturday) {
            return `Output: Weekend`;
        }
        return `Output: Weekday`;
    };
    const result5 = getDayType(Day.Friday);
    console.log(result5);
}
