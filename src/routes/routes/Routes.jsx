import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main.jsx";
import About from "../../pages/About/About.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Home from "../../pages/Home/Home/Home.jsx";
import Project from "../../pages/Project/Project.jsx";
import Resume from "../../pages/Resume/Resume.jsx";
import Skill from "../../pages/Skill/Skill.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'skill',
                element: <Skill />
            }, {
                path: 'project',
                element: <Project />
            }, {
                path: 'contact',
                element: <Contact />
            }, {
                path: 'resume',
                element: <Resume />
            }
        ]
    },
]);

export default router;