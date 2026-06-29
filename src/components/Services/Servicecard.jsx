function ServiceCard({ title, description }) {
  return (
    <div className="p-6 shadow-md rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
