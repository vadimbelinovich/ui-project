import Head from "next/head";
import { Button1, Button2 } from "../content/buttons";
import { Link1, Link2, Link3, Link4 } from "../content/links";
import { Input1, Input2, Input3 } from "../content/inputs";
import { Checkbox1 } from "../content/checkboxes";
import { Toggle1 } from "../content/toggles";

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Beautiful UI elements</title>
			</Head>
			<Button2 />
			<Input3 />
			<Link1 />
			<Input2 />
			<Checkbox1 />
			<Button1 />
			<Toggle1 />
			<Input1 />
			<Link2 />
			<Link3 />
			<Link4 />
		</div>
	);
}
