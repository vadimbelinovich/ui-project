import Head from "next/head";
import { Button1, Button2, Button3, Button4, Button5, Button6, Button7 } from "../content/buttons";
import { Link1, Link2, Link3, Link4, Link5, Link6, Link7, Link8, Link9 } from "../content/links";
import { Input1, Input2, Input3, Input4, Input5, Input6, Input7 } from "../content/inputs";
import { Checkbox1, Checkbox2, Checkbox3, Checkbox4, Checkbox5, Checkbox6, Checkbox7 } from "../content/checkboxes";
import { Toggle1, Toggle2, Toggle3, Toggle4, Toggle5, Toggle6, Toggle7 } from "../content/toggles";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
				<meta name='description' content='Copy the code of inputs, buttons, checkboxes, toggles and link hover effects and paste it in your editor' />
			</Head>
			<h1>UI elements with code</h1>
			<Toggle6 />
			<Input6 />
			<Button7 />
			<Toggle1 />
			<Input3 />
			<Checkbox2 />
			<Link7 />
			<Button4 />
			<Input4 />
			<Link2 />
			<Toggle3 />
			<Checkbox7 />
			<Link6 />
			<Button1 />
			<Input5 />
			<Link8 />
			<Toggle4 />
			<Checkbox4 />
			<Toggle2 />
			<Button3 />
			<Link5 />
			<Toggle5 />
			<Button2 />
			<Checkbox5 />
			<Link1 />
			<Input2 />
			<Checkbox1 />
			<Toggle7 />
			<Input1 />
			<Link9 />
			<Button6 />
			<Checkbox6 />
			<Link3 />
			<Button5 />
			<Input7 />
			<Link4 />
			<Checkbox3 />
		</div>
	);
}
