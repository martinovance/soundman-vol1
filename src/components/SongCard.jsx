import { Link } from "react-router-dom";
import { setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const SongCard = ({ song }) => {
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover: flex ${
            setActiveSong?.title === song.name
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          } `}
        >
          <PlayPause />
        </div>
        <img alt="song_img" src={song?.album?.images[1]?.url} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link href={`/songs/${song.id}`}>{song.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            href={
              song.artists ? `/songs/${song.artists[0]?.name}` : "/top-artists"
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
