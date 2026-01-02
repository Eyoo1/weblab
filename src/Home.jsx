import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <h1>
            Transform Your Body <br /> Transform Your Life
          </h1>
          <p>
            Connect with certified personal trainers and achieve your fitness
            goals.
          </p>

          <Link to="/booking" className="book-btn">
            Book a Trainer
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5"
          alt="Fitness training"
        />
      </div>

      <div className="features">
        <h2>Why Choose FitBook?</h2>

        <div className="feature-box">
          <div>Expert Trainers</div>
          <div>Easy Booking</div>
          <div>Flexible Schedule</div>
          <div>Proven Results</div>
        </div>
      </div>
    </>
  );
}

export default Home;
