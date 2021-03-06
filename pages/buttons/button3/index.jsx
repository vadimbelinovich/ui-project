import { Button3 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage3() {
	const htmlCode = `
	<button class={styles.button}>
		<span>Hover me</span>
	</button>
	`;
	const cssCode = `
	.button {
		pointer-events: auto;
		cursor: pointer;
		border: none;
		padding: 1.5rem 3rem;
		margin: 0;
		position: relative;
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 0.05rem;
		font-weight: 700;
		font-size: 0.85rem;
		border-radius: 0.5rem;
		overflow: hidden;
		color: #fff;
		background: #e7e7e7;
	}
	
	.button::after {
		position: absolute;
		content: "";
		background: #000;
		top: 0;
		height: 100%;
		width: 120%;
		left: -10%;
		transform: skew(30deg);
		transition: transform 0.3s cubic-bezier(0.3, 1, 0.8, 1);
	}
	
	.button:hover::after {
		transform: translate3d(100%, 0, 0);
	}
	
	.button span {
		position: relative;
		z-index: 1;
		mix-blend-mode: difference;
	}	
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Button with rolling effect'
			metaDescription='Copy html and css code of button with rolling effect to right side.'
			title='Button with cool rolling effect on hover'>
			<Button3 />
		</LayoutElement>
	);
}
