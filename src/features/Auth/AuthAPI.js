import Cookies from "js-cookie";

export function userLogin(loginInfo) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://flycatcher-backend.vercel.app/api/login", {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function userRegister(userInfo) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://flycatcher-backend.vercel.app/api/register", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://flycatcher-backend.vercel.app/api/user/${id}`, {
      method: "GET",
      headers: {
        "constent-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
