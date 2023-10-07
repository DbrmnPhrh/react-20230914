import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/Theme'
import { MainPage } from './pages/Main/component'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider>
		<MainPage />
	</ThemeProvider>
)
