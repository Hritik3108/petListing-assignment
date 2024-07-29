import { useDispatch } from "react-redux";
import { addPets } from "../../util/petSlice";
import Loading from '../loading'
import { useEffect, useState } from "react";
import axios from "axios";
import './header.css'
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchValue,setSearchValue] = useState("");

    function handleSearch(e){
        e.preventDefault();
        // console.log('header',searchValue)
        navigate(`/search?search=${searchValue}`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get("http://pets-v2.dev-apis.com/pets");
                dispatch(addPets(response.data));
                // console.log('response', response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setError("Error fetching");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {/* <button onClick={()=>console.log(pets)}>Click</button> */}
            <div id="header">
            <div id="container-header" className="container-fluid">
                <div id="header-top" className="row justify-content-md-center">
                <div className="col-4">
                    <FontAwesomeIcon icon={faHome} className='logo mt-2' onClick={()=>navigate('/')}/>
                </div>

                <div className="col-8">
                    <form className="d-flex" onSubmit={handleSearch}>
                    <input 
                        className="search-input" 
                        type="search" 
                        placeholder="Animal, location, breed, etc" 
                        aria-label="Search" 
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button className="search-btn" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
            </div>    
        </>
    )
}

export default Header;