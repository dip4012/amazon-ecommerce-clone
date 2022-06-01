import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Home() {
	const [index, setIndex] = useState(0);
	const [images, setImages] = useState([
		{ url: "https://m.media-amazon.com/images/I/519vEB8zw8L._SX1500_.jpg" },
		{ url: "https://m.media-amazon.com/images/I/71J3ec2LQzL._SX3000_.jpg" },
		{ url: "https://m.media-amazon.com/images/I/61yuQvDrMdL._SX3000_.jpg" },
		{ url: "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" },
	]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (index < 0) setIndex(lastIndex);
		if (index > lastIndex) setIndex(0);
	}, [index, images]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 2000);

		return () => clearInterval(slider);
	}, [index]);

	return (
		<div className="home">
			<div className="home__container">
				<div className="image__slider">
					{images.map((image, i) => {
						const { url } = image;

						let position = "nextSlide";
						if (i === index) position = "activeSlide";
						if (i === index - 1 || (index === 0 && i === images.length - 1))
							position = "lastSlide";

						return (
							<article className={position}>
								<img src={url} alt="banner" className="home__image" />
							</article>
						);
					})}
				</div>

				<div className="home__bannerButtons">
					<button
						className="prev"
						onClick={() => {
							setIndex(index - 1);
						}}
					>
						<FiChevronLeft />
					</button>
					<button className="next" onClick={() => setIndex(index + 1)}>
						<FiChevronRight />
					</button>
				</div>

				<div className="home__row">
					<Product
						id="123456"
						title="Harry Potter and the Deathly Hallows"
						image="https://m.media-amazon.com/images/I/511DhzIj4cL.jpg"
						price={299}
						rating={5}
					/>
					<Product
						id="456789"
						title="Harry Potter and the Half-Blood Prince"
						image="https://m.media-amazon.com/images/I/51myHyjJsyL.jpg"
						price={299}
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id="789123"
						title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming"
						image="https://m.media-amazon.com/images/I/51HBom8xz7L._SY355_.jpg"
						price={1399}
						rating={5}
					/>
					<Product
						id="159951"
						title="(Renewed) Mi Smart Band 5 – India’s No. 1 Fitness Band"
						image="https://m.media-amazon.com/images/I/31x-J+tVmgS._SY355_.jpg"
						price={2060}
						rating={4}
					/>
					<Product
						id="753357"
						title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
						image="https://images-eu.ssl-images-amazon.com/images/I/41R9oD3K25L._SX300_SY300_QL70_FMwebp_.jpg"
						price={24999}
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="684426"
						title="Mi NoteBook Ultra 3.2K resolution display Intel Core i5-11300H 11th Gen 15.6-inch(39.62 cm) Thin & Light laptop(16GB/512GB SSD/Iris Xe Graphics/Win 11/MS Office 21/Backlit KB/Fingerprint sensor/1.7Kg)"
						image="https://m.media-amazon.com/images/I/81RHHnGydgL._SY450_.jpg"
						price={61499}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
