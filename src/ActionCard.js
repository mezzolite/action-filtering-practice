import React from 'react'

const ActionCard = ({action}) => {

    return(
        <div className="action-card">
            <p>{action.action_text}</p>
            <p>{action.action_description}</p>
            <p>Efficacy Rating: {action.rating}</p>
        </div>
    )
}
export default ActionCard