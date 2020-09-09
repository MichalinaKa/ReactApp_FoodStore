import React from 'react'

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
    
        this.state={
          newItem: '',
          list:[]
        }
      }

updateInput(key, value){
    //hey react state
    this.setState({
        [key]: value,
    })
}

  addItem(){
    //create item with uniqe id
    const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
    };
//copy of current list od items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem)

    //update state with new list and reset newItem input
    this.setState({
        list,
        newItem:''
    });
  }  
  deleteItem(id){
    //copy curretn list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList})
}
    render(){
        return(<div>
            {/* Hello from shopping list  component */}
    <div>
    <p>Add new item.. </p>
        <div className="">
            <input 
            type="text" 
            placeholder="type item here..."
            value={this.state.newItem}
            onChange={ e => this.updateInput("newItem", e.target.value)  } />
            <button type="submit" onClick={() => this.addItem()}>Add </button>

            <ul>
               {this.state.list.map(item => {
                   return(
                            <li key={item.id}>{item.value}
                            
                              <button
                            onClick={() => this.deleteItem(item.id)}
                            > X </button>
                            </li>
                   )
               })} 
            </ul>

        </div>
        <br></br>
        <br></br>
    </div>
    
        </div>)
    }
    }

export default ShoppingList