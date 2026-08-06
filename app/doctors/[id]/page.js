import { getDoctor } from "@/lib/doctors";

export default async function DoctorPage({ params }) {
  const { id } = await params;

  const doctor = await getDoctor(id);

  if (!doctor) {
    return <h1>Doctor not found</h1>;
  }

  return (
    <main className="doctor-profile-page">
      <img
        src={doctor.image}
        alt={`${doctor.firstName} ${doctor.lastName}`}
        width={200}
      />

      <h1>
        Dr. {doctor.firstName} {doctor.lastName}
      </h1>

      <p>
        <strong>Specialization:</strong> {doctor.specialization}
      </p>

      <p>
        <strong>Email:</strong> {doctor.email}
      </p>

      <p>
        <strong>Phone:</strong> {doctor.phone}
      </p>

      {doctor.bio && (
        <p>
          <strong>Bio:</strong> {doctor.bio}
        </p>
      )}
    </main>
  );
}