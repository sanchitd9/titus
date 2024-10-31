import React, { FC, useState } from 'react';

interface OrderFormValues {
    companyCode: string;
    partNumber: string;
    orderNumber: string;
    quantity: number;
}

const OrderPage: FC = () => {
    const [formValues, setFormValues] = useState<OrderFormValues>({
        companyCode: '',
        partNumber: '',
        orderNumber: '',
        quantity: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: name === "quantity" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted with values:', formValues);

        // TODO: Handle form submission here
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-8 lg:pt-12 px-4">
            <div className="sm:max-w-xl lg:max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl ubuntu-bold mb-4 text-center">Place an Order</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2">Company Code</label>
                        <input
                            type="text"
                            name="companyCode"
                            value={formValues.companyCode}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Enter company code"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Company Part Number</label>
                        <input
                            type="text"
                            name="partNumber"
                            value={formValues.partNumber}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Enter part number"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Part Order Number</label>
                        <input
                            type="text"
                            name="orderNumber"
                            value={formValues.orderNumber}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Enter order number"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formValues.quantity}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Enter quantity"
                            min={0}
                        />
                    </div>

                    <div className="col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-2 rounded ubuntu-bold hover:bg-gray-900"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;
