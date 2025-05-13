let dataVinDiesel = [
    {
        data: [
            {
                Judul: "Fast & Furious 7 (Furious 7)",
                Pemain: "Vin Diesel, Paul Walker, Jason Statham, Dwayne Johnson",
                Sinopsis: "Deckard Shaw seeks revenge against Dominic Toretto and his team for the death of his brother."
            },
            {
                Tahun: 2015,
                Rating: 7.1,
                Durasi: "02:17:00"
            }
        ],
        Trailer: "https://youtu.be/Skpu5HaVkOc",
        Sampul: "cover/fast7.jpg"
    },
    {
        data: [
            {
                Judul: "Riddick",
                Pemain: "Vin Diesel, Karl Urban, Katee Sackhoff",
                Sinopsis: "Left for dead on a desolate planet, Riddick fights for survival against alien predators and mercenaries."
            },
            {
                Tahun: 2013,
                Rating: 6.4,
                Durasi: "01:59:00"
            }
        ],
        Trailer: "https://youtu.be/zH0U7h2WJpo",
        Sampul: "cover/riddick.jpg"
    },
    {
        data: [
            {
                Judul: "Fast & Furious 6",
                Pemain: "Vin Diesel, Paul Walker, Dwayne Johnson, Michelle Rodriguez",
                Sinopsis: "Hobbs recruits Dom and his team to take down a skilled mercenary organization."
            },
            {
                Tahun: 2013,
                Rating: 7.0,
                Durasi: "02:10:00"
            }
        ],
        Trailer: "https://youtu.be/dKi5XoeTN0k",
        Sampul: "cover/fast6.jpg"
    },
    {
        data: [
            {
                Judul: "Guardians of the Galaxy",
                Pemain: "Vin Diesel (Groot), Chris Pratt, Zoe Saldana",
                Sinopsis: "A group of intergalactic misfits team up to save the galaxy from Ronan the Accuser."
            },
            {
                Tahun: 2014,
                Rating: 8.0,
                Durasi: "02:01:00"
            }
        ],
        Trailer: "https://youtu.be/d96cjJhvlMA",
        Sampul: "cover/gotg.jpg"
    },
    {
        data: [
            {
                Judul: "Fast Five",
                Pemain: "Vin Diesel, Paul Walker, Dwayne Johnson",
                Sinopsis: "Dom and his crew plan a heist in Rio while being pursued by a relentless federal agent."
            },
            {
                Tahun: 2011,
                Rating: 7.3,
                Durasi: "02:10:00"
            }
        ],
        Trailer: "https://youtu.be/mw2AqdB5EVA",
        Sampul: "cover/fast5.jpg"
    },
    {
        data: [
            {
                Judul: "The Chronicles of Riddick",
                Pemain: "Vin Diesel, Judi Dench, Karl Urban",
                Sinopsis: "Riddick battles the Necromongers, a fanatical army that converts or kills all in their path."
            },
            {
                Tahun: 2004,
                Rating: 6.7,
                Durasi: "01:59:00"
            }
        ],
        Trailer: "https://youtu.be/zH0U7h2WJpo",
        Sampul: "cover/chronicles_riddick.jpg"
    },
    {
        data: [
            {
                Judul: "Babylon A.D.",
                Pemain: "Vin Diesel, Michelle Yeoh, Mélanie Thierry",
                Sinopsis: "A mercenary escorts a woman with a secret from Russia to New York."
            },
            {
                Tahun: 2008,
                Rating: 5.0,
                Durasi: "01:30:00"
            }
        ],
        Trailer: "https://youtu.be/3haUxI5SmaI",
        Sampul: "cover/babylon_ad.jpg"
    },
    {
        data: [
            {
                Judul: "The Pacifier",
                Pemain: "Vin Diesel, Lauren Graham, Brittany Snow",
                Sinopsis: "A tough Navy SEAL is assigned to protect a family of five children."
            },
            {
                Tahun: 2005,
                Rating: 5.1,
                Durasi: "01:35:00"
            }
        ],
        Trailer: "https://youtu.be/j1XUWQClt1s",
        Sampul: "cover/pacifier.jpg"
    },
    {
        data: [
            {
                Judul: "xXx",
                Pemain: "Vin Diesel, Asia Argento, Samuel L. Jackson",
                Sinopsis: "An extreme sports athlete is recruited by the government for a dangerous mission."
            },
            {
                Tahun: 2002,
                Rating: 5.9,
                Durasi: "02:04:00"
            }
        ],
        Trailer: "https://youtu.be/vZlcQTCRwWQ",
        Sampul: "cover/xxx.jpg"
    },
    {
        data: [
            {
                Judul: "Pitch Black",
                Pemain: "Vin Diesel, Radha Mitchell, Cole Hauser",
                Sinopsis: "A spaceship crashes on a desert planet where dangerous creatures emerge at night."
            },
            {
                Tahun: 2000,
                Rating: 7.1,
                Durasi: "01:52:00"
            }
        ],
        Trailer: "https://youtu.be/fm1K6Cm7Yy0",
        Sampul: "cover/pitch_black.jpg"
    }
]; 


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { WhatsappShareButton } from 'react-share';

