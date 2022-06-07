import { useEffect } from "react";
import { fetchPopular } from "../../redux/popularReducer";
import { useAppDispatch, useAppSelector } from "../../redux/redux";
import Loader from "../common/Loader";

const Popular = (): JSX.Element => {
  const { movies, isLoading, error } = useAppSelector(state => state.popularState);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPopular());
  }, []);
  
  // if (isLoading) {
  //   return <Loader />
  // }
  
  console.log(movies);

  return (
    <p>Popular</p>
  )
};

export default Popular;