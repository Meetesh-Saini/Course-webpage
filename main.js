// variables

options = document.getElementById("options")
opt = document.getElementsByClassName("options")[0]
rotate180Deg = true
threelines = false
opacity = '0.5'

// function for register button
function hover() {
    document.getElementsByClassName("register")[0].addEventListener('mouseover', () => {
        document.getElementsByClassName("register")[0].style.backgroundColor = 'rgb(62, 151, 211)'
    })
    document.getElementsByClassName("register")[0].addEventListener('mouseout', () => {
        document.getElementsByClassName("register")[0].style.backgroundColor = 'rgb(55, 138, 194)'
    })
}


// Event listeners for various elements

// to rotate three bars of options
options.addEventListener("click", function () {
    options.style.transition = "transform 300ms linear";
    if (rotate180Deg) {
        options.style.transform = "rotate(180deg)";
        rotate180Deg = false
    } else {
        options.style.transform = "rotate(0deg)";
        rotate180Deg = true
    }
    if (threelines) {
        setTimeout(function () { options.innerHTML = "\u2261" }, 150)
        opt.setAttribute("class", "options reverse-animate")
        threelines = false
    } else {
        setTimeout(function () { options.innerHTML = "\u00d7" }, 150);

        // opt.style.animation = 'slide 0.75s linear 0s 1';
        opt.setAttribute("class", "options animate")
        threelines = true
    }
})

// to change color of login header and options
document.addEventListener("scroll", () => {
    if (window.pageYOffset >= document.getElementsByTagName("header")[0].clientHeight-73) {
        document.getElementsByClassName("login")[0].style.backgroundColor = "#615E90"
        document.getElementsByClassName("options")[0].style.backgroundColor = "rgba(97,94,144,0.7)"
        document.getElementsByClassName("options")[0].style.color = "#fff"
    } else {
        document.getElementsByClassName("login")[0].style.backgroundColor = "transparent"
        document.getElementsByClassName("options")[0].style.backgroundColor = "rgba(255,255,255,0.7)"
        document.getElementsByClassName("options")[0].style.color = "#000"
    }
})

// to change opacity of other price cards
document.getElementsByClassName("cards")[0].addEventListener("click", () => {
    for (j = 0; j < 3; j++) {
        if (j != 0) {
            document.getElementsByClassName("cards")[j].style.opacity = opacity;
        } else {
            document.getElementsByClassName("cards")[0].style.opacity = '1'
        }
    }
    document.getElementsByClassName("register")[0].style.backgroundColor = 'rgb(55, 138, 194)'
    document.getElementsByClassName("register")[0].style.zIndex = '1';
    hover()
})

document.getElementsByClassName("cards")[1].addEventListener("click", () => {
    for (j = 0; j < 3; j++) {
        if (j != 1) {
            document.getElementsByClassName("cards")[j].style.opacity = opacity;
        } else {
            document.getElementsByClassName("cards")[1].style.opacity = '1'
        }
    }
    document.getElementsByClassName("register")[0].style.backgroundColor = 'rgb(55, 138, 194)'
    document.getElementsByClassName("register")[0].style.zIndex = '1';
    hover()
})

document.getElementsByClassName("cards")[2].addEventListener("click", () => {
    for (j = 0; j < 3; j++) {
        if (j != 2) {
            document.getElementsByClassName("cards")[j].style.opacity = opacity;
        } else {
            document.getElementsByClassName("cards")[2].style.opacity = '1'
        }
    }
    document.getElementsByClassName("register")[0].style.backgroundColor = 'rgb(55, 138, 194)'
    document.getElementsByClassName("register")[0].style.zIndex = '1';
    hover()
})


// email pop ups with different messages
document.getElementsByClassName("register-button")[0].addEventListener("click", () => {
    document.getElementsByClassName('price-plans')[0].scrollIntoView({ behavior: "smooth" })
})

document.getElementsByClassName("grid-items")[3].addEventListener("click", () => {
    document.getElementsByClassName('main-section')[0].scrollIntoView({ behavior: 'smooth' })
})

document.getElementsByClassName("cancel")[0].addEventListener("click", () => {
    document.getElementById("successful").style.display = "none"
})

document.getElementsByClassName("submit")[0].addEventListener("click", () => {
    document.getElementsByClassName("message")[0].innerHTML = "E-mail sent successfully."
    setTimeout(function () {
        document.getElementById("successful").style.display = "none"
    }, 3000)
})

document.getElementsByClassName("register")[0].addEventListener("click", () => {
    document.getElementById("successful").style.display = "flex"
    document.getElementsByClassName("message")[0].innerHTML = "You will receive a E-mail regarding payment. Thank you."
})

document.getElementsByClassName("login-button")[0].addEventListener("click", () => {
    document.getElementsByClassName("message")[0].innerHTML = "We will E-mail you a link through which you can log in."
    document.getElementById("successful").style.display = "flex"
})