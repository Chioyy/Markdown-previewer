"use strict";

marked.setOptions({breaks: true});

var renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
    return "<a target='_blank' href="+ href +"' title='" + title + "'>" + text + "</a>";
};

class Markdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "",
            preview: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            placeholder: e.target.value,
            preview: e.target.value 
        });
    }
    getMarkdownText() {
        var rawMarkup = marked(this.state.preview, {sanitize: true, renderer:renderer});
        return { __html: rawMarkup };
    }
    componentDidMount() {
        this.setState({
            placeholder: placeholder,
            preview: placeholder
        });
    }
    render() {
        document.body.style = "background: darkturquoise;";
        return (
            <div>
                <div>
                    <textarea type="text" id="editor" value={this.state.placeholder} rows="8" cols="60" className="editorcss" onChange={this.handleChange}/>
                </div>
                <div>
                    <h4 className="text-center"><i className="far fa-eye"></i>Preview</h4>
                </div>
                <div id="preview" className="previewcss" dangerouslySetInnerHTML={this.getMarkdownText()}/>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(Markdown), document.querySelector("#container"));