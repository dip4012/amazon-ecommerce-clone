import React, { useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore/lite";

function Payment() {
	const navigate = useNavigate();
	const [{ basket, user }, dispatch] = useStateValue();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const loadRazorpay = () => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const displayRazorpay = async (e) => {
		e.preventDefault();

		const res = await loadRazorpay();

		if (!res) {
			alert("Razorpay SDK failed to load.");
			return;
		}

		const response = await axios({
			method: "post",
			url: `/razorpay/create?total=${getBasketTotal(basket) * 100}`,
		});

		const options = {
			key: "rzp_test_jsTm2eAq8BUZKf",
			amount: response.data.amount,
			currency: response.data.currency,
			name: "AMAZON",
			description: "Please complete the transaction to buy your products.",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
			order_id: response.data.id,
			handler: async function (response) {
				const payment = await axios({
					method: "get",
					url: `/payment/${response.razorpay_payment_id}`,
				});

				if (payment?.data.status === "captured") {
					if (user) {
						await setDoc(
							doc(db, "users", user?.uid, "orders", payment?.data.order_id),
							{
								basket: basket,
								amount: payment?.data.amount,
								created: payment?.data.created_at,
							}
						);
					}

					dispatch({
						type: "EMPTY_BASKET",
					});

					if (user) navigate("/orders", { replace: true });
					else navigate("/", { replace: true });
				}
			},
			theme: {
				color: "#f0c14b",
			},
		};
		var paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item, i) => (
							<CheckoutProduct
								key={i}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Proceed to Pay</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={displayRazorpay}>
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType="text"
									thousandSeparator={true}
									prefix="₹"
								/>

								<button>
									<span>Buy Now</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
