import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoutes;
