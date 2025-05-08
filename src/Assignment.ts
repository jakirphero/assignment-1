{
    //Problem-1
    const toString = (input: string, toUpper?: boolean): string => {
        if (toUpper) {
            return input.toUpperCase();
        } else {
            return input.toLocaleLowerCase();
        }
    }
    const result1 = toString('hello', false);

    //problem-2
    const filterByRating = (items: { name: string; rating: number }[]): { name: string; rating: number }[] => {
        return items.filter(item => item.rating >= 4)
    }

    const books = [
        { name: 'Child book', rating: 4 },
        { name: 'Hand book', rating: 3.5 },
        { name: 'node book', rating: 4 },
        { name: 'java book', rating: 2 }
    ]

    const result2 = filterByRating(books);

    //Problem-4
    class Vehicle {
        private make: string;
        private year: number;
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;
        constructor(model: string, make: string, year: number) {
            super(make, year)
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
    const processValue = (value: string | number): string | number => {
        if (typeof value === 'string') {
            return `Output: ${value.length}`;
        } else {
            return `Output ${value * 2}`;
        }
    }

    const result3 = processValue(12);


    //Problem-6
    interface Product {
        name: string;
        price: number;
    }

    const getMostHeightProduct = (products: Product[]): Product | null => {
        if (products.length === 0) return null;

        let maxProduct = products[0];

        for (const product of products) {
            if (product.price > maxProduct.price) {
                maxProduct = product
            }
        }

        return maxProduct;
    }

    const result4 = getMostHeightProduct([
        { name: 'Phone', price: 30000 },
        { name: 'Laptop', price: 60000 },
        { name: 'Apple Phone', price: 120000 }
    ]);


    //Problem-7 
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day: Day): string => {
        if (day === Day.Friday || day === Day.Saturday) {
            return `Output: Weekend`
        }
        return `Output: Weekday`
    }

    const result5 = getDayType(Day.Friday);
    console.log(result5)
}