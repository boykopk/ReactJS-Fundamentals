import React from 'react';


function errorHandlingWrapper(WrappedComponent, selectData) {
    return class ErrorHandlingWrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hasError: false
            }
        }

        static getDerivedStateFromError(error) {
            return { hasError: true };
          }

        render() {
            if (this.state.hasError) {
                return (<h1>Something went wrong!</h1>)
            }
            return <WrappedComponent {...this.props} />;
        };
    };
};

export default errorHandlingWrapper;
