import { Button1 } from "../../../content/buttons";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function ButtonPage1() {
	const htmlCode = `
	<button>Hover me</button>
	`;
	const cssCode = `
	button {
		padding: 0.8em 1.8em;
		border-radius: 10px;
		border: 2px solid #17C3B2;
		position: relative;
		overflow: hidden;
		background-color: transparent;
		text-align: center;
		text-transform: uppercase;
		font-size: 16px;
		transition: .3s;
		z-index: 1;
		font-family: inherit;
		color: #17C3B2;
	}
	
	button::before {
		content: '';
		width: 0;
		height: 300%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: #17C3B2;
		transition: .5s ease;
		display: block;
		z-index: -1;
	}
	
	button:hover::before {
		width: 105%;
	}
	
	button:hover {
		color: #111;
	}
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Button with sliding effect'
			metaDescription='copy html and css code of button with amazing sliding effect'
			title='Button with beautiful sliding effect on hover'>
			<Button1 />
		</LayoutElement>
	);
}
