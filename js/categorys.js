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
    console.log("Error 404");
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
    console.log("Qandaydir xato boldi")
}