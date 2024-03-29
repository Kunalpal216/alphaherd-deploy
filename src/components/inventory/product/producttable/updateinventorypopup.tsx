"use client"
import Image from "next/image"
import React, { useState } from 'react'
import closeicon from "../../../../assets/icons/inventory/closeIcon.svg"
import arrowicon from "../../../../assets/icons/inventory/arrow.svg"
import minicon from "../../../../assets/icons/inventory/mini.svg"
import addicon from "../../../../assets/icons/inventory/add.svg"
import add1icon from "../../../../assets/icons/inventory/add (1).svg"
import RadioButton from './RadioButton';
import subicon from "../../../../assets/icons/inventory/1. Icons-24 (6) (2).svg"
import checkicon from "../../../../assets/icons/inventory/check (1).svg"

type PopupProps = {
    onClose: () => void;
}

const Popup2: React.FC<PopupProps> = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>('option1');
    const [items, setItems] = useState(5);
    const [isChecked, setChecked] = useState(false);

    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleQuantityDecClick = () => {
        setItems(items - 1);
    };

    const handleQuantityIncClick = () => {
        setItems(items + 1);
    };

    const handleCheckBoxChange = () => {
        setChecked(!isChecked);
    };

    return <>
    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 fixed inset-0 backdrop-blur-sm bg-gray-100 bg-opacity-50 z-50">
    <div className="w-[1392px] h-[481px] flex-col p-8 bg-gray-200 gap-6">
            <div className="flex justify-end p-8 gap-4">
                <button><Image src={minicon} alt="minimize"></Image></button>
                <button onClick={onClose}><Image src={closeicon} alt="minimize"></Image></button>
            </div>
            <div className="text-gray-500 text-xl font-medium font-['Satoshi']">Update Inventory</div>
            <div className="text-neutral-400 text-base font-medium font-['Satoshi']">Add or subtract quantity from inventory</div>
            <div className="w-full h-[72px] px-6 py-4 bg-white border border-neutral-400 justify-between items-center gap-4 flex">
                <div className="flex gap-4">
                    <RadioButton
                        label="Stock In"
                        value="Stock In"
                        checked={selectedOption === 'Stock In'}
                        onChange={handleRadioChange}
                    />
                    <RadioButton
                        label="Stock Out"
                        value="Stock Out"
                        checked={selectedOption === 'Stock Out'}
                        onChange={handleRadioChange}
                    />

                </div>
                <div className="w-[132px] h-11 px-4 py-2.5 bg-zinc-900 rounded-[5px] justify-start items-center gap-2 flex">
                    <Image src={addicon} alt="add"></Image>
                    <button className="text-white text-base font-bold font-['Satoshi'] bg-transparent border-0">Add Item</button>
                </div>
            </div>
            <div className="pb-6">
                <div className='flex  w-full justify-evenly items-center box-border bg-gray-100  h-12 py-4 border-b border-neutral-400 text-gray-500'>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>No.</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'>Product</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Quantity</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Batch No.</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Expiry</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Code</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Location</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Distributor</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Total Cost</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>MRP</div>
                    <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Selling Price</div>
                </div>
                <div className='flex justify-evenly items-center w-full  box-border py-4 bg-white  bg-white border border-solid border-gray-300 text-gray-400 border-t-0.5  '>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>1</div>
                    <div className='w-2/12 px-6 flex items-center text-neutral-400 text-base font-medium'>Metaclopramide</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium gap-[12px]'>
                        <button className="bg-white rounded-[5px] border-2 border-gray-100" onClick={handleQuantityDecClick}>
                            <Image src={subicon} alt="-"></Image>
                        </button>
                        <div>{items}</div>
                        <button className="bg-white rounded-[5px] border-2 border-gray-100" onClick={handleQuantityIncClick}>
                            <Image src={add1icon} alt="+"></Image>
                        </button>
                    </div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>12345702</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>09/04/24</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>123456</div>
                    <div className="w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium px-2 py-1.5 bg-orange-50 rounded-[5px] justify-center gap-2 flex text-orange-500 text-sm font-medium font-['Satoshi']">Shelf A1</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>WeCare</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>₹400</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>₹400</div>
                    <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>₹400</div>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="pr-[4px]">
                            <input value="test" type="checkbox" onChange={handleCheckBoxChange} />
                        </div>
                        <div className="text-teal-400 text-base font-medium font-['Satoshi']">
                            Update total cost as Expense
                        </div>
                    </div>
                    <div className="bg-black px-4 py-2.5 rounded-[5px] justify-start items-center gap-2 flex">
                        <Image src={checkicon} alt="add"></Image>
                        <button className="text-white text-base font-bold font-['Satoshi'] bg-transparent border-0">Update Inventory</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Popup2;