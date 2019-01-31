import React from 'react'

const MixerElements = (props) => {
    return (
        <div id={props.id} className={props.class}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
};

export default MixerElements;