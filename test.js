
  document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("home-product");
    const products = Array.from(productsContainer.getElementsByClassName("home-product-item-link"));

    function sortProductsByPrice(order) {
      products.sort(function (a, b) {
        const priceA = parseFloat(a.querySelector(".home-product-item-price-current").innerText.replace(/\D/g, ''));
        const priceB = parseFloat(b.querySelector(".home-product-item-price-current").innerText.replace(/\D/g, ''));

        return order === "desc" ? priceB - priceA : priceA - priceB;
      });

      products.forEach(function (product) {
        productsContainer.appendChild(product);
      });
    }

    document.querySelectorAll(".sort-option-link").forEach(function (sortLink) {
      sortLink.addEventListener("click", function (event) {
        event.preventDefault();
        const order = sortLink.getAttribute("data-sort");
        sortProductsByPrice(order);
      });
    });
  });

