
import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharactersList';
import "./CharacterList.css";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data});

  if(loading) return <h2>Loading ...</h2>;
  if(error) return  <h2>Error While Getting Data</h2>;

  return (
    <div className='CharacterList'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="Images" />
            <h2> { character.name } </h2>
          </Link>
        );
      })}
    </div>
  )
}

export default CharactersList;



// useQuery is to used to fetch data from server and this hook porovided by apollo

// gql is use to write query to get what data we want.