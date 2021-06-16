let firstImg = document.getElementsByClassName("first-img")[0]
let secondImg = document.getElementsByClassName("second-img")[0]
let firstItem = document.getElementsByClassName("first-item")[0]
let secondItem = document.getElementsByClassName("second-item")[0]

let imgs = [
    'img/image-1.jpg',
    'img/image-2.jpg',
    'img/image-3.jpg',
    'img/image-4.jpg',
    'img/image-5.jpg',
    'img/image-6.jpg'
]

let exchange
let count = 1

const changeImg = function(){
    firstItem.style.animation = "slideOut 2s infinite"
    secondItem.style.animation = "slideIn 2s infinite"

    exchange = firstItem 
    firstItem = secondItem
    secondItem = exchange

    exchange = firstImg
    firstImg = secondImg
    secondImg = exchange

    firstItem.classList.remove("second-item")
    firstImg.classList.remove("second-img")
    firstItem.classList.add("first-item")
    firstImg.classList.add("first-img")

    secondItem.classList.remove("first-item")
    secondImg.classList.remove("first-img")
    secondItem.classList.add("second-item")
    secondImg.classList.add("second-img")

    secondItem.style.left = "100%"
    
    setTimeout(() => {
        secondImg.src = imgs[count+1]
    }, 1900)
    

    count++

    if(count == 5) count = -1
}

setInterval(changeImg, 2000) 