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
            <div>
                <input onChange={this.handleChange.bind(this)} placeholder ={this.state.placeHolder}/>
            </div>   
        )
    }
    handleChange(event){
        this.setState({searchText:event.target.value});
    }
}
export default SearchBar;