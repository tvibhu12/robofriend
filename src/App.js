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
            robots: robots,
            searchField:''
        };
    };
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const filterdRobots=this.state.robots.filter((robot)=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
    return (
        
    <div className='tc'>
    <h1>Robo Friends</h1>
    <SearchBox SearchChange={this.onSearchChange}/>
    <CardList robots={filterdRobots}/>
    </div>
    );}
}
export default App;