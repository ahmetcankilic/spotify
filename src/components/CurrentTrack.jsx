import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constans";
export default function () {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.data !== "") {
        const { item } = response.data;
        const currentlyPlaying1 = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({
          type: reducerCases.SET_PLAYING,
          payload: currentlyPlaying1,
        });
      }
      console.log(response);
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentlyPlaying && (
        <div className='track'>
          <div className='track__image'>
            <img src={currentlyPlaying.image} alt='currentlyplaying' />
          </div>
          <div className='track__info'>
            <li>
              <h4>{currentlyPlaying.name}</h4>
              <h6>{currentlyPlaying.artists.join(", ")}</h6>
            </li>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__info {
      postion: top;
      display: flex;
      flex-direction: columnn;
      gap: 0.3rem;
      h4 {
        color: white;
      }
      h6 {
        color: #b3b3b3;
      }
    }
  }
`;
