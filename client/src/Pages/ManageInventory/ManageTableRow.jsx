import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const ManageTableRow = ({ item, handleDelete, handleStateChange }) => {
    const { _id, productId, img, price, orderDate, status, title, userEmail } = item;


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
            <td>{userEmail || "-----"}</td>
            <td>{orderDate.split('T')[0]}</td>
            <td>
                <select onChange={(e) => handleStateChange(e, _id)} className="select select-secondary w-32 max-w-xs">
                    <option disabled selected >{status}</option>
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancel">Cancel</option>
                </select>
                {/* <input type="submit" /> */}
            </td>
        </tr>
    );
};

ManageTableRow.propTypes = {
    item: PropTypes.object,
    handleDelete: PropTypes.func,
    handleStateChange: PropTypes.func,
};

export default ManageTableRow;