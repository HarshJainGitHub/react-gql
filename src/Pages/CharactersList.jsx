import { useQuery, gql } from '@apollo/client';
import React from 'react';
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query{
    characters {
      results {
        id
        name
        gender
        image
        created
      }
    }
  }
`;

const CharactersList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data});

  if(loading) return <h2>Loading ...</h2>;
  if(error) return  <h2>Error While Getting Data</h2>;

  return (
    <div className='CharacterList'>
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt="Images" />
            <h2> { character.name } </h2>
          </div>
        );
      })}
    </div>
  )
}

export default CharactersList;



// useQuery is to used to fetch data from server and this hook porovided by apollo

// gql is use to write query to get what data we want.