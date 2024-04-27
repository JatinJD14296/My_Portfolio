// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";

// const GitHubLanguageChart = ({ repoName }) => {
//   const [starsOverTime, setStarsOverTime] = useState({});

//   useEffect(() => {
//     const fetchData = async (repoName) => {
//       try {
//         const response = await axios.get(
//           `https://api.github.com/repos/JatinJD14296/${repoName}/languages`
//         );
//         // const starsByYear = {};
//         const [languageList] = Object.keys(response.data);
//         const [valueList] = Object.values(response.data);

//         if (languageList.length != 0) console.log("---" + languageList);
//         if (valueList.length != 0) console.log("***" + valueList);
//         // response.data.forEach((event) => {
//         //   const starYear = event.starred_at.slice(0, 4);
//         //   starsByYear[starYear] = (starsByYear[starYear] || 0) + 1;
//         // });

//         // setStarsOverTime(starsByYear);
//       } catch (error) {
//         console.error("Failed to fetch GitHub star events:", error);
//       }
//     };

//     fetchData(repoName);
//   }, []);

//   const years = Object.keys(starsOverTime);
//   const stars = Object.values(starsOverTime);
//   const data = {
//     labels: years,
//     datasets: [
//       {
//         label: "Programming Languages",
//         data: ['Dart', 'English', 'English'],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Chart
//         labels={languageList}
//         value1={valueList}
//         value2={[]}
//       />
//     </div>
//   );
// };

// export default GitHubLanguageChart;
