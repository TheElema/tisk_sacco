import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import styles from "./style.css"

import * as userActions from "../../Store/Users/actions"


class NumberPad extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			noOfCharsInCode: this.props.size ? this.props.size : 4
		}
	}

	onPasteHandler = e => {
		let text = e.clipboardData.getData("Text")

		for (let i = 0; i < this.state.noOfCharsInCode; i++) {
			if (!(text.length > i) || !(this.state.noOfCharsInCode > i)) return
			let inp = document.getElementById(`code_input_${i}`)
			inp.value = text[i]
		}
	}

	focusNext = index => {
		if (!(this.state.noOfCharsInCode > index + 1)) return
		let curInp = document.getElementById(`code_input_${index}`)

		if (curInp.value == "") return
		let inp = document.getElementById(`code_input_${index + 1}`)
		inp.focus()
	}

	onKeyUpHandler = e => {
		let keyCode = e.keyCode
		switch (keyCode) {
			case 37:
			case 39:
				var rx = /^code_input_(.*)$/
				let dir = keyCode - 38
				let id = parseInt(rx.exec(e.target.id)[1]) + dir
				let inp = document.getElementById(`code_input_${id}`)
				if (inp == null) break
				inp.focus()
			default:
				break
		}
	}

	onFocusHandler = e => {
		e.target.select()
	}

	onSubmitHandler = e => {
		e.preventDefault()
		let code = ""

		for (let i = 0; i < this.state.noOfCharsInCode; i++) {
			let inp = document.getElementById(`code_input_${i}`)
			code = code + inp.value
		}

		this.props.submitAction({ number: code })
	}
	render() {
		let inputs = []
		for (let i = 0; i < this.state.noOfCharsInCode; i++) {
			inputs.push(
				<input
					type="text"
					key={i}
					id={`code_input_${i}`}
					onKeyUp={this.onKeyUpHandler}
					onFocus={this.onFocusHandler}
					required
					onPaste={this.onPasteHandler}
					maxLength="1"
					onChange={() => this.focusNext(i)}
				/>
			)
		}
		return (
			<div className="activatePage">
				<div className="topBar">
					<span className="arrowBack">&#8592;</span>
					<div className="descrptionContainer">
					<p className="title">{this.props.title}</p>
					<p >{this.props.description}</p>
					</div>
				</div>
				
				<form onSubmit={this.onSubmitHandler}>
					<div className="pageContent">
						<div className="activateCodeWrapper">{inputs}</div>
					</div>	
					<input type="submit" className="next" value="Next" />
				</form>
			</div>
		)
	}
}

export default NumberPad
