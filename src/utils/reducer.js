import { reducerCases } from "./Constans";

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "2OkBaHfUJ2YYZDvIxFENwR",
  selectedPlaylist: null,
  currentlyPlaying: null,
  playerState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }

    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        // selectedPlaylist: action.currentlyPlaying,
        currentlyPlaying: action.payload,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        // selectedPlaylist: action.currentlyPlaying,
        playerState: action.playerState,
      };
    }

    default:
      return state;
  }
};

export default reducer;
