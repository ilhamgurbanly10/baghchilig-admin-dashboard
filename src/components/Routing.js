import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import User from '../pages/User';
import Users from '../pages/Users';
import Positions from '../pages/Positions';
import TeamMembers from '../pages/TeamMembers';
import Solutions from '../pages/Solutions';
import ProjectCategories from '../pages/ProjectCategories';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import MainSlider from '../pages/MainSlider';
import ShoppingCategories from '../pages/ShoppingCategories';
import ShoppingProducts from '../pages/ShoppingProducts';
import Movies from '../pages/Movies';

import Error404 from '../pages/Error_404';

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<Error404 />} />
            <Route path="user" element={<User />} />
            <Route path="users" element={<Users />} />
            <Route path="Movies" element={<Movies />} />
            <Route path="positions" element={<Positions />} />
            <Route path="team-members" element={<TeamMembers />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="project-categories" element={<ProjectCategories />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="main-slider" element={<MainSlider />} />
            <Route path="shopping-categories" element={<ShoppingCategories />} />
            <Route path="shopping-products" element={<ShoppingProducts />} />
        </Routes>    
    );
}

export default Routing;
