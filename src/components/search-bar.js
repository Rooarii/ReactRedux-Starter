import React,{Component} from 'react'
/*
const SearchBar = function(){
    return <input/>
}

const SearchBar = ()=>{
    return <input/>
}*/

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={searchText:"",placeHolder:"Type your movie"}
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder ={this.state.placeHolder}/>
                </div>
            </div>   
        )
    }
    handleChange(event){
        this.setState({searchText:event.target.value});
    }
}
export default SearchBar;