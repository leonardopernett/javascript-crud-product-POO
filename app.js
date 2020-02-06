
class Product {

    constructor(name, price,year){
        this.name =  name;
        this.price =  price;
        this.year =  year;
    }
}


class UI {
    
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML=
        `
           <div class="card  mb-4">
              <div class="card-body">
                <strong>Product: </strong>${product.name}
                <strong>Price: </strong>${product.price}
                <strong>Year: </strong>${product.year}
                <a href="" name="delete" class="btn btn-danger">delete</a>
              </div>
           </div>
        `
 
        productList.appendChild(element)
        this.showMessage("product created successfully", "success")

    }

    deleteProduct(element){
       if(element.name ==="delete"){
           element.parentElement.parentElement.remove()
           this.showMessage("product deleted", "danger")
       }
    }

    resetForm() {
        document.getElementById('form').reset();
    }



    showMessage(message, color){
       const div = document.createElement('div');
       div.className =`alert alert-${color} mt-3`
       const text = document.createTextNode(message)
       div.appendChild(text)

      const container = document.querySelector('.container');
      const app = document.querySelector('#app');

      container.insertBefore(div,app)

      setTimeout(()=>{
        
        document.querySelector('.alert').remove();


      },3000)

    }

}

//EVENT DOM 
document.getElementById('form')
        .addEventListener('submit', function(e){
    
    e.preventDefault(); 

  const name  = document.getElementById('name').value;
  const price =  document.getElementById('price').value;
  const year  =  document.getElementById('year').value;

  const product = new Product(name, price, year);
  const ui = new UI();
    
  if(product.name==="" || product.price==="" || product.year===""  ){
    return ui.showMessage("complete fields please", "primary")
  }
  ui.addProduct(product);
  ui.resetForm();

})

document.getElementById('product-list').addEventListener('click', function(e){
    e.preventDefault();
     const ui = new UI();
     ui.deleteProduct(e.target)
})

