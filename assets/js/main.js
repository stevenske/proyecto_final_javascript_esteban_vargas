//VARIABLES---------------------------------------------------
let cardsContainer = document.getElementById("cards__container")
let shoppingContainer = document.getElementById("shopping__container")
let cartCounter = document.querySelector("#cart__counter")
let totalContainer = document.getElementById('total__container')
let shoppingCart = JSON.parse(localStorage.getItem('shoppingTrips')) || [];
const stockTrips = []
//------------------------------------------------------------

//CLASS AND OBJECTS-------------------------------------------
class StockTrips {
    constructor(id, trip, price, desc, img, quantityProd) {
        this.id = id,
            this.trip = trip,
            this.price = price,
            this.desc = desc,
            this.img = img
        this.quantityProd = quantityProd
    }
}

rome = new StockTrips(1, 'Rome', 2300, 'Visit the Colosseum in Rome with a direct train trip', 'assets/img/coliseo_rome.jpg', 1)
paris = new StockTrips(2, 'Paris', 2400, 'Visit the Louvre Pyramid in Paris with a direct train trip', 'assets/img/paris.jpg', 1)
amsterdam = new StockTrips(3, 'Amsterdam', 2100, 'Visit Amsterdam with a direct train trip', 'assets/img/amsterdam.jpg', 1)
greece = new StockTrips(4, 'Greece', 2150, 'Visit the beautiful island Santorini in Greece with a direct train trip and boat', 'assets/img/greece.jpg', 1)
london = new StockTrips(5, 'London', 1800, 'Visit the Big Ben in London with a direct train trip', 'assets/img/london.jpg', 1)
spain = new StockTrips(6, 'Spain', 1600, 'Visit the Metropolitan Cathedral Basilica of the Holy Cross and Saint Eulalia train trip', 'assets/img/spain.jpg', 1)

stockTrips.push(rome, paris, amsterdam, greece, london, spain)
//----------------------------------------------------------
//SHOWPRODUCTS----------------------------------------------

const showProducts = ({ img, trip, desc, price, id }) => {
    let div = document.createElement('div')
    fetch(`http://api.weatherapi.com/v1/current.json?key=792410ec290a4f589b8191659222708&q=${trip}&aqi=yes`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            div.className = '.product-rows col-md-4 d-flex justify-content-center my-3'
            div.innerHTML += `
        <div class="card text-center shadow-lg" style="width: 18rem;">
        <div class='imgWrap zoom text-danger'>
            <img src="${img}" class="card-img-top rounded" alt="photo of the Colosseum in Rome">
            <p class='imgWeather'>${data.current.feelslike_c}°C
                <span>${data.current.condition.text}</span>
            </p>
        </div>
        <div class="card-body">
        <p class="card-title fs-5">${trip}</p>
        <p class="card-text">${desc}</p>
        <p class="card-text">$${price}</p>
        <button id="btn${id}" type="submit" class="btnBuy btn btn-train fw-bold"">Add to Cart</button>
        </div>
        </div>
        `
            cardsContainer.appendChild(div)
            let button = document.getElementById(`btn${id}`)
            button.addEventListener("click", () => {
                addCart(id)
                Toastify({
                    text: `${trip} was added to the shopping Cart`,
                    className: "addedTrip",
                    position: 'center',
                    gravity: "top",
                }).showToast()
            })
        })
        .catch(error =>{
            console.log(error);
        })
    function addCart(idArticle) {
        let finded = stockTrips.find(article => article.id === idArticle)
        if (finded) {
            let productInCart = shoppingCart.find((article) => article.id === finded.id)
            if (productInCart) {
                productInCart.quantityProd += 1
                localStorage.setItem('shoppingTrips', JSON.stringify(shoppingCart))
            } else {
                shoppingCart.push(new StockTrips(finded.id, finded.trip, finded.price, finded.desc, finded.img, finded.quantityProd))
                localStorage.setItem('shoppingTrips', JSON.stringify(shoppingCart))
            }
        }
        // console.log(shoppingCart)
        showShoppingCart()
    }

}
stockTrips.forEach((obj) => {
    showProducts(obj)
})
//-----------------------------------------------------------

