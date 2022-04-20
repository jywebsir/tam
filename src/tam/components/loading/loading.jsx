import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props'

const classPrefix = `tam-loading`

export const Loading = props => {
	const { vertical, type, text } = props

	const clsName = classNames(classPrefix, {
		[`${classPrefix}-vertical`]: vertical 
	})

	return withNativeProps(
		props, 
		<view className={clsName}>
			<view className={classNames(
				`${classPrefix}-wrapper`,
				`${classPrefix}-${type}`
			)}>
				{
					type==='spinner'
					&&
					Array.from({ length: 12 }).map((_, index) => {
						return (
							<view 
								key={index}
								className={`${classPrefix}-dot`}
							/>
						)
					})
				}

			</view>
		
			{
				text
				&&
				<view className={`${classPrefix}-text`}>{text}</view>
			}
		</view>
	)
}

Loading.propTypes = {
	type: PropTypes.oneOf(['circular', 'spinner']),
	text: PropTypes.string,
	vertical: PropTypes.bool
}

Loading.defaultProps = {
	type: 'circular',
	text: null,
	vertical: false
}