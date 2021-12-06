
class AClass {

    Numbers

    constructor(n) {
        this.Numbers = Array(n)
        this.#fill(n)
    }

    /**
     * metod return random int
     * 
     * @param {*} min: минимальное значение
     * @param {*} max: максимальное значение
     * @returns: рандомное натуральное число 
     */

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    /**
     * metod fill array Numbers random natural numbers from 1 to 10
     * @param {*} n: длина массива
     */

    #fill(n) {
         for (let i=0; i< n; i++){
             this.Numbers[i] = this.getRandomInt(1, 10)
         }
    }

    /**
     * metod return factorial number
     * @param {*} arg: параметр — число, для которого необходимо найти факториал
     * @returns: факториал числа 
     */
    getNumberFactorial(arg){
        return (arg !== 1) ? arg * this.getNumberFactorial(arg-1) : 1
    }
   
    /**
     * metod return array with factorials of items from Numbers
     * @returns: массив факториалов массива Numbers
     */

    factorial() {
        return this.Numbers.map(item => this.getNumberFactorial(item))
    }

    sort(){}
}

class Class1 extends AClass {
    constructor(n){
        super(n)
    }

    /**
     * metod returns an array sorted in ascending order
     * @param {*} arr : массив
     * @returns : отсортированный массив
     */

    getSortArray(arr){

        if (arr.length == 0) return []

        let right = [], 
            left = [], 
            basis = arr[0]

        for (let i = 1; i < arr.length; i++){ 
            if (arr[i] < basis) right[right.length] = arr[i]
            else left[left.length] = arr[i]
        }
    
        return this.getSortArray(right).concat(basis,this.getSortArray(left))
    }

    /**
     * metod return array with factorials of items from sorted Numbers
     * @returns : массив факториалов
     */
    sort(){
        this.Numbers = this.getSortArray(this.Numbers)
        return this.factorial()
    }
    
}

class Class2 extends AClass {
    constructor(n){
        super(n)
    }
    
    /**
     * metod return array with factorials of items from sorted Numbers
     * @returns : массив факториалов
     */
    sort(){      
                             
        let n = this.Numbers.length
        for (let i = 0; i < n-1; i++){ 
            let max = i
            for (let j = i+1; j < n; j++){ 
                if (this.Numbers[j] > this.Numbers[max]) max = j
            } 
            [this.Numbers[max], this.Numbers[i]] = [this.Numbers[i], this.Numbers[max]] 
        }                    
        return this.factorial()
    }
  
}

let someClass = new AClass(10)
console.log(someClass.Numbers)
console.log(someClass.factorial(someClass.Numbers))

console.log('Class1')
let someClass1 = new Class1(7)
console.log(someClass1.Numbers)
console.log(someClass1.factorial(someClass1.Numbers))

console.log('after sort')
console.log(someClass1.sort(someClass1.Numbers))

console.log('Class2')
let someClass2 = new Class2(7)
console.log(someClass2.Numbers)
console.log(someClass2.factorial(someClass2.Numbers))

console.log('after sort')
console.log(someClass2.sort())

