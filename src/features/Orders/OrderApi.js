export function fetchUserOrders(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/order/show?user=${id}`, {
      method: "GET",
      headers: { "constent-type": "application/json" },
    });
    const data = response.json();
    resolve({ data });
  });
}
