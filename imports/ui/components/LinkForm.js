import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class LinkForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();

        const link = {
            url: this.refs.url.value,
            title: this.refs.title.value
        };

        Meteor.call('links.insert', link, (err) => {
            if (err) {
                alert('Something has gone wrong!');
            } else {
                this.refs.url.value = '';
                this.refs.title.value = '';
            }
        })
    }

    render() {
        return (
            <form className="info-link-add" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="title" placeholder="Title" ref="title" required/>
                <input type="url" name="url" placeholder="Url" ref="url" required/>
                <input type="submit" name="submit" value="Add new link"/>
            </form>
        )
    }
}