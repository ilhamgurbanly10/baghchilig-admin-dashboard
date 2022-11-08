import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Positions from '../pages/Positions';
import TeamMembers from '../pages/TeamMembers';
import Error404 from '../pages/Error_404';

function Routing() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="positions" element={<Positions />} />
            <Route path="team-members" element={<TeamMembers />} />
            <Route path="*" element={<Error404 />} />
        </Routes>    
    );
}

export default Routing;
