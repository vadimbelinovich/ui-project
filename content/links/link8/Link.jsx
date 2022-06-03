import Card from "../../../components/card/Card.jsx";
import styles from "./Link.module.css";

const Link = () => {
	return (
		<Card id='link8' type='links'>
			<a className={styles.link}>
				<span>Hover me</span>
				<svg className={styles.svg} width='100%' height='9' viewBox='0 0 101 9'>
					<path
						d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294'
						pathLength='1'></path>
				</svg>
			</a>
		</Card>
	);
};

export default Link;
