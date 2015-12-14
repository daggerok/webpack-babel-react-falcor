const React = require('react')

module.exports = React.createClass({
  statics: {
    queries: {
      ingredients() {
        return ['name', 'description']
      }
    }
  },
  render() {
    return <code>Ingredients: {JSON.stringify(this.props.ingredients)}</code>
  }
})
