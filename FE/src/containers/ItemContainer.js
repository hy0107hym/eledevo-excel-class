import React from 'react'
import ItemComponent from '../components/ItemComponent'
import {connect} from 'react-redux'
import * as actions from '../actions/ItemAction'

class ItemContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return <ItemComponent {...this.props}></ItemComponent>
    }
}

const mapStateToProps=(state)=>{
    return{
        items: state.items.listItem,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:()=>{
            dispatch(actions.getRequest())
        },
        importExcel:(data)=>{
            dispatch(actions.importRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateRequest(data))
        },
        addItem:(data)=>{
            dispatch(actions.addRequest(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)