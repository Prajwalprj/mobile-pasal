export async function GET() {
  const data = [
    { id: 1, name: "iPhone 14 Pro", price: "Rs. 170,000", image: "mobile-pasal\public\iphone 14 pro.webp" },
    { id: 2, name: "iPhone 13", price: "Rs. 130,000", image: "mobile-pasal\public\iphone-14.webp" }
  ];
  return Response.json(data);
}
