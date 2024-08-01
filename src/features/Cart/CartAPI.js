export function fetchCartByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/api/cart/show?user=" + userId,
      {
        method: "GET",
        headers: { "content-type": "Application/json" },
      }
    );
    const data = response.json();
    resolve({ data });
  });
}


export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/api/cart/add", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "Application/json" },
    });
    const data = response.json();
    resolve({ data });
  });
}
export function removeCartItem(userId, productId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://localhost:8080/api/cart/remove?user=${userId}&product=${productId}`,
      {
        method: "POST",
        headers: { "content-type": "Application/json" },
      }
    );
    const data = response.json();
    resolve({ data });
  });
}

export function fetchWishlistByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/api/wishlist/show?user=" + userId,
      {
        method: "GET",
        headers: { "content-type": "Application/json" },
      }
    );
    const data = response.json();
    resolve({ data });
  });
}

export function addToWishlist(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/api/wishlist/add", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "Application/json" },
    });
    const data = await response.json();
    const status = response.status
    resolve({ data,status });
  });
}

export function removeWishlistItem(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/api/wishlist/remove", {
      method: "POST",
      body: JSON.stringify(id),
      headers: { "content-type": "Application/json" },
    });
    const data = response.json();
    resolve({ data });
  });
}
