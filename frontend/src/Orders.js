import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
	const [{ basket, user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (user) {
			getDocs(
				query(
					collection(db, "users", user?.uid, "orders"),
					orderBy("created", "desc")
				)
			).then((res) =>
				setOrders(
					res._docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>

			<div className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
}

export default Orders;
