import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import axios from "axios";
import { reducerCases } from "../utils/Constans";
export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, payload: userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);
  return (
    <Container>
      <div className='spotify__body'>
        <Sidebar />
        <div className='body'>
          <Navbar />
          <div className='body__contents'>
            <Body />
          </div>
        </div>
      </div>
      <div className='spotify__footer'>
        <Footer />
      </div>
    </Container>
  );
}
const Container = styled.div`
max-width: 100vw;
max height: 100vw;
overflow: hidden;
display: grid;
grid-template-rows: 85vh 15vh;
.spotify__body {
 display: grid;
 grid-template-columns: 15vw 85vw;
 height: 100%;
 width: 100%;
background: linear-gradient(transparent, rgba(0,0,0,1));
 background-color: rgb(33,40,70);
  .body {
    height: 100%;
    width: 100%;
overflow: auto;

&::-webkit-scrollbar {
  display: none;
  width: 16px;
  &-thumg {
    background-color: hsla(0,0%,100%,.3);
  }

  }
}
`;
