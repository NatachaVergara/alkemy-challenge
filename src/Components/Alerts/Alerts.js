import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export const successDishAlert = (ItemTitle, text) => {
    const MySwal = withReactContent(Swal)

    Swal.fire({
        title: ItemTitle,
        text: text ,
        
    })
    
    return MySwal
} 

export const errorDishes = (text) => {
    const MySwal = withReactContent(Swal)

    Swal.fire({
        icon: 'error',
        title: text               
    })

    return MySwal
}