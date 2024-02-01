let categorys = [
    {
        img: "images/categories/c1.png",
        categoryName: 'Fertilizer',
    },
    {
        img: "images/categories/c2.png",
        categoryName: 'Protective products and septic tanks',
    },
    {
        img: "images/categories/c3.png",
        categoryName: 'Planting material	',
    },
    {
        img: "images/categories/c4.png",
        categoryName: 'Tools and equipment',
    }
]


try {
    const categoryCards = document.querySelector(".categories-cards")
    categorys.forEach((categoryCard) => {
        categoryCards.innerHTML += `
    <div class="categories-card">
        <img src="${categoryCard.img}" alt="categories one img">
        <p>${categoryCard.categoryName}</p>
    </div>
    `
    })

} catch (error) {
}

let categoris = [
    {
        img: "images/categories/c1.png",
        categoryName: 'Fertilizer',
    },
    {
        img: "images/categories/c2.png",
        categoryName: 'Protective products and septic tanks',
    },
    {
        img: "images/categories/c3.png",
        categoryName: 'Planting material	',
    },
    {
        img: "images/categories/c4.png",
        categoryName: 'Tools and equipment',
    },
    {
        img: "images/categories/c5.png",
        categoryName: 'Pots and planters',
    },
]

try {
    const categorisCards = document.querySelector(".categoris-cards");
    categoris.forEach((categorisCard) => {
        categorisCards.innerHTML += `
        <div class="categories-card">
            <img src="${categorisCard.img}" alt="categories one img">
            <p>${categorisCard.categoryName}</p>
        </div>
        `
    })
} catch (error) {

}

let sales = [
    {
        img: "images/sale/s1.png",
        categoryName: 'Decorative forged brid...',
        sale: '-50%',
        price: "$500",
        oldPrice: "$1000"
    },
    {
        img: "images/sale/s2.png",
        categoryName: 'Flower basket',
        sale: '-34%',
        price: "$100",
        oldPrice: "$150",
    },
    {
        img: "images/sale/s3.png",
        categoryName: 'Aquarium lock',
        sale: '-25%',
        price: "$150",
        oldPrice: "$200",
    },
    {
        img: "images/sale/s4.png",
        categoryName: 'Secateurs',
        sale: '-17%',
        price: "$199",
        oldPrice: "$240",
    }
]

try {
    const saleCards = document.querySelector(".sale-cards")
    sales.forEach((saleCard) => {
        saleCards.innerHTML += `
    <div class="sale-card">
        <div class="card-sale">
            <span>${saleCard.sale}</span>
        </div>
        <div class="sale-card__img">
            <img src="${saleCard.img}" alt="sale first img">
        </div>
        <div class="sale-card__info">
            <h3>${saleCard.categoryName}</h3>
            <div class="item-price">
                <h2>${saleCard.price}</h2>
                <span><del>${saleCard.oldPrice}</del></span>
            </div>
        </div>
    </div>
    `
    })
} catch (error) {
}


// All products
let alltovars = [
    {
        sale: "-17%",
        img: "images/tovars/t1.png",
        tovarName: "Secateurs",
        tovarPrice: '$199',
        oldPrice: "$240",
    },
    {
        sale: "-26%",
        img: "images/tovars/t2.png",
        tovarName: "Collection for berries (p...",
        tovarPrice: '$26',
        oldPrice: "$35",
    },
    {
        sale: "-36%",
        img: "images/tovars/t3.png",
        tovarName: "Gloves (black)",
        tovarPrice: '$9',
        oldPrice: "$14",
    },
    {
        sale: '',
        img: "images/tovars/t4.png",
        tovarName: "Sickle-shaped hacksaw",
        tovarPrice: '$155',
        oldPrice:"",
    },
    {
        img: "images/tovars/t5.png",
        tovarName: "Bayonet shovel",
        tovarPrice: '$180',
        oldPrice:"",
    },
    {
        img: "images/tovars/t6.png",
        tovarName: "Garden pitchfork",
        tovarPrice: '$179',
        oldPrice:"",
    },
    {
        img: "images/tovars/t7.png",
        tovarName: "Barbell",
        tovarPrice: '$12',
        oldPrice:"",
    },
    {
        sale: "-18%",
        img: "images/tovars/t8.png",
        tovarName: "Souvenir thermometer",
        tovarPrice: '$98',
        oldPrice: "$120",
    },
]
try {
    const tovarsCards = document.querySelector(".tovars-cards");
    alltovars.forEach((tovarCard) => {
        tovarsCards.innerHTML += `
        <div class="tovar-card">
            <div class="tovar-sale">
                <span>${tovarCard.sale}</span>
            </div>
            <div class="tovar-img">
                <img src="${tovarCard.img}" alt="tovar first img">
                <div class="tovar-button">
                    <a class="btn" href="tovar.html">Add to cart</a>
                </div>
            </div>

            <div class="tovar-info">
                <h4>${tovarCard.tovarName}</h4>
                <div class="tovar-price">
                    <h2>${tovarCard.tovarPrice}</h2>
                    <span><del>${tovarCard.oldPrice}</del></span>
                </div>
            </div>
        </div>
        `
    })
} catch (error) {
    console.log("404 found")
}