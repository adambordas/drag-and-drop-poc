import { gql } from '@apollo/client';

export const GET_CARDS = gql`
  query GetCards {
    cards {
      id,
      description,
      lane
    }
  }
`;

export const MOVE_CARD = gql`
  mutation UpdateCard($id: ID!, $lane: String!) {
    updateCard(id: $id, lane: $lane) {
      id,
      description,
      lane
    }
  }
`;
