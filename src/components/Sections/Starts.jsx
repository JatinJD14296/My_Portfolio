import React, { useEffect, useState } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

const GitHubStarsChart = ({ repo }) => {
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/JatinJD14296/${repo}/languages`)
      .then(function (response) {
        if (response.data.keys != null)
          console.log("****" + Object.apply(response.data.keys));
        setLanguageData(response.data.key);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [1000]);
  console.log("*-*-*-*-*-*-" + languageData);

  return (
    <div>
      <HorizontalBar data={languageData} options={{ responsive: true }} />
    </div>
  );
};

export default GitHubStarsChart;
