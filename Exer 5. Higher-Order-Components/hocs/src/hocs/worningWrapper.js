import React from 'react';

function warningWrapper(WrapedComponenet) {
    return function WarningWrapper(props) {
        return (
            <div className="alert">
                <span className="alert-symbol">&#9888;</span>
                <WrapedComponenet {...props} />
            </div>
        );
    };
};

export default warningWrapper;
