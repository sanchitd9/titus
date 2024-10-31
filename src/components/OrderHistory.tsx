import React, {useState} from 'react';

interface Order {
    id: number;
    companyCode: string;
    partNumber: string;
    orderNumber: string;
    quantity: number;
    status: 'Ongoing' | 'Completed';
}

const OrderHistoryPage: React.FC = () => {
    // Sample data.
    const orders: Order[] = [
        {id: 1, companyCode: 'ABC123', partNumber: 'PN001', orderNumber: 'ORD1001', quantity: 5, status: 'Ongoing'},
        {id: 2, companyCode: 'XYZ456', partNumber: 'PN002', orderNumber: 'ORD1002', quantity: 3, status: 'Completed'},
        {id: 3, companyCode: 'LMN789', partNumber: 'PN003', orderNumber: 'ORD1003', quantity: 10, status: 'Ongoing'},
        {id: 4, companyCode: 'DEF123', partNumber: 'PN004', orderNumber: 'ORD1004', quantity: 2, status: 'Completed'},
    ];

    const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as 'All' | 'Ongoing' | 'Completed');
    };

    const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.status === filter);

    return (
        <div className="min-h-screen bg-gray-100 pt-8 lg:pt-12 px-4">
            <h2 className="text-2xl ubuntu-bold mb-4 text-center">Order History</h2>

            <div className="sm:max-w-xl lg:max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="orderFilter" className="mr-2 font-medium text-gray-700">Filter by Status:</label>
                    <select
                        id="orderFilter"
                        value={filter}
                        onChange={handleFilterChange}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="All">All</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                {filteredOrders.length > 0 ? (
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-2">Company Code</th>
                            <th className="p-2">Part Number</th>
                            <th className="p-2">Order Number</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id} className="border-t">
                                <td className="p-2">{order.companyCode}</td>
                                <td className="p-2">{order.partNumber}</td>
                                <td className="p-2">{order.orderNumber}</td>
                                <td className="p-2">{order.quantity}</td>
                                <td className="p-2">
                                    <span
                                        className={`font-semibold ${
                                            order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                                        }`}
                                    >
                                    {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No orders found for the selected status.</p>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
