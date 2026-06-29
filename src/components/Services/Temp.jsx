function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white">
      {/* Icon */}
      <div className="text-3xl mb-3">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;
