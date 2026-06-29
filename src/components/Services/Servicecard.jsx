function ServiceCard({
  icon: Icon,

  title,

  description,
}) {
  return (
    <div
      className="rounded-xl
        bg-white
        p-8
        shadow-lg
        hover:-translate-y-3
        transition-all
        duration-300"
    >
      <Icon
        className="text-5xl
            text-blue-600"
      />

      <h3
        className="mt-6
            text-2xl
            font-bold"
      >
        {title}
      </h3>

      <p
        className="mt-4
            leading-7
            text-gray-500"
      >
        {description}
      </p>

      <button
        className="mt-6
            font-semibold
            text-blue-600"
      >
        Learn More →
      </button>
    </div>
  );
}

export default ServiceCard;
