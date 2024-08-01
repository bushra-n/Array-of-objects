const employees = [
    {
    name: "ammar",
    basicSalary:  50000,
    Allowances: 29000

},
{
    name:"Rabia",
    basicSalary: 100000,
    Allowances: 35000
},
    {name: "Tehmina",
    basicSalary: 75000,
    Allowances: 14000
}
]
console.log(employees)

const labours = {
    name : "wahaj",
    shift:"morning",
    wage: 1000,
    overtime: () => {
        return "500"
    }
}
console.log(labours)
console.log(labours.overtime())



