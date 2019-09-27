let loginLink = document.getElementById("login-link") || undefined
let loginLightbox = document.getElementById("login-lightbox") || undefined
let signupLink = document.getElementById("signup-link") || undefined
let signupLightbox = document.getElementById("signup-lightbox") || undefined
let toggleComponents = document.getElementById("toggle-components")
let togglePeripherals = document.getElementById("toggle-peripherals")
let componentsSubMenu = document.getElementById('components-sub-menu')
let peripheralsSubMenu = document.getElementById('peripherals-sub-menu')

if (loginLink) {
  loginLink.addEventListener('click', e => {
    loginLightbox.classList.add("lightbox-visible")
  })
}

if (loginLightbox) {
  loginLightbox.addEventListener('click', e => {
    if (e.target.classList.contains('lightbox')) {
      loginLightbox.classList.remove("lightbox-visible")
    }
  })
}

if (signupLink) {
  signupLink.addEventListener('click', e => {
    signupLightbox.classList.add("lightbox-visible")
  })
}

if (signupLightbox) {
  signupLightbox.addEventListener('click', e => {
    if (e.target.classList.contains('lightbox')) {
      signupLightbox.classList.remove("lightbox-visible")
    }
  })
}

toggleComponents.addEventListener('click', e => {
  componentsSubMenu.classList.toggle("sub-menu-visible")
})

togglePeripherals.addEventListener('click', e => {
  peripheralsSubMenu.classList.toggle("sub-menu-visible")
})
