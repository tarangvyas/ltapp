const PageWrapper = (Page) => {
    return class extends React.Component {
        static getInitialProps(ctx) {
            alert('here');
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
        }
        render() {
            return <Page {...this.props}/>
        }

    }
}