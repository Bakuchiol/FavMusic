let genre = {
    childhood: {
        name: "90s",
        albumImage: "https://i.discogs.com/WDTW39JNQeGYxnr2maQE7tP84K9H_OHLHIOi6oSQSJs/rs:fit/g:sm/q:90/h:533/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNzc0/MDMtMTQ3ODcxNDcw/NC04Nzg5LmpwZWc.jpeg",
        description: "Linkin Park and Jay Z.",
        albumName: "Collision Course"
    },
    japanese: {
        name: "Japanese Pop/RnB",
        albumImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Love_All_Serve_All_album_cover.jpeg",
        description: "まつり - Fuji Kaze.",
        albumName: "Love All Serve All"
    },
    chinese: {
        name: "Chinese Pop/RnB",
        albumImage: "https://i.scdn.co/image/ab67616d0000b2734c731c501c2514c2aaf4b754",
        description: "心如止水 - Ice Paper",
        albumName: "成語接龍"
    }
}
let title = document.querySelector('.title');
let music = document.querySelector('.name');
let albumCover = document.querySelector('.profileImg');
let artist = document.querySelector('.name')
let album = document.querySelector('.albumName')


const changeMusic = (taste) =>{
    // Determine what genre
    if(taste === "90s"){
        let border = document.querySelector('.album')
        border.style.border = "1px solid lightblue"
        addText(title,genre.childhood.name)
        addImage(albumCover,genre.childhood.albumImage)
        addText(artist,genre.childhood.description)
        addText(album,genre.childhood.albumName)
        // ------------------------------
    }else if(taste === "japanese"){
        let border = document.querySelector('.album')
        border.style.border = "1px solid yellow"
        addText(title,genre.japanese.name)
        addImage(albumCover,genre.japanese.albumImage)
        addText(artist,genre.japanese.description)
        addText(album,genre.japanese.albumName)

    }else if(taste === "chinese"){
        let border = document.querySelector('.album')
        border.style.border = "1px solid white"
        addText(title,genre.chinese.name)
        addImage(albumCover,genre.chinese.albumImage)
        addText(artist,genre.chinese.description)
        addText(album,genre.chinese.albumName)

    }else{
        addText(title,"Favorite Music Genres")
    }
}


const addText =(target, text) => {
    target.innerHTML = text
}

const addImage =(target, url)=>{
    target.setAttribute('src',url)
}

const uploadImage = (target, type)=>{
let newImage = document.createElement('img')
newImage.setAttribute('src', type)
newImage.setAttribute('class','profileImg')
target.append(newImage)
}



// // Target all of the changeable ele
// let title = document.querySelector('.flavor')
// // change innerHTML
// let icecreamPic = document.querySelector('.iceC')
// // change SRC
// let description = document.querySelector('.textbox')
// // change innerHTML

// let recipe = document.querySelector('.smContainer')
// // add Recipe txt
// let shaker = document.querySelector('.description')
// // add image


// const changeFlavors = (flavor) =>{
//     // Determine what flavor
//     if(flavor === "vanilla"){
//         let body = document.querySelector('body')
//         body.style.backgroundColor = "lemonchiffon"
//         addText(title,icecream.vanilla.name)
//         addImage(icecreamPic,icecream.vanilla.coneImage)
//         addText(description,icecream.vanilla.description)
//         uploadImage(recipe,icecream.vanilla.shakeAvi)
//         addText(shaker,icecream.vanilla.recipe)
//         // ------------------------------
//     }else if(flavor === "chocolate"){
//         let body = document.querySelector('body')
//         body.style.backgroundColor = "burlywood"
//         addText(title,icecream.chocolate.name)
//         addImage(icecreamPic,icecream.chocolate.coneImage)
//         addText(description,icecream.chocolate.description)
//         uploadImage(recipe,icecream.chocolate.shakeAvi)
//         addText(shaker,icecream.chocolate.recipe)
//     }else if(flavor === "strawberry"){
//         let body = document.querySelector('body')
//         body.style.backgroundColor = "pink"
//         addText(title,icecream.strawberry.name)
//         addImage(icecreamPic,icecream.strawberry.coneImage)
//         addText(description,icecream.strawberry.description)
//         uploadImage(recipe,icecream.strawberry.shakeAvi)
//         addText(shaker,icecream.strawberry.recipe)

//     }else{
//         addText(title,"NeaPolitan")
//     }
// }


// const addText =(target, text)=>{
//     target.innerHTML = text
// }

// const addImage =(target, url)=>{
//     target.setAttribute('src',url)
// }
// const uploadImage = (target,flav)=>{
// let newImage = document.createElement('img')
// newImage.setAttribute('src',flav)
// newImage.setAttribute('class','lowerImage')
// target.append(newImage)
// }