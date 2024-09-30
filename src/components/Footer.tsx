
const Footer = () => {
  return (
    <section id="About" className="flex flex-col bg-[#FFF4EA] text-gray-600 py-12 px-[10%] mt-[5vh]">
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <h6 className="text-lg font-medium pb-2 text-[#C96868]">Popular Search</h6>
          <p className="text-xs font-light">Apartment For Rent</p>
          <p className="text-xs font-light">Apartment Low To Hide</p>
          <p className="text-xs font-light">Offices For Buy</p>
          <p className="text-xs font-light">Office For Rent</p>
          <p className="text-xs font-light">TownHime For Rent</p>
          <p className="text-xs font-light">TownHime For Buy</p>
          <p className="text-xs font-light">Shop For Rent</p>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <h6 className="text-lg font-medium pb-2 text-[#C96868]">Homepress Market</h6>
          <p className="text-xs font-light">Las Vegas Office</p>
          <p className="text-xs font-light">Apartment Low To Hide</p>
          <p className="text-xs font-light">Plipine Office</p>
          <p className="text-xs font-light">Office For Rent</p>
          <p className="text-xs font-light">TownHime For Rent</p>
          <p className="text-xs font-light">Los Angel Apartment</p>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <h6 className="text-lg font-medium pb-2 text-[#C96868]">Quick Links</h6>
          <p className="text-xs font-light">Pricing Plan</p>
          <p className="text-xs font-light">XStore Services</p>
          <p className="text-xs font-light">About Us</p>
          <p className="text-xs font-light">Terms & Conditions</p>
          <p className="text-xs font-light">Privacy Policy</p>
          <p className="text-xs font-light">Get Rewarded</p>
          <p className="text-xs font-light">Contact Us</p>
        </div>

        <div className="flex flex-col flex-[1.5] gap-4">
          <h6 className="text-lg font-medium pb-2 text-[#C96868]">Sign Up For Newsletter</h6>
          <p className="text-xs font-light">Enter your email below to receive a $30 coupon, special offers, discounts and more!</p>
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded-sm"
          />
          <p className="text-xs font-light">Follow Us</p>
        </div>
      </div>

      <hr className="border-none border-t border-white mt-12"/>

      <div className="flex flex-row justify-between py-4">
        <p className="text-xs font-light">Copyright 2024 Fashion e-com. Solution by Fashion E-com</p>
      </div>
    </section>
  );
};

export default Footer;
