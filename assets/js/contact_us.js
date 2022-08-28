let navbar = document.getElementById('header')
let networks = document.getElementById('networks_container')
let form = document.getElementById('form')

//NAVBAR----------------------------------------------

function showNavBar() {
    navbar.innerHTML = ` 
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
            <div id="header__logo" class="w-10">
                <a class="navbar-brand" href="index.html"><img src="assets/img/train.png" width="60" height="60" alt="train icon"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="row collapse navbar-collapse text-center text-uppercase" id="navbarNav">
                <div id="navbar__sections" class="navbar-nav">
                    <div class="nav-item col">
                        <a class="nav-link zoom" href="plan_your_trip.html">Plan Your Trip</a>
                    </div>
                    <div class="nav-item col">
                        <a class="nav-link zoom" href="contact_us.html">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>`
}

showNavBar()
//----------------------------------------------------------

function showNetworks(){
    networks.innerHTML = `
    <div class="tittle fs-1 text-center">Contact <span class="text-main">Us</span></div>
    <div id="contact__networks" class="d-flex gap-1 justify-content-center rounded lh-3 border-2">
    <div><a class="text-decoration-none" href="https://www.instagram.com" target="_blank">Instagram</a></div>
    <div><a class="text-decoration-none" href="https://www.twitter.com" target="_blank">Twitter</a></div>
    <div><a class="text-decoration-none" href="https://www.facebook.com" target="_blank">Facebook</a></div>
    </div>
    `
}
showNetworks()
//-----------------------------------------------------------

//FORM-------------------------------------------------------
function showForm(){
    form.innerHTML = `
    <div class="row d-flex justify-content-center">
        <form class="bg-light col-md-6 my-3 rounded py-2 border-plan">
            <div id="form_box" class="mb-3">
                <label for="name" class="form-label">Name</label>
                    <input id="name" type="name" class="form-control" placeholder="name...">
            </div>
            <div id="form_box" class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                    <input type="lastName" class="form-control" placeholder="Last Name...">
            </div>
            <div id="form_box" class="mb-3">
                <label for="Email1" class="form-label">Email address</label>
                <input id="email" type="email" class="form-control" placeholder="Email...">
            </div>
            <div id="form_box" class="mb-3">
                <label class="form-label">Message</label>
                <textarea id="message" class="form-control" rows="3"></textarea>
            </div>
            <button onclick="sendForm()" class="btn btn-train border-plan fw-bold" data-bs-toggle="modal" data-bs-target="#formModal">SEND</button>
        </form>
        </div>
                    `
                }
showForm()
//-----------------------------------------------------------
//SENDFORM-------------------------------------------------------
function sendForm(){
    emailjs.send("service_rvbh66w","template_gvm0ppu",{
        from_name: document.querySelector('#name').value,
        email_id: document.querySelector('#email').value,
        message: document.querySelector('#message').value,
        });
}
(function(){
    emailjs.init("dTxhSRqtx0J5r-p8p");
})()

// the message is going to be sended to this gmail: traintripsJS@gmail.com password: train12345678

//-----------------------------------------------------------


//FOOTER-----------------------------------------------------
function showFooter(){
    footer.innerHTML = `
    <footer class="py-3 border-top border-dark">
        <ul class="nav justify-content-center border-bottom border-dark pb-3 mb-3">
            <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="plan_your_trip.html" class="nav-link px-2 text-muted">Plan Your Trip</a></li>
            <li class="nav-item"><a href="contact_us.html" class="nav-link px-2 text-muted">Contact Us</a></li>
        </ul>
        <p class="text-center text-muted">© 2022 TrainTrip, INC</p>
        <div class="container d-flex justify-content-around">
            <div>
                <a href="https://www.facebook.com" target="_blank">
                    <img class="zoom" src="./assets/img/icon_facebook.png" alt="logo of facebook">
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com" target="_blank">
                    <img class="zoom" src="./assets/img/icon_instagram.png" alt="logo of instagram">
                </a>
            </div>
            <div>
                <a href="https://twitter.com" target="_blank">
                    <img class="zoom" src="./assets/img/icon_twitter.png" alt="logo of twitter">
                </a>
            </div>
        </div> 
    </footer>
    `
}
showFooter()
//----------------------------------------------------------