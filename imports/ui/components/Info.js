import React from 'react';

import LinkForm from './LinkForm';
import LinksList from './LinksList';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Learn Meteor!</h2>
                <LinkForm/>
                <LinksList/>
            </div>
        );
    }
}