import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Positions from '../pages/Positions';
import TeamMembers from '../pages/TeamMembers';
import Solutions from '../pages/Solutions';
import ProjectCategories from '../pages/ProjectCategories';
import Projects from '../pages/Projects';
import Error404 from '../pages/Error_404';

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="positions" element={<Positions />} />
            <Route path="team-members" element={<TeamMembers />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="project-categories" element={<ProjectCategories />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Error404 />} />
        </Routes>    
    );
}

export default Routing;
