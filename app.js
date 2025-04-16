const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Nike kids",
    price: 900,
    colors: [
      {
        code: "black",
        img: "./img/Nike kids wear.jpg",
      },
      {
      
        code: "red",
        img: "./img/img/Nike Matching Sets _ Nike Track Suit _ Color_ Red _ Size_ 12mb.jpg",
      },
        { 
          code: "Green",
          img: "./img/img/Nike Green Set kids.jpg",
        },
        {
          code: "darkblue",
          img: "./img/img/Nike Matching Sets _ Nike Toddler Boy Outfit _ Color_ Blue _ Size_ Various.jpg",
        },
      ],
    },
    {
      id: 2,
    title: "Air Jordan 23",
    price: 950,
    colors: [
      {
        code: "lightgray",
        img: "./img/air jordan 23 2025.jpg",
      },
      {
        code: "green",
        img: "./img/jordan 23 2025.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Green Nike",
    price: 1200,
    colors: [
      {
        code: "green",
        img: "./img/green nike.png",
      },
      {
        code: "green",
        img: "./img/green nike.png",
      },
    ],
  },
  {
    id: 4,
    title: "Nike Track set",
    price: 1200,
    colors: [
      {
        code: "black",
        img: "./img/nike track set.jpg",
      },
      {
        code: "White",
        img: "./img/nike track set.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Dri fit",
    price: 350,
    colors: [
      {
        code: "pink",
        img: "./img/dri fit.jpg",
      },
      {
        code: "blue",
        img: "./img/dri fit.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});