let cshover = document.querySelectorAll('.cs-hover-uber')






let firstuber = document.querySelectorAll('.first-uber')
let uberarray = [`<a href='#'>NACHHALTIGKEIT</a><a href='#'>NACHHALTIGKEITSBERICHT</a><a href='#'>B&C-VERHALTENSKODEX
</a><a href='#'>WICHTIGE ERFOLGE 2021</a><a href='#'>ENGAGEMENT VON B&C IN SDGS
</a><a href='#'>BIO IN KONVERSION
</a><a href='#'>FAIR WEAR FOUNDATION
</a><a href='#'>ZERTIFIZIERUNG</a><a href='#'>MITGLIEDSCHAFTEN</a>`,
`<a href='#'>WERBEARTIKEL-BRANCHE
</a><a href='#'>EVENT</a><a href='#'>MERCHANDISING</a><a href='#'>MUSIK & ENTERTAINMENT
</a><a href='#'>MODE & ETAIL
</a><a href='#'>TOURISMUS</a><a href='#'>VEREINE, VERBÄNDE & CLUBS
</a><a href='#'>SCHOOL & COLLEGE UNIFORM
</a><a href='#'>SPORT & FREIZEIT

</a><a href='#'>HOTEL
</a><a href='#'>BARS & RESTAURANTS

</a><a href='#'>UNTERNEHMENSKLEIDUNG
</a><a href='#'>BERUFSKLEIDUNG
</a><a href='#'>ARBEITSKLEIDUNG
</a><a href='#'>VERTRIEB & LOGISTIK

</a>`,
`<a href='#'>EIN MUST-SEE IN 2022
</a><a href='#'>B&C T-SHIRTS
</a><a href='#'>DIE POLO-MARKT-REFERENZ
</a><a href='#'>MEINE B&C SWEATSHIRTS
</a><a href='#'>B&C THE SHIRT CULTURE
</a><a href='#'>B&C OUTERWEAR UNIT
</a><a href='#'>WENN STIL AUF BASIC TRIFFT
</a><a href='#'>WENN STIL AUF BIO TRIFFT
</a>`,
`<a href='#'>DIGITALE BROSCHÜREN
</a><a href='#'>PRIVATE ROOM
</a><a href='#'>PROJEKT-KONFIGURATOR
</a><a href='#'>WHITEPAPER</a><a href='#'>BERICHTE ZUR BEDRUCKBARKEIT
</a><a href='#'>STIL UND PASSFORM
</a>`]
let ubercon=document.querySelector('.cs-uber-container')
firstuber.forEach((a,i)=>{
    a.addEventListener('mouseover',(e)=>{
        cshover[i].style.display='flex'
        ubercon.style.marginBottom='75px'
        e.target.style.color='black'
        cshover[i].innerHTML=uberarray[i]
        
        
}) 
  a.addEventListener('mouseout',(e)=>{
    if (e.target.classList.contains('cs-hover-over')){
       return
    }
    else if(!e.target.classList.contains('cs-hover-over')  ) {
        cshover[i].style.display='none'
        ubercon.style.marginBottom='0'
        e.target.style.color='grey'
        
       
    }
    
}) 
})



let gridinnerarray = [`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20823/2102_BC_Site_Catalogue_Mouse-over-banners_T-shirts_0.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20874/2102_BC_Site_Catalogue_Mouse-over-banners_polos.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20840/2102_BC_Site_Catalogue_Mouse-over-banners_sweats.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20875/2102_BC_Site_Catalogue_Mouse-over-banners_shirts.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20876/2102_BC_Site_Catalogue_Mouse-over-banners_softshell.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20877/2102_BC_Site_Catalogue_Mouse-over-banners_jackets_0.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20878/2102_BC_Site_Catalogue_Mouse-over-banners_fleece.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`,
`
<div class="grid">
<div class=""   >
  <div style="position:relative ;">
    <img  style="height:100% ;width:100%" src="https://api.bc-collection.eu/storage/20879/TUC01_Perfect-PRO_Tee_red_BUC50_Universal-PRO_steel-grey3.jpeg" alt="">
     <h1 style="position: absolute;top: 50%;left:50%;color: white;transform: translateX(-50%);">T-SHIRTS</h1>
  </div>
</div>
<div class="">
  <p>KOLLEKTIONEN</p>
  <a href="">B&C IN KONVERSION BIO-BAUMWOLL INSPIRE LINIE</a>
  <a href="">B&C #E LINIE</a>
  <a href="">TRIBLEND T-SHIRTS</a>
  <a href="">SUBLIMATION T-SHIRTS</a>
  <a href="">B&C CORE ATTITUDE</a>
  <a href="">B&C LAB T-SHIRTS</a>
  <a href="">B&C PRO COLLECTION</a>
  <a href="">ALLE KOLLEKTIONEN</a>
</div>
<div class="text-left">
  <p>ZULETZT ANGESEHEN</p>
  <p class="text-muted">Sie haben noch kein Produkt gesehen!</p>
  
  <p >IN MEINER WUNSCHLISTE</p>
  <p class="text-muted">Sie haben Ihrer Wunschliste noch kein Produkt hinzugefügt.
    Klicken Sie auf „Zur Wunschliste hinzufügen“, um Ihre Auswahl zu speichern.</p>
</div>
</div>

`
]
let csdark = document.querySelector('.cs-bgdark')

let header = document.querySelector('header')



let csalle=document.querySelectorAll('.cs-alle')
let allehover = document.querySelectorAll('.alle-hover')

allehover.forEach((a,i)=>{
    a.addEventListener('mouseenter',(e)=>{
        
           
            csalle[i].style.display='flex'
            csalle[i].classList.add('myhover')
           
            csalle[i].innerHTML=gridinnerarray[i]
         
            
             
            
        
}) 


 
    
  a.addEventListener('mouseleave',(e)=>{
    
       
      
       csalle.forEach(k=>{
        k.classList.remove('myhover')
        k.style.display='none'})
       
        
})


})

let sagtik = document.querySelector('.tikla')
let soltik = document.querySelector('.tikla2')
let swipernext = document.querySelector('.swiper-button-next')
let swiperprev = document.querySelector('.swiper-button-prev')
let prev=document.querySelector('.carousel-control-prev-icon')
let next=document.querySelector('.carousel-control-next-icon')
soltik.addEventListener('click',(e)=>{
  let clickevent = new MouseEvent('click')
  swipernext.dispatchEvent(clickevent)
  next.dispatchEvent(clickevent)
})
sagtik.addEventListener('click',(e)=>{
  let clickevent = new MouseEvent('click')
  swiperprev.dispatchEvent(clickevent)
  prev.dispatchEvent(clickevent)
})



function openNav() {
  document.getElementById("mySidenav").classList.toggle('active');
  //document.body.classList.toggle('active')
}

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }


let searchinput = document.querySelector('.searchinput')

let faxmark = document.querySelector('.fa-xmark')
let glass = document.querySelector('.fa-magnifying-glass')
glass.addEventListener('click',(e)=>{
   searchinput.style.opacity = '1'
   searchinput.style.display='block'
})
faxmark.addEventListener('click',(e)=>{
  searchinput.style.opacity='0'
  searchinput.style.display='none'
})

