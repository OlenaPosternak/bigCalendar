import { Header } from "./components/Header/Header";
import { EventCalendar } from "./components/Calendar/BigCalendar/EventCalendar";
import { SideBar } from "./components/SideBar/SideBar";
import "./App.css";

function App() {
  return (
    <>
      <SideBar />
      <div className={`App`}>
        <Header />
        <EventCalendar />
      </div>
    </>
  );
}

export default App;
