import React, {useState, useMemo} from 'react';
import TextField from "./components/textfield";
import {data} from './us-cities'
import List from "./components/list";
import Card from "./components/card";
import './style.css'
let timeOut = null;

function App() {
    const [apiData, setApiData] = useState([]);
    const [state, setState] = useState('');
    const [cardState, setCardState] = useState(null);
    const onChangeHandler = (e) => {
        setState(e.target.value);
    }
    const onListItem =(item)=>{
        setCardState(item)
    }


    // cache result
    // debouncing
    useMemo(() => {
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            console.log('==debouncing=====')
            const filterDate = ({name}) => {
                return name.indexOf(state) !=-1;
            };
            if (state === '') return setApiData([]);
            return setApiData(data.filter(filterDate));
        },500)

    }, [state]);




    return (
        <div>
            <h1>React Typeahead</h1>

            <TextField onChangeHandler={onChangeHandler} val={state}/>
            <div className="container">
                {
                    state.length > 0 && apiData.length >0 ? <List items={apiData} onListItem={onListItem}/> : null
                }
                {
                    cardState ? <Card cardState={cardState}/>:null
                }
            </div>
        </div>
    );
}

export default App;
