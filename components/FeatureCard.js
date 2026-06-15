import Image from "next/image";

export default function FeatureCard({ img, title, description }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={img}
          alt={title}
          width={64}
          height={64}
          className="drop-shadow-md"
        />
      </div>
      <h4 className="text-xl font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
