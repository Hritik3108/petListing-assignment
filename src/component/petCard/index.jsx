import CardCarousel from '../cardCarousel';
import './petCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons/faMapPin';
import { useNavigate } from 'react-router-dom';

const PetCard = ({petId, animal,breed,city,description,images,petName,state}) => {
    const navigate = useNavigate();

    let bg=["bg-primary","bg-secondary","bg-warning","bg-danger","bg-info","bg-success"]
    let bgIndex = Math.floor(Math.random() * 6);

    async function handleOnClick(){
        navigate(`/viewpet?petId=${petId}`);
    }
    
    return (
        <div className={`card text-white ${bg[bgIndex]}`} onClick={handleOnClick}>
            <h4 className="card-header">{(animal).toUpperCase()}</h4>
            <div className="card-body">
                <CardCarousel images={images} petId={petId} petName={petName} breed={breed} /><br/>
                <h5 className="card-title">
                    <FontAwesomeIcon icon={faMapPin} className='pin-icon'/>
                    <strong> {city}, {state}</strong>
                </h5>
                <p className="card-text ellipsis">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PetCard;