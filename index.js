document.addEventListener("DOMContentLoaded", () => {
    TweenMax.staggerFrom('.chizette', 2, {opacity:0, delay: 0.1}, 0.1)
    const shinyName = () => {
        TweenMax.staggerTo('.chizette', 0.1, {opacity:0, color:"#white", delay:1}, 0.05)
        TweenMax.staggerTo('.chizette', 0.1, {opacity:1, color:"#0051fff", delay:1.1}, 0.06)
    }
    shinyName()
    window.setInterval(function(){
        shinyName()
    }, 1600)
})













/////RAINBOW NAME\\\\\\
// document.addEventListener("DOMContentLoaded", () => {
//     TweenMax.staggerFrom('.chizette', 3, {opacity:0, x:500, scale:0.2, delay: 0.5}, 0.2)
//     const rainbowName = () => {
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#fb9a08", delay:1}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#fffb13", delay:2}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#23d81d", delay:3}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#04d1d8", delay:4}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#062af5", delay:5}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#bd06f5", delay:6}, 0.1)
//         TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#f50606", delay:7}, 0.1) 
//     }
//     rainbowName()
//     window.setInterval(function(){
//         rainbowName()
//     }, 7200)
// })