class List extends React.Component {
  constructor(){
    super()
    this.state = {
      items: ['cat', 'dog', 'chicken', 'bunny', 'cow', 'horse', 'walrus']
    }
  }

  dragStart(e){
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  dragEnd(e) {

  }

  dragOver(e){

  }

  render() {
    return (
      <ul onDragOver={this.dragOver}>
      {
       this.state.items.map((item, index) => {
         return (<li key={index} data-id={index} draggable="true" onDragEnd={this.dragEnd} onDragStart={this.dragStart}>{item}</li>)
       })
     }
      </ul>
    )
  }
}
