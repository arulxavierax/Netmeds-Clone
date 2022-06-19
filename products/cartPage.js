// ------- navbar

import navbar from "../homepage/navbar.js"
document.getElementById('navbar').innerHTML=navbar()

// slideshow
let container = document.getElementById('slideshow')
let i=0

var arrimg=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275506_569x90.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018707_Cart_Bannerdsfgsd.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018800_Cart_Bannersip.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1654020514_Cart_Bannersip.jpg"]

let img = document.createElement('img')
let image =arrimg[i]
img.src=image
i++
container.append(img)

setInterval(function(){
    if(i===arrimg.length){
        i=0
    }

    container.innerHTML=null
    image=arrimg[i]
    img.src=image
    container.append(img)
    i++
},3000)

// Details Apppend

let product = JSON.parse(localStorage.getItem('cartProduct'))
let display = document.getElementById('details')
let totalAmount = document.getElementById('paymentappend')


var sum = 0
var sum1=0
var grand =0
function append(data){
   
    data.forEach(function(el,index){
        let contain = document.createElement('div')
        let part1=document.createElement('div')
        let part1sub = document.createElement('div')
        let part2 = document.createElement('div')
        let part3 = document.createElement('div')
        let img = document.createElement('img')
        img.src=el.image
        let name = document.createElement('h3')
        name.innerText=el.name
        let mkt = document.createElement('p')
        mkt.innerText=el.mkt
        let price = document.createElement('h3')
        price.innerText=`Rs.${el.bestprice}`
        let select = document.createElement('select')
        let options1 = document.createElement('option')
        options1.innerText = "QTY :1"
        options1.value = 1
        let options2 = document.createElement('option')
        options2.innerText = 2
        options2.value = 2
        let options3 = document.createElement('option')
        options3.innerText = 3
        options3.value = 3
        let options4 = document.createElement('option')
        options4.innerText = 4
        options4.value = 4
        select.append(options1,options2,options3,options4)
        let text = document.createElement('p')
        text.innerText="Delivery between Jun 19 6PM-Jun 20 10PM"
        let hr = document.createElement('hr')
        let remove = document.createElement('button')
        remove.innerText="REMOVE"
        remove.style.cursor="pointer"
        let save = document.createElement('button')
        save.innerText="SAVE FOR LATER"
        save.style.cursor="pointer"
        sum=sum+el.bestprice

        // Qty Function
select.addEventListener('change',function(){ 
    totalAmount.innerHTML=""
   sum1=sum1+(el.bestprice*select.value)
   grand = sum+sum1
   let totalamount = document.createElement('h5')
    totalamount.innerText=`Total Amount * RS.${grand-el.bestprice}`
    let div = document.createElement('div')
    let total = document.createElement('h4')
    total.innerText = `TOTAL AMOUNT Rs. ${grand-el.bestprice}`
    let proced = document.createElement('button')
    proced.innerText="PROCEED"
    div.append(total,proced)
    totalAmount.append(totalamount,div)
})
    // Qty Function End
remove.addEventListener('click',function(){
    deletefun(el,index)
})

   
        part1sub.append(name,mkt)
        part1.append(img,part1sub)
        part2.append(price,select)
        part3.append(text,hr,remove,save)
        contain.append(part1,part2,part3)
        display.append(contain)

    });

    let totalamount = document.createElement('h5')
    totalamount.innerText=`Total Amount * RS.${sum}`
    let div = document.createElement('div')
    let total = document.createElement('h4')
    total.innerText = `TOTAL AMOUNT Rs. ${sum}`
    let proceed = document.createElement('button')
    proceed.innerText="PROCEED"
    div.append(total,proceed)
    totalAmount.append(totalamount,div)

        proceed.addEventListener('click',function(){
            window.location.href="../payment/payment.html"
        })

}

// -----------------Promo Code Function
document.getElementById('submit').addEventListener('click',applyfun)
    
function applyfun(){
    let value = document.getElementById('promoCode').value    
    if(value === "Neds" && sum > 500){
        sum = sum-200
      alert("Promo Code Added")
       window.location.reload()
       
    }
    else if (value !=="Neds"){
        alert("Invalid Promo Code")
    }
    else{
        alert("Total Amount is less than 500")
    }

}
// -----------------Promo Code Function End

// ------- Delete Function
function deletefun(el,index){
    product.splice(index,1)
    localStorage.setItem('cartProduct',JSON.stringify(product))
    window.location.reload()
}

append(product)

// ------------ More Products
let productsArray=[]
function prodcts(i,n,mkt,bp,s){
    this.image=i,
    this.name=n,
    this.mkt=mkt,
    this.bestPrice=bp,
    this.serial=s
}

let p1=new prodcts("https://www.netmeds.com/images/product-v1/150x150/940225/loreal_paris_extraordinary_clay_conditioner_71_5_ml_184972_0_3.jpg","L'Oreal Paris Extraordinary Clay Conditioner 71.5 Ml","L'oreal India Private Limited",99.00,1)
let p2=new prodcts("https://www.netmeds.com/images/product-v1/150x150/954772/blue_heaven_get_bold_eyeliner_waterproof_black_diamond_7_ml_0_0.jpg","Lakme Lip Love Chapstick Cherry 4.5 Gm","Hindustan Unilever Ltd",150.00,2)
let p3=new prodcts("https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_0_1.jpg","Abzorb Dusting Powder 100gm","Sun Pharmaceutical Industr",120.70,142.00,3)
let p4=new prodcts("https://www.netmeds.com/images/product-v1/150x150/944283/rose_water_toner_100_ml_0_1.jpg","Rose Water Toner 100 Ml","VLCC Personal Care Ltd",162.00,16)
let p5=new prodcts("https://www.netmeds.com/images/product-v1/150x150/959469/bold_care_anti_dandruff_shampoo_for_men_200_ml_0_0.jpg","Bold Care Ketoconazole and Zinc Pyrithione Anti","Oddity Healthcare Pvt. Lt",449.25,5)
productsArray.push(p1,p2,p3,p4)




function appends(data){
    let appendProduct = document.getElementById('selling')
    data.forEach(function(el){

        let card = document.createElement("div")
        card.style.cursor="pointer"
        let img=document.createElement("img")
        img.src=el.image

        let name= document.createElement("h3")
        name.textContent=el.name

        let mkt=document.createElement("h4")
        mkt.textContent= `MKT : ${el.mkt}`
        let div = document.createElement('div')
        let bestPrice=document.createElement("h6")
        bestPrice.textContent=` Best Price*₹`
        let amount = document.createElement("h5")
        amount.innerText=el.bestPrice

        let button = document.createElement('button')
        button.innerText="ADD TO CART"
        button.style.cursor="pointer"
        
        card.addEventListener('click',function(){
            window.location.href="personalCare.html"
        })
       
        div.append(bestPrice,amount)
       card.append(img,name,mkt,div,button)

       appendProduct.append(card)
    })
    

}
appends(productsArray)