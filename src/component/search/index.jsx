import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from '../loading'    
import axios from "axios";
import PetCard from "../petCard";

const Search = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(loc.search);
    const search = params.get('search');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [animals,setAnimals] = useState([]);
    const [location,setLocation] = useState([]);
    const [breed,setBreed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const animalResponse = await axios.get(`http://pets-v2.dev-apis.com/pets?animal=${search}`);
                const locationResponse = await axios.get(`http://pets-v2.dev-apis.com/pets?location=${search}`);
                const breedResponse = await axios.get(`http://pets-v2.dev-apis.com/pets?breed=${search}`);
                // console.log('response ANIAML', animalResponse.data);
                // console.log('response LOC', locationResponse.data);
                // console.log('response BRRED', breedResponse.data);
                setAnimals([...animalResponse.data.pets])
                setLocation([...locationResponse.data.pets])
                setBreed([...breedResponse.data.pets])
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setError("Error fetching");
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row">
            {animals && animals.map((pet, index) => (
                <div className="col" key={pet.id}>
                    <PetCard  
                        petId={pet.id} 
                        animal={pet.animal} 
                        breed={pet.breed}
                        city={pet.city} 
                        description={pet.description}
                        images={pet.images}
                        petName={pet.name}
                        state={pet.state} 
                    />
                </div>
            ))}
            {location && location.map((pet, index) => (
                <div className="col" key={pet.id}>
                    <PetCard  
                        petId={pet.id} 
                        animal={pet.animal} 
                        breed={pet.breed}
                        city={pet.city} 
                        description={pet.description}
                        images={pet.images}
                        petName={pet.name}
                        state={pet.state} 
                    />
                </div>
            ))}
            {breed && breed.map((pet, index) => (
                <div className="col" key={pet.id}>
                    <PetCard  
                        petId={pet.id} 
                        animal={pet.animal} 
                        breed={pet.breed}
                        city={pet.city} 
                        description={pet.description}
                        images={pet.images}
                        petName={pet.name}
                        state={pet.state} 
                    />
                </div>
            ))}
        </div>
    )
}

export default Search;