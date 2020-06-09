import React from 'react';

const TextField = React.memo(({onChangeHandler,val}) => {
    return (
        <>
            <input type="text" onChange={onChangeHandler} value={val}/>
        </>
    );
});

export default TextField;
