let employee = {
    name : 'Masayoshi',
    age: 34,
    designation: 'Developer',

    set employeeDesignation(args){
        this.designation = args
    },
    get employeeDesignation(){
        return this.designation
    }

}
employee.employeeDesignation = 'Senior Software Developer'
console.log(employee.employeeDesignation)