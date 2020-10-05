let currentImage = document.getElementById('image').src
const imageArray = ['https://res.cloudinary.com/victorcodes/image/upload/c_fit,h_970,q_auto:best,w_980/v1601672283/default-image.jpg',
    'https://res.cloudinary.com/victorcodes/image/upload/c_fit,h_970,q_auto:best,w_980/v1601670337/secondimage.jpg',
    'https://res.cloudinary.com/victorcodes/image/upload/c_fit,h_970,q_auto:best,w_980/v1601670328/thirdimage.jpg',
    'https://res.cloudinary.com/victorcodes/image/upload/c_fit,h_970,q_auto:best,w_980/v1601672073/fourthimage.jpg',
    'https://res.cloudinary.com/victorcodes/image/upload/c_fit,h_970,q_auto:best,w_980/v1601672227/lastimage.jpg',
];
const backgroundArray = ['https://res.cloudinary.com/victorcodes/image/upload/v1601831215/defaultbackground_dmjbxa.png',
'https://res.cloudinary.com/victorcodes/image/upload/v1601831407/secondbackground_ayipem.png',
'https://res.cloudinary.com/victorcodes/image/upload/v1601831262/thirdbackround_knpdmk.png',
'https://res.cloudinary.com/victorcodes/image/upload/v1601831215/fourthbackground_y0w4rt.png',
'https://res.cloudinary.com/victorcodes/image/upload/v1601831245/lastbackground_xdox1w.png']

let currentIndex = imageArray.indexOf(currentImage)
let newImage
let length = imageArray.length - 1
function nextImage() {
    if (currentIndex < length) currentIndex += 1
    if (currentIndex % length !== -1) {
        
        if (currentIndex <= 4) {
            newImage = document.getElementById('image').src = imageArray[currentIndex]
            newBackground = document.getElementById('background').style.backgroundImage = 'url' + '(' + backgroundArray[currentIndex] + ')';
            // document.getElementById('image').style.animation = 'slider-image 300ms ease-in 0s both'
            
        }
    }
}
function prevImage() {
    if (currentIndex > 0) currentIndex -= 1
    if (currentImage % length !== -1) {
        document.getElementById('image').style.animation = 'slider-image 300ms ease-in 0s both'
        if (currentIndex >= 0 && currentIndex <= 4) {
            document.getElementById('image').style.animation = 'slider-image 300ms ease-in 0s both'
            newImage = document.getElementById('image').src = imageArray[currentIndex]
            newBackground = document.getElementById('background').style.backgroundImage = 'url' + '(' + backgroundArray[currentIndex] + ')';
        }
    }
    
}
document.getElementById('background').style.transition = 'all .2s ease-in 50ms';
// function totalHeight() {
    //     let totalHeight = document.body.offsetHeight
    //     console.log(totalHeight)
    //     document.getElementById('background').style.height = `${totalHeight + 80}px`
    // }
    // document.getElementById('next-image').addEventListener('click', function () {
    //     // let elem = document.getElementById('image')
    //     // var pos = 0;
    //     // var id = setInterval(frame, 10);
    //     // function frame() {
    //     //     if (pos == 100) {
    //     //         clearInterval(id);
    //     //     } else {
    //     //         pos++;
    //     //         elem.style.transition = translateX(pos + 'px');
    //     //     }
    //     // }
    // })
    // totalHeight()
// function imageTransition() {
//     let elem = document.getElementById('image')
//     var pos = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 100) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.transition = translateX(pos + 'px');
//         }
//     }
// }
// function openNav() {
//     document.getElementById('hidden-navbar-container').style.display = 'block';
// }
// function closeNav() {
//     document.getElementById('hidden-navbar-container').style.display = 'none'
// }