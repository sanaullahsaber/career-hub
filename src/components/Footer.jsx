import React from "react";
import footer from "../../public/assets/Icons/Group 9969.png";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 footer p-10 bg-black text-neutral-content">
        <div className="my-container">
          <h3 className="text-4xl">CareerArena</h3>
          <p>
            There are many variations of passages <br />
            of Lorem Ipsum , but the majority have <br />
            suffered alteration in some form.
          </p>
          <img src={footer} alt="" />
        </div>
        <div className="my-container">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div className="my-container">
          <span className="footer-title">Product</span>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </div>
        <div className="my-container">
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
        <div className="my-container">
          <span className="footer-title">Contact</span>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </footer>

      <footer className="footer items-center p-4 bg-black text-neutral-content">
        <div className="my-container flex ">
          <div className="items-center grid-flow-col mr-96">
            <p>© 2023 CareerArena - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <p>Powered by CareerArena</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
