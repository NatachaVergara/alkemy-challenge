import React from 'react'
import { Formik, Form, Field } from 'formik';



const SearchForm = ({ setQuery }) => {
  return (
    <>
      <h1 className="text-center mb-5">Buscar Menu</h1>
      <div className="d-flex mb-5 ms-5 ps-5 ">
        <Formik
          initialValues={
            { buscar: '' }
          }

          validate={(valores) => {
            let isError = {};

            //Validamos si el campo de busqueda esta vacío y que minimo tiene que tener 2 letras
            if (!valores.buscar || valores.buscar.length < 3) {
              isError.buscar = "Tiene que ingresar una busqueda mayor a 2 caracteres"
            }
            return isError

          }}

          onSubmit={(valores, { resetForm }) => {
            resetForm()
            setQuery(valores.buscar)
            console.log('busqueda con formik exitosa')
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <>
                <Field
                  type="search"
                  className="form-control me-2 w-100"
                  name="buscar"
                  placeholder="Buscar"
                />
                {touched.buscar && errors.buscar && <p className="text-danger">{errors.buscar} </p>}
              </>
              <button className="btn btn-outline-success m-3" type="submit">Buscar</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
   
  )
}

export default SearchForm