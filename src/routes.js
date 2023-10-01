import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Record from "./pages/Record/Record";
import VideoPage from "./pages/[Video]/VideoPage";
import Login from "./components/Login/Login";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/popup" element={<Record />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="/login" element={<Login />} />
    </AppRoutes>
  );
};

export default Routes;
