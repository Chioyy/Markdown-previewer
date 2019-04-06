"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

marked.setOptions({ breaks: true });

var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return "<a target='_blank' href=" + href + "' title='" + title + "'>" + text + "</a>";
};

var Markdown = function (_React$Component) {
    _inherits(Markdown, _React$Component);

    function Markdown(props) {
        _classCallCheck(this, Markdown);

        var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

        _this.state = {
            placeholder: "",
            preview: ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Markdown, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({
                placeholder: e.target.value,
                preview: e.target.value
            });
        }
    }, {
        key: "getMarkdownText",
        value: function getMarkdownText() {
            var rawMarkup = marked(this.state.preview, { sanitize: true, renderer: renderer });
            return { __html: rawMarkup };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                placeholder: placeholder,
                preview: placeholder
            });
        }
    }, {
        key: "render",
        value: function render() {
            document.body.style = "background: darkturquoise;";
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement("textarea", { type: "text", id: "editor", value: this.state.placeholder, rows: "8", cols: "60", className: "editorcss", onChange: this.handleChange })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h4",
                        { className: "text-center" },
                        React.createElement("i", { className: "far fa-eye" }),
                        "Preview"
                    )
                ),
                React.createElement("div", { id: "preview", className: "previewcss", dangerouslySetInnerHTML: this.getMarkdownText() })
            );
        }
    }]);

    return Markdown;
}(React.Component);

ReactDOM.render(React.createElement(Markdown), document.querySelector("#container"));