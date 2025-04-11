import { Link } from "react-router-dom";

const DetailsHeader = ({ artistData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="art"
        src={artistData?.album?.images[0]?.url}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5 truncate">
        <p className="truncate font-bold sm:text-3xl text-xl text-white">
          {artistData?.name}
        </p>
        <Link to="/">
          <p className="text-base text-gray-400 mt-2">
            {artistData?.artists[0]?.name}
          </p>
        </Link>
        <p className="text-base text-gray-400 mt-2">
          {artistData?.album?.name}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-34 h-14" />
  </div>
);

export default DetailsHeader;
