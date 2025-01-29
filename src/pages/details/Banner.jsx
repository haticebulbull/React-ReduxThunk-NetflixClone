import { baseImgUrl } from "../../constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-[30vh] md:h-[40vh] relative drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
      <img
        className="size-full object-cover rounded-sm"
        src={baseImgUrl + movie.backdrop_path}
        alt=""
      />

      <div className="bg-black absolute inset-0 grid place-items-center bg-opacity-30 p-3">
        <h2 className="text-3xl md:text-4xl font-semibold font-mono text-center">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
