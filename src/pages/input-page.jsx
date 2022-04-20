import React, { useState, useRef } from 'react'
import Space from '@/tam/components/space'
import DemoPage from '../components/demo-page'
import DemoBlock from '../components/demo-block'
import Input from '../tam/components/input'
import Button from '../tam/components/button'

const InputPage = () => {
	const [value, onChangeValue] = useState('')
	const [clearValue, onChangeClearValue] = useState('测试通过ref调用clear')
	const refClear = useRef(null)

	return (
		<DemoPage>
			<DemoBlock title="基本的输入框组件">
        <Input
          placeholder="请输入内容"
          value={value}
          onChange={onChangeValue}
        />
      </DemoBlock>

			<DemoBlock title="默认值">
        <Input 
					defaultValue="默认值"
				/>
      </DemoBlock>

			<DemoBlock title="类型为password">
        <Input 
					type="password"
					defaultValue="12345678"
				/>
      </DemoBlock>

			<DemoBlock title="带清除按钮">
        <Input placeholder="请输入内容" clearable />
      </DemoBlock>

			<DemoBlock title="禁用状态">
        <Input placeholder="请输入内容" value="被禁用的输入框" disabled />
      </DemoBlock>

			<DemoBlock title="只读状态">
        <Input placeholder="请输入内容" value="只读模式的输入框" readOnly />
      </DemoBlock>

			<DemoBlock title="右侧对齐">
        <Input
          placeholder="请输入验证码"
          style={{ '--text-align': 'right' }}
        />
      </DemoBlock>

			<DemoBlock title='通过ref调用方法'>
				<Input
					ref={refClear}
					value={clearValue}
					placeholder="请输入文案后点击按钮"
					onChange={onChangeClearValue}
				/>

				<Space style={{marginTop: '10px'}}>
					<Button 
						color="danger" 
						size="small"
						onClick={() => {
							refClear.current.clear()
						}}
					>Clear</Button>

					<Button 
						color="success" 
						size="small"
						onClick={() => {
							refClear.current.focus()
						}}
					>Focus</Button>
				</Space>
			
      </DemoBlock>
		</DemoPage>	
	)
}

export default InputPage