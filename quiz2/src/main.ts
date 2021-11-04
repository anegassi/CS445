
export {};

const customerService = require('./service/customerservice');
const customers: Array<Customer> = require("./datasource/crmdata");
const Customer = require("./model/customer");


for(let c of customers) {
   console.log(c.toString())
}

customers.forEach(customer => console.log(customer.toString()))

customerService.getCustomerByid(1001)
   .then((customer:any) => console.log(customer.toString()))
   .catch((error:any)=> console.log(error.message))

async function findCustomId(id:number){
    
   let result=await customerService.getCustomerByid(id);
   console.log(result.toString())
}
findCustomId(1001).catch(error => console.log(error.message));