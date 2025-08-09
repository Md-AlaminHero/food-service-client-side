import React from 'react';

const MyOrderRow = ({ order, index }) => {

    const { price, food_name, buying_time } = order;
    // console.log(order);
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                {food_name}
            </td>
            <td>
                {price} TK
            </td>
            <td>{buying_time}</td>
            {/* <th>
                <button className="btn btn-ghost">details</button>
            </th> */}
        </tr>
    );
};

export default MyOrderRow;