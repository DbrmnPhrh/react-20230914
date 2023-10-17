import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './contexts/Theme'
import { MainPage } from './pages/Main/component'
import store from './redux'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<MainPage/>
			</Provider>
		</ThemeProvider>
	// </React.StrictMode>
)
