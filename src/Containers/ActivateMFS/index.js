import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"



import * as userActions from "../../Store/Users/actions"
import * as userSelectors from "../../Store/Users/selectors"

import NumPad from "../../Components/NumberPad"

class ActivateMFS extends React.Component {
	constructor(props) {
		super(props)
	}

	onSubmitHandler = token => {
		this.props.userActions.activateMFSAccount({ token: token.number })
	}
	render() {
		return (
			<NumPad
				size={6}
				submitAction={this.onSubmitHandler.bind(this)}
				title="MFS Registration Code"
				description={
					"An activation sms code has been send to your number. Please enter it here"
				}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivateMFS)
