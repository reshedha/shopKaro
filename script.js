    const productData = {
      women: [
        { name: "Women Dress", price: 1200, img: "./assets/womenDress.jpg" },
        { name: "Handbag", price: 800, img: "./assets/handbag.jpg" }
      ],
      men: [
        { name: "Men Shirt", price: 1000, img: "./assets/menShirt.jpg" },
        { name: "Shoes", price: 1500, img: "./assets/shoes.jpg" }
      ],
      kids: [
        { name: "Kids T-shirt", price: 500, img: "./assets/kidsTshirt.jpg" },
        { name: "Toy Car", price: 700, img: "./assets/toyCar.jpg" }
      ],
      home: [
        { name: "Mixer Grinder", price: 3000, img: "./assets/grinder.jpg" },
        { name: "Electric Kettle", price: 1800, img: "./assets/kettle.jpg" }
      ]
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    function loadProducts(category) {
      const products = document.getElementById("products");
      products.innerHTML = "";

      productData[category].forEach(p => {
        products.innerHTML += `
          <div class="product">
            <div class="product-img">
              <img src="${p.img}" alt="${p.name}">
            </div>
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
            <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
          </div>
        `;
      });
    }

    function addToCart(product) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    }

    function showCart() {
      hideAll();
      document.getElementById("cart").classList.add("visible");
      displayCart();
    }

    function displayCart() {
      const cartDiv = document.getElementById("cartItems");
      cartDiv.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
        total += item.price;
        cartDiv.innerHTML += `
          <div class="item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
          </div>
        `;
      });

      document.getElementById("totalPrice").innerText = "Total: ₹" + total;
    }

    function placeOrder() {
      orders = orders.concat(cart);
      cart = [];
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Order placed successfully!");
      showOrders();
    }

    function showOrders() {
      hideAll();
      document.getElementById("orders").classList.add("visible");
      const orderDiv = document.getElementById("orderItems");
      orderDiv.innerHTML = "";

      orders.forEach(item => {
        orderDiv.innerHTML += `
          <div class="item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
          </div>
        `;
      });
    }

    function showHome() {
      hideAll();
      document.getElementById("home").classList.add("visible");
    }

    function hideAll() {
      document.querySelectorAll(".page").forEach(p => p.classList.remove("visible"));
    }