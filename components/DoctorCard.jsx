import Link from "next/link";

export default function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img
        src={doctor.image}
        alt={`${doctor.firstName} ${doctor.lastName}`}
        className="doctor-image"
      />

      <h2>
        Dr. {doctor.firstName} {doctor.lastName}
      </h2>

      <p>{doctor.email}</p>

      <Link href={`/doctors/${doctor.id}`}>
        View Profile
      </Link>
    </div>
  );
}