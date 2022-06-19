//---------- Sidebar Append 
import sidebar from "./sidebar.js"
document.getElementById('categories').innerHTML=sidebar()

import footer from "../footer/footer.js"
document.getElementById('footer').innerHTML=footer()

import navbar from "../homepage/navbar.js"
document.getElementById('navbar').innerHTML=navbar()

// -----------------Slide show

let container = document.getElementById('slideshow')
let i=0

var arrimg=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1649355346_WEb_Personal_Care-1000X200.png",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1654250893_1000X200.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1643047473_Web_Banner_1000x200pxl.jpg"]

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

// --------------------------- Products Section ------------------------
let productsarr=[]
function products(i,n,mkt,bp,mrp,s){
    this.image=i,
    this.pName=n,
    this.mkt=mkt,
    this.bestPrice=bp,
    this.mrp=mrp,
    this.serial=s
}
let p1=new products("https://www.netmeds.com/images/product-v1/150x150/959541/mcaffeine_naked_raw_tan_removal_coffee_body_scrub_100_gm_0_0.jpg","mCaffeine Naked & Raw Tan Removal Coffee Body Scrub 100 gm","Pep Technologies Pvt. Ltd.",399.61,449.00,1)
let p2=new products("https://www.netmeds.com/images/product-v1/150x150/413967/patanjali_dant_kanti_tooth_paste_natural_200_gm_0.jpg","Patanjali Dant Kanti Tooth Paste - Natural 200 gm","Patanjali Ayurved Ltd",95.00,95.00,2)
let p3=new products("https://www.netmeds.com/images/product-v1/150x150/323943/abzorb_dusting_powder_100gm_0_1.jpg","Abzorb Dusting Powder 100gm","Sun Pharmaceutical Industr",120.70,142.00,3)
let p4=new products("https://www.netmeds.com/images/product-v1/150x150/977197/netmeds_3_ply_face_mask_with_nose_pin_50s_0_1.jpg","Netmeds 3 Ply Face Mask with Nose Pin 50's","Reliance Retail Limited",115.00,500.00,4)
let p5=new products("https://www.netmeds.com/images/product-v1/150x150/940163/maybelline_new_york_baby_lips_lip_balm,_berry_crush_4_gm_0_0.jpg","Maybelline New York Baby Lips Lip Balm, Berry","L'Oreal India Pvt, Ltd",138.25, 175.00,5)
let p6=new products("https://www.netmeds.com/images/product-v1/150x150/827720/abzorb_dusting_powder_50gm_0_1.jpg","Abzorb Dusting Powder 50gm","Sun Pharmaceutical Industries",68.00,80.00,6)
let p7=new products("https://www.netmeds.com/images/product-v1/150x150/1004097/maxi_travel_pack_toothbrush_buy_1_get_1_free_0_1.jpg","Maxi For You Travel Pack Toothbrush - Soft /","V1 Enterprises",50.00,100.00,7)
let p8=new products("https://www.netmeds.com/images/product-v1/150x150/958677/shake_handz_e_alcohol_hand_rub_with_flip_cap_500_ml_0_1.jpg","Shake HandZ-E Alcohol Hand Rub With Flip Cap","Inventz Lifesciences Pvt Ltd",100.00,250.00,8)
let p9=new products("https://www.netmeds.com/images/product-v1/150x150/940168/garnier_skin_naturals,_pure_active_neem_face_wash_100_gm_0_0.jpg","Garnier Skin Naturals, Pure Active Neem Face","L'Oreal India Pvt, Ltd",120.00,120.00,9)
let p10=new products("https://www.netmeds.com/images/product-v1/150x150/908599/ciphands_antiseptic_hand_sanitizer_100_ml_0_1.jpg","Ciphands Antiseptic Hand Sanitizer 100 ml","Cipla Ltd(Otc)",47.50,50.00,10)
let p11=new products("https://www.netmeds.com/images/product-v1/150x150/802119/patanjali_dant_kanti_tooth_paste_natural_200_gm_100_gm_0.jpg","Patanjali Dant Kanti Tooth Paste - Natural","Patanjali Ayurved Ltd",145,145.00,11)
let p12=new products("https://www.netmeds.com/images/product-v1/150x150/110947/tetmosol_medicated_soap_100_gm_0_1.jpg","Tetmosol Medicated Soap 100 gm","Piramal Healthcare Ltd",81.40,88.00,12)
let p13=new products("https://www.netmeds.com/images/product-v1/150x150/953905/shake_handz_e_hand_rub_5_litre_0_0.jpg","Shake HandZ-E Alcohol Hand Rub 5 litre","Inventz Lifesciences Pvt Ltd",575.00,2500,13)
let p14=new products("https://www.netmeds.com/images/product-v1/150x150/829099/sensodyne_repair_protect_toothpaste_100_gm_0_2.jpg","Sensodyne Repair & Protect Toothpaste 100","Gsk",220.00,220.00,14)
let p15=new products("https://www.netmeds.com/images/product-v1/150x150/958409/status_n95_face_mask_white_pack_of_20_0_1.jpg","Status N95 Face Mask - White (Pack of 20)","Chinar Forge Ltd",200.90,980.00,15)
let p16=new products("https://www.netmeds.com/images/product-v1/150x150/952497/garnier_skin_naturals_bright_complete_vitamin_c_uv_serum_cream_45_gm_0_0.jpg","Garnier Skin Naturals Bright Complete Vitamin","L'Oreal India Pvt, Ltd",159.00,159.00,16)
let p17=new products("https://www.netmeds.com/images/product-v1/150x150/1004100/maxi_candy_toothbrush_buy_1_get_1_free_1s_0_0.jpg","Maxi Candy Toothbrush (Buy 1 Get 1 Free)","V1 Enterprises",35.00,70.00,17)
let p18=new products("https://www.netmeds.com/images/product-v1/150x150/944260/insta_glow_gold_bleach_30_gm_0_2.jpg","Insta Glow Gold Bleach 30 Gm","VLCC Personal Care Ltd",62.25,75.00,18)
let p19=new products("https://www.netmeds.com/images/product-v1/150x150/827444/swadeshi_dr_teeth_cream_herbal_toothpaste_100_gm_0.jpg","Swadeshi Dr.Teeth Cream Herbal Toothpaste 100 gm","Swadeshi Ayurved",48.00,60.00,19)
let p20=new products("https://www.netmeds.com/images/product-v1/150x150/950142/mylab_coviself_covid_19_rapid_antigen_self_test_kit_0_1.jpg","Mylab Coviself Covid-19 Rapid Antigen Self Test Kit","Mylab Discovery Solutions",175.00,250.00,20)
productsarr.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20)
            //---------------------------------- Appending Array -----------------------

let appendProduct = document.getElementById('products')
append(productsarr)
function append(data){
  appendProduct.innerHTML=null
    data.forEach(function(el){

        let card = document.createElement("div")
        card.style.cursor="pointer"
        let img=document.createElement("img")
        img.src=el.image

        let name= document.createElement("h3")
        name.textContent=el.pName

        let mkt=document.createElement("h4")
        mkt.textContent= `MKT : ${el.mkt}`
        let div = document.createElement('div')
        let bestPrice=document.createElement("h6")
        bestPrice.textContent=` Best Price*₹`
        let amount = document.createElement("h5")
        amount.innerText=el.bestPrice
        let price = document.createElement('p')
        price.innerText=`MRP Rs.${el.mrp}`
        price.style.textDecoration="line-through";

        let button = document.createElement('button')
        button.innerText="ADD TO CART"
        button.style.cursor="pointer"
        
        card.addEventListener("click",function(){
            let singleProduct={
                name:el.pName,
                image:el.image,
                mkt:el.mkt,
                bestprice:el.bestPrice,
                price:el.mrp
            }
            console.log(singleProduct)
            localStorage.setItem("singleProduct",JSON.stringify(singleProduct))
            window.location.href="productDetails.html"
        })
        div.append(bestPrice,amount)
       card.append(img,name,mkt,div,price,button)

       appendProduct.append(card)
    })
    

}

    //----------------------------------------  Sort Function----------------------------
    document.getElementById('popularity').addEventListener("click",sortpopularity)
    document.getElementById('sort-lh').addEventListener("click",sortLowtoHigh)
    document.getElementById('sort-hl').addEventListener("click",sortHightoLow)
    document.getElementById('discount').addEventListener("click",sortDiscount)

    function sortpopularity(){
        productsarr.sort(function(a,b){
                
            if(a.serial < b.serial){
                return -1
            }
            else if (a.bestPrice < b.bestPrice){
                return 1
            }
            return 0
        });
        append(productsarr)
    }

    function sortLowtoHigh(){
        productsarr.sort(function(a,b){
                
            if(a.bestPrice > b.bestPrice){
                return 1
            }
            else if (a.bestPrice < b.bestPrice){
                return -1
            }
            return 0
        });
        append(productsarr)
    }
    
    function sortHightoLow(){
        productsarr.sort(function(a,b){
                
            if(a.bestPrice > b.bestPrice){
                return -1
            }
            else if (a.bestPrice < b.bestPrice){
                return 1
            }
            return 0
        });
        append(productsarr)
    }
    
    function sortDiscount(){
        productsarr.sort(function(a,b){
                
            if(a.bestPrice > b.bestPrice){
                return 1
            }
            else if (a.bestPrice < b.bestPrice){
                return -1
            }
            return 0
        });
        append(productsarr)
    }
    
    