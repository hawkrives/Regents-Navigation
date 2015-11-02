import React from 'react'
import styles from './our-styles.less'

class TextSizeButton extends React.Component {
	onClick() {
		function changeText(type) {
			let stylesheet = document.getElementById('styles')
			let currentSize = document.getElementByTagName('RoundButton').fontSize
			switch (type) {
			case 'add':
				let newSize = currentSize + 20
				stylesheet.deleteRule(0)
				stylesheet.insertRule('* {font-size:' + newSize + '%;}', 0)
				break
			case 'subtract':
				let newSize1 = currentSize - 20
				stylesheet.deleteRule(0)
				stylesheet.insertRule('* {font-size:' + newSize1 + '%;}', 0)
				break
			default:
				stylesheet.deleteRule(0)
				stylesheet.insertRule('* {font-size: 100%;}', 0)
			}
		}	
	}
	render() {
		return (
			<button onClick={this.onClick(this.props.type)}>{this.props.children}</button>
		)
	}
}


export default TextSizeButton