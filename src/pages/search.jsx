import Footer from "../components/footer";
import Header from "../components/header";
import Search from "../components/search";
import React from 'react';

const SearchPage = () => {
    return ( 
        <div className="bg-dark">
        <Header/>
        <Search/>
        <Footer/>
        </div>
     );
}
 
export default SearchPage;