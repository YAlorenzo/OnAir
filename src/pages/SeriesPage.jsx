import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchSeriesFilter, getGenersSeries } from "../redux/moviesOperotion";
import Filter from "../components/Filter";
import { selectGenersSeries } from "../redux/selectors";
import SeriesPageList from "../components/SeriesPageList";

function SeriesPage() {
  const dispatch = useDispatch();
  const genersSeries = useSelector(selectGenersSeries);
  useEffect(() => {
    dispatch(getGenersSeries());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
    
  return (
    <div>
      <Filter geners={genersSeries} fetch={fetchSeriesFilter} />
      <SeriesPageList />
    </div>
  )
}

export default SeriesPage