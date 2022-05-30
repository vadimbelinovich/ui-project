import { Link2 } from "../../../content/links";
import LayoutElement from "../../../layout/LayoutElement.jsx";

export default function LinkPage2() {
	const htmlCode = `
  <p>
      Hover this <a class="link">cool link</a>
  </p>
	`;

	const cssCode = ` 
  .link {
      text-decoration: none;
      color: #18272f;
      font-weight: 700;
      position: relative;
      cursor: pointer;
      z-index: 0;
  }
  
  .link::before {
      content: "";
      background-color: hsla(196, 61%, 58%, 0.75);
      position: absolute;
      left: -5%;
      bottom: 3px;
      width: 110%;
      height: 4px;
      z-index: -1;
      transition: all 0.3s ease-in-out;
  }
  
  .link:hover::before {
      bottom: 0;
      height: 100%;
  }  
	`;

	return (
		<LayoutElement
			htmlCode={htmlCode}
			cssCode={cssCode}
			metaTitle='Link with expanding animation'
			metaDescription='Copy html and css code of link with stunning expanding animation of background on hover'
			title='Link with expanding animation'>
			<Link2 />
		</LayoutElement>
	);
}
