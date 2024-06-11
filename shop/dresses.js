class Dress {
    constructor(name, picture, price, discount, color) {
        this.name = name;
        this.picture = picture;
        this.price = price;
        this.color = color;
        this.discount = discount
    }

    getPriceAfterDiscount() {
        return this.discount; 
    }
}

const dresses = [
    new Dress("Атласна сукня коротка, колір молочний", "https://itelle.com.ua/image/cache/catalog/newfoto/51261-1-800x1200.webp", 389, 279, "молочний"),
    new Dress("Сукня в горошок, колір жовтий", "https://images.prom.ua/2625898867_w600_h600_2625898867.jpg", 589, 499, "жовтий"),
    new Dress("Сукня з квітковим узором, колір жовтий", "https://images.prom.ua/3792499856_w600_h600_3792499856.jpg", 499, 399, "жовтий"),
    new Dress("Сукня міді, колір блакитний", "https://musthave.ua/uploads/products/45382/00000037414.webp", 399, 299, "блакитний"),
    new Dress("Сукня-пліссе, колір рожевий", "https://viamaro.com.ua/data/tovars/67/7/677_a.jpg", 679, 519, "рожевий"),
    new Dress("Сукня міді, колір білий", "https://m.x-style.ua/image/cache/330x495h/data/platia4/105330-bandazhnoe-beloe-plate-4-min.jpg", 459, 379, "білий")
];

document.querySelectorAll('.dresses-images-desc').forEach((dressElement, index) => {
    dressElement.addEventListener('click', () => {
        displayDressDetails(dresses[index]);
    });
});

function displayDressDetails(dress) {
    const detailPage = document.createElement('div');
    detailPage.classList.add('dress-details');

    detailPage.innerHTML = `
        <div class="dress-details-container">
            <div class="dress-image">
                <img src="${dress.picture}" alt="${dress.name}">
            </div>
            <div class="dress-info">
                <h2>${dress.name}</h2>
                <p>Колір: ${dress.color}</p>
                <p>Ціна: ${dress.price} грн</p>
                <p>Ціна зі знижкою: ${dress.getPriceAfterDiscount()} грн</p>
                <button>Оформити замовлення</button>
            </div>
        </div>
        
    `;

    document.body.innerHTML = '';
    document.body.appendChild(detailPage);
}


const logoButton = document.querySelector('.logo');

logoButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})
