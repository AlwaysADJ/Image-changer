const imagesEl = document.getElementById("images")
const navigateLeft = document.getElementById("nav-left")
const navigateRight = document.getElementById("nav-right")
const showAll = document.getElementById("showall-btn")


let  images = [
    "images/eye.webp",
    "images/garden.jpg",
    "images/hand_and_nature.jpg",
    "images/hill.webp"
]

render = (content) => {
    let displayImage = ""
    const shuffle = Math.floor(Math.random() * content.length + 1)
    for (i = 0; i < content.length; i++){
        if (shuffle < content.length) {
            displayImage = `
            <img id="images" alt="content image" src=${content[shuffle]}>
            `
        } else {
            displayImage = `
            <img id="images" alt="content image" src=${content[i]}>
            `
        }
    imagesEl.innerHTML = displayImage

    console.log(shuffle)
}
}

navigateLeft.addEventListener("click", function() {
    render(images)
})

navigateRight.addEventListener("click", function() {
    render(images)
})

viewAll = (content) => {
    let displayImage = ""
    for (i = 0; i < content.length; i++) {
        displayImage += `
    <img id="viewall" alt="content images" src=${content[i]}>
    `
    }
    imagesEl.innerHTML = displayImage
}

showAll.addEventListener("click", function() {
    viewAll(images)
})