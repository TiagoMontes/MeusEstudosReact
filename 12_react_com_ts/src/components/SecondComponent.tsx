import React from 'react'
    
type Props = {
    name: string;
}

// Images
const peacemakerimg = require('./assets/peacemaker.png');

const SecondComponent = (props: Props) => {


    return (
        <div>
            <p>My second component</p>
            <p>And his name is {props.name}</p>
            <img src={peacemakerimg} alt="peacemaker :)" />
        </div>
  )
}

export { SecondComponent }