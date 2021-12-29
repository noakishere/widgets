import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
	{
		title: "What is a Seven Samurai?",
		content: "A japanese movie made by Akira Kurosawa",
	},
	{
		title: "Who's Akira Kurosawa?",
		content: "A japanese movie director",
	},
	{
		title: "Is Seven Samurai old?",
		content: "ye somewhat",
	},
];

const options = [
	{
		label: "The color red",
		value: "red",
	},
	{
		label: "The color Green",
		value: "green",
	},
	{
		label: "A shade of Blue",
		value: "blue",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className="ui container">
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
			{/* <Search /> */}
			{/* <Accordion items={items} /> */}
		</div>
	);
};
