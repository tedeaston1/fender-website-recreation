import React from "react";
import FormInput from "../../atoms/FormInput/FormInput";
import "./SearchForm.css"

export default function SearchForm() {
    return (
        <form className="search-form"> 
            <FormInput 
                className="search-submit"
                type="submit"
            />
            <FormInput
                className="search-input"
                type="search"
                placeholder="Search"
                ariaLabel="search"
            />
           
        </form>
    )
}