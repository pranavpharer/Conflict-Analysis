# Conflict Analysis Dashboard

[![Live Website](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-blue?logo=github)](https://pranavpharer.github.io/Conflict-Analysis/)

An interactive React dashboard for analyzing conflict-event data through maps, filters, timelines, and visual analytics.

**Live website:** [https://pranavpharer.github.io/Conflict-Analysis/](https://pranavpharer.github.io/Conflict-Analysis/)

---

## Features

- Interactive geographic conflict-event map
- Event markers, map filters, and geofencing
- Timeline-based analysis
- Heatmap visualization
- Parallel-coordinates plot
- Theme-river visualization
- Pixel visualization
- Word cloud
- Static conflict-event datasets and icon assets

---

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React | Frontend user interface |
| React Router | Navigation between dashboard views |
| Leaflet / React Leaflet | Interactive maps |
| D3 | Data-driven visualizations |
| Recharts | Chart components |
| Create React App | Development and production builds |
| Node.js / npm | Dependency management, testing, and builds |
| Docker | Portable application packaging |
| Nginx | Serves the production React files |
| GitHub Actions | Continuous Integration and Deployment |
| GitHub Pages | Hosts the live static website |
| GitHub Container Registry | Stores Docker container images |

---

## Project Structure

```text
Conflict-Analysis/
├── public/
│   ├── Icons/                  # Event-type icons
│   ├── complete_dataset.json   # Conflict-event dataset
│   └── index.html
├── src/
│   ├── App.js                  # Application routes
│   ├── MapWithGeofencing.jsx   # Main map
│   ├── Page1.jsx               # Geographic map view
│   ├── Page2.jsx               # Parallel coordinates
│   ├── Page3.jsx               # Heatmap
│   ├── Page4.jsx               # Theme river
│   ├── Page5.jsx               # Pixel visualization
│   └── Page6.jsx               # Word cloud
├── .github/
│   └── workflows/              # GitHub Actions workflows
├── Dockerfile                  # Docker production image definition
├── nginx.conf                  # Nginx server configuration
├── package.json                # Scripts and dependencies
└── README.md


```

## Installtion
```properties
git clone https://github.com/pranavpharer/Conflict-Analysis.git
```
```
cd Conflict-Analysis
```

```
npm ci
```
~npm ci~ installs the exact dependency versions recorded in ~package-lock.json~
```
npm start
```

## Dockerization 
Stage 1: Node.js
- Installs npm dependencies
- Runs npm run build
- Creates the React production build

Stage 2: Nginx
- Receives only the build/ output
- Serves the static React application on port 80

  ```
# Build image
docker build -t conflict-analysis .

# Run image
docker run --rm -p 8080:80 conflict-analysis


  ```
