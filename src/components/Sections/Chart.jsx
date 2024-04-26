import React, { useState } from 'react';

import { HorizontalBar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const Chart = () => {
  const [data] = useState({
    labels: [ 'HTML', 'CSS', 'DART', 'FLUTTER', 'PYTHON', 'REACT', 'JAVASCRIPT'],
    datasets: [
      {
        label: '2024',
        backgroundColor: '#7620ff',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: '2022',
        backgroundColor: '#f2b300',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 80],
      },
    ],
  });

  return (
    <CDBContainer style={{ padding: "0px 0px 30px"}}>
      <h3 className="mb-5 text-center font40 extraBold">My Professional Skills</h3>
      <HorizontalBar data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default Chart;