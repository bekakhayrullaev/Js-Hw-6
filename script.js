let user = {
    name: 'Alisher',
    surname: 'morgenshtern',
    age: 17,
    isMarried: true,
}
let additionInfo = {
    hairColor: 'black',
    height: 180,
    arrid: [],
    money: null,
    width: NaN,
    wife: undefined
}

let objAll = Object.assign(user,additionInfo)

let values = Object.values(objAll)


console.log(values);


let num = []
let bool = []
let str = []
let obj =[]
 
 values.filter(item => {
    if (typeof(item) == 'number'){
        num.push(item)
    } else if (typeof(item) == 'boolean'){
        bool.push(item)
    } else if (typeof(item) == 'string'){
        str.push(item)
    } else if (typeof(item) == 'object')(
        obj.push(item)
    )
})
console.log(num.length,bool.length,str.length,obj.length);


let item = (num.length + bool.length + str.length + obj.length);

console.log(item);

let numPro = num.length*100/item;

let boolPro = bool.length*100/item;

let strPro = str.length*100/item;

let objPro = obj.length*100/item;

console.log(numPro,boolPro,strPro,objPro);
