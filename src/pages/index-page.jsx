import React from 'react'
import router from '@/lib/router'
import DemoPage from '../components/demo-page'
import List from '@/tam/components/list'

const IndexPage = () => {
	return (
		<DemoPage>
			<List header="数据录入">
        <List.Item 
					arrow
					onClick={() => {
						router.toInputPage()
					}}
				>Input输入框</List.Item>
      </List>
		</DemoPage>	
	)
}

export default IndexPage