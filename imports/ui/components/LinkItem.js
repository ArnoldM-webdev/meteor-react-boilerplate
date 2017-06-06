import React from 'react';

export default LinkItem = (props) => {
    return (
        <li>
            <a href={props.url} target="_blank">{props.title}</a>
        </li>
    );
}