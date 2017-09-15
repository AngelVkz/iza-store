import React, {Component} from 'react'
import Searchbar from './Searchbar'
import Table from './Table'
import {
    gql,
    graphql
} from 'react-apollo'

class Body extends Component {
    constructor(props){
        super(props)
    }   
    state = {
        filterText: ''
    }

    handleUserInput = (searchTerm) => {
        this.setState({filterText: searchTerm})
    }

    render(){
        //const items = [{img:"algo", id:"12", nombre:"coca", precio:"145"}]
        console.log(this.props.data.allItems)
        if(this.props.data.loading){
            return (
                <div>Loading...</div>
             )
        }
        return (
            <div>
                <Searchbar filterText={this.state.filterText}
                        onUserInput={this.handleUserInput}/>
                <Table items={this.props.data.allItems}
                    filterText={this.state.filterText}/>
            </div>
        )
        
    }
}

const items = gql`
    query allItems {
        allItems {
            id
            img
            nombre
            precio
        }
    }
`

const BodyWithData = graphql(items)(Body)

export default BodyWithData