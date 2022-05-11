import c from './OnOff.module.css'

type OnOffType = {
    toggle: boolean
}

export function OnOff(props: OnOffType) {
    return (
        <div className={c.container}>
            <ButtonOn toggle={props.toggle}/>
            <ButtonOff toggle={props.toggle}/>
            <Circle toggle={props.toggle}/>
        </div>
    )
}

function ButtonOn(props: OnOffType) {
    if (props.toggle) {
        return <button style={{background: "green"}}>On</button>
    } else {
        return <button>On</button>
    }
}

function ButtonOff(props: OnOffType) {
    if (!props.toggle) {
        return <button style={{background: "red"}}>Off</button>
    } else {
        return <button>Off</button>
    }
}

function Circle(props: OnOffType) {
    if (props.toggle) {
        return <div className={c.circle} style={{background: 'green'}}></div>
    } else {
        return <div className={c.circle} style={{background: 'red'}}></div>
    }
}