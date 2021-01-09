import React from 'react';
import './App.css';
import DashBoard from './components/dashboard';

function App() {
  const children = [
    {
      "age": 11,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "cc815622-4e81-4d91-b96b-312e33a6983e",
      "gender": "Girl",
      "height": 73,
      "month": "January",
      "weight": 7
    },
    {
      "age": 12,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "February",
      "weight": 9
    },
    {
      "age": 13,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "March",
      "weight": 10.8
    },
    {
      "age": 14,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "April",
      "weight": 11.2
    },
    {
      "age": 15,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "May",
      "weight": 11.6
    },
    {
      "age":  15,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "June",
      "weight": 11.9
    },
    {
      "age": 16,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "July",
      "weight": 12.5
    },
    {
      "age": 17,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "August",
      "weight": 12.7
    },
    {
      "age": 18,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "September",
      "weight": 13
    },
    {
      "age": 19,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "October",
      "weight": 14.7
    },
    {
      "age": 20,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "November",
      "weight": 15
    },
    {
      "age": 21,
      "awc_id": "4c051f983ece4078a666c6f0127acbc3",
      "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
      "gender": "Girl",
      "height": 86,
      "month": "December",
      "weight": 16.2
    }
  ];
  
  const childLineChartData = children.map((childData) => {
    return {label: childData.month, value: childData.weight};
  });
  return (
    <div className="App">
       <DashBoard childLineChartData={childLineChartData}/>
    </div>
  );
}

export default App;
