import React, { useEffect } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://picsum.photos/id/1005/1600/100"
					alt=""
				/>

				<div>
					<h3>Hello, {user ? user.email?.split("@")[0] : `Guest`}</h3>
					<h2 className="checkout__title">Your Shopping Basket</h2>
				</div>
				{basket.map((item, index) => (
					<CheckoutProduct
						key={item.id}
						id={item.id}
						index={index}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
