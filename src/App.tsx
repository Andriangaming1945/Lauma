import { Routes, Route } from 'react-router-dom';
import Homeviews from './views/Homeviews';
import Guidebook from './views/Guidebook';
import Report from './views/Report';
import Join from './views/Join';
import Interaktif from './components/Interaktif';
import Komunitas from './components/Komunitas';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homeviews />} />
      <Route path="/guidebook" element={<Guidebook />} />
      <Route path="/report" element={<Report />} />
      <Route path="/peta" element={<Interaktif />}></Route>
      <Route path="/komunitas" element={<Komunitas />}></Route>
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}
