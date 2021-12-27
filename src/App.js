import React from "react";
import Accordion from "./components/Accordion";
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

export default () => {
	return (
		<div className="ui container">
			<Search />
			{/* <Accordion items={items} /> */}
		</div>
	);
};
