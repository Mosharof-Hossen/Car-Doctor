import PropTypes from 'prop-types';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const TableRow = ({ item, handleDelete }) => {
    const { _id, productId, img, price, orderDate, status, title } = item;
    console.log(item);
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='text-4xl'>  <ImCross className='border p-2 text-white bg-black rounded-full' /></button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded h-16 w-16">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50 underline text-red-500"><Link to={`/serviceDetails/${productId}`}>details</Link></div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{orderDate.split('T')[0]}</td>
            <th>
                <button className="px-3 py-2 bg-primary-c rounded text-white">{status}</button>
            </th>
        </tr>
    );
};

TableRow.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
};

export default TableRow;