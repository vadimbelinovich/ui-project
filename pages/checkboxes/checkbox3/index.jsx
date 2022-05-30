import { Checkbox3 } from "../../../content/checkboxes";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function CheckboxPage3() {
	const htmlCode = `
    <label class="checkbox bounce">
        <input type='checkbox' checked />
        <svg viewBox='0 0 21 21'>
            <polyline points='5 10.75 8.5 14.25 16 6'></polyline>
        </svg>
    </label>
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
            <label className={\`\${styles.checkbox} \${styles.bounce}\`}>
                <input type='checkbox' checked={checked} onChange={handler} />
                <svg viewBox='0 0 21 21'>
                    <polyline points='5 10.75 8.5 14.25 16 6'></polyline>
                </svg>
            </label>
        );
    };
  `;

	const cssCode = ` 
    .checkbox {
        --background: #fff;
        --border: #d1d6ee;
        --border-hover: #bbc1e1;
        --border-active: #1a3be1;
        --tick: #fff;
        position: relative;
    }
    
    .checkbox input,
    .checkbox svg {
        width: 32px;
        height: 32px;
        display: block;
    }
    
    .checkbox input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: var(--background);
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: box-shadow 0.3s;
        box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    }
    
    .checkbox input:hover {
        --s: 2px;
        --b: var(--border-hover);
    }
    
    .checkbox input:checked {
        --b: var(--border-active);
    }
    
    .checkbox svg {
        fill: none;
        stroke-width: 2px;
        position: absolute;
        pointer-events: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        top: 0;
        left: 0;
        width: 32px;
        height: 32px;
        transform: scale(var(--scale, 1)) translateZ(0);
    }
  
    .checkbox.bounce {
	--stroke: var(--tick);
    }

    .checkbox.bounce input:checked {
        --s: 32px;
    }

    .checkbox.bounce input:checked + svg {
        animation: bounce 0.3s linear forwards 0.2s;
    }

    .checkbox.bounce svg {
        --scale: 0;
    }

    @keyframes bounce {
        50% {
            transform: scale(1.2);
        }
        75% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsxCode={jsxCode}
			metaTitle='Checkbox with check animation'
			metaDescription='Copy html, css and jsx code of checkbox with fancy appearance of check'
			title='Checkbox with fancy appearance'>
			<Checkbox3 />
		</LayoutElement>
	);
}
