import React from 'react';
import {Link} from 'react-router';

export default () => {
    return (
        <div id="not-found">
            <div className="not-found-image">
                <img src="/img/404.svg" alt=""/>
            </div>
            <div className="not-found-title">
                <h1>Page Not Found</h1>
                <p>We're unable to find that page.</p>
                <Link to="/" className="button button--link">HEAD HOME</Link>
            </div>
        </div>
    );
};