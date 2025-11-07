import './App.css'
import { Layout } from './components/Layout';
import { DndWrapper, ToolBar, ViewContent, WorkingArea } from './features';

function App() {
	return (
		<Layout>
			<DndWrapper>
				<ToolBar/>
				<WorkingArea/>
				<ViewContent />
			</DndWrapper>
		</Layout>
	)
}

export default App;
