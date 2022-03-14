import React from 'react'

const MenuDetailEmpty = () => {
    return (
        <div className="dishDetailContainer menuEmpty">
            <h1>Welcome to the Alkemy challenge!</h1>
            <p>Cuestiones a tener encuenta al momento  de realizar su búsqueda. <br>
            </br>
                <ul>
                    <li> Actualmente todas las recetas/platos se encuentran en ingles, por lo tanto las busquedas se tienen que realizar en ese idioma.</li>
                    <li>No se pueden realizar busquedas vacías</li>
                    <li>Se pueden agregar hasta 4 platos</li>
                    <li>Solo 2 platos veganos y 2 platos no veganos</li>
                </ul>
            </p>

        </div>
    )
}

export default MenuDetailEmpty