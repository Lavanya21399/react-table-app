import React, { Component } from 'react'
import apiFetch from '../ulities/fetchApi'
import ReactTable from 'react-table-6' ;
import "react-table-6/react-table.css"
export class Table extends Component {
    constructor(props) {
        super(props);
     this.state = {
             data:[],
             loading:true,
        };
    }
    componentDidMount = async () => {
        let apivalue = await apiFetch();
        this.setState({ loading: false,data : apivalue.data}) 
    };
    render() {
        console.log(this.state.data)
       // {this.state.posts.length > 0 ? (
        const columns = [          
            {
                Header:"Id",
                accessor: "id",
            },
            {
                Header:"Name",
                accessor: "name",
            },
            {
                Header:"Email",
                accessor: "email",
            },
            {
                Header:"Body",
                accessor: "body", 
            },
        ]
        return (
        
            <ReactTable
            columns={columns}
            data={this.state.data}
            >
            </ReactTable>
          /*   ) : (
                <div className="spinner-border text-success" role="status">
                 <span className="visually-hidden">Loading...</span>
              </div>
              )}*/
        
       )
    }
}

export default Table
