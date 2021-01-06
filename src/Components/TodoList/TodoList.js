import React, { Component } from 'react';
import TodoItems from '../TodoItems/TodoItems.js';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if(this.inputElement.value !== ""){
            var newItem = {
                text : this.inputElement.value,
                key : Date.now()
            };

            this.setState((prevState) => {
                return{
                    items : prevState.items.concat(newItem)
                };
            }, () => {console.log(this.state.items);} );

            this.inputElement.value = "";

        }
        
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <form onSubmit={this.addItem}> {/* Adding Item */}
                        <input ref={(a) => this.inputElement = a} 
                               placeholder="Enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems 
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoList;