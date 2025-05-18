const cart = [];
const discountCode = "ITALIADESCONTO";
let discountApplied = false;

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = cart
    .map((i) => `<p>${i.item} - R$ ${i.price.toFixed(2)}</p>`)
    .join("");
  calculateTotal();
}

function calculateTotal() {
  let total = cart.reduce((acc, curr) => acc + curr.price, 0);
  if (discountApplied) {
    total *= 0.85;
  }
  document.getElementById("totalAmount").innerText = `Total: R$ ${total.toFixed(
    2
  )}`;
}

function applyDiscount() {
  const code = document.getElementById("discountCode").value;
  const message = document.getElementById("discountMessage");

  if (cart.length === 0) {
    message.innerText = "Não é possível aplicar cupom em um carrinho vazio.";
    return;
  }

  if (code === discountCode) {
    discountApplied = true;
    message.innerText = "Desconto aplicado com sucesso!";
  } else {
    message.innerText = "Código de desconto inválido.";
  }
  calculateTotal();
}

function finalizeOrder() {
  if (cart.length > 0) {
    alert("Pedido finalizado com sucesso!");
    cart.length = 0;
    discountApplied = false;
    document.getElementById("discountCode").value = "";
    document.getElementById("discountMessage").innerText = "";
    updateCart();
  } else {
    alert("Seu carrinho está vazio.");
  }
}
