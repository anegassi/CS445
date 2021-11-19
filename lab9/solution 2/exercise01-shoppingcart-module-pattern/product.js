const groceryStore=(function(){
    const products=[];
    class Product{
        constructor(productId,name,unitPrice,quantitiyInStock){
            this.productId=productId;
            this.name=name;
            this.unitPrice=unitPrice;
            this.quantitiyInStock=quantitiyInStock;
        }



        toString(){
            return `{ ProductId: ${this.productId}, Name: ${this.name}, unitPrice: ${this.unitPrice}, QuantiyInStock:${this.quantitiyInStock} }`;
        }

        getTotalValueInStock(){
            return this.unitPrice*this.quantitiyInStock;
        }

    }

    return {
        upsertProduct: function (id,name,price,quantitiyInStock) {
            const newProduct= new Product(id,name,price,quantitiyInStock)
            console.log(newProduct)
            const index = products.findIndex(product => product.productId === newProduct.productId);
            console.log(index)
            if (index > -1) {
                products[index] = newProduct;
            } else {
                products.push(newProduct);
            }
        },
        getGrandTotalValueInStock: function(){
            return products.reduce((total, pr) => total + (pr.unitPrice * pr.quantitiyInStock), 0);
        },
        listInventory: function () {
            return products.forEach(probj=> console.log(probj.toString()));
            
        },
        getar:function(){
               return products
        }
    }
   
})();

groceryStore.upsertProduct(1001,"Apples",1.25,236)
 groceryStore.upsertProduct(1002,"Bananas",0.99,124)
 groceryStore.upsertProduct(1003,"Pears",1.05,97)


groceryStore.listInventory();
 groceryStore.upsertProduct(1003,"Pears",1.55,107)
 console.log("im here")
 groceryStore.listInventory();
console.log(groceryStore.getGrandTotalValueInStock())

