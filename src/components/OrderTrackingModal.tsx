import React, { useEffect } from 'react';

interface OrderProgress {
    engineering: boolean;
    manufacturing: boolean;
    quality: boolean;
    shipping: boolean;
}

interface OrderTrackingModalProps {
    orderNumber: string;
    progress: OrderProgress;
    onClose: () => void;
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

const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
                                                                   orderNumber,
                                                                   progress,
                                                                   onClose,
                                                                   deliveryDetails,
                                                                   orderSummary,
                                                               }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
                <h3 className="text-xl font-bold mb-4">Order Tracking - {orderNumber}</h3>

                <div className="flex justify-between items-center space-x-6 mb-6">
                    {[
                        { label: "Engineering", completed: progress.engineering },
                        { label: "Manufacturing", completed: progress.manufacturing },
                        { label: "Quality", completed: progress.quality },
                        { label: "Shipping", completed: progress.shipping },
                    ].map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
              <span className="text-2xl">
                {step.label === "Engineering" ? "🛠️" :
                    step.label === "Manufacturing" ? "🏭" :
                        step.label === "Quality" ? "✅" : "🚚"}
              </span>
                            <span className="mt-2 text-sm font-semibold">{step.label}</span>
                            <div
                                className={`w-4 mt-1 h-4 rounded-full ${
                                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap mt-10 md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <div className="bg-gray-100 p-4 border-2 border-gray-500 rounded-lg w-full md:w-3/4">
                        <h4 className="ubuntu-bold underline mb-2">Delivery Details</h4>
                        <p><span className="ubuntu-medium">Address:</span> {deliveryDetails.address}</p>
                        <p><span className="ubuntu-medium">Part Number:</span> {deliveryDetails.partNumber}</p>
                        <p><span className="ubuntu-medium">Quantity:</span> {deliveryDetails.quantity}</p>
                    </div>

                    <div className="bg-gray-100 border-2 border-gray-500 p-4 rounded-lg w-full md:w-1/2">
                        <h4 className="ubuntu-bold underline mb-2">Order Summary</h4>
                        <p><span className="ubuntu-medium">Billing Amount:</span> {orderSummary.billingAmount}</p>
                        <p><span className="ubuntu-medium">Billing Date:</span> {orderSummary.billingDate}</p>
                        <p>
                            <a
                                href={orderSummary.helpLink}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Need Help?
                            </a>
                        </p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="float-right mt-6 px-4 py-2 bg-black ubuntu-bold text-white rounded hover:bg-gray-900"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default OrderTrackingModal;
