import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80
    backdrop-blur-sm animate-slideup"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black 
            bg-opacity-50 group-hover:flex ${
              setActiveSong?.name === song.name
                ? "flex bg-black bg-opacity-70"
                : "hidden"
            } `}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        <img alt="song_img" src={song?.album?.images[1]?.url} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.id}`}>{song.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists ? `/artists/${song.artists[0]?.id}` : "/top-artists"
            }
          >
            {song?.artists[0]?.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
