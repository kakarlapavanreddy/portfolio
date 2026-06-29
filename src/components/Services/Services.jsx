import SectionTitle from "../SectionTitle/SectionTitle";

import ServiceCard from "./ServiceCard";

import services from "../../data/servicesData";

function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div
        className="mx-auto
            max-w-7xl
            px-6"
      >
        <SectionTitle title="My Services" subtitle="What I Can Do" />

        <div
          className="grid
                gap-8

                md:grid-cols-2

                lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
