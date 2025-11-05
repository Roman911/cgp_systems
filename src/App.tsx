import './App.css'
import { Layout } from './components/Layout';
import { DndWrapper, ToolBar, WorkingArea } from './features';

function App() {
	return (
		<Layout>
			<DndWrapper>
				<ToolBar/>
				<WorkingArea/>
				<div>123</div>
			</DndWrapper>
		</Layout>
	)
}

export default App;
