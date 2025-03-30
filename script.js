data = [
  {
    "name": "Luxury Italian Leather Tote",
    "price": 850.00,
    "discount": 5,
    "image": "https://example.com/images/luxury_leather_tote.jpg"
  },
  {
    "name": "Designer Suede Backpack",
    "price": 620.50,
    "discount": 10,
    "image": "https://example.com/images/designer_suede_backpack.jpg"
  },
  {
    "name": "Embossed Croc Crossbody",
    "price": 780.75,
    "discount": 0,
    "image": "https://example.com/images/croc_crossbody.jpg"
  },
  {
    "name": "Premium Travel Duffel",
    "price": 950.99,
    "discount": 8,
    "image": "https://example.com/images/premium_duffel.jpg"
  },
  {
    "name": "Silk-Lined Mini Shoulder Bag",
    "price": 550.00,
    "discount": 15,
    "image": "https://example.com/images/silk_mini_shoulder.jpg"
  },
  {
    "name": "Executive Leather Laptop Bag",
    "price": 700.00,
    "discount": 0,
    "image": "https://example.com/images/executive_laptop.jpg"
  },
  {
    "name": "Handwoven Raffia Beach Tote",
    "price": 480.25,
    "discount": 12,
    "image": "https://example.com/images/raffia_beach_tote.jpg"
  },
  {
    "name": "Technical Fabric Sling Bag",
    "price": 399.99,
    "discount": 20,
    "image": "https://example.com/images/technical_sling.jpg"
  },
  {
    "name": "Crystal-Embellished Clutch",
    "price": 980.50,
    "discount": 0,
    "image": "https://example.com/images/crystal_clutch.jpg"
  },
  {
    "name": "Kids' Premium Leather Backpack",
    "price": 350.00,
    "discount": 7,
    "image": "https://example.com/images/kids_premium_backpack.jpg"
  },
  {
    "name": "Limited Edition Hobo Bag",
    "price": 1100.00,
    "discount": 3,
    "image": "https://example.com/images/limited_hobo.jpg"
  },
  {
    "name": "Italian Calfskin Satchel",
    "price": 890.00,
    "discount": 10,
    "image": "https://example.com/images/calfskin_satchel.jpg"
  },
  {
    "name": "Velvet Evening Clutch",
    "price": 750.50,
    "discount": 0,
    "image": "https://example.com/images/velvet_clutch.jpg"
  },
  {
    "name": "Alligator Skin Travel Bag",
    "price": 1500.00,
    "discount": 5,
    "image": "https://example.com/images/alligator_travel.jpg"
  },
  {
    "name": "Quilted Leather Camera Bag",
    "price": 680.00,
    "discount": 15,
    "image": "https://example.com/images/quilted_camera.jpg"
  },
  {
    "name": "Hand-Painted Silk Scarf Bag",
    "price": 920.00,
    "discount": 10,
    "image": "https://example.com/images/silk_scarf_bag.jpg"
  },
  {
    "name": "Minimalist Leather Tote",
    "price": 760.00,
    "discount": 0,
    "image": "https://example.com/images/minimalist_tote.jpg"
  },
  {
    "name": "Vintage Inspired Messenger",
    "price": 810.00,
    "discount": 5,
    "image": "https://example.com/images/vintage_messenger.jpg"
  },
  {
    "name": "Studded Rocker Backpack",
    "price": 990.00,
    "discount": 10,
    "image": "https://example.com/images/studded_backpack.jpg"
  },
  {
    "name": "Geometric Pattern Clutch",
    "price": 670.00,
    "discount": 15,
    "image": "https://example.com/images/geometric_clutch.jpg"
  },
  {
    "name": "Braided Leather Hobo",
    "price": 730.00,
    "discount": 0,
    "image": "https://example.com/images/braided_hobo.jpg"
  },
  {
    "name": "Textured Leather Shoulder",
    "price": 840.00,
    "discount": 8,
    "image": "https://example.com/images/textured_shoulder.jpg"
  },
  {
    "name": "Metallic Finish Crossbody",
    "price": 690.00,
    "discount": 12,
    "image": "https://example.com/images/metallic_crossbody.jpg"
  },
  {
    "name": "Convertible Leather Backpack",
    "price": 910.00,
    "discount": 5,
    "image": "https://example.com/images/convertible_backpack.jpg"
  },
  {
    "name": "Embroidered Velvet Pouch",
    "price": 770.00,
    "discount": 10,
    "image": "https://example.com/images/embroidered_pouch.jpg"
  },
  {
    "name": "Laser-Cut Leather Tote",
    "price": 880.00,
    "discount": 0,
    "image": "https://example.com/images/laser_cut_tote.jpg"
  },
  {
    "name": "Woven Leather Bucket Bag",
    "price": 820.00,
    "discount": 7,
    "image": "https://example.com/images/woven_bucket.jpg"
  },
  {
    "name": "Snakeskin Trimmed Clutch",
    "price": 930.00,
    "discount": 15,
    "image": "https://example.com/images/snakeskin_clutch.jpg"
  },
  {
    "name": "Satin Evening Bag",
    "price": 710.00,
    "discount": 0,
    "image": "https://example.com/images/satin_evening.jpg"
  },
  {
    "name": "Two-Tone Leather Tote",
    "price": 860.00,
    "discount": 5,
    "image": "https://example.com/images/two_tone_tote.jpg"
  }
];
data.map(element => {
  let cd = document.createElement('div');
  cd.classList.add('card');
  const discountedPrice = element.price;
  const discount = element.discount;
  const originalPrice = discountedPrice / (1 - discount / 100);

  // Store quantity for each card in a data attribute
  cd.dataset.quantity = 0;

  cd.innerHTML = `
<div style="background-color: white; padding: 10px; border-radius: 5px;">
    <img id="prodImg" src="./bg1.jpeg" alt="">

    <h4 style="background-color: white; color: black;" id="name">${element.name}</h4>

    <h4 style="background-color: white; color: black;" id="Ogprice">₹${originalPrice.toFixed(2)}</h4>

    <div style="background-color: white;"><h4 style="background-color: white; color: black; display: flex;" id="price">(${element.discount}%) => ₹${element.price}</h4></div>

    <div class="quantity-control" style="background-color: white; display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 10px;">

        <button onclick="decrementQuantity(this.parentNode.parentNode)" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 5px; background-color: transparent; color: #000; cursor: pointer;">-</button>

        <span class="quantity-display" style="background-color: white; width: 30px; text-align: center; font-size: 16px;">${cd.dataset.quantity}</span>

        <button onclick="incrementQuantity(this.parentNode.parentNode)" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 5px; background-color: #f0f0f0; color: #000; cursor: pointer;">+</button>

    </div>

    <div class="btn" style="background-color: white; display: flex; justify-content: center; gap: 10px; margin-top: 10px;">

        <button style="padding: 10px 20px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); transition: background-color 0.3s;">
            Add To Cart
        </button>

        <button style="padding: 10px 20px; border: 1px solid #ccc; border-radius: 5px; background-color: white; color: #333; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: background-color 0.3s; display: flex; align-items: center;">
            Add To Wishlist <span style="margin-left: 5px; background-color: transparent;">❤️</span>
        </button>
    </div>
</div>`;

let main = document.querySelector('.main');
main.appendChild(cd);
});

// Increment quantity function
function incrementQuantity(card) {
  const quantityDisplay = card.querySelector('.quantity-display');
  let quantity = parseInt(quantityDisplay.textContent);
  quantity++;
  quantityDisplay.textContent = quantity;
  updatePrice(card, quantity); // Optional: Update price if needed
}

// Decrement quantity function
function decrementQuantity(card) {
  const quantityDisplay = card.querySelector('.quantity-display');
  let quantity = parseInt(quantityDisplay.textContent);
  if (quantity > 0) { // Prevent going below 1
      quantity--;
      quantityDisplay.textContent = quantity;
      updatePrice(card, quantity); // Optional: Update price if needed
  }
}

// Optional: Function to update price based on quantity
function updatePrice(card, quantity) {
  const priceElement = card.querySelector('#price');
  // Your logic to update price based on quantity
  // Example: priceElement.textContent = `₹${(basePrice * quantity).toFixed(2)}`;
}