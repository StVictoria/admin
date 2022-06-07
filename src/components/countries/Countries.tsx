import { useEffect } from "react";
import { fetchCountries } from "../../redux/countriesReducer";
import { useAppDispatch, useAppSelector } from "../../redux/redux";

const Countries = (): JSX.Element => {
  const { countries, isLoading, error } = useAppSelector(state => state.countriesState);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  
  console.log(countries);

  return (
    <p>Countries</p>
  );
};

export default Countries;