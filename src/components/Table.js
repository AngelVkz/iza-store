import React from 'react'

const Table = () => (
    <div>
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                <th>#</th>
                <th>id</th>
                <th>Nombre</th>
                <th>$ Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>    
    </div>
)

export default Table