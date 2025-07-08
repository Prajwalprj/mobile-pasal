// app/apple/page.jsx
import Image from "next/image";

async function getApplePhones() {
  const res = await fetch("http://localhost:3000/api/apple", { cache: "no-store" });
  return res.json();
}

export default async function ApplePage() {
  const phones = await getApplePhones();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {phones.map((phone) => (
        <div key={phone.id} className="bg-white p-4 rounded shadow text-center">
          <Image
            src={phone.image}
            alt={phone.name}
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{phone.name}</h2>
          <p className="text-red-600 font-bold">{phone.price}</p>
        </div>
      ))}
    </div>
  );
}
