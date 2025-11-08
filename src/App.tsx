import { Layout } from './components';
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
