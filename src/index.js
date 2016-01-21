'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
//const Test = require('./components/test');
const Header = require('./components/Header');
const Content = require('./components/Content');
const Footer = require('./components/Footer');
const $ = require('jquery');

class Root extends React.Component {
  constructor(props) { //
    super(props); // call 의 개념 React.Component.call(props)

    // 상태가 변경 되는 것만. 가변 일 경우.
    this.state = {
      nav: 'Home',
      navIdx: 0
    };
  }

  handleChangeNav(idx) {
    this.setState({
      nav: this.props.nav[idx],
      navIdx: idx
    })
  }

  render() {
    return (
      <div>
        <Header
          nav={this.props.nav}
          onChangeNav={this.handleChangeNav.bind(this)}
        />
        <Content data={this.state.nav} idx={this.state.navIdx}/>
        <Footer />
      </div>
    );
  }
}

const nav = ['Home','About','Feature','Help'];

ReactDOM.render(
  <Root nav={nav} />,
  document.getElementById('app')
)
