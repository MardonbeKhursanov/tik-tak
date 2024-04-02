

window.addEventListener('load', function(){
    Data()
})
function Data(){
    fetch("http://127.0.0.1:5500/info.json")
    .then((res)=>res.json())
    .then((data)=>{
        Header(data)
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

    document.querySelector("div.btn1").addEventListener("click", ()=>{
        SliderContainer.style.transform = `translate(${-90}%)`
        let span = document.createElement("span")
        span.classList = "span"
        
    })
    document.querySelector("div.btn2").addEventListener("click", ()=>{
        SliderContainer.style.transform = `translate(${0}%)`
    })
}