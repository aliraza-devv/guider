import {Routes, Route} from 'react-router-dom';

import './styles/sass/main.scss';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomePage from './components/HomePage/HomePage';
import SearchPlace from './components/SearchPlace/SearchPlace';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CityInformation from './components/CityInformation/CityInformation';
import PremiumPage from './components/PremiumPage/PremiumPage';
import Profile from './components/Profile/Profile';
import Guides from './components/Guides/Guides';
import ShowClients from './components/ShowClients/ShowClients';
import {CoordinateProvider} from './context/coordinateContext';
import Packages from './components/Packages/Packages';

function App() {
  return (
    <CoordinateProvider>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/searchPlaces" exact element={<SearchPlace />} />
        <Route path="/information/:cityName" element={<CityInformation />} />
        <Route path="/subscription" exact element={<PremiumPage />} />
        <Route exact path='/profile' element={<PrivateRoute/>}>
            <Route exact path='/profile' element={<Profile/>}/>
        </Route>
        <Route exact path="/guides" element={<Guides />} />
        <Route path="/clients/:userId" element={<ShowClients />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CoordinateProvider>
  );
}

export default App;
