import React from "react";

type StarType = {
    selected: boolean
}
export type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingType) => {
            return (
                <div>
                    <Star selected={props.value > 0}/>
                    <Star selected={props.value > 1}/>
                    <Star selected={props.value > 2}/>
                    <Star selected={props.value > 3}/>
                    <Star selected={props.value > 4}/>
                </div>
            )
}


const Star = (props: StarType) => {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}