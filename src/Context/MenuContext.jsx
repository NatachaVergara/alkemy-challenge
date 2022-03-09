
import { createContext, useContext, useState, useEffect } from 'react'

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
        console.log(menuList)
        //Creo una variable que me permitira encontrar el item, si hay se actualiza, de lo contrario se agrega a mi menuList
        let inMenuList = menuList.find((menuItem) => menuItem.id === receta.id)


        if (inMenuList) {
            setMenuList([...menuList])
        } else {
            setMenuList([...menuList, { ...receta }])
        }

        if (menuList.length === 4) {
            setMenuList([...menuList])
            alert('Ha superado el limite')
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
        return menuList.reduce((acum, item) => (acum += item.pricePerServing + menuList.length ), 0)
    }


    const readyTime = () => {
        return menuList.reduce((accum, item) => (accum += item.readyInMinutes + menuList.length ), 0)
    }

    const healthScorePromedio = () => {
       let sumaHealthScore = menuList.reduce((accum, item) => (accum += item.healthScore + menuList.length), 0)
        let promedio = sumaHealthScore  / menuList.length
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