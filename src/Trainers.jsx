import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Trainers.css";
import { supabase } from "./supabase";

function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrainers();
  }, []);

  async function fetchTrainers() {
    const { data, error } = await supabase
      .from("trainers")
      .select("*");

    if (error) {
  console.error("SUPABASE ERROR:", error);
  setErrorMsg(error.message);
}
 else {
      setTrainers(data || []);
    }

    setLoading(false);
  }

  if (loading) {
    return <p style={{ padding: "30px" }}>Loading trainers...</p>;
  }

  if (errorMsg) {
    return <p style={{ padding: "30px", color: "red" }}>{errorMsg}</p>;
  }

  return (
    <div className="trainers">
      <h1>Our Expert Trainers</h1>

      {trainers.length === 0 ? (
        <p>No trainers available right now.</p>
      ) : (
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <div className="trainer-card" key={trainer.id}>
              <img
                src={trainer.image_url || "https://via.placeholder.com/300"}
                alt={trainer.name}
              />
              <h3>{trainer.name}</h3>
              <p>{trainer.speciality}</p>
              <p>₹{trainer.price} / session</p>

              <button onClick={() => navigate("/booking")}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trainers;

