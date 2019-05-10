import React ,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'
import './app.css';

class App extends Component
{
    constructor(){
        super();
        this.state={
            robots: [],
            searchField:''
        };
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
    };
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filterdRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        if (this.state.robots.length===0)
        {
            return (<h1 className='tc'>LOADING</h1>);
        }else
    return (
        
    <div className='tc'>
    <h1>Robo Friends</h1>
    <SearchBox SearchChange={this.onSearchChange}/>
    <CardList robots={filterdRobots}/>
    </div>
    );}
}
export default App;