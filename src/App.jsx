import { useEffect, useState } from "react";

import "./App.css";
import TwiterFollowCard from "./components/TwiterFollowCard";
import useRandomizer from "./services/useRandomizer";
import useFlags from "./services/useFlags";

function App() {
  const [printInfo, setPrintInfo] = useState();
  const [flagUrls, setFlagUrls] = useState([]);

  const url = `https://randomuser.me/api/?results=10`;

  const [users, getUsers] = useRandomizer(url);

  const [flags, getFlags] = useFlags("https://restcountries.com/v3.1/all");

  console.log(flagUrls);

  useEffect(() => {
    getUsers();
    getFlags();
  }, []);

  useEffect(() => {
    if (users && flags) {
      const userCountries = users?.results.map((user) => user.location.country);
      console.log("userCountries:", userCountries);

      const newFlagUrls = userCountries.map((countryName) => {
        const countryFlag = flags?.find(
          (flag) => flag.name.common.toLowerCase() === countryName.toLowerCase()
        );
        console.log("countryFlag:", countryFlag);

        if (countryFlag) {
          return countryFlag.flags?.png;
        }
        return null;
      });

      setFlagUrls(newFlagUrls);
    }
  }, [users, flags]);

  const reload = () => {
    getUsers();
  };

  const handleClick = () => {
    reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrintInfo(e.target.cositas.value);
  };
  return (
    <>
      <article>
        {users ? (
          users?.results.map((user) => (
            <TwiterFollowCard
              key={user.login.uuid}
              user={user}
              flagUrls={flagUrls}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </article>
      <button onClick={handleClick}>Resetear Usuarios</button>
      <div className="ingreso">
        <form onSubmit={handleSubmit}>
          <input name="cositas" type="text" />
          <button>escribe</button>
        </form>
        <br />
        <span>{printInfo}</span>
      </div>
    </>
  );
}

export default App;
