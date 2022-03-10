import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Viajando...</span>
            </div>
        </>
    )
}

export default Spinner