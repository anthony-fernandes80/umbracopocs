var e = React.createElement;

class HelloWorld extends React.Component {
    render() {
        return e(
            "div",
            null,
            "Hello World from internal React Js"
        );
    }
}

const containerElement = document.getElementById('content');
ReactDOM.render(e(HelloWorld), containerElement);