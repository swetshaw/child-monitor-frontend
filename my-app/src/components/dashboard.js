import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, GammelTheme);
function goodEmptyCheck(value) {
    return Object.keys(value).length === 0
      && value.constructor === Object; // 👈 constructor check
  }

export default class DashBoard extends React.Component {

  constructor(props){
    super();
    this.state = {
      childId: props.childId
    };
  }

  handleChildIdChange = (e) => {
    this.setState({childId: e.target.value });
  }

  render () {
      let childId = this.state.childId || this.props.childId, anganWadiData = this.props.anganWadiData || {}, childData = {}, childLineChartData = {}, ChildGrowthChartdataSource = {}, childrenIdOptions = [];
    if (!goodEmptyCheck(anganWadiData)) {
        childData = anganWadiData[childId];
        childLineChartData = childData.map((Obj) => {
            return {
              label: Obj.month,
              value: Obj.weight
            };
          });
          childrenIdOptions = Object.keys(anganWadiData);
    }
    ChildGrowthChartdataSource = {
      chart: {
        caption: "Child Growth Chart",
        yaxisname: "Weight (in kgs)",
        theme: "gammel"
      },
      data: childLineChartData
    };
    const LinechartConfigs = {
      type: 'line',
      width: "95%",
      height: 400,
      dataFormat: 'json',
      dataSource: ChildGrowthChartdataSource
    };

    return (
      <center>
        <br />
        <h1>Child Health Monitoring DashBoard</h1>
        <br />
        <div className="dashboard-container">
          <div className="dashboard-operator">
            <select className="child-id-selector" onChange={this.handleChildIdChange}>
              {
                childrenIdOptions.map((val)=> <option value={val}>{val}</option>)
              }
            </select>
          </div>
          <div className="childGrowth-chart-container">
            <ReactFC {...LinechartConfigs} />
          </div>
        </div>
      </center>
    );
  }
}