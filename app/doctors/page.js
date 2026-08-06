import DoctorCard from "@/components/DoctorCard";
import { getDoctors } from "@/lib/doctors";

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <main className="doctors-page">
      <h1>Our Doctors</h1>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}
      </div>
    </main>
  );
}