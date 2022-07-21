import React from 'react'
import Aux from '../../hoc/Auxilliary';
// import classes from './Layout.css';

const layout = (props) => {
  return (
    <Aux>
        <div>My Layout</div>
            <main>
                {props.children}
            </main>
        </Aux>
  )
}

export default layout;
