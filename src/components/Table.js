import React from 'react'

const Table = ({items, filterText}) => {

    const filteredItems = items.filter( item => item.nombre.indexOf(filterText) !== -1);
    

    return (
        <div className="row justify-content-center">
        <div className="col-8">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">img</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">$</th>
                    </tr>
                </thead>
    
                <tbody>
                   {
                    filteredItems.map( item => (
                        <tr>
                        <img src={item.img} width="60px"/>
                        <td className=""><strong>{item.nombre}</strong></td>
                        <td className="text-danger"><strong>{item.precio}</strong></td>
                        </tr>     
                    ))
                   }               
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Table