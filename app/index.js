const success = document.querySelector('.success')
const main = document.querySelector('main')
const desktop = document.querySelector('.desktop-wrapper')

const sub = () => {
    if (window.innerWidth <= 800) {
        if (success.style.display === 'block') {
            success.style.display = 'none'
            desktop.style.display = 'block'
        } else {
            success.style.display = 'block'
            desktop.style.display = 'none'
        }
    } else {
        if (success.style.display === 'block') {
            success.style.display = 'none'
            desktop.style.display = 'block'
            main.style.width = '850px'
            main.style.height = '596.5px'
        } else {
            success.style.display = 'block'
            desktop.style.display = 'none'
            main.style.width = '450px'
            main.style.height = '500px'
        }
    }
    document.querySelector('input').value === "" ? document.querySelector('.strong-email').innerHTML = 'email@company.com' : document.querySelector('.strong-email').innerHTML = document.querySelector('input').value
}


const resizeFunc = () => {
    console.log('resized')
    if (window.innerWidth <= 800) {
        main.style.width = '100vw'
        main.style.height = '100vh'
        success.style.width = '100vw'
        success.style.height = '100vh'
    } else if (success.style.display != 'block') {
        main.style.width = '850px'
        main.style.height = '596.5px'
        success.style.width = '450px'
        success.style.height = '500px'
    } else if (success.style.display === 'block') {
        success.style.display = 'none'
        desktop.style.display = 'block'
        main.style.width = '850px'
        main.style.height = '596.5px'
    }
}