import { Checkbox4 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage4() {
	const htmlCode = `
    <div class="checklist">
        <input id='7e80319e' type='checkbox' checked />
        <label for='7e80319e'>Click</label>
    </div>
	`;

	const jsxCode = `
    import styles from "./Checkbox.module.css";
    import { useState } from "react";

    export const Checkbox = () => {
        const [checked, setChecked] = useState(true);
        const handler = () => {
            setChecked(!checked);
        };
        return (
			<div className={styles.checklist}>
				<input id='7e80319e' type='checkbox' checked={checked} onChange={handler} />
				<label htmlFor='7e80319e'>Click</label>
			</div>
        );
    };
  `;

	const cssCode = ` 
    .checklist {
        --background: #ffffff;
        --text: #414856;
        --check: #4f29f0;
        --disabled: #c3c8de;
        --width: 100px;
        --height: 140px;
        --border-radius: 10px;
        background: var(--background);
        width: var(--width);
        height: var(--height);
        border-radius: var(--border-radius);
        position: relative;
        display: grid;
        grid-template-columns: 30px auto;
        align-items: center;
    }
    
    .checklist label {
        color: var(--text);
        position: relative;
        cursor: pointer;
        display: grid;
        align-items: center;
        width: fit-content;
        transition: color 0.3s ease;
    }
    
    .checklist label::before,
    .checklist label::after {
        content: "";
        position: absolute;
    }
    
    .checklist label::before {
        height: 2px;
        width: 8px;
        left: -27px;
        background-color: var(--check);
        border-radius: 2px;
        transition: background-color 0.3s ease;
    }
    
    .checklist label:after {
        height: 4px;
        width: 4px;
        top: 8px;
        left: -25px;
        border-radius: 50%;
    }
    
    .checklist input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        height: 15px;
        width: 15px;
        outline: none;
        border: 0;
        margin: 0 15px 0 0;
        cursor: pointer;
        background: var(--background);
        display: grid;
        align-items: center;
    }
    
    .checklist input[type="checkbox"]::before,
    .checklist input[type="checkbox"]::after {
        content: "";
        position: absolute;
        height: 2px;
        top: auto;
        background: var(--check);
        border-radius: 2px;
    }
    
    .checklist input[type="checkbox"]::before {
        width: 0px;
        right: 60%;
        transform-origin: right bottom;
    }
    
    .checklist input[type="checkbox"]::after {
        width: 0px;
        left: 40%;
        transform-origin: left bottom;
    }
    
    .checklist input[type="checkbox"]:checked::before {
        animation: check-01 0.4s ease forwards;
    }
    
    .checklist input[type="checkbox"]:checked::after {
        animation: check-02 0.4s ease forwards;
    }
    
    .checklist input[type="checkbox"]:checked + label {
        color: var(--disabled);
        animation: move 0.3s ease 0.1s forwards;
    }
    
    .checklist input[type="checkbox"]:checked + label::before {
        background: var(--disabled);
        animation: slice 0.4s ease forwards;
    }
    
    .checklist input[type="checkbox"]:checked + label::after {
        animation: firework 0.5s ease forwards 0.1s;
    }
    
    @keyframes move {
        50% {
            padding-left: 8px;
            padding-right: 0px;
        }
        100% {
            padding-right: 4px;
        }
    }
    
    @keyframes slice {
        60% {
            width: 100%;
            left: 4px;
        }
        100% {
            width: 100%;
            left: -2px;
            padding-left: 0;
        }
    }
    
    @keyframes check-01 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(45deg);
        }
        100% {
            width: 5px;
            top: 8px;
            transform: rotate(45deg);
        }
    }
    
    @keyframes check-02 {
        0% {
            width: 4px;
            top: auto;
            transform: rotate(0);
        }
        50% {
            width: 0px;
            top: auto;
            transform: rotate(0);
        }
        51% {
            width: 0px;
            top: 8px;
            transform: rotate(-45deg);
        }
        100% {
            width: 10px;
            top: 8px;
            transform: rotate(-45deg);
        }
    }
    
    @keyframes firework {
        0% {
            opacity: 1;
            box-shadow: 
                0 0 0 -2px #4f29f0, 
                0 0 0 -2px #4f29f0, 
                0 0 0 -2px #4f29f0, 
                0 0 0 -2px #4f29f0, 
                0 0 0 -2px #4f29f0, 
                0 0 0 -2px #4f29f0;
        }
        30% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            box-shadow: 
                0 -15px 0 0px #4f29f0, 
                14px -8px 0 0px #4f29f0, 
                14px 8px 0 0px #4f29f0, 
                0 15px 0 0px #4f29f0, 
                -14px 8px 0 0px #4f29f0,
                -14px -8px 0 0px #4f29f0;
        }
    }    
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Checkbox with firework animation'
			metaDescription='Copy html and css code of checkbox with complex firework animation of svg element and text field on check'
			title='Checkbox with firework svg animation'>
			<Checkbox4 />
		</LayoutElement>
	);
}
