import React from "react";
import GistItem from "./GistItem";
import { styled } from "styled-components";

function GistList({ gists, error }) {
  console.log("gists", gists);
  return (
    <List>
      {error ? ( // Display error message if error exists from API
        <ErrorMessage>{error}</ErrorMessage>
      ) : gists && gists.length > 0 ? (
        gists.map((gist, index) => <GistItem key={index} gist={gist} />)
      ) : (
        <NoGistsMessage>Loading...</NoGistsMessage>
      )}
    </List>
  );
}

const List = styled.div`
  margin-top: 16px;
`;

const NoGistsMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: green;
  text-align: center;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: red;
  text-align: center;
`;

export default GistList;
