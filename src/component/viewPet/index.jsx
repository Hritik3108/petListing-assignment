import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from '../loading'    
import axios from "axios";
import './viewPet.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons/faMapPin';

const ViewPet = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const petId = params.get('petId');

    const [pet,setPet] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${petId}`);
                // console.log('response petId', response.data.pets[0]);
                setPet({...response.data.pets[0]})
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setError("Error fetching");
                setLoading(false);
            }
        };

        fetchData();
    }, [petId]);

    function handleCloseBtn(){
        navigate('/')
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {/* <button onClick={()=>console.log('pet',pet.images[0])}>click</button> */}
            {pet && 
            <div className='card-full-view-container container'>
                <button
                    type="button"
                    className="close-btn align-items-center justify-content-center"
                    onClick={handleCloseBtn}
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={pet.images && pet.images[0]} alt='pet-image' className='pet-image img-fluid'/>
                </div>
                <div className="col-md-6">
                    <h1 className="pet-title">{pet.name}</h1>
                    <p className="animal">{pet.animal}</p>
                    <p className="pet-description">{pet.description}</p>
                    <p className="breed">Breed: {pet.breed}</p>
                    <p className="pet-location">Location: <FontAwesomeIcon icon={faMapPin} className='pin-icon'/>
                    <strong> {pet.city}, {pet.state}</strong></p>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default ViewPet;