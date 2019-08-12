import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [biz, setBiz] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "são paulo"
      }
    });
    setBiz(response.data.businesses);

    // try {
    //   const response = await yelp.get("/search", {
    //     params: {
    //       limit: 50,
    //       term,
    //       location: "Campinas"
    //     }
    //   });
    //   setBiz(response.data.businesses);
    // } catch (error) {
    //   setErrorMessage("Alguma coisa deu errado!");
    // }
  };

  useEffect(() => {
    searchApi("japanese");
  }, []);

  return [searchApi, biz, errorMessage];
};
