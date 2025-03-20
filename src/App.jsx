// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
// import Detail from "./Pages/Detail/Detail";
import VideoLecture from "./Pages/Videolectures/VideoLecture";
import Team from "./Pages/Team/Team";
import Earlylife from "./Pages/EarlyLife/earlylife";
import Namaz from "./Pages/Core/Namaz";
import Roza from "./Pages/Core/Roza";
import Zakat from "./Pages/Core/Zakat";
import Hajj from "./Pages/Core/Hajj";
import ScrollToTop from "./Components/ScrollTop";
// import Namaz from "./Pages/Namaz/Namaz";
// import earlylife from "./Pages/EarlyLife/earlylife"




const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/earlylife" element={<Earlylife />} />
      <Route path="/videolectures" element={<VideoLecture />} />
      <Route path="/team" element={<Team />} />
      <Route path="/namaz" element={<Namaz />} />
      <Route path="/zakat" element={<Zakat />} />
      <Route path="/roza" element={<Roza />} />
      <Route path="/hajj" element={<Hajj />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App