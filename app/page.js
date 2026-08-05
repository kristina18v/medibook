import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">Smart healthcare scheduling</p>

        <h1>
          Book Your Doctor <span>Appointment Online</span>
        </h1>

        <p>
          Find experienced doctors, browse by specialization, save your
          favorites and book appointments in just a few clicks.
        </p>

        <div className="hero-buttons">
          <Link href="/doctors" className="button primary">
            Find Doctors
          </Link>

          <Link href="/register" className="button">
            Create Account
          </Link>
        </div>

        <div className="hero-stats" aria-label="MediBook highlights">
          <div>
            <strong>24/7</strong>
            <span>Online booking</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Available doctors</span>
          </div>
          <div>
            <strong>15 min</strong>
            <span>Average setup</span>
          </div>
        </div>
      </div>

      <section className="hero-panel" aria-label="Featured doctors">
        <div className="featured-card">
          <div className="doctor-stack" aria-hidden="true">
            <span className="doctor-avatar">EC</span>
            <span className="doctor-avatar">AR</span>
            <span className="doctor-avatar">MS</span>
          </div>

          <p className="eyebrow">Featured Doctors</p>

          <h2>Find the right doctor for you</h2>

          <p>
            Browse doctors by specialization, compare profiles and book your
            appointment online in just a few clicks.
          </p>

          <Link href="/doctors" className="button primary">
            Browse Doctors
          </Link>
        </div>

        <div className="hero-info">
          <div className="info-card">
            <strong>120+</strong>
            <span>Doctors</span>
          </div>

          <div className="info-card">
            <strong>10+</strong>
            <span>Specializations</span>
          </div>

          <div className="info-card">
            <strong>24/7</strong>
            <span>Online Booking</span>
          </div>
        </div>
      </section>
    </main>
  );
}
