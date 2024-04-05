

window.addEventListener('load', function(){
    Data()
})
function Data(){
    fetch("http://127.0.0.1:5500/info.json")
    .then((res)=>res.json())
    .then((data)=>{
        Header(data)
        Global(data)
        Brands(data)
    })
}

function Header(item){
    let logo = document.createElement("img")
    logo.src = item[0].logo
    let parent = document.getElementById("navBar")
    let NavList = document.createElement("ul")
    for(let i=0; i<item[0].NavList.length; i++){
        let ListItem = document.createElement('li')
        let a = document.createElement("a")
        a.href = item[0].ListHref[i]
        ListItem.innerHTML = item[0].NavList[i]
        a.append(ListItem)
        NavList.append(a)
    }
    parent.append(logo)
    parent.append(NavList)

    let slider = document.getElementById("slider")
    let SliderContainer = document.getElementById("SliderContainer")
    let ButtonsContainer =  document.createElement("div")
    ButtonsContainer.classList = "ButtonsContainer"
    
    for(let i=0; i<item[0].Slider.length; i++){
        let SliderImg = document.createElement("img")
        let btn = document.createElement("div")
        btn.classList = `btn${i+1}`
        SliderImg.src = item[0].Slider[i]
        SliderContainer.append(SliderImg)
        ButtonsContainer.append(btn)
        
    }
    slider.append(ButtonsContainer)

    let btn1 = document.querySelector("div.btn1")
    btn1.addEventListener("click", ()=>{
        SliderContainer.style.transform = `translate(${0}%)`
    })
    let btn2 = document.querySelector("div.btn2")
    btn2.addEventListener("click", ()=>{
        SliderContainer.style.transform = `translate(${-90}%)`
    })
}

function Global(item){
    let title = document.createElement("h1")
    let parent = document.getElementById("globalSection")
    title.innerHTML = item[1].title
    title.classList.add("title")
    parent.append(title)
    let boxes = document.createElement("div")
    boxes.classList.add("globalBoxes")
    parent.append(boxes)
    for(let i=0; i<item[1].boxesTitle.length; i++){
        let box = document.createElement("div")
        box.className = `GlobalBox a${+i+1}`
        let boxTitle = document.createElement("h2")
        boxTitle.innerHTML = item[1].boxesTitle[i]
        let boxPara = document.createElement("p")
        boxPara.innerHTML = item[1].boxPara[i]
        let a = document.createElement("a")
        a.href = item[1].boxHref[i]
        a.innerHTML = "Batafsil"
        box.append(boxTitle)
        box.append(boxPara)
        box.append(a)
        boxes.append(box)
    }
}

function Brands(item){
    let Brand = document.createElement("div")
    Brand.classList.add("Brand")
    let title = document.createElement("h1")
    
    let parent = document.getElementById("brands")
    title.innerHTML = item[2].title
    title.classList.add("title")
    parent.append(title)
    parent.append(Brand)
    for(let i=0; i<item[2].BrandLogo.length; i++){
        let BrandLogo = document.createElement("img")
        let a = document.createElement('a')
        a.href = item[2].BrandsSource[i]
        a.append(BrandLogo)
        BrandLogo.src = item[2].BrandLogo[i]
        Brand.append(a)
    }
    let All = document.createElement("a")
    let btn = document.createElement("button")
    All.href = item[2].All
    All.innerText = "Hammasini Ko'rish"
    btn.append(All)
    parent.append(btn)
}