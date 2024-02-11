import './App.css'
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid first-section first-section">
        {/* <FeaturesAsymmetrical /> */}
      </div>
      <div className="container-fluid maxHeight first-sectionnnn">
        {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
      </div>
      <div className="container-fluid maxHeight first-sectionn">
        {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
      </div>
      <div className="container-fluid maxHeight first-sectionnn">
        {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
      </div>
      <div className="container-fluid maxHeight first-sectionnnnnn">
        {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
      </div>
    </MantineProvider>
  )
}

export default App