function App() {
  // State Management
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch Data from film3.js
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://drive.crzycode.my.id/datajs/film3.js');
        setFilms(response.data);
        setFilteredFilms(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching films:", error);
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  // Search Functionality
  const handleSearch = () => {
    if (!searchQuery || searchQuery === '*' || searchQuery.toLowerCase() === 'all') {
      setFilteredFilms(films);
    } else {
      const filtered = films.filter(film => 
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())) ||
        film.year.toString().includes(searchQuery)
      );
      setFilteredFilms(filtered);
    }
  };

  // Open YouTube Trailer
  const openTrailer = (youtubeId) => {
    window.location.href = `vnd.youtube://${youtubeId}`;
    setTimeout(() => {
      window.location.href = `https://youtube.com/watch?v=${youtubeId}`;
    }, 500);
  };

  // Download Poster to Gallery
  const downloadPoster = async (imageUrl, filmTitle) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `poster_${filmTitle.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      alert('Gagal mengunduh poster');
    }
  };

  // Loading Image Component
  const LoadingImage = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);
    
    return (
      <div className="image-container">
        {isLoading && <Skeleton height={300} />}
        <img 
          src={src} 
          alt={alt}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  };

  // Main App Render
  return (
    <div className="app">
      {!selectedFilm ? (
        // Film List View
        <div className="film-list">
          <h1>Daftar Film</h1>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Cari film (ketik '*' untuk semua)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Cari</button>
          </div>

          {loading ? (
            <div className="loading-container">
              <Skeleton count={5} height={200} />
            </div>
          ) : (
            <div className="films-container">
              {filteredFilms.length > 0 ? (
                filteredFilms.map(film => (
                  <div key={film.id} className="film-card" onClick={() => setSelectedFilm(film)}>
                    <LoadingImage src={film.poster} alt={film.title} />
                    <h3>{film.title}</h3>
                    <p>{film.year} • {film.genre.join(', ')}</p>
                  </div>
                ))
              ) : (
                <p>Tidak ada film yang ditemukan</p>
              )}
            </div>
          )}
        </div>
      ) : (
        // Film Detail View
        <div className="film-detail">
          <button onClick={() => setSelectedFilm(null)}>Kembali</button>
          
          <h1>{selectedFilm.title}</h1>
          <LoadingImage src={selectedFilm.poster} alt={selectedFilm.title} />
          
          <div className="film-meta">
            <p><strong>Tahun:</strong> {selectedFilm.year}</p>
            <p><strong>Genre:</strong> {selectedFilm.genre.join(', ')}</p>
            <p><strong>Deskripsi:</strong> {selectedFilm.description}</p>
          </div>

          <div className="action-buttons">
            <button onClick={() => openTrailer(selectedFilm.trailer)}>
              Tonton Trailer
            </button>
            
            <button onClick={() => downloadPoster(selectedFilm.poster, selectedFilm.title)}>
              Download Poster
            </button>
            
            <WhatsappShareButton
              title={`Tonton ${selectedFilm.title} (${selectedFilm.year})`}
              url={window.location.href}
            >
              <button>Share via WhatsApp</button>
            </WhatsappShareButton>
          </div>

          {/* Related Films */}
          {selectedFilm.related && selectedFilm.related.length > 0 && (
            <div className="related-films">
              <h2>Film Terkait</h2>
              <div className="related-container">
                {selectedFilm.related.map(relatedId => {
                  const relatedFilm = films.find(f => f.id === relatedId);
                  return relatedFilm ? (
                    <div key={relatedId} className="related-card" onClick={() => setSelectedFilm(relatedFilm)}>
                      <LoadingImage src={relatedFilm.poster} alt={relatedFilm.title} />
                      <h4>{relatedFilm.title}</h4>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;