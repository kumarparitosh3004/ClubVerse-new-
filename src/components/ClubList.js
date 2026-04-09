import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ClubList({ category, search }) {
  const [clubs, setClubs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(window.localStorage.getItem("favoriteClubs") || "[]");
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/clubs");

        if (!response.ok) {
          throw new Error("Failed to fetch clubs");
        }

        const data = await response.json();
        console.log("Fetched clubs:", data);
        setClubs(data);
      } catch (error) {
        console.log("Error fetching clubs:", error);
        setError("Unable to load clubs right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const toggleFavorite = (clubId) => {
    setFavorites(prev => {
      const updatedFavorites = prev.includes(clubId)
        ? prev.filter(id => id !== clubId)
        : [...prev, clubId];

      window.localStorage.setItem("favoriteClubs", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = category === 'all' || club.category === category;
    const matchesSearch = club.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div className="clubs-container" id="clubs">Loading clubs...</div>;
  }

  if (error) {
    return <div className="clubs-container" id="clubs">{error}</div>;
  }

  return (
    <div className="clubs-container" id="clubs">
      {filteredClubs.map(club => {
        const socialLinks = Object.entries(club.socialMedia || {});

        return (
        <div
          key={club.id}
          className="club-card club-card-link"
          onClick={() => navigate(`/club/${club.id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              navigate(`/club/${club.id}`);
            }
          }}
        >
          <div className="club-brand">
            <img src={club.image} alt={club.name} className="club-image" />
          </div>

          <div className="club-info">
            <h3>{club.name}</h3>
            <p>{club.description}</p>

            <div className="club-connect">
              <h4>Connect With Us</h4>
              <div className="club-connect-links">
                {socialLinks.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="club-social-btn"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {platform.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <div className="club-actions">
              <Link className="visit-btn" to={`/club/${club.id}`}>
                View Details →
              </Link>

              <button
                type="button"
                className="favorite-btn"
                aria-label={favorites.includes(club.id) ? `Remove ${club.name} from favorites` : `Add ${club.name} to favorites`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleFavorite(club.id);
                }}
              >
                {favorites.includes(club.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
}

export default ClubList;
