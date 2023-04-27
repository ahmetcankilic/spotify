import React from "react";
import styled from "styled-components";
const handleClick = () => {
  const clientId = "ecea3abb59604502be074fb21349af48";
  const redirectUrl = "http://localhost:3000";
  const apiUrl = "https://accounts.spotify.com/authorize";
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
  ];

  window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    "%20",
  )}
&response_type=token&show_daialog=true `;
  console.log(`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}
&response_type=token&show_daialog=true`);
};

export default function Login() {
  return (
    <Container>
      <img
        src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
        alt='spotify'
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
