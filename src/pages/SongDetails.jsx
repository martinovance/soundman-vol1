import { useLocation, useParams } from "react-router-dom";
import { useGetSongLyricsQuery } from "../redux/services/spotifyCore";
import { DetailsHeader } from "../components";

const SongDetails = () => {
  const { songid } = useParams();
  const { data: songData } = useGetSongLyricsQuery({ songid });

  const location = useLocation();
  const artistData = location.state?.song || null;

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
    </div>
  );
};

export default SongDetails;