//SHOPPINGCART-----------------------------------------------
function showShoppingCart() {
    shoppingContainer.innerHTML = ''
    for (const product of shoppingCart) {
        let div = document.createElement('div')
        div.className = 'productCart d-flex justify-content-between border-start border-4 border-danger bg-gray rounded-1  my-1 py-2 px-1'
        div.innerHTML += `
                    <p class="my-auto">${product.trip}</p>
                    <p class="price my-auto">$${product.price * product.quantityProd}</p>
                    <p id='quantity__counter' class="my-auto">${product.quantityProd}</p>
                    <button class='btn-remove btn btn-train fw-bold' data-id='${product.id}'>X</button>
    `
        shoppingContainer.appendChild(div)
        let removeProduct = div.querySelectorAll('.btn-remove')
        for (let button of removeProduct) {
            button.addEventListener("click", () => {
                removeItem(product.id)
                updateCart()
                showTotal()
            })
        }
        updateCart()
        showTotal()
    }
}
showShoppingCart()
showTotal()

function updateCart() {
    cartCounter.innerText = shoppingCart.reduce((acumulador, elemento) => acumulador + elemento.quantityProd, 0)
}
//----------------------------------------------------------


//BUYCONFIRMATION-------------------------------------------

function showBuyConfirmation() {
    let modalBuyConfirmation = document.querySelector('.modal-dialog')
    modalBuyConfirmation.innerHTML = `
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Complete this Contact Information to send the ticket reservation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body container-fluid row d-flex">
                                            <form class="row" medthod="POST">
                                                <div class="mb-3 col-md-6">
                                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Name...">
                                                </div>
                                            
                                                <div class="mb-3 col-md-6">
                                                    <label for="recipient-name" class="col-form-label">LastName:</label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="LastName...">
                                                </div>
                                            
                                                <div class="mb-3 col-md-12">
                                                    <label for="recipient-name" class="col-form-label">Mail:</label>
                                                    <input type="text" class="form-control" id="mail" placeholder="example@gmail.com">
                                                </div>
                                            
                                                <div class="mb-3">
                                                    <label for="recipient-name" class="col-form-label">Phone Number:</label>
                                                    <input type="text" class="form-control" id="phone__number" placeholder="(555) 555-555">
                                                </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" id="btn_confirmBuy" data-bs-dismiss="modal" class="btn btn-train">Confirm Buy</button>
                                                </div>
                                            </form>
                                        </div>
                                    `
    let btnConfirmBuy = document.getElementById('btn_confirmBuy')
    btnConfirmBuy.addEventListener('click', () => {
        let name = document.getElementById('name').value
        removeAll()
        Toastify({
            text: `thanks ${name} for trust in TrainTrips your passage was sended to your email`,
            className: "alertConfirmation",
            position: 'center',
            gravity: "top",
        }).showToast()

    })
}
//----------------------------------------------------------

//TOTAL-----------------------------------------------------
function showTotal() {
    totalContainer.className = 'mx-1 my-2 d-flex justify-content-between'
    totalContainer.innerHTML = `
                                    <p class='align-self-center border border-1 btn-train text-dark rounded-1 p-2'>Total Price:$${updateTotal()}</p>
                                    <p><button id='empty__Cart' type="submit" class="btn btn-train fw-bold py-1 px-3"><img src="./assets/img/clear-shopping-cart.png" class="card-img-top rounded zoom">
                                    </button></p>
                                    <p><button type="submit" id='btnBuy' data-bs-toggle="modal" data-bs-target="#modal__BuyConfirmation" class="btn btn-train fw-bold py-2 px-4">BUY</button></p>
`
    let btnEmptyCart = document.getElementById('empty__Cart')
    btnEmptyCart.addEventListener('click', () => {
        removeAll()
        Toastify({
            text: `the shopping cart was emptied`,
            className: "addedTrip",
            position: 'right',
            gravity: "top",
        }).showToast();
    })
    let btnBuy = document.getElementById('btnBuy')
    btnBuy.addEventListener('click', () => {
        showBuyConfirmation()
    })
}

function updateTotal() {
    let total = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantityProd
    }
    return total
}
//----------------------------------------------------------

//REMOVE----------------------------------------------------
function removeItem(id) {
    for (let i = 0; i < shoppingCart.length; i += 1) {
        if (shoppingCart[i].quantityProd > 1) {
            shoppingCart[i].quantityProd = 1
        }
        if (shoppingCart[i].id === id) {
            shoppingCart.splice(i, 1)
            localStorage.removeItem(i)
            localStorage.setItem('shoppingTrips', JSON.stringify(shoppingCart))
            showShoppingCart()
            return
        }
    }
}

function removeAll() {
    if (localStorage.getItem('shoppingTrips')) {
        shoppingCart.splice(0, shoppingCart.length)
        localStorage.removeItem('shoppingTrips')
        showShoppingCart()
        updateCart()
        showTotal()
    }
}
//----------------------------------------------------------
//FOOTER-------------------------------------------------------
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
