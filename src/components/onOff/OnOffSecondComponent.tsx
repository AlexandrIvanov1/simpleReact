import {useState} from "react";

type PropsType = {
    // on: boolean
}

export function OnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        marginLeft: '5px',
        marginTop: '2px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div style={{display: 'flex', marginTop: '10px'}}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}