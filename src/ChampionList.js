/**
 * Created by yu on 2016/1/27.
 */
import React from 'react';
import Champion from './Champion';
import ReactDOM from 'react-dom';

class ChampionList extends React.Component{
    constructor(){
        super();
        this._championsData=_.values(LOLherojs.champion.data);
        this.state = {champions:this._championsData};

    }
    render(){
        return <div>
            <input type='text' ref='search' onChange={this.changeHandle.bind(this)} />
            <div className='champion'>
                <ul>
                    {this.state.champions.map((x)=>{
                        return <Champion key={x.id} info={x} />
                    })}
                </ul>
            </div>
        </div>
    }
    changeHandle(){
        var search = ReachDOM.findDOMNode(this.refs.search).value;

    }
}
export default ChampionList;