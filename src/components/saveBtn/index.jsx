import { GoBookmarkSlashFill } from "react-icons/go";
import { toggleList } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { MdBookmarkAdd } from "react-icons/md";

const SaveButton = ({ movie }) => {
  const { list } = useSelector((store) => store);
  const dispatch = useDispatch();

  // prop olarak gelen film store da var mı
  const isAdded = list.find((item) => item.id === movie.id);

  // eğer listede varsa kaldır yoksa ekle
  const handleClick = () => {
    dispatch(toggleList(movie, !isAdded));
  };
  return (
    <button
      onClick={handleClick}
      className="px-4 bg-blue-600 rounded transition hover:bg-blue-700 flex items-center gap-2 min-w-[170px] justify-center"
    >
      {isAdded ? (
        <>
          <GoBookmarkSlashFill className="text-xl" /> Listeden Kaldır
        </>
      ) : (
        <>
          <MdBookmarkAdd className="text-xl" />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default SaveButton;
