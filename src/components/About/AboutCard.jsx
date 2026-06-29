function AboutCard({ title, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg text-center hover:-translate-y-2 transition duration-300">
      <h3 className="text-3xl font-bold text-blue-600">{title}</h3>

      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default AboutCard;
