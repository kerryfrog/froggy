const BASE_URI = "https://api.ravelry.com";
const endpoint = `${BASE_URI}/patterns/1234.json`;
let patternidList = [];
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
//이미지 uri 불러와서 리턴하는 함수
async function getImageUrl() {
  let imageUrls = [];
  for (let i = 1234; i < 10; i++) {
    url = `https://api.ravelry.com/patterns/${i + 1000}.json`;
    await fetch(url, { method: "GET", headers: headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        tmpurl = data.pattern.photos[0].square_url;
        imageUrls.push(tmpurl);
      });
  }
  return imageUrls;
}

async function button_click() {
  let url;
  let data;
  console.log("button clicked!");
  for (let i = 1234; i < 10; i++) {
    url = `${BASE_URI}/patterns/${i + 1000}.json`;
    data = await getImageUrl(url);
    imageUrls.push(data);
  }
  console.log(imageUrls);
}
