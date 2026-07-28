//FOR LOOP

const values = [10,20,30,40,50];
for(let i=0 ; i<values.length ; i++){
    console.log(values[i]);
}

//for Each()

values.forEach((values) =>{
    console.log(values);
})

//map

const doubled=values.map((values) =>{
    return values*2;
})
console.log(doubled);

//filter()

const greaterthen20=values.filter((values) =>{
    return values > 20;
})
console.log(greaterthen20);

//find()
const found=values.find(
    (values)=>{
        return values > 20;
    }
)
console.log(found);

const total = values.reduce((sum, values) => {
    return sum + values;
}, 0);

console.log(total);