
import ListItem from './ListItem'


function List(props){

  

    return(
        <ul>
            {props.items.map(item => <ListItem key={item.id} onItemDeleted={props.onItemDeleted} onDone={props.onDone} item={item}></ListItem>)}
        </ul>
     
    )
}

export default List