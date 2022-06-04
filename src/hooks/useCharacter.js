import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter( $id: ID! ){
    character (id: $id) {
      id
      name
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;


export const useCharacter = (id) => {
  const {error, loading, data} = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });

  return {
    error,
    loading,
    data
  };
};


// In this hook, we sending ID as paramtere to get specific character

// at line no 4 ID! (!) is used for required / mandatory parameter