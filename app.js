
const linksModalResume = document.querySelectorAll('.modal_resume');
const linksModalContact = document.querySelectorAll('.modal_contact');
const body = document.querySelector('body');
const modal_contact = document.querySelector('#modal_contact')
const modal_resume = document.querySelector('#modal_resume');
const modal_close = document.querySelectorAll('.modal_close');
const allModals = document.querySelectorAll('.modal');



let close_modals = () => {
    body.classList.remove('no-scroll');
    for ( let i = 0; i < allModals.length; i++) {
        allModals[i].classList.remove('open');
    }

    // modal_resume.classList.remove('open');
}


let modalResume = () => {
    body.classList.add('no-scroll');
    modal_resume.classList.add('open');
}

for( let i = 0; i < linksModalResume.length; i++) {
    linksModalResume[i].addEventListener('click', modalResume);
}

let modalContact =() => {
    body.classList.add('no-scroll');
    modal_contact.classList.add('open');
}

for( let i = 0; i < linksModalContact.length; i++) {
    linksModalContact[i].addEventListener('click', modalContact);
}

for (let i = 0; i < modal_close.length; i++) {
    modal_close[i].addEventListener('click', close_modals);
}



// let unlock = true;
// const timeout = 800;
//
// for (let i = 0; i < allModalLinks.length; i++) {
//     let modalLink = allModalLinks[i];
//     modalLink.addEventListener('click', function (e) {
//         let modalName = modalLink.getAttribute('href').replace('#', '');
//         let curentModal = document.querySelector(modalName);
//
//     })
// }






// const allButtonClose = document.querySelectorAll('.modal_close');
// const allModals = document.querySelectorAll('.modal');
// const bodyDocument = document.querySelector('body');
//
// function closeAllModals () {
//
//     allModals.forEach((e) => {
//         e.style.display = 'none'
//     })
//         bodyDocument.classList.remove('no-scroll')
// }
//
// for (let closeModals of allButtonClose)
//     closeModals.addEventListener("click", closeAllModals);
//
// const btnModalResume = document.querySelectorAll('.modal_resume');
// const btnModalContact = document.querySelectorAll('.modal_contact');
// const modalResume = document.querySelector('#modal_resume');
// const modalContact = document.querySelector('#modal_contact');
//
// let openContact = () => {
//     return (
//         modalContact.style.display = 'flex',
//             bodyDocument.classList.add('no-scroll')
//     )
// };
//
// for(const allBtnContactMe of btnModalContact)
//     allBtnContactMe.addEventListener('click', openContact);
//
// let openResume = () => {
//     return (
//         modalResume.style.display = 'flex',
//         bodyDocument.classList.add('no-scroll')
//     )
// };
// for(const allBtnModalResume of btnModalResume)
//
// allBtnModalResume.addEventListener('click', openResume);
//
// const modalDialog = document.querySelectorAll('.modal_dialog');
//     for (let moda of modalDialog);
//
//     document.addEventListener('click', function (e) {
//         if (e.target.classList.contains('modal_dialog')) {
//             console.log('yes')
//         }
//     })
