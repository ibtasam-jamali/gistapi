import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import GistList from "./GistList/GistList";
import { getGistForUser, getPublicGists } from "../../services/gistService";
import _debounce from "lodash/debounce";

function Gist() {
  const [searchedUsername, setSearchedUsername] = useState("");
  const [gistsData, setGistsData] = useState([]); // Separate state for fetched gists
  const [error, setError] = useState(null);

  // Fetch gists based on searchedUsername -> getGistForUser and all Gists -> getPublicGists
  const fetchGists = async () => {
    try {
      if (searchedUsername) {
        const response = await getGistForUser(searchedUsername);
        setGistsData(response.data); // Set the fetched gists user data
      } else {
        let response = await getPublicGists();
        setGistsData(response.data); // Set the fetched gists all data
      }
    } catch (error) {
      console.error("Error fetching gists:", error);
      if (error.response && error.response.status === 404) {
        setError("No record found."); // Set custom error message for 404
      } else {
        setError("An error occurred while fetching gists."); // Set generic error message
      }
    }
  };

  // Create a debounced function that calls fetchGists
  const debouncedFetchGists = _debounce(fetchGists, 300);

  useEffect(() => {
    debouncedFetchGists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedUsername]);

  // Search by UserName
  const handleSearch = (username) => {
    setSearchedUsername(username);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Wrapper>
        <GistList error={error} gists={gistsData} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

export default Gist;
