import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscá una imagen, ejemplo: futbol o café"
                        />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="text"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                        />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;