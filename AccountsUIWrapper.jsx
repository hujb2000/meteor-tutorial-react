AccountsUIWrapper = React.createClass({
    componentDidMount(){
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render( Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    },

    componentWillUmount(){
        // Clean up Blaze view
        Blaze.remove(this.view);
    },

    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container"/>;
    }
});