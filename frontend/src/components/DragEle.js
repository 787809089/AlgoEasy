import React from 'react'
import '../components/Button.css'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { Button } from 'antd';
export default class Course extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:'1',text:"First one"},
                {id:'2',text:"Second one"},
                {id:'3',text:"Third one"},
                {id:'4',text:"Forth one"}
            ]
        };
    }
    onDragEnd = (result) =>{
        this.onDragEnd.bind(this);
        const {source,destination} = result;
        if (!destination){
            return;
        }
        let array = Array.from(this.state.todos);
        const [remove] = array.splice(source.index, 1);
        array.splice(destination.index,0,remove);
        this.setState({todos:array});
    }
    render (){
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId='droppable'>
                    {
                        (provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {this.state.todos.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {p => (
                                            <div
                                            ref={p.innerRef}
                                            {...p.draggableProps}
                                            {...p.dragHandleProps}
                                            key={item.id}
                                            >
                                            {item.text}
                                            </div>
                                         )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
            );
    };
}
