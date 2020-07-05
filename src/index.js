import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";

class App extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ lat: position.coords.latitude }),
          positionError => this.setState({ errorMessage: positionError.message })
      )
  }

  renderContent () {
      if (this.state.errorMessage && !this.state.lat) {
          return <Loader message={this.state.errorMessage}/>
      }

      if (!this.state.errorMessage && this.state.lat) {
          return <SeasonDisplay lat={this.state.lat} />
      }

      return <Loader message="Please accept location request"/>
  }

  render() {
    return (
        <div>
            {this.renderContent()}
        </div>
    )
  };
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);