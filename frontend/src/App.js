import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import Footer from "./Footer";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>> ", authUser);

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<>
			<Router>
				<div className="app">
					<Routes>
						<Route
							path="/orders"
							element={
								<>
									<Header />
									<Orders />
									<Footer />
								</>
							}
						></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route
							path="/checkout"
							element={
								<>
									<Header />
									<Checkout />
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/payment"
							element={
								<>
									<Header />
									<Payment />
									<Footer />
								</>
							}
						></Route>
						<Route
							path="/"
							element={
								<>
									<Header />
									<Home />
									<Footer />
								</>
							}
						></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
