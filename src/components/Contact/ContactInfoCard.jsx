function ContactInfoCard({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-lg">
      <Icon className="text-3xl text-blue-600" />

      <div>
        <h3 className="font-bold">{title}</h3>

        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
