import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';


const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String){
    characters (filter: {
      name: $name
    }) {
    	results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState('');
  const [getLocations, {error, loading, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables: {
      name,
    },
  });
  console.log({called, error, loading, data});
  return (
    <div>
      <input
        type="text"
        name="searchInputField"
        id="searchInputField"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" onClick={() => getLocations()}>Search</button>
      { loading && <h2>Loading...</h2> }
      { error && <h2>Error While Fetching Data.</h2> }
      { data && (
        <ul>
         {data.characters.results.map((character) => {
           return <li>{character.location.name}</li>;
         })}
        </ul>
      )}
    </div>
  );
}

export default Search;