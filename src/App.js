// import logo from './logo.svg';
import './App.css';
// import moment from 'moment';

import Calendar from './components/Calendar/Calendar';


function App() {
  // moment.updateLocale('en', { week: { dow: 1 } });

  // const currentDate = moment();

  // const startDayMonth = currentDate.clone().startOf('month').startOf('week').format('DD');
  // const endDayMonth = currentDate.clone().endOf('month').endOf('week').format('YYYY-MM-DD');;

  // console.log(startDayMonth)
  // console.log(endDayMonth)

  // console.log(currentDate)

  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  );
}

export default App;
