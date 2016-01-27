/**
 * Created by yu on 2016/1/27.
 */
import React from 'react';

class Champion extends React.Component{
    render(){
        let champion = this.props.info;
        let src='http://ossweb-img.qq.com/images/lol/img/champion/';
        let png = '.png';
        return <li key={champion.id}>
                <div><img src={src+champion.id+png} /></div>
                <div>{champion.name}</div>
            </li>
    }
}
export default Champion;