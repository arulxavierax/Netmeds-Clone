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

var arrimg=["https://www.netmeds.com/images/cms/aw_rbslider/slides/1643047473_Web_Banner_1000x200pxl.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1653417533_Tetmosol-Offer-Banners-1000x200.jpg",
"https://www.netmeds.com/images/cms/aw_rbslider/slides/1653329097_Netmeds-Range-Banners_1000x200.jpg"]

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
function products(i,n,mkt,bp,s){
    this.image=i,
    this.pName=n,
    this.mkt=mkt,
    this.bestPrice=bp,
    this.serial=s
}
let p1=new products("https://www.netmeds.com/images/product-v1/150x150/949331/lakme_peach_milk_soft_creme_250_gm_0_0.jpg","Lakme Peach Milk Soft Creme 250 Gm","Hindustan Unilever Lt",375.00,1)
let p2=new products("https://www.netmeds.com/images/product-v1/150x150/921593/garnier_skin_black_serum_mask_pure_charcoal_28_gm_0_0.jpg","Garnier Skin Black Serum Mask - Pure Charcoal 28","L'Oreal India Pvt, Ltd",75.00,2)
let p3=new products("https://www.netmeds.com/images/product-v1/150x150/944276/vlcc_7x_ultra_whitening_brightening_charcoal_peel_off_mask_100_gm_0_2.jpg","Vlcc 7X Ultra Whitening & Brightening Charcoal Peel","VLCC Personal Care Ltd",315.00,3)
let p4=new products("https://www.netmeds.com/images/product-v1/150x150/940291/garnier_skin_naturals,_charcoal,_face_serum_sheet_mask_black_28_gm_0_0.jpg","Garnier Skin Naturals, Charcoal, Face Serum","L'Oreal India Pvt, Ltd",82.17,4)
let p5=new products("https://www.netmeds.com/images/product-v1/150x150/14725/garnier_men_acnofight_pimple_clearing_whitening_cream_20_gm_0_2.jpg","Garnier Men Acnofight Pimple Clearing Whitening","L'Oreal India Pvt, Ltd",87.12,5)
let p6=new products("https://www.netmeds.com/images/product-v1/150x150/936458/garnier_skin_naturals_bright_complete_vitamin_c_uv_serum_cream_23_gm_0_0.jpg","Garnier Skin Naturals Bright Complete Vitamin C","L'Oreal India Pvt, Ltd",85.00,6)
let p7=new products("https://www.netmeds.com/images/product-v1/150x150/959576/mcaffeine_cappuccino_coffee_face_scrub_kills_99_9_acne_causing_germs_with_vitamin_e_cinnamon_75_gm_0_0.jpg","mCaffeine Cappuccino Coffee Face Scrub - Kills","Pep Technologies Pvt. Ltd.",199.23,7)
let p8=new products("https://www.netmeds.com/images/product-v1/150x150/951056/house_of_aroma_joy_fragrance_oil_10_ml_0_0.jpg","House of Aroma Joy Fragrance Oil 10 ml","House Of Aroma",120.00,8)
let p9=new products("https://www.netmeds.com/images/product-v1/150x150/945302/mirabelle_korea_gold_charcoal_dual_system_facial_sheet_mask_25_ml_0_0.jpg","Mirabelle Korea Gold + Charcoal Dual System","MIRABELLE COSMETICS ",119.25,9)
let p10=new products("https://www.netmeds.com/images/product-v1/150x150/406133/himalaya_oil_clear_mud_face_pack_50_gm_0_2.jpg","Himalaya Oil Clear Mud Face Pack 50 gm","The Himalaya Drug Company",66.75,10)
let p11=new products("https://www.netmeds.com/images/product-v1/150x150/925276/jovees_face_cream_pearl_whitening_60_gm_0_2.jpg","Jovees Face Cream - Pearl Whitening 60 gm","Jovees Herbal Care India Ltd",445.00,11)
let p12=new products("https://www.netmeds.com/images/product-v1/150x150/951233/natures_essence_glowing_gold_facial_kit_60_gm_0_0.jpg","Nature's Essence Glowing Gold Facial Kit 60 gm","NATURE's ESSENCE PVT",224.00,12)
let p13=new products("https://www.netmeds.com/images/product-v1/150x150/945263/the_natural_wash_retinol_serum_for_spotless_skin_with_1_5_hyaluronic_acid_anti_ageing_serum_30_ml_0_2.jpg","The Natural Wash Retinol Serum For Spotless Skin","TNW International Ltd",434.00,13)
let p14=new products("https://www.netmeds.com/images/product-v1/150x150/971706/gemblue_biocare_aloevera_skin_purfying_gel_500_ml_0_0.jpg","Gemblue Biocare Aloevera Skin Purfying Gel 500 ml","MTS INTERNATIONAL",224.25,14)
let p15=new products("https://www.netmeds.com/images/product-v1/150x150/412194/bioderma_sebium_gel_moussant_200_ml_0.jpg","Bioderma Sebium Gel Moussant 200 ml","Naos Skin Care India Pvt Lt",1599.00,15)
let p16=new products("https://www.netmeds.com/images/product-v1/150x150/944283/rose_water_toner_100_ml_0_1.jpg","Rose Water Toner 100 Ml","VLCC Personal Care Ltd",162.00,16)
let p17=new products("https://www.netmeds.com/images/product-v1/150x150/859007/klairs_supple_preparation_facial_toner_180_ml_0_1.jpg","Klairs Supple Preparation Facial Toner 180 ml","Limese Pvt Ltd",1358.00,17)
let p18=new products("https://www.netmeds.com/images/product-v1/150x150/962639/jovees_green_tea_toner_100_ml_0_0.jpg","Jovees Green Tea Toner 100 ml","Jovees Herbal Care India",195.00,18)
let p19=new products("https://www.netmeds.com/images/product-v1/150x150/948055/lotus_herbals_safe_sun_3_in_1_matte_look_daily_sunblock_pa_spf_40_100_gm_0_0.jpg","Lotus Herbals Safe Sun 3 In 1 Matte-Look Daily","Jovees Herbal Care India Ltd",465.00,19)
let p20=new products("https://www.netmeds.com/images/product-v1/150x150/925257/jovees_moisturizing_lotion_white_water_lily_100_ml_0_1.jpg","Jovees Moisturizing Lotion - White Water Lily 100 ml","Jovees Herbal Care India Ltd",240.00,20)
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
            localStorage.setItem("singleProduct",JSON.stringify(singleProduct))
            window.location.href="productDetails.html"
        })
        div.append(bestPrice,amount)
       card.append(img,name,mkt,div,button)

       appendProduct.append(card)
    })
    

}

    //----------------------------------------  Sort Function----------------------------
    document.getElementById('sort-lh').addEventListener("click",sortLowtoHigh)
    document.getElementById('sort-hl').addEventListener("click",sortHightoLow)
    document.getElementById('discount').addEventListener("click",sortDiscount)
    document.getElementById('popularity').addEventListener("click",sortpopularity)

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
    