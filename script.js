// SNELIPE website script
const WA_NUMBER = "8801575833801";

// ADD PRODUCTS HERE. Each product is one block inside the list below.
// Example (remove the // to use it):
// { name: "Product name", category: "Skincare", price: "BDT 000", desc: "One short line about it.", image: "products/product-1.jpg" },
// Put the product photo inside a folder called "products" and use its file name in image.
const PRODUCTS = [
];

function waLink(text) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}

// Give every WhatsApp button its ready-made message
document.querySelectorAll("[data-wa]").forEach(function (a) {
  a.href = waLink(a.getAttribute("data-wa"));
});

// Show products
const grid = document.getElementById("product-grid");
const empty = document.getElementById("empty");
if (PRODUCTS.length) {
  empty.hidden = true;
  PRODUCTS.forEach(function (p) {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("div");
    img.className = "img";
    if (p.image) {
      const i = document.createElement("img");
      i.src = p.image;
      i.alt = p.name;
      i.loading = "lazy";
      img.appendChild(i);
    } else {
      img.textContent = "Photo coming soon";
    }

    const body = document.createElement("div");
    body.className = "body";
    const cat = document.createElement("small");
    cat.textContent = p.category || "";
    const h = document.createElement("h3");
    h.textContent = p.name;
    const d = document.createElement("p");
    d.textContent = p.desc || "";
    const pr = document.createElement("div");
    pr.className = "price";
    pr.textContent = p.price || "";
    const btn = document.createElement("a");
    btn.className = "btn btn-dark";
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Order on WhatsApp";
    btn.href = waLink("Hi SNELIPE, I want to order: " + p.name + ". Quantity: 1");

    body.append(cat, h, d, pr, btn);
    card.append(img, body);
    grid.appendChild(card);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
