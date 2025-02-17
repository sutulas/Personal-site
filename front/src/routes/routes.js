import Home from '../pages/Home/Home';
import Experience from '../pages/Experience/Experience';
import Projects from '../pages/Projects/Projects';

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/experience',
    component: Experience,
    name: 'Experience'
  },
  {
    path: '/projects',
    component: Projects,
    name: 'Projects'
  }
];

// Helper function to get route by path
export const getRouteByPath = (path) => {
  return routes.find(route => route.path === path);
};

// Helper function to get route by name
export const getRouteByName = (name) => {
  return routes.find(route => route.name === name);
}; 