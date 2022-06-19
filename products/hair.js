//---------- Sidebar Append 
import sidebar from "./sidebar.js"
document.getElementById('categories').innerHTML=sidebar()

import footer from "../footer/footer.js"
document.getElementById('footer').innerHTML=footer()

import navbar from "../homepage/navbar.js"
document.getElementById('navbar').innerHTML=navbar()

// --------------------------- Products Section ------------------------
let productsarr=[]
function products(i,n,mkt,bp,s){
    this.image=i,
    this.pName=n,
    this.mkt=mkt,
    this.bestPrice=bp,
    this.serial=s
}

let p1=new products("https://www.netmeds.com/images/product-v1/150x150/940225/loreal_paris_extraordinary_clay_conditioner_71_5_ml_184972_0_3.jpg","L'Oreal Paris Extraordinary Clay Conditioner 71.5 Ml","L'oreal India Private Limited",99.00,1)
let p2=new products("https://www.netmeds.com/images/product-v1/150x150/889019/pro360_hair_grow_nutritional_powder_chocolate_flavour_250_gm_0_2.jpg","Pro360 Hair Grow Nutritional Powder -","GMN HEALTHCARE PRIVATE",446.25,2)
let p3=new products("https://www.netmeds.com/images/product-v1/150x150/940272/loreal_paris_6_oil_nourish_shampoo_192_5_gm_0_0.jpg","L'Oreal Paris 6 Oil Nourish Shampoo 192.5 ml","L'oreal India Private Limited",179.00,3)
let p4=new products("https://www.netmeds.com/images/product-v1/150x150/825038/kerala_ayurveda_kesini_oil_100_ml_0.jpg","Kerala Ayurveda Kesini Oil 100 ml","Kerala Ayurveda Ltd",289.00,4)
let p5=new products("https://www.netmeds.com/images/product-v1/150x150/959469/bold_care_anti_dandruff_shampoo_for_men_200_ml_0_0.jpg","Bold Care Ketoconazole and Zinc Pyrithione Anti","Oddity Healthcare Pvt. Lt",449.25,5)
let p6=new products("https://www.netmeds.com/images/product-v1/150x150/940246/loreal_paris_total_repair_5_serum_40_ml_0_0.jpg","L'Oreal Paris Total Repair 5 Serum 40 Ml","L'Oreal India Pvt, Ltd",175.00,6)
let p7=new products("https://www.netmeds.com/images/product-v1/150x150/940235/loreal_paris_color_protect_conditioner_71_5_ml_0_0.jpg","L'Oreal Paris Color Protect Conditioner 71.5 Ml",": L'oreal India Private Limited",109.00,7)
let p8=new products("https://www.netmeds.com/images/product-v1/150x150/959473/bold_care_hair_regrowth_combo_pack_minoxidil_hair_growth_oil_60_ml_biotin_hair_growth_tablets_60s_1s_0_0.jpg","Bold Care Hair Regrowth Combo Pack (Minoxidil)","Oddity Healthcare Pvt. Lt",849.00,8)
let p9=new products("https://www.netmeds.com/images/product-v1/150x150/940221/loreal_paris_extraordinary_clay_shampoo_82_5_ml_184948_0_1.jpg","L'Oreal Paris Extraordinary Clay Shampoo 82.5 Ml","L'oreal India Private Limited",79.00,9)
let p10=new products("https://www.netmeds.com/images/product-v1/150x150/940285/loreal_paris_dream_lengths_conditioner_71_5_gm_0_0.jpg","L'Oreal Paris Dream Lengths Conditioner 71.5","L'oreal India Private Limited",109.00,10)
let p11=new products("https://www.netmeds.com/images/product-v1/150x150/940283/loreal_paris_dream_lengths_shampoo_192_5_gm_0_0.jpg","L'Oreal Paris Dream Lengths Shampoo 192.5","L'oreal India Private Limited",175.00,11)
let p12=new products("https://www.netmeds.com/images/product-v1/150x150/940274/loreal_paris_6_oil_nourish_conditioner_192_5_gm_0_0.jpg","L'Oreal Paris 6 Oil Nourish Conditioner 192.5 ml","L'oreal India Private Limited",199.00,12)
let p13=new products("https://www.netmeds.com/images/product-v1/150x150/940242/loreal_paris_total_repair_5_shampoo_82_5_ml_0_0.jpg","L'Oreal Paris Total Repair 5 Shampoo 82.5 Ml","L'oreal India Private Limited",79.00,13)
let p14=new products("https://www.netmeds.com/images/product-v1/150x150/940248/loreal_paris_total_repair_5_conditioner_71_5_ml_0_0.jpg","L'Oreal Paris Total Repair 5 Conditioner 71.5 Ml","L'oreal India Private Limited",99.00,14)
let p15=new products("https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg","Scalpe Plus Anti Dandruff Shampoo 75 ml","Glenmark Pharmaceuticals L",208.00,15)
let p16=new products("https://www.netmeds.com/images/product-v1/150x150/940269/loreal_paris_6_oil_nourish_shampoo_82_5_gm_185269_0_1.jpg","L'Oreal Paris 6 Oil Nourish Shampoo 82.5 Gm","L'oreal India Private Limited",79.00,16)
let p17=new products("https://www.netmeds.com/images/product-v1/150x150/940249/loreal_paris_total_repair_5_conditioner_192_5_ml_0_1.jpg","L'Oreal Paris Total Repair 5 Conditioner 192.5 Ml","L'oreal India Private Limited",209.00,17)
let p18=new products("https://www.netmeds.com/images/product-v1/150x150/940213/loreal_paris_fall_resist_3x_anti_hairfall_conditioner_71_5_ml_0_1.jpg","L'Oreal Paris Fall Resist 3X Anti-Hairfall Conditioner","L'Oreal India Pvt, Ltd",99.00,18)
let p19=new products("https://www.netmeds.com/images/product-v1/150x150/404896/indulekha_bringha_oil_100_ml_0.jpg","Indulekha Bringha Oil 100 ml","Hindustan Unilever Ltd",388.80,19)
let p20=new products("https://www.netmeds.com/images/product-v1/150x150/940287/loreal_paris_dream_lengths_conditioner_192_5_gm_0_1.jpg","L'Oreal Paris Dream Lengths Conditioner 192.5","L'oreal India Private Limited",219.00,20)
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
            window.location.href="productDetails.html"
            localStorage.setItem("singleProduct",JSON.stringify(singleProduct))
        })
        div.append(bestPrice,amount)
       card.append(img,name,mkt,div,button)

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
    
    