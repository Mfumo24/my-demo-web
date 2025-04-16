// Cart functionality

// Cart array to store items
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    console.log(`${item.name} has been added to the cart.`);
    displayCart();
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    console.log(`${itemName} has been removed from the cart.`);
    displayCart();
}

// Function to display the cart items
function displayCart() {
    console.log("Cart Contents:");
    if (cart.length === 0) {
        console.log("Your cart is empty.");
    } else {
        cart.forEach(item => {
            console.log(`- ${item.name}: $${item.price}`);
        });
    }
}

// Example usage
addToCart({ name: "Nike kids wear", price: 1200 });
addToCart({ name: "Air jordan 23 2025", price: 950 });
addToCart({ name: "Dri fit", price: 350 });
addToCart({ name: "Green Nike", price: 1200 });
addToCart({ name: "Nike Track set", price: 1200 });

removeFromCart("Nike kids wear");
removeFromCart("Dri fit");
removeFromCart("Green Nike");
removeFromCart("Nike Track set");
removeFromCart("Air jordan 23 2025");

// Display the final cart contents
console.log("Final Cart Contents:");
displayCart();
// Cart functionality ends here

// Product data

const products = [
  {
    id: 1,
    title: "Nike kids wear",
    price: 1200,
    colors: [
      {
        code: "lightgray",
        img: "./img/nike kids wear.jpg",
      },
      {
        code: "green",
        img: "./img/nike kids wear.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air jordan 23 2025",
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
                }
            ];
        
        // Function declaration moved outside the array
        function newFunction() {
            return {};
        }
