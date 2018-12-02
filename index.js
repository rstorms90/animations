document.addEventListener("DOMContentLoaded", () => {
    TweenMax.staggerFrom('.chizette', 3, {opacity:0, x:500, scale:0.2, delay: 0.5}, 0.2)
    const rainbowName = () => {
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#fb9a08", scale:2, delay:1}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#fffb13", scale:2, delay:2}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#23d81d", scale:2, delay:3}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#04d1d8", scale:2, delay:4}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#062af5", scale:2, delay:5}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#bd06f5", scale:2, delay:6}, 0.1)
        TweenMax.staggerTo('.chizette', 0.2, {opacity:1, color:"#f50606", scale:2, delay:7}, 0.1) 
    }
    rainbowName()
    window.setInterval(function(){
        rainbowName()
    }, 7200)
})