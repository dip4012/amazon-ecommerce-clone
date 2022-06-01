import React from "react";
import "./Footer.css";

function Footer() {
	const toTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__section padding__0">
					<button className="footer__backToTop" onClick={toTop}>
						Back to top
					</button>
				</div>

				<div
					className="footer__section"
					style={{ borderBottom: "1px solid #3a4553" }}
				>
					<div className="footer__navLinks">
						<h3>Get to Know Us</h3>
						<p>About Us</p>
						<p>Careers</p>
						<p>Press Releases</p>
						<p>Amazon Cares</p>
						<p>Gift a Smile</p>
						<p>Amazon Science</p>
					</div>

					<div className="footer__navLinks">
						<h3>Connect with Us</h3>
						<p>Facebook</p>
						<p>Twitter</p>
						<p>Instagram</p>
					</div>

					<div className="footer__navLinks">
						<h3>Make Money with Us</h3>
						<p>Sell on Amazon</p>
						<p>Sell under Amazon Accelerator</p>
						<p>Amazon Global Selling</p>
						<p>Become an Affiliate</p>
						<p>Fulfilment by Amazon</p>
						<p>Advertise Your Products</p>
						<p>Amazon Pay on Merchants</p>
					</div>

					<div className="footer__navLinks">
						<h3>Let Us Help You</h3>
						<p>Covid-19 and Amazon</p>
						<p>Your Account</p>
						<p>Returns Centre</p>
						<p>100% Purchase Protection</p>
						<p>Amazon App Download</p>
						<p>Amazon Assistant Download</p>
						<p>Help</p>
					</div>
				</div>

				<div className="footer__section" style={{ flexDirection: "column" }}>
					<div className="footer__logo">
						<img
							src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
							alt="amazon logo"
						/>
					</div>
					<div className="footer__regions">
						<ul>
							<li className="footer__navFirst">Australia</li>
							<li>Brazil</li>
							<li>Canada</li>
							<li>China</li>
							<li>France</li>
							<li>Germany</li>
							<li>Italy</li>
							<li>Japan</li>
							<li>Mexico</li>
							<li>Netherlands</li>
							<li>Poland</li>
							<li>Singapore</li>
							<li>Spain</li>
							<li>Turkey</li>
							<li>United Arab Emirates</li>
							<li>United Kingdom</li>
							<li className="footer_navLast">United States</li>
							<li className="footer__navLast"></li>
						</ul>
					</div>
				</div>

				<div className="footer__section footer__additionalInfo">
					<ul>
						<li>Conditions of Use & Sales</li>
						<li>Privacy Notice</li>
						<li>Interest-Based Ads</li>
						<li>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
