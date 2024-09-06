import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";
import { Link, } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service
    console.log(service);
    return (
        <div className="card border rounded ">
            <figure className="px-5 pt-5">
                <img
                    src={img}
                    alt="service"
                    className="rounded" />
            </figure>
            <div className="card-body pl-5 flex flex-col">
                <h2 className="card-title text-2xl font-bold flex-grow">{title}</h2>
                <div className="card-actions flex justify-between items-center text-primary-c text-xl font-semibold">
                    <p>Price: ${price}</p>
                    <Link to={`/serviceDetails/${_id}`}><button className=""><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
};

export default ServiceCard;