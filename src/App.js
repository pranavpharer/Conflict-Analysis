import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapWithGeofencing from './MapWithGeofencing';
import MapWithGeofencingSingle from './Page1';
import ParallelCoordinatesPlot from './Page2';
import IntegratedHeatmap from './Page3';
import ThemeRiver from './Page4';
import PixelVisualization from './Page5';
import WordCloud from './Page6';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <Routes>
        <Route path="/" element={<MapWithGeofencing />} />
        <Route path="/geomap" element={<MapWithGeofencingSingle />} />
        <Route path="/pcp" element={<ParallelCoordinatesPlot />} />
        <Route path="/heatmap" element={<IntegratedHeatmap />} />
        <Route path="/themeriver" element={<ThemeRiver />} />
        <Route path="/pixel" element={<PixelVisualization />} />
        <Route path="/wordcloud" element={<WordCloud />} />
      </Routes>
    </Router>
  );
}

export default App;


