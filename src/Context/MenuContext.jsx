
import React, { createContext, useContext, useState, useEffect } from 'react'
import { errorDishes, successDishAlert } from '../Components/Alerts/Alerts'

const MenuContext = createContext([])

export const useMenuContext = () => {
    return useContext(MenuContext)
}


const getLocalMenu = () => {
    let items = localStorage.getItem('menuListLS')
    
    if (items) {
        return JSON.parse(localStorage.getItem('menuListLS'))
    } else {
        return []
    }
}


const MenuContextProvider = ({ children }) => {
    const [menuList, setMenuList] = useState(getLocalMenu())
    
    //Creo la funcion que me va a permitir ir agregando items a mi menuDetail
    const addMenuItem = (receta) => {
        //Creo una variable que me permitira encontrar el item, si hay se actualiza, de lo contrario se agrega a mi menuList
        let inMenuList = menuList.find((menuItem) => menuItem.id === receta.id)
        
        let isVegan = menuList.filter(e => e.vegan === receta.vegan)
        
        
        let text = ''   
        if (inMenuList) {
            setMenuList([...menuList])
            text = 'Puede agregar un plato por menu'
            errorDishes(text)
        } else {
            setMenuList([...menuList, { ...receta }])
            text = 'Plato agregado satisfactoriamente'
            successDishAlert(receta.title, text)
        }

        if (isVegan.length === 2) {
            setMenuList([...menuList])
            text = 'Puede agregar solo 2 platos veganos o 2 no veganos'
            errorDishes(text)
        } 
        


        

        if (menuList.length === 4) {
            setMenuList([...menuList])
            text = 'Puede agregar solo hasta 4 platos'
            errorDishes(text)
        }
        
       
        
        
    };



    //Guardo mi menuList en local Host
    useEffect(() => {
        localStorage.setItem('menuListLS', JSON.stringify(menuList))
    }, [menuList])




    //Creo una funcion que va a permitir borrar un elemento de mi menuList en local Host
    const eraseMenuItem = (id) => {

        setMenuList(menuList.filter((i) => i.id !== id))

    }

    //Creo una funcion que me sume el precio total de todos los menus
    const totalPrice = () => {
        return menuList.reduce((acum, item) => (acum += item.pricePerServing + menuList.length), 0)
    }


    const readyTime = () => {
        return menuList.reduce((accum, item) => (accum += item.readyInMinutes + menuList.length), 0)
    }

    const healthScorePromedio = () => {
        let sumaHealthScore = menuList.reduce((accum, item) => (accum += item.healthScore + menuList.length), 0)
        let promedio = sumaHealthScore / menuList.length
        return promedio
    }


    return (
        <MenuContext.Provider
            value={{ menuList, addMenuItem, eraseMenuItem, totalPrice, readyTime, healthScorePromedio }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider