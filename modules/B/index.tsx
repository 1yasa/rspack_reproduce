import { observer } from "mobx-react-lite";
import { useLayoutEffect, useState } from "react";

import styles from "@/modules/index.css";
import { Star } from "@phosphor-icons/react";

import Model from "../model";

console.log("styles: ", styles);

const Index = () => {
	const [x] = useState(() => new Model());

	useLayoutEffect(() => {
		x.init();

		return () => x.off();
	}, []);

	return (
		<div className={styles?.b} onClick={() => x.add()}>
			<Star className="star" size={18}></Star>
			BBB ({x.count})
		</div>
	);
};

export default observer(Index);
