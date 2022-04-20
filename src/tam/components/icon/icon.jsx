import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withNativeProps } from '@/tam/utils/native-props'

const classPrefix = 'tam-icon'

export const Icon = props => {
	const { 
		prefixClass, 
		name, 
		color, 
		onClick 
	} = props

	const iconClass = `${prefixClass}-${name}`

	return withNativeProps(
		props,
		<view
			className={classNames(
				classPrefix,
				prefixClass,
				iconClass 
			)}
			onTap={onClick}
		/>
	)
}

Icon.propTypes = {
	name: PropTypes.oneOf([
		'right',
		'left',
		'up',
		'down',
		'check-circle-fill'
	]),
	prefixClass: PropTypes.string,
	onClick: PropTypes.func
} 

Icon.defaultProps = {
	prefixClass: 'tam-icon'	
}
