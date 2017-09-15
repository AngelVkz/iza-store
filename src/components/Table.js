import React from 'react'

const Table = ({items, filterText}) => (
    <div>
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                <th>img</th>
                <th>id</th>
                <th>Nombre</th>
                <th>$ Precio</th>
                </tr>
            </thead>

            <tbody>
               {
                items.map( item => (
                    <tr>
                    <th scope="row">{item.img}</th>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.precio} $</td>
                    </tr>     
                ))
               }               
            </tbody>
        </table>    
    </div>
)

export default Table