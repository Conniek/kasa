import React, { useState } from 'react';
import './Collapse.scss';

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    function openCloseCollapse() {
        if(isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return(
        <div className="Collapse">
           <div onClick={openCloseCollapse} className={isOpen ? "Collapse-title open" : "Collapse-title"}>{props.title}</div>
           <div className={isOpen ? "Collapse-content" : "Collapse-content hidden"}>{props.children}</div>
        </div>
    )
}