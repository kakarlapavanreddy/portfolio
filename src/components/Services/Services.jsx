import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and modern websites using React and Tailwind.",
      icon: "💻",
    },
    {
      id: 2,
      title: "UI Design",
      description: "Clean and user-friendly interface designs for better UX.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "API Integration",
      description: "Connecting frontend with backend services efficiently.",
      icon: "🔗",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
