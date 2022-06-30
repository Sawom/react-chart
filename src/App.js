import logo from './logo.svg';
import './App.css';
import Linechart from './Components/LineChart/Linechart';
import LineChartWithReferenceLines from './Components/LineChart/LineChartWithReferenceLines/LineChartWithReferenceLines';
import SimpleAreaChart from './Components/SimpleAreaChart/SimpleAreaChart';
import AreaChartFillByValue from './Components/AreaChartFillByValue/AreaChartFillByValue';
import SpecifiedDomainRadarChart from './Components/SpecifiedDomainRadarChart/SpecifiedDomainRadarChart';

function App() {
  return (
    <div className="App">
      <h2> Line chart</h2>
      <h4>Simple Line Chart</h4>
      <Linechart></Linechart> <br />
      <h4>Line Chart With ReferenceLines</h4>
      <LineChartWithReferenceLines></LineChartWithReferenceLines>
      <h2>Area Chart</h2>
      <h4>Simple Area Chart</h4>
      <SimpleAreaChart></SimpleAreaChart>
      <h4> Area Chart Fill By Value </h4>
      <AreaChartFillByValue></AreaChartFillByValue>
      
    </div>

  );
}

export default App;
