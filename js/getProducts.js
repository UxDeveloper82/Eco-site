const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");
let hpProducts =[];

const loadProducts = async () => {
   try {
       const res = await fetch('Data/products.json');
       hpProducts = await res.json();  
       displayProducts(hpProducts);
   } catch (err) {
       console.log(err);
   }
}
loadProducts();

const displayProducts = (products) => {
    const htmlString = products.map((product) => {
           return `
           <div class="col-md-3">
            <div class="store-product ${product.type}">
             <img class="img-responsive" src="./shoes-img/${product.image}.png" alt="" />
             <div class="product-details">
               <h2>${product.details}</h2>
               <p><span>$${product.regularPrice}</span> $${product.discountPrice}</p>
               <a href="#">Add to Cart</a>
             </div>
           </div>
           </div>`;
    }).join('');
    document.getElementById('output').innerHTML = htmlString;    
};

function displayMenuButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    // filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const type = e.currentTarget.dataset.id;
            const menuType = hpProducts.filter(function(product) { 
               if(product.type === type) {
                   return product;
               }
            });
            if(type === "all") {
                displayProducts(hpProducts);
            } else {
                displayProducts(menuType);
            }
        })
    })
}
displayMenuButtons();




