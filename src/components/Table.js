import React from 'react'
import './Table.css'

const Img = ({url}) => (
    <div id="thumbwrap">
        <div className="thumb" >
            <img src={url} alt=""/>
            <span><img src={url} alt=""/></span>
        </div>
    </div>
)

const Table = ({items, filterText}) => {

    const filteredItems = items.filter( item =>{ 
        return item.nombre.toLowerCase().indexOf(filterText.toLowerCase()) !== -1    
    });
    

    return (
        <div className="row justify-content-center">
        <div className="col-8">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Imagen</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">$</th>
                    </tr>
                </thead>
    
                <tbody>
                   {
                    filteredItems.map( item => (
                        <tr>
                        <td className="img-w">
                            <img src={item.img} width="60px" />
                            <img src={item.img} width="60px" className="img-i"/>
                        </td>
                        <td className=""><h3>{item.nombre}</h3></td>
                        <td className="text-danger"><h3>{item.precio}</h3></td>
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