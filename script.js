
// const navLinks = document.querySelectorAll('[data-tab-target]')
// const navIcon = document.querySelectorAll("[data-tab-icon]")
// // navIcon
// navLinks.forEach(function(e){
//     e.addEventListener('mouseover',()=>{
//         const target = document.querySelector(e.dataset.tabTarget)
//         target.classList.add('iconActive')
//     })
    
//     e.addEventListener('mouseout',()=>{
//         const target = document.querySelector(e.dataset.tabTarget)
        
//         target.classList.remove('iconActive')
//     })

// })

// navMenu


const navOpen = document.querySelector('.open')
const navClose = document.querySelector('.exit')
const navLink = document.querySelector('.nav-links')


navOpen.addEventListener('click', function(){
    navOpen.classList.toggle('disable')
    navClose.classList.toggle('active')
    navLink.classList.toggle('active')
})

navClose.addEventListener('click',function(){
    navOpen.classList.toggle('disable')
    navLink.classList.toggle('active')
    navClose.classList.toggle('active')
})