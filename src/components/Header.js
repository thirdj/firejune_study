'use strict';

const React = require('react');
const HeaderNavItem = require('./HeaderNavItem');

module.exports = class extends React.Component {
  constructor(props) { //
    // call 의 개념 React.Component.call(props)
    // 부모가 값을 알 필요 있을 때 props 전달 함.  굳이 전달 할 필요는 없음.
    super(props);

    // 상태가 변경 되는 것만. 가변 일 경우.

    // 부모에게 받는 값이 있으니 굳이 받을 필요 없음.
    // this.props = {
    //   nav: ['Home','About','Feature','Help']
    // };
    // props 에 값을 변경 할 수 없음.
  }

  handleChangeNavItem(idx) {
    this.props.onChangeNav(idx);

    this.props.nav.forEach((item, i) => {
      this.refs['item' + i].setState({selected: i === idx});
    });
  }

  render() {
    return (
      <header>
        <ul>
        {
          this.props.nav.map((item, idx) => {
            return <HeaderNavItem
              ref={'item' + idx}
              idx={idx}
              key={idx}
              title={item}
              onChangeNav={this.handleChangeNavItem.bind(this)}/>
          })
        }
        </ul>
      </header>
    )
  }
}
