import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ClubDetails() {
  const { id } = useParams();
  const [clubs, setClubs] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const club = clubs.find((currentClub) => currentClub.id === parseInt(id, 10));
  const socialLinks = useMemo(() => (club ? Object.entries(club.socialMedia || {}) : []), [club]);
  const details = club?.details || [];
  const events = club?.events || [];

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/clubs");

        if (!response.ok) {
          throw new Error("Failed to fetch club details");
        }

        const data = await response.json();
        console.log("Fetched clubs:", data);
        setClubs(data);
      } catch (error) {
        console.log("Error fetching clubs:", error);
        setError("Unable to load club details right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  useEffect(() => {
    if (!club) return;
    const savedFavorites = JSON.parse(window.localStorage.getItem("favoriteClubs") || "[]");
    setIsFavorite(savedFavorites.includes(club.id));
  }, [club]);

  if (loading) return <h1>Loading club details...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!club) return <h1>Club not found</h1>;

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(window.localStorage.getItem("favoriteClubs") || "[]");
    const updatedFavorites = savedFavorites.includes(club.id)
      ? savedFavorites.filter((favoriteId) => favoriteId !== club.id)
      : [...savedFavorites, club.id];

    window.localStorage.setItem("favoriteClubs", JSON.stringify(updatedFavorites));
    setIsFavorite(updatedFavorites.includes(club.id));
  };

  return (
    <div className="club-detail-page">
      <Link to="/" className="club-detail-back">
        ← BACK TO HOME
      </Link>
      <div className="club-detail-layout">
        <div className="club-detail-card">
          <div className="club-detail-media">
            <div className="club-detail-media-label">{club.name}</div>
            <img src={club.image} alt={club.name} className="club-detail-image" />
          </div>

          <div className="club-detail-body">
            <div className="club-detail-header">
              <div>
                <h1 className="club-detail-title">{club.name}</h1>
                <p className="club-detail-description">{club.description}</p>
              </div>
            </div>

            <section className="club-detail-section">
              <h2>DETAILED INFORMATION</h2>
              <div className="club-detail-grid">
                {details.map((detail, index) => (
                  <article key={index} className="club-detail-info-card">
                    <span className="club-detail-info-index">0{index + 1}</span>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="club-detail-section">
              <h2>TOP EVENTS</h2>
              <div className="club-detail-events">
                {events.map((event) => (
                  <article key={event.name} className="club-detail-event-card">
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="club-detail-sidebar">
          <div className="club-detail-side-card">
            <Link to="/" className="club-detail-chip">ALL CLUBS</Link>
            <button
              type="button"
              onClick={toggleFavorite}
              className={`club-detail-favorite ${isFavorite ? "is-active" : ""}`}
            >
              {isFavorite ? "★ FAVORITE" : "☆ MARK FAVORITE"}
            </button>
          </div>

          <div className="club-detail-side-card">
            <h2>CONNECT WITH US</h2>
            <div className="club-detail-socials">
              {socialLinks.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="club-detail-social-link"
                >
                  {platform.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ClubDetails;
