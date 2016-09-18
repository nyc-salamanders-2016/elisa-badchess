class List extends React.Component {
  constructor(){
    super()
    this.state = {
      items: ['cat', 'dog', 'chicken', 'bunny', 'cow', 'horse', 'walrus']
      // array of list items
    }
  }
  // begin the drag
  dragStart(e){
    this.dragged = e.currentTarget;
    // defines what is being dragged
    e.dataTransfer.effectAllowed = 'move';
    // specifies the effect that is allowed for a drag operation
    e.dataTransfer.setData('text/html', e.currentTarget);
    // sets the drag operation's drag data to the specified data and type (format, type)
  }

  // complete the drag
  dragEnd(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
  }

  // choose how things are displayed after drag has completed
  dragOver(e){
    e.preventDefault();
    this.dragged.style.display = "none";
  }

  render() {
    return (
      <ul onDragOver={this.dragOver}>
      {
       this.state.items.map((item, index) => {
         return (<li id="target" key={index} data-id={index} draggable="true" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>{item}</li>)
       })
       // to make an element draggable, set draggable attribute to true
     }
      </ul>
    )
  }
}
