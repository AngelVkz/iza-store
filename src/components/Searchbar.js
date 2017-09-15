import React from 'react'
import './Search.css'

const getInput  = e => (
    e.target.value
)

const Searchbar = ({filterText, onUserInput}) => (
   <div className="col-12">
        <div className="container form-group">
            <div className="field-input">
                <input 
                type="text" 
                placeholder="Buscar producto..."
                value={filterText}
                onChange={e => onUserInput( getInput(e) )}/>
                <span></span>
            </div>
        </div>
   </div>
)
export default Searchbar