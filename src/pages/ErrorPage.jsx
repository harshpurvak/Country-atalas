import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    

    return (
        <div>
            <h1>Oops! an error occured </h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"><span className='text-amber-300'>Go Home</span></NavLink>
        </div>
    )
}

export default ErrorPage
