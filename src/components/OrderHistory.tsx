import React from 'react';

const OrderHistoryPage: React.FC = () => {
    // Sample data.
    const orders = [
        { id: 1, companyCode: 'ABC123', partNumber: 'PN001', orderNumber: 'ORD1001', quantity: 5 },
        { id: 2, companyCode: 'XYZ456', partNumber: 'PN002', orderNumber: 'ORD1002', quantity: 3 },
        { id: 3, companyCode: 'LMN789', partNumber: 'PN003', orderNumber: 'ORD1003', quantity: 10 },
    ];

    return (
        <div className="min-h-screen bg-gray-100 pt-8 lg:pt-12 px-4">
            <h2 className="text-2xl ubuntu-bold mb-4 text-center">Order History</h2>

            <div className="sm:max-w-xl lg:max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                {orders.length > 0 ? (
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-2">Company Code</th>
                            <th className="p-2">Part Number</th>
                            <th className="p-2">Order Number</th>
                            <th className="p-2">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map(order => (
                            <tr key={order.id} className="border-t">
                                <td className="p-2">{order.companyCode}</td>
                                <td className="p-2">{order.partNumber}</td>
                                <td className="p-2">{order.orderNumber}</td>
                                <td className="p-2">{order.quantity}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
