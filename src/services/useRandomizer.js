import { useState } from "react";

const useRandomizer = (url) => {
  const [response, setResponse] = useState();
  const [userCountry, setUserCountry] = useState();

  const getRandomUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setUserCountry(data.results.map((country) => country.location.country));
      })
      .catch((err) => console.log(err));
  };

  return [response, getRandomUser, userCountry];
};

export default useRandomizer;
