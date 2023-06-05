import React from "react";
import lixo from '../img/lixo.png'
import on from '../img/on.png'
import off from '../img/off.png'
import Card from './Card'

function DoneImg(props){

    if(props.done){
        return(<img src={on}></img>)
    }else{
        return(<img src={off}></img>)
    }

}

function ListItem(props){

    return(
         <li>
                <Card className={props.item.done?"done item":"item"}>
                    {props.item.text}
                    <div>
                        <button onClick={() =>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                        <button onClick={()=>{props.onItemDeleted(props.item)}}><img src={lixo} alt="lixo" /></button>
                    </div>
                </Card>
            </li>)}

export default ListItem