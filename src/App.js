import { BrowserRouter } from "react-router-dom";

import Layout from './pages/Layout';
import Routing from './components/Routing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './assets/scss/library.scss';
import './assets/css/flash/flash.css';
import './assets/css/ant-design.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'antd/dist/antd.css';

import { useDispatch , useSelector } from "react-redux";
import {getUser, logOutUser} from './redux/reducers/userSlice';
import Login from './pages/Login';
import Loader from './components/elements/Loader';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";

const App = () => {

  let token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (token) {
      dispatch(getUser(token))
      .unwrap()
      .then((originalPromiseResult) => {
        setLoading(false)
      })
    } else {
      dispatch(logOutUser())
      setLoading(false)
    }
    
  }, [])

  return (
    <I18nextProvider i18n={i18next}>
      
      {loading && <Loader/>}
      <BrowserRouter>

        {data.isLoggedIn ?
          <Layout>
              <Routing/>
          </Layout> :
          <Login/>
        }  
        </BrowserRouter>

    </I18nextProvider>  
  );
}

export default App;
