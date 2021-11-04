
export {};

const customers = require("../datasource/crmdata");

class CustomerService{

    public static  async getCustomerByid(id: number){
     for(let c of customers){
        if(c.getcustomerId() === id){
           return c;
        } 
      }
   
      throw new Error("Customer not found");
  
    }  
}

module.exports = CustomerService;