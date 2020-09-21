const defaultState = {
  fetchSongsPending: true,
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType: "songs",
  songPaused: true,
};

const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_VIEW_TYPE":
      return {
        ...state,
        viewType: action.view,
      };
    case "SEARCH_SONGS_PENDING":
      return {
        ...state,
        searchSongsPending: true,
      };
    case "FETCH_SONGS_SUCCESS":
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
        fetchSongsPending: false,
        viewType: "songs",
      };
    case "FETCH_SONGS_ERROR":
      return {
        ...state,
        fetchSongsError: true,
        fetchSongsPending: false,
      };

    default:
      return state;
  }
};

export default songsReducer;
