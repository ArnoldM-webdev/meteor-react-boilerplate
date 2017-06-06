import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Links } from '../../api/links/links';
import LinkItem from './LinkItem';

export default class LinksList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: []
        }
    }

    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links.all');
            const links = Links.find().fetch();

            this.setState({ links });
        });
    }

    componentWillUnmount() {
        this.linksTracker.stop();
    }

    renderListLinks() {
        if (this.state.links.length === 0) {
            return (
                <div>
                    <p>No Links Found</p>
                </div>
            );
        }

        return this.state.links.map((link) => {
            return <LinkItem key={link._id} {...link}/>
        });
    }

    render() {
        return (
            <ul>
                {this.renderListLinks()}
            </ul>
        );
    }
}