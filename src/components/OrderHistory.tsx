import React, { useState } from 'react';
import OrderTrackingModal from './OrderTrackingModal';

interface Order {
    id: number;
    companyCode: string;
    partNumber: string;
    orderNumber: string;
    quantity: number;
    status: 'Ongoing' | 'Completed';
    progress: {
        engineering: boolean;
        manufacturing: boolean;
        quality: boolean;
        shipping: boolean;
    };
    deliveryDetails: {
        address: string;
        partNumber: string;
        quantity: number;
    };
    orderSummary: {
        billingAmount: string;
        billingDate: string;
        helpLink: string;
    };
}

const OrderHistoryPage: React.FC = () => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

    // Sample data including delivery details and order summary
    const orders: Order[] = [
        {
            id: 1,
            companyCode: 'ABC123',
            partNumber: 'PN001',
            orderNumber: 'ORD1001',
            quantity: 5,
            status: 'Ongoing',
            progress: {
                engineering: true,
                manufacturing: false,
                quality: false,
                shipping: false,
            },
            deliveryDetails: {
                address: '1234 W Connexion Way, Columbia City, IN, USA',
                partNumber: 'PN001',
                quantity: 5,
            },
            orderSummary: {
                billingAmount: '$1,000',
                billingDate: '2024-10-15',
                helpLink: 'https://support.example.com',
            },
        },
        {
            id: 2,
            companyCode: 'XYZ456',
            partNumber: 'PN002',
            orderNumber: 'ORD1002',
            quantity: 3,
            status: 'Completed',
            progress: {
                engineering: true,
                manufacturing: true,
                quality: true,
                shipping: true,
            },
            deliveryDetails: {
                address: '1234 W Connexion Way, Columbia City, IN, USA',
                partNumber: 'PN002',
                quantity: 3,
            },
            orderSummary: {
                billingAmount: '$500',
                billingDate: '2024-09-20',
                helpLink: 'https://support.example.com',
            },
        },
    ];

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as 'All' | 'Ongoing' | 'Completed');
    };

    const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.status === filter);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Order History</h2>

            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                {/* Filter Dropdown */}
                <div className="mb-4 flex justify-end">
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

                {/* Orders Table */}
                {filteredOrders.length > 0 ? (
                    <table className="w-full table-auto">
                        <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-2">Company Code</th>
                            <th className="p-2">Part Number</th>
                            <th className="p-2">Order Number</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
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
                    <span className={`ubuntu-medium ${order.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {order.status}
                    </span>
                                </td>
                                <td className="p-2">
                                    <button
                                        onClick={() => setSelectedOrder(order)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Track Order
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No orders found for the selected status.</p>
                )}
            </div>

            {/* Render the Order Tracking Modal if an order is selected */}
            {selectedOrder && (
                <OrderTrackingModal
                    orderNumber={selectedOrder.orderNumber}
                    progress={selectedOrder.progress}
                    onClose={() => setSelectedOrder(null)}
                    deliveryDetails={selectedOrder.deliveryDetails}
                    orderSummary={selectedOrder.orderSummary}
                />
            )}
        </div>
    );
};

export default OrderHistoryPage;
