import { Header } from "./components/Header/Header";

import "./App.css";
import { MyCalendar } from "./components/Calendar/myCalendar";

function App() {
  return (
    <>
      <div className={`App`}>
        <Header />
        <MyCalendar />
      </div>
    </>
  );
}

export default App;
