import Home from "../Pages/Home/Home"
import Profile from "../Pages/Profile/Profile";
import Projects from "../Pages/Projects/Projects";

interface Route {
  path: string;
  element: React.FC;
}

export const routes: Route[] = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/profile',
    element: Profile
  },
  {
    path: '/projects',
    element: Projects
  }
]
