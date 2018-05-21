import React, { Component } from "react"

import "./style.css"

import AccordionComponent from "../../Components/AccountsAccordion"
class SelectAccount extends Component {
	render() {
		const data = {
			do: "a deer, a female deer ",
			re: "a drop of golden sun ",
			me: "a name, I call myself ",
			fa: "a long long way to run "
		}
		return (
			<div className="parent">
				<div className="child">
					<div className="headerGrid" />
					<AccordionComponent data={data} />
				</div>
			</div>
		)
	}
}

export default SelectAccount
