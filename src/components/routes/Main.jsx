import React from 'react';

import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header/>
            <div>{navigation.state==="loading" && <button className="btn loading">loading</button>}</div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;