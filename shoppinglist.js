class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
      <h1> Shopping List for {this.props.name}</h1>
      <ul>
        <li>Apples</li>
        <li>Rice</li>
        <li>Frozen Peas</li>
        <li>Oranges</li>
        </ul>
        </div>
    );
  }
}

// The class ShoppingList is a Component. Components take in parameters
//called props and returns views via the render method.
