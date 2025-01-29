import { IoBookmarks } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { list } = useSelector((store) => store);
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img className="max-w-[150px]" src="/logo.svg" alt="netflix" />
      </Link>
      <Link
        className="flex gap-5 items-center hover:text-gray-300 transition"
        to="/watch-list"
      >
        <div className="relative">
          <IoBookmarks className="text-xl" />
          <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-5 rounded-full grid place-items-center text-sm font-semibold">
            {list.length}
          </span>
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