let myobject = {
  'tshirts':[
  ['./images/pic2.jpg','../images/pic2-hover.jpeg'],
  ['./images/pic3.jpg','../images/pic3-hover.jpeg'],
['./images/pic5.jpg','../images/pic5-hover.jpeg']]

,'poloshirts':[
  ['https://api.bc-collection.eu/storage/5870/conversions/I_PW457_Safran-Timeless_women_black_4068-thumbnail.jpg','https://api.bc-collection.eu/storage/20911/conversions/I_PW457_Safran-Timeless_women_burgundy_201-thumbnail.jpeg'],
  ['https://api.bc-collection.eu/storage/5533/conversions/I_PM430_Organic-Inspire-Polo_men_Heather-Grey_0072-thumbnail.jpg','https://api.bc-collection.eu/storage/20929/conversions/I_PM430_Organic-Inspire-Polo_Men_millenial-lilac_074-thumbnail.jpeg'],

['https://api.bc-collection.eu/storage/6443/conversions/I_PW440_Organic-Inspire-Polo_Women_black_071_cropped-thumbnail.jpg','https://api.bc-collection.eu/storage/20930/conversions/PW440_I_BC_orchid-pink_04-thumbnail.jpeg'],
],
'sweatshirts':
[
  ['https://api.bc-collection.eu/storage/3801/conversions/WU33B_I_BC_blue_fog_01_Crop-thumbnail.jpg','https://api.bc-collection.eu/storage/20945/conversions/WU33B_I_BC_sage_printed_04-hover-2-thumbnail.jpeg'],
  ['https://api.bc-collection.eu/storage/5586/conversions/WU02K_I_BC_nordic_blue_02_crop-thumbnail.jpg','https://api.bc-collection.eu/storage/20951/conversions/WU02K_I_BC_white_KING_049-hover-thumbnail.jpeg'],
['https://api.bc-collection.eu/storage/5425/conversions/WW36B_I_BC_soft_rose_119-thumbnail.jpg','https://api.bc-collection.eu/storage/20948/conversions/WW36B_I_BC_soft_rose_21-thumbnail.jpeg']
],
'shirts':
[
  ['https://api.bc-collection.eu/storage/6870/conversions/SMO01_I_BC_01_0-thumbnail.jpg','https://api.bc-collection.eu/storage/20930/conversions/PW440_I_BC_orchid-pink_04-thumbnail.jpeg'],
  ['https://api.bc-collection.eu/storage/5717/conversions/SMP21_I_BC_01_0-thumbnail.jpg','https://api.bc-collection.eu/storage/5225/conversions/SMP61_I_BC_01-thumbnail.jpg'],
['https://api.bc-collection.eu/storage/6443/conversions/I_PW440_Organic-Inspire-Polo_Women_black_071_cropped-thumbnail.jpg','https://api.bc-collection.eu/storage/5717/conversions/SMP21_I_BC_01_0-thumbnail.jpg']
]}
let popularButtons= document.querySelector('.popularButtons')
let buttons = popularButtons.querySelectorAll('button')
let cshoverpics = document.querySelectorAll('.cshover')
buttons.forEach(a=>{
  a.addEventListener('click',(e)=>{
    console.log(myobject[e.target.dataset.categor])
         cshoverpics.forEach((k,i)=>{
          let hoverdiv=k.querySelector('div')
          let hoverpic = k.querySelector('img')
          hoverdiv.style.background=`url("${myobject[e.target.dataset.categor][i][1]}")`
          hoverdiv.style.backgroundPosition='center'
          hoverdiv.style.backgroundSize='cover'
          hoverpic.src=`${myobject[e.target.dataset.categor][i][0]}`
         })
  })
})

let mytoggle = document.querySelector('.mytoggle');
    let csnav = document.querySelector('.cs-nav');

    let csli = document.querySelectorAll('.cs-li');
  mytoggle.closest(".togglecontainer").addEventListener("click",(e)=> {
    mytoggle.classList.toggle("active")
    if (mytoggle.classList.contains("active")){
         csnav.classList.add("active")
    }
    else {
      csnav.classList.remove("active")
    }
  })

  csli.forEach(a=>{
    a.addEventListener("click",(e)=>{
      a.querySelector(".cs-valizcontainer").classList.add("active")
      if (e.target.classList.contains('cancel')){
        a.querySelector('.cs-valizcontainer').classList.remove('active')
      }
    })
  })
