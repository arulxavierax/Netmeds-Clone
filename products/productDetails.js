// footer

import footer from "../footer/footer.js"
document.getElementById('footer').innerHTML=footer()

import navbar from "../homepage/navbar.js"
document.getElementById('navbar').innerHTML=navbar()


let selectedProduct = JSON.parse(localStorage.getItem('singleProduct'))

display(selectedProduct)
display2(selectedProduct)
function display(data){
    let image = document.getElementById('image')
    let img = document.createElement('img')
    img.src=data.image
    image.append(img)
    let heading  = document.getElementById('details')
    let div1 =document.createElement('div')
    let h1=document.createElement('h1')
    h1.innerText=data.name
    div1.append(h1)
     let hr = document.createElement('hr')
    
    let div2 = document.createElement('div')
    let bestPrice=document.createElement('h4')
    bestPrice.innerText=`Best Price* ₹${data.bestprice}`
    div2.append(bestPrice)  
    let p1 = document.createElement('p')
    p1.innerText="(Inclusive of all taxes)"
    let p2 = document.createElement('p')
    p2.innerText=`*MKT: ${data.mkt}`
    let p3 = document.createElement('p')
    p3.innerText="*Country of Origin: India"
    let p4 = document.createElement('p')
    p4.innerText="* Delivery charges if applicable will be applied at checkout"
    let button = document.createElement('button')
    button.innerText="ADD TO CART" 
    button.addEventListener("click",function(){
        let products= JSON.parse(localStorage.getItem('cartProduct')) || []
        let singleProduct={
            name:data.name,
            image:data.image,
            mkt:data.mkt,
            bestprice:data.bestprice
        }
        products.push(singleProduct)
        console.log(products)
         localStorage.setItem("cartProduct",JSON.stringify(products))
         window.location.href="cartPage.html"
    })
    let hr1 = document.createElement('hr')

    let check = document.createElement('p')
    check.innerText="Check Availability & Expiry"
    let pincode = document.createElement('input')
    pincode.placeholder="Check Pincode"
    heading.append(div1,hr,div2,p1,p2,p3,p4,button,hr1,check,pincode)

}
function display2(data){
    let short = document.getElementById('short')
    let content = document.createElement('div')
    let content2 = document.createElement('div')
    let img = document.createElement('img')
    img.src=data.image
    let h1=document.createElement('h1')
    h1.innerText=data.name
    let bestPrice=document.createElement('h4')
    bestPrice.innerText=`₹${data.bestprice}`
    let button = document.createElement('button')
    button.innerText="ADD TO CART"
    button.addEventListener("click",function(){
        let products=[]
        let singleProduct={
            name:data.name,
            image:data.image,
            mkt:data.mkt,
            bestprice:data.bestprice
        }
        products.push(singleProduct)
        console.log(products)
         localStorage.setItem("cartProduct",JSON.stringify(products))
         window.location.href="cartPage.html"
    })
    content.append(img,h1)   
    content2.append(bestPrice,button)
    short.append(content,content2)
}