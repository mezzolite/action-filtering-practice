import React from 'react'
import ActionCard from './ActionCard'

const ActionContainer = ({actions}) => {
    
    const showActions = () => {
        return actions.map(action => {
            return <ActionCard action={action} key={action.id}/>
        })
    }
    
    return(
        <div className="action-container">
            {showActions()}
        </div>
    )
}
export default ActionContainer