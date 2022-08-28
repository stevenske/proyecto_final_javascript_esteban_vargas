let navbar = document.getElementById('header')
let map = document.getElementById('map')
let cards = document.getElementById('cards')
let footer = document.getElementById('footer')

//MAP-------------------------------------------------------
function showMap() {
    map.innerHTML =
        `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47139330.24912588!2d-12.8611109417314!3d43.85258716626324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEuropa!5e0!3m2!1ses-419!2sar!4v1651095492043!5m2!1ses-419!2sar" width="600" height="400" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>    
`
}
showMap()
//----------------------------------------------------------
//MAP-------------------------------------------------------
function showCards() {
    cards.innerHTML = `
    <div class="row d-flex justify-content-center gap-3 my-5">
    <div class="card col-md-6 shadow-lg text-center m-2 mx-3 border-plan" style="width: 18rem;">
    <img src="assets/img/map_logo.png" class="card-img-top mt-1" alt="map logo">
    <div class="card-body">
    <p class="card-title fs-5 text-muted">Route</p>
    <p class="card-text">Plan your route with the map</p>
    </div>
    </div>
    <div class="card col-md-6 shadow-lg text-center m-2 mx-3 border-plan" style="width: 18rem;">
    <img src="assets/img/train_logo.png" class="card-img-top mt-1" alt="train logo">
    <div class="card-body">
    <p class="card-title fs-5 text-muted">Find the best train Pass</p>
    <p class="card-text">Pick your ideal TrainTrip Pass</p>
    </div>
    </div>
    </div>
    `

}
showCards()
//----------------------------------------------------------
//FOOTER-------------------------------------------------------
function showFooter() {
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


