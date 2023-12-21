import { IconSearch } from "../icons/IconSearch";
import { useNavigate } from "react-router-dom";
import { ModalSearch } from "./ModalSearch";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Input } from "../UI/Input";

export function Search () {

    const navigate = useNavigate()

    const [historial, setHistorial] = useState([])  
    const [isFocus, setIsFocus ] = useState(false)
    const [search, setSearch] = useState('')


    useEffect(() => {
        const searched = JSON.parse(localStorage.getItem('searched'))
        console.log(searched)
        if(!searched?.length) return
        setHistorial(searched)  
     }, [])

    const onFocusState = () => setIsFocus(!isFocus)

    const onLocalStorageSearched = (itemSearch) => {
        
        const searched = JSON.parse(localStorage.getItem('searched')) || []
        const newSearch = {
            searched : itemSearch,
            id : uuid(),
            date : new Date()
        }

        const updatedSearches = [...searched, newSearch]
        updatedSearches.sort((a, b) => new Date(b.date) - new Date(a.date));

        localStorage.setItem('searched', JSON.stringify(updatedSearches));

        setHistorial([...updatedSearches])

        navigate(`/search?q=${itemSearch}`)

    }

    const deleteSearchedHistorial = ( id ) => {
        const hitorialCloned = structuredClone(historial)
        const historialFiltered = hitorialCloned.filter(historial => historial.id !== id)
        setHistorial(historialFiltered)
        localStorage.setItem('searched', JSON.stringify(historialFiltered))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        onLocalStorageSearched(search)
    }

    const onRedirect = (to) => {
        onLocalStorageSearched(to)
    }

    return (
      <section className="w-full relative">

        <form onSubmit={handleSubmit} className="w-full relative ">
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <IconSearch />
            </div>
            <Input onChange={(e) => setSearch(e.target.value)} onBlur={onFocusState} onFocus={onFocusState}  placeholder='Buscar tus Pines' className='pl-12 '/>
        </form> 


        <ModalSearch isFocus={isFocus} search={search} onRedirect={onRedirect} historial={historial} deleteSearchHistorial={deleteSearchedHistorial}/>


      </section>

    )
}