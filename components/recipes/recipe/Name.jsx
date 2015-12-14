const React = require('react')

module.exports = React.createClass({
  statics: {
    queries: {
      recipe() {
        return ['name', 'authors']
      }
    }
  },
  render() {
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <h3>Authors: {JSON.stringify(this.props.authors)}</h3>
      </div>
    )
  }
})
