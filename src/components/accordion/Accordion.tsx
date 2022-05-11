export type AccordionType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h1>--{props.title}--</h1>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>12</li>
                <li>34</li>
                <li>56</li>
            </ul>
        </div>
    )
}