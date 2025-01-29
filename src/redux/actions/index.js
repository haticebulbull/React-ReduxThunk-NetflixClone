import api from "../../api";
import ActionTypes from "../actionTypes";

// api den izleme listesindeki filmşeri alıp reducer'a durumu haber verecek asenkron thunk aksiyonu
export const getWatchList = () => (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/21576325/watchlist/movies?language=tr`)
    .then((res) =>
      dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results })
    )
    .catch((err) =>
      dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message })
    );
};

// filmi izleme listesine ekleme/çıkarma isteği atıp başarılı olursa reducera haber verecek
export const toggleList = (movie, isAdd) => (dispatch) => {
  // body ,çeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  // api'a istek at
  api
    .post(`/account/21576325/watchlist`, body)
    .then((res) =>
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie })
    )
    .catch((err) => console.log(err));
};
