import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PageWrapper from './components/PageWrapper/PageWrapper';
import MainWrapper from './components/MainWrapper/MainWrapper';
import { default as Home } from './views/Landing/Home/Index';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
const App = () => {
	return (
		<div className="App">
			<RecoilRoot>
				<PageWrapper>
					{/* Nav Goes here ---! */}
					<Nav />
					<Router>
						<MainWrapper>
							<Switch>
								{/* app routes sections ---! */}
								<Route exact path="/" render={() => <Home />} />
								<Route path="*" render={() => <div>404</div>} />
							</Switch>
						</MainWrapper>
					</Router>
					{/* Footer Goes here ---! */}
					<Footer />
				</PageWrapper>
			</RecoilRoot>
		</div>
	);
};

export default App;
