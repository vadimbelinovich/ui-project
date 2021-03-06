import { Button2 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage2() {
	const htmlCode = `
	<button class="button">
		<span>hover me</span>
	</button>
	`;
	const cssCode = `
	.button {
		cursor: pointer;
		padding: 15px 30px;
		font-size: 15px;
		background-color: rgb(75, 135, 155);
		position: relative;
		overflow: hidden;
		color: #fff;
		border-radius: 10px;
	}
	
	.button::after {
		content: "";
		position: absolute;
		transform: translate(-50%, -50%);
		background-color: rgb(15, 77, 97);
		transition: width 0.5s, height 0.5s;
		border-radius: 50%;
		height: 0;
		width: 0;
		top: var(--y);
		left: var(--x);
		z-index: 1;
	}
	
	.button span {
		position: relative;
		z-index: 2;
		text-transform: uppercase;
	}
	
	.button:hover::after {
		width: 400px;
		height: 400px;
	}
	`;

	const jsCode = `
	let button = document.querySelector('.button');
	button.onmousemove = (e) => {
		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetTop;

		button.style.setProperty('--x', x + 'px');
		button.style.setProperty('--y', y + 'px');
	}
	`;

	const jsxCode = `
	import styles from "./Button.module.css";
	import { useState } from "react";
	
	export const Button = () => {
		const [coords, setCoords] = useState({ x: 0, y: 0 });
		const handeMouseOver = (e) => {
			setCoords({
				x: e.clientX - e.target.offsetLeft,
				y: e.clientY - e.target.offsetTop,
			});
		};
	
		return (
			<button 
				onMouseEnter={(e) => handeMouseOver(e)} 
				className={styles.button} 
				style={{ 
					"--x": coords.x + "px", 
					"--y": coords.y + "px" 
				}}>
				<span>hover me</span>
			</button>
		);
	};
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			jsCode={jsCode}
			jsxCode={jsxCode}
			metaTitle='Button with bubling effect'
			metaDescription='copy html, css and js code of button with complex animation. Hover effect depends on position of cursor.'
			title='Button with pretty bubling effect on hover'>
			<Button2 />
		</LayoutElement>
	);
}
