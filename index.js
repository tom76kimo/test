var React = require('react');
var ReactDom = require('react-dom');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="H(50px) pure-button">asdf</div>
                <div className="W(100px)"></div>
            </div>
        );
    }
})

ReactDom.render(<Main />, document.querySelector('#main'));
