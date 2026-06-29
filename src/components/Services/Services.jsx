import ServiceCard from "./ServiceCard";
import services from "../../data/servicesData";

function Services() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={<service.icon />}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
