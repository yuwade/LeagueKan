/**
 * Created by yu on 2016/1/27.
 */
import React from 'react';
import Champion from './Champion';
import ReactDOM from 'react-dom';
import {pinYin} from './tools';
class ChampionList extends React.Component{
    constructor(){
        super();

        this._championsData=_.values(LOLherojs.champion.data).map((item)=>{
            item.pyName=pinYin(item.name);
            item.pyTitle =pinYin(item.title);
            return item;
        });
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
        var search = ReactDOM.findDOMNode(this.refs.search).value;
        search = _.trim(search)
        var reg = new RegExp(search);
        var result = _.filter(this._championsData,(data)=>{
            if(reg.test(data.pyName[0])||reg.test(data.pyName[1])){
                return data;
            }
            if(reg.test(data.pyTitle[0])||reg.test(data.pyTitle[1])){
                return data;
            }
            if(reg.test(data.name)||reg.test(data.title)){
                return data;
            }
            return false;
        });
        this.setState({champions:result})
    }
}
export default ChampionList;