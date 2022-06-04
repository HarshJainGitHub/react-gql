import React from 'react';
import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter';
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  console.log({error, loading, data});

  if(error) return <h2>Error While Fetching Data</h2>;
  if(loading) return <h2>Loading...</h2>

  return (
    <div className='Character'>
      <img src={data.character.image} alt="Character" width={250} height={250} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>Gender : {data.character.gender}</p>
        <div className="Character-episode">
          {
            data.character.episode.map((episode) => {
              return <div>
                {episode.name} - <b> l </b>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Character;