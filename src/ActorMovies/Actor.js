import React, { useState } from "react";
import "./Actor.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the actor list
    this.actors = [
      {
        name: "Amitabh Bachchan",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRamZ61AD3ZJdbIfulThBpr4oUie6F1SgxjUimyafQVrIIwpWgdb3-pd8rSUt1gG-_btXCr4LXLnGWIu6Y", 
        movies: [
          "Sholay (1975) - IMDb Rating: 8.2",
          "Deewaar (1975) - IMDb Rating: 8.1",
          "Paa (2009) - IMDb Rating: 7.2",
          "Don (1978) - IMDb Rating: 7.7",
          "Pink (2016) - IMDb Rating: 8.1",
        ],
      },
      {
        name: "Shah Rukh Khan",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_ObshU2ins98O8AZINR-kjLdMyn2IUmNnkS3CWVW4Nb8j2yuDjUMj0q-luS1YF5pnMbZ0WFyOYxRdNFFxVQrnHQ", 
        movies: [
          "Dilwale Dulhania Le Jayenge (1995) - IMDb Rating: 8.0",
          "Swades (2004) - IMDb Rating: 8.2",
          "Chak De! India (2007) - IMDb Rating: 8.2",
          "My Name is Khan (2010) - IMDb Rating: 8.0",
          "Devdas (2002) - IMDb Rating: 7.5",
        ],
      },
      {
        name: "Rajinikanth",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0a5k0dt5Y1pfUGGl7G6uXooQneeqMKHf-g&s", 
        movies: [
          "Sivaji (2007) - IMDb Rating: 7.5",
          "Enthiran (2010) - IMDb Rating: 7.1",
          "Kabali (2016) - IMDb Rating: 6.2",
          "Kaala (2018) - IMDb Rating: 7.0",
          "Petta (2019) - IMDb Rating: 7.2",
        ],
      },
      {
        name: "Aamir Khan",
        image: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/aamir-khan-42-20-12-2017-04-51-55.jpg", 
        movies: [
          "3 Idiots (2009) - IMDb Rating: 8.4",
          "Dangal (2016) - IMDb Rating: 8.4",
          "PK (2014) - IMDb Rating: 8.1",
          "Taare Zameen Par (2007) - IMDb Rating: 8.3",
          "Lagaan (2001) - IMDb Rating: 8.1",
        ],
      },
      {
        name: "Salman Khan",
        image: "https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_FMjpg_UX1000_.jpg", 
        movies: [
          "Bajrangi Bhaijaan (2015) - IMDb Rating: 8.0",
          "Sultan (2016) - IMDb Rating: 7.5",
          "Kick (2014) - IMDb Rating: 6.8",
          "Dabangg (2010) - IMDb Rating: 6.8",
          "Tere Naam (2003) - IMDb Rating: 6.8",
        ],
      },
      {
        name: "Hrithik Roshan",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Hrithik_Roshan_at_The_Incredible_You_event_%283x4_cropped%29.png", 
        movies: [
          "Zindagi Na Milegi Dobara (2011) - IMDb Rating: 8.2",
          "Koi Mil Gaya (2003) - IMDb Rating: 7.1",
          "Jodhaa Akbar (2008) - IMDb Rating: 7.6",
          "Super 30 (2019) - IMDb Rating: 7.9",
          "War (2019) - IMDb Rating: 6.5",
        ],
      },
      {
        name: "Nana Patekar",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/174767_v9_aa.jpg",
        movies: [
          "Krantiveer (1994) - IMDb Rating: 7.7",
          "Parinda (1989) - IMDb Rating: 8.1",
          "Ab Tak Chhappan (2004) - IMDb Rating: 7.8",
          "Welcome (2007) - IMDb Rating: 7.0",
          "Apaharan (2005) - IMDb Rating: 7.4",
        ],
      },
      {
        name: "Akshay Kumar",
        image: "https://imgeng.jagran.com/images/2025/03/07/article/image/akshaykumar-regime-1741332954596_v.webp",
        movies: [
          "Hera Pheri (2000) - IMDb Rating: 8.1",
          "Special 26 (2013) - IMDb Rating: 8.0",
          "Baby (2015) - IMDb Rating: 8.0",
          "Airlift (2016) - IMDb Rating: 8.0",
          "Kesari (2019) - IMDb Rating: 7.4",
        ],
      },
      {
        name: "Ashok Saraf",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcryH3KR_uX5dJNRUTTK86urWOJQ6_nd7ePlO_yAQoH9wR-oWKwQ_9JdaAg5DUbtnCP_PVITNbT3lkWp7pX4BJ3g", 
        movies: [
          "Dhum Dhadaka (1985) - IMDb Rating: 8.1",
          "Ashi Hi Banwa Banwi (1988) - IMDb Rating: 8.7",
          "Zapatlela (1993) - IMDb Rating: 8.2",
          "Ek Daav Bhutacha (1982) - IMDb Rating: 7.5",
          "Balache Baap Brahmachari (1989) - IMDb Rating: 7.0",
        ],
      },
      
      {
        name: "Swapnil Joshi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFM__EPyLIbvz5Q4T83nuM1MmTmIkQvNJRlOfXbPKGHEfscOg8-A_QyzaMrrX5cWxc3EdTGi5tG1jc5P_9tPJNQ", 
        movies: [
          "Duniyadari (2013) - IMDb Rating: 7.4",
          "Mumbai-Pune-Mumbai (2010) - IMDb Rating: 8.0",
          "Mitwaa (2015) - IMDb Rating: 7.3",
          "Pyaar Vali Love Story (2014) - IMDb Rating: 6.8",
          "Tula Kalnnaar Nahi (2017) - IMDb Rating: 7.1",
        ],
      },
    ];
  }

  render() {
    return <ActorApp actors={this.actors} />;
  }
}

const ActorApp = ({ actors }) => {
  const [selectedActor, setSelectedActor] = useState(null);

  return (
    <div className="Actor-container">
      <h1>Famous Indian Actors</h1>
      <div className="actor-grid">
        {actors.map((actor, index) => (
          <div key={index} className="actor-card" onClick={() => setSelectedActor(actor)}>
            <img src={actor.image} alt={actor.name} className="actor-image" />
            <p className="actor-name">{actor.name}</p>
          </div>
        ))}
      </div>

      {/* Display selected actor's movies at the bottom */}
      {selectedActor && (
        <div className="movie-section">
          <h2>Top Movies of {selectedActor.name}</h2>
          <ol>
            {selectedActor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Actor;
