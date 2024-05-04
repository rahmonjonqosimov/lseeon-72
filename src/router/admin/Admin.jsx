import React from "react";
import GoogleMapReact from "google-map-react";
import { GrLocation } from "react-icons/gr";
import img from "../../assets/images/admin.png";
import Stay from "../../components/stay/Stay";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Admin = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  let item = [
    {
      id: 1,
      title: "Office",
      location: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
      phone: " Phone: (123) 456-7890",
      email: "Email: contact@Evara.com",
    },
    {
      id: 2,
      title: "Studio",
      location: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
      phone: " Phone: (123) 456-7890",
      email: "Email: contact@Evara.com",
    },
    {
      id: 3,
      title: "Shop",
      location: "205 North Michigan Avenue, Suite 810 Chicago, 60601, USA",
      phone: " Phone: (123) 456-7890",
      email: "Email: contact@Evara.com",
    },
  ];
  let card = item?.map((el) => (
    <div className="card" key={el.id}>
      <h4>{el.title}</h4>
      <p>{el.location}</p>
      <p>{el.phone}</p>
      <p>{el.email}</p>
      <button>
        <GrLocation />
        View map
      </button>
    </div>
  ));
  return (
    <section className="admin">
      <div className="navigate">
        <div className="container">
          <ul>
            <li>
              <Link to={"/"}>
                <AiOutlineHome /> Home <FaAngleRight />
              </Link>
            </li>
            <li>Admin</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="about__content">
          <h3>How can help you ?</h3>
          <div className="wrapper">
            <div className="col1">
              <h2>Admin panel</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col2">
              <h4>01. Visit Feedback</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <h4>03. Billing Inquiries</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col2">
              <h4>02. Employer Services</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <h4>04.General Inquiries</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div
            style={{
              height: "350px",
              borderRadius: "15px",
              overflow: "hidden",
              margin: "50px 0",
              width: "100%",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <div className="office">{card}</div>
          <div className="contact">
            <form>
              <h4>Contact form</h4>
              <h3>Drop Us a Line</h3>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="inp">
                <input type="text" required placeholder="First Name" />
                <input type="email" required placeholder="Your Email" />
              </div>
              <div className="inp">
                <input type="tel" required placeholder="Your Phone" />
                <input type="text" required placeholder="Subject" />
              </div>
              <textarea></textarea>
              <button>Send message</button>
            </form>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <Stay />
    </section>
  );
};

export default Admin;
