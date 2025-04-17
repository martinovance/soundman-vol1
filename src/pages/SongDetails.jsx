import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  useGetPlaylistsQuery,
  useGetSongLyricsQuery,
} from "../redux/services/spotifyCore";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  const {
    data: songData,
    isFectching: isFetchingSongDetails,
    error: detailsError,
  } = useGetSongLyricsQuery({ songid });
  const location = useLocation();
  const artistData = location.state?.song || null;
  const {
    data,
    isFetching: isFetchingPlaylists,
    error,
  } = useGetPlaylistsQuery();

  if (isFetchingSongDetails || isFetchingPlaylists) {
    return <Loader title="Fetching song details" />;
  }

  if (error || detailsError) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData} sondData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {!songData ? (
            <p className="text-gray-400 text-base">Sorry, no lyrics</p>
          ) : (
            songData?.lyrics?.lines?.map((line, i) => (
              <p key={i} className="text-gray-400 my-1">
                {line?.words}
              </p>
            ))
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
