import { uniqBy } from "lodash";
import { setArtistIds } from "./artistActions";

export const fetchSongsPending = () => {
  return {
    type: "FETCH_SONGS_PENDING",
  };
};

export const searchSongs = (searchTerm, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
        }),
      }
    );

    dispatch(searchSongsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === "Unauthorized") {
          window.location.href = "./";
        }
        return res.json();
      })
      .then((res) => {
        res.items = res.tracks.items.map((item) => {
          return {
            track: item,
          };
        });
        dispatch(fetchSongsSuccess(res.items));
      });
  };
};

export const searchSongsPending = () => {
  return {
    type: "SEARCH_SONGS_PENDING",
  };
};

export const fetchSongsSuccess = (songs) => {
  return {
    type: "FETCH_SONGS_SUCCESS",
    songs,
  };
};
