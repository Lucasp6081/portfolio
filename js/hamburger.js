const toggleButtonSide = document.querySelector('.toggle-button')       // sidebar width 100%
        const sidebarLinks = document.querySelector('.sidebar')
        
        toggleButtonSide.addEventListener('click', () => {
        sidebarLinks.classList.toggle('sidebar-active')
        })



const toggleButtonLOGO1 = document.querySelector('.toggle-button')      // animation bar1
        const bar1 = document.querySelector('.sidebar .bar1')
        
        toggleButtonLOGO1.addEventListener('click', () => {
        bar1.classList.toggle('rotate1')
        })

const toggleButtonLOGO2 = document.querySelector('.toggle-button')      // animation bar2
        const bar2 = document.querySelector('.sidebar .bar2')
        
        toggleButtonLOGO2.addEventListener('click', () => {
        bar2.classList.toggle('rotate2')
        })
        




//display texts when sidebar 100%

const toggleButton = document.querySelector('.toggle-button')                   
        const textLinks = document.querySelector('.menu .menu-icons .text')
        
        toggleButton.addEventListener('click', () => {
        textLinks.classList.toggle('text-active')
        })

const toggleButton1 = document.querySelector('.toggle-button')
        const text1Links = document.querySelector('.menu .menu-icons .text1')
        
        toggleButton1.addEventListener('click', () => {
        text1Links.classList.toggle('text-active1')
        })

const toggleButton2 = document.querySelector('.toggle-button')
        const text2Links = document.querySelector('.menu .menu-icons .text2')
        
        toggleButton2.addEventListener('click', () => {
        text2Links.classList.toggle('text-active2')
        })

const toggleButton3 = document.querySelector('.toggle-button')
        const text3Links = document.querySelector('.menu .menu-icons .text3')
        
        toggleButton3.addEventListener('click', () => {
        text3Links.classList.toggle('text-active3')
        })

const toggleButton4 = document.querySelector('.toggle-button')
        const text4Links = document.querySelector('.menu .menu-icons .text4')
        
        toggleButton4.addEventListener('click', () => {
        text4Links.classList.toggle('text-active4')
        })

const toggleButton5 = document.querySelector('.toggle-button')
        const text5Links = document.querySelector('.menu .menu-icons .text5')
        
        toggleButton5.addEventListener('click', () => {
        text5Links.classList.toggle('text-active5')
        })

        



// homepage-parcours 100% when fullscreen menu (c'est long...)

const toggleButtonBackground = document.querySelector('.toggle-button')
        const homepageSize = document.querySelector('.home-page_parcours')
        
        toggleButtonBackground.addEventListener('click', () => {
        homepageSize.classList.toggle('size-homepage_parcours')
        })