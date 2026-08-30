import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navber from "./Components/Navber/Navber";
import Home from "./Components/Home/Home";
import Stages from "./Components/Stages/Stages";
import Courses from "./Components/Courses/Courses";
import Lessons from "./Components/Lessons/Lessons";
import LessonDetails from "./Components/LessonDetails/LessonDetails.jsx"
import Exams from "./Components/Exams/Exams.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lesson/:id" element={<LessonDetails />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
