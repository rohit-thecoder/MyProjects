let bagItems = [];
let itemsContainerElement = document.querySelector(".items_container");

let bagItemsStr = localStorage.getItem("bagItems");
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

displayAll();
displayBagIcon();

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagIconCountElem = document.querySelector(".bag_item_count");
  if (bagItems.length > 0) {
    bagIconCountElem.style.visibility = "visible";
    bagIconCountElem.innerText = bagItems.length;
  } else {
    bagIconCountElem.style.visibility = "hidden";
  }
}

function displayAll() {
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
      <div class="item_container">
        <img class="item_image" src="${item.image}" alt="Myntra deals" />

        <div class="rating">${item.rating.stars}⭐ | ${item.rating.count} reviews</div>

        <div class="company_name">${item.company}</div>

        <div class="item_name">${item.item_name}</div>

        <div class="price">
          <span class="current_price">Rs ${item.current_price}</span>
          <span class="original_price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <div class="button_bag">
          <button class="button_add" onclick="addToBag(${item.id})">
            <span class="material-symbols-outlined bag_icon">local_mall</span>
            ADD TO BAG
          </button>
        </div>
      </div>
    `;
  });
  itemsContainerElement.innerHTML = innerHtml;
}