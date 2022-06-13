const BASE_URI = "https://api.ravelry.com";
const endpoint = `${BASE_URI}/patterns/1234.json`;
let imageUrls = [];

//인증을 위한 헤더
const headers = new Headers();
headers.append(
  "Authorization",
  "Basic " +
    btoa(
      "read-ea6b8e0a978e097b8badec466c71a60b" +
        ":" +
        "nKTdyxY5v3mF3TDb8hkQHGhHwHNQL7lbJtU8Dz15"
    )
);
//headers.append("Content-Type", "text/xml");
//headers.append("Origin", "https://api.ravelry.com");
//headers.append("Access-Control-Allow-Methods", "GET");

async function button_click() {
  const url = `${BASE_URI}/patterns/`;
  console.log("button clicked!");
  //console.log(endpoint);
  fetch(endpoint, { method: "GET", headers: headers })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      imageUrls.push(data.pattern.photos.square_url);
      console.log(data.pattern.photos.0.square_url);
    });
  //data = res.json();
  /*
  for (let i = 0; i < 10; i++) {
    fetch(endpoint, { method: "GET", headers: headers })
      .then((res) => res.json())
      .then((res) => console.log(res));
    const data = await res.json();
    imageUrls.push(data);
  }
  */
}
