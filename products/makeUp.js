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

let p1=new products("https://www.netmeds.com/images/product-v1/150x150/949175/lakme_perfecting_liquid_foundation_pearl_27_ml_0_0.jpg","Lakme Perfecting Liquid Foundation Natural Pearl","Hindustan Unilever Ltd",155.00,1)
let p2=new products("https://www.netmeds.com/images/product-v1/150x150/954772/blue_heaven_get_bold_eyeliner_waterproof_black_diamond_7_ml_0_0.jpg","Lakme Lip Love Chapstick Cherry 4.5 Gm","Hindustan Unilever Ltd",150.00,2)
let p3=new products("https://www.netmeds.com/images/product-v1/150x150/949328/lakme_lip_love_chapstick_cherry_4_5_gm_0_0.jpg","Lakme Enrich Matte Lipstick Shade Pm15 4.7","Hindustan Unilever Ltd",295.00,3)
let p4=new products("https://www.netmeds.com/images/product-v1/150x150/949231/lakme_enrich_matte_lipstick_shade_pm15_4_7_gm_0_1.jpg","L'Oreal Paris Infallible Ultra Matte Liquid","L'oreal India Private Limited",799.00,4)
let p5=new products("https://www.netmeds.com/images/product-v1/150x150/940768/loreal_paris_infallible_ultra_matte_liquid_lipstick,_les_macarons,_838_berry_cherie_5_gm_0_1.jpg","L'Oreal Paris Flash Cat Eye Eyeliner, Black 0.6 Gm","L'Oreal India Pvt, Ltd",663.17,5)
let p6=new products("https://www.netmeds.com/images/product-v1/150x150/940610/maybelline_new_york_colossal_kajal,_super_black_0_35_gm_0_1.jpg","Maybelline New York Colossal Kajal, Super Black","L'Oreal India Pvt, Ltd",325.00,6)
let p7=new products("https://www.netmeds.com/images/product-v1/150x150/940747/loreal_paris_false_lash_superstar_mascara_13_gm_0_0.jpg","L'Oreal Paris False Lash Superstar Mascara 13 ml",": L'oreal India Private Limited",1099.00,7)
let p8=new products("https://www.netmeds.com/images/product-v1/150x150/940165/maybelline_new_york_colossal_kajal,_black_0_35_gm_0_0.jpg","Maybelline New York Colossal Kajal, Black 0.35",": L'Oreal India Pvt, Ltd",180.00,8)
let p9=new products("https://www.netmeds.com/images/product-v1/150x150/940819/loreal_paris_true_match_super_blendable_liquid_foundation_golden_sand_5d5w_30_gm_0_1.jpg","L'Oreal Paris True Match Super Blendable Liquid","L'oreal India Private Limited",737.18,9)
let p10=new products("https://www.netmeds.com/images/product-v1/150x150/948564/miss_claire_one_stroke_kajal_super_black_kajal_yellow_printing_0_35_gm_0_0.jpg","Miss Claire One Stroke Kajal Super Black Kajal","Eureka Cosmo Pvt Ltd",66.50,10)
let p11=new products("https://www.netmeds.com/images/product-v1/150x150/1002856/glimmer_nail_polish_cyan_5_ml_0_0.jpg","Glimmer Nail Polish Cyan 5 ml","Reliance Retail Limited",48.00,11)
let p12=new products("https://www.netmeds.com/images/product-v1/150x150/948324/miss_claire_soft_matte_lip_cream_58_6_5_gm_0_0.jpg","Miss Claire Soft Matte Lip Cream 58 6.5 Gm","Eureka Cosmo Pvt Ltd",202.50,12)
let p13=new products("https://www.netmeds.com/images/product-v1/150x150/1002851/glimmer_nail_polish_slate_grey_5_ml_0_0.jpg","Glimmer Nail Polish Slate Grey 5 ml","Reliance Retail Limited",48.00,13)
let p14=new products("https://www.netmeds.com/images/product-v1/150x150/948447/miss_claire_glimmersticks_for_lips_l_38_warm_red_1_8_gm_0_0.jpg","Miss Claire Glimmersticks For Lips L-38 Warm Red","Eureka Cosmo Pvt Ltd",58.50,14)
let p15=new products("https://www.netmeds.com/images/product-v1/150x150/948640/miss_claire_waterproof_extra_soft_kohl_pencil_gold_cap_0_35_gm_0_0.jpg","Miss Claire Waterproof Extra Soft Kohl Pencil","Eureka Cosmo Pvt Ltd",80.75,15)
let p16=new products("https://www.netmeds.com/images/product-v1/150x150/954843/blue_heaven_bling_nailpaint_718_pink_streak_8_ml_0_0.jpg","Blue Heaven Bling Nailpaint 718 (Pink Streak)","Blue Heaven Cosmetics",55.25,16)
let p17=new products("https://www.netmeds.com/images/product-v1/150x150/1002855/glimmer_nail_polish_skyfall_5_ml_0_0.jpg","Glimmer Nail Polish Skyfall 5 ml","Reliance Retail Limited",48.00,17)
let p18=new products("https://www.netmeds.com/images/product-v1/150x150/940501/maybelline_new_york_fit_me_matteporeless_liquid_foundation_tube,_128_warm_nude_18_gm_0_0.jpg","Maybelline New York Fit Me Matte+Poreless Liquid","L'Oreal India Pvt, Ltd",230.23,18)
let p19=new products("https://www.netmeds.com/images/product-v1/150x150/948479/miss_claire_waterproof_kohl_kajal_soft_kohl_kajal_pencil_black_cap_1_2_gm_0_1.jpg","Miss Claire Waterproof Kohl & Kajal Soft Kohl","Eureka Cosmo Pvt Ltd",85.00,19)
let p20=new products("https://www.netmeds.com/images/product-v1/150x150/940619/maybelline_new_york_color_sensational_creamy_matte_lipstick,_660_touch_of_spice_3_9_gm_0_1.jpg","Maybelline New York Color Sensational Creamy","L'Oreal India Pvt, Ltd",230.23,20)
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
    
    