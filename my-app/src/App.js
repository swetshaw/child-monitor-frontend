import React from 'react';
import './App.css';
import DashBoard from './components/dashboard';
import axios from 'axios';

class App extends React.Component {
  // const anganWadiData = {
  //   childId1: [
  //     {
  //       "age": 11,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "cc815622-4e81-4d91-b96b-312e33a6983e",
  //       "gender": "Girl",
  //       "height": 73,
  //       "date": "01/01/2017",
  //       "weight": 7
  //     },
  //     {
  //       "age": 12,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/02/2017",
  //       "weight": 9
  //     },
  //     {
  //       "age": 13,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/03/2017",
  //       "weight": 10.8
  //     },
  //     {
  //       "age": 14,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/04/2017",
  //       "weight": 11.2
  //     },
  //     {
  //       "age": 15,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/05/2017",
  //       "weight": 11.6
  //     },
  //     {
  //       "age":  15,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/06/2017",
  //       "weight": 11.9
  //     },
  //     {
  //       "age": 16,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/07/2017",
  //       "weight": 12.5
  //     },
  //     {
  //       "age": 17,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/08/2017",
  //       "weight": 12.7
  //     },
  //     {
  //       "age": 18,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/09/2017",
  //       "weight": 13
  //     },
  //     {
  //       "age": 19,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/10/2017",
  //       "weight": 14.7
  //     },
  //     {
  //       "age": 20,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/11/2017",
  //       "weight": 15
  //     },
  //     {
  //       "age": 21,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/12/2017",
  //       "weight": 16.2
  //     }
  //   ],
  //   childId2: [
  //     {
  //       "age": 11,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "cc815622-4e81-4d91-b96b-312e33a6983e",
  //       "gender": "Girl",
  //       "height": 73,
  //       "date": "01/01/2017",
  //       "weight": 4
  //     },
  //     {
  //       "age": 12,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/02/2017",
  //       "weight": 5
  //     },
  //     {
  //       "age": 13,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/03/2017",
  //       "weight": 6
  //     },
  //     {
  //       "age": 14,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/04/2017",
  //       "weight": 7.5
  //     },
  //     {
  //       "age": 15,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/05/2017",
  //       "weight": 8
  //     },
  //     {
  //       "age":  15,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/06/2017",
  //       "weight": 8.9
  //     },
  //     {
  //       "age": 16,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/07/2017",
  //       "weight": 9.5
  //     },
  //     {
  //       "age": 17,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/08/2017",
  //       "weight": 11.7
  //     },
  //     {
  //       "age": 18,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/09/2017",
  //       "weight": 11.3
  //     },
  //     {
  //       "age": 19,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/10/2017",
  //       "weight": 12.7
  //     },
  //     {
  //       "age": 20,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/11/2017",
  //       "weight": 13
  //     },
  //     {
  //       "age": 21,
  //       "awc_id": "4c051f983ece4078a666c6f0127acbc3",
  //       "child_id": "33e35ecb-9303-4c8b-9190-26e274782843",
  //       "gender": "Girl",
  //       "height": 86,
  //       "date": "01/12/2017",
  //       "weight": 13.6
  //     }
  //   ]
  // };

  constructor(props){
    super();
    this.state = {
      anganWadiId: '4c051f983ece4078a666c6f0127acbc3',
      anganWadiData: {}};
  }

  componentDidMount () {
    const URL = `http://localhost:3000/api/awc/${this.state.anganWadiId}`;
    axios.get(URL,{

    }).then((response) => {
      this.setState({"anganWadiData":response.data});
    }).catch(function getDataError(e){
      console.log('Failed to load Anganwadi Data', e);
    });
  }  

  render () {
    let childId = " ";
    if(this.state.anganWadiData){
      childId = Object.keys(this.state.anganWadiData)[0];
    }
    
    return (
      <div className="App">
         <DashBoard anganWadiData={this.state.anganWadiData} childId={childId}/>
      </div>
    );
  }
}

export default App;
