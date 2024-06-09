import { useState } from "react";

const useFlags = (url) => {
  const [response, setResponse] = useState();

  function getFlags() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => console.log(err));
  }

  return [response, getFlags];
};

export default useFlags;
