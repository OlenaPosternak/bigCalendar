import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Calendar } from "./components/Calendar/Calendar";
import "./App.css";

function App() {
  return (
    <Router basename="/bigCalendar">
      <SideBar />
      <Header />

      <SideBar />
      <div className="page-content">
        <Routes>
          <Route path="/home" element={<Calendar />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
