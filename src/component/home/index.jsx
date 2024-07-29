import React from "react";
import './home.css';
import Pagination from "../pagination";

function Home() {
    
    return (
        <div className="container container-fluid mt-5">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <Pagination filter='' productsperpage='3'/>
                </div>
            </div>
        </div>
    )
}

export default Home;