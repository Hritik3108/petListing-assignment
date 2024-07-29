import './pagination.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import PetCard from '../petCard';

const Pagination = (props) => {
    const [filt]=useState(props.filter)
    const [perPage]=useState(props.productsperpage)

    const [currentPage,setCurrentPage]=useState(1)
    const pets = useSelector((store) => store.pets.pets);
    
    // console.log('type',typeof(pets))
    // console.log('pets',pets)

    // const arr = pets.filter((pet)=>pet.animal.some((animal) => animal.includes(filt)));
    // const arr = pets
    const arr = pets.filter((pet) => pet.animal.includes(filt));
    
    const totalPages = Math.ceil(arr.length/perPage);
    const pages = [...Array(totalPages+1).keys()].slice(1);
    const indexOfLastPage = currentPage*perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const renderPets = arr.slice(indexOfFirstPage,indexOfLastPage);

    const navigateNext= () => {
        if(currentPage<totalPages){
            setCurrentPage(currentPage+1);
        }
    }

    const navigatePrev = () => {
        if(currentPage==0){
            setCurrentPage(1)
        }
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleClickOnPage = (index) => {
        setCurrentPage(index);
    }

    return (
        // <div className='container'>
            <div className="row">
                    {pets && renderPets.map((pet, index) => (
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
            {/* </div> */}
            
            <div className='d-flex justify-content-center align-items-center'>
                <div className="pagination-container page-btn-container text-center ">
                    <span className="page-btn" onClick={navigatePrev}>Prev</span>
                    {pages.map((_p)=>(
                        <span key={_p} className="page-btn" onClick={()=>handleClickOnPage(_p)}> {_p} </span>
                    ))}
                    <span className="page-btn" onClick={navigateNext}>Next</span>
                </div>
            </div>
        </div>
    )
}

export default Pagination;