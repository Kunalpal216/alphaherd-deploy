"use client"


import SelectDropdown from 'react-native-select-dropdown'

import Download from '../../../../../assets/icons/finance/download.svg';
import DownArrow from '../../../../../assets/icons/finance/downArrow.svg';
import Invoice from '../../../../../assets/icons/finance/invoice.svg';
import subicon from "../../../../../assets/icons/finance/1. Icons-26.svg"
import delicon from "../../../../../assets/icons/finance/1. Icons-27.svg"
import addicon from "../../../../../assets/icons/finance/add.svg"
import add1icon from "../../../../../assets/icons/finance/add1.svg"
import sellicon from "../../../../../assets/icons/finance/sell.svg"

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import ExistingsalesReturnHeader from "./header"
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import ExistingsalesReturnBottomBar from './bottombar';
import ExistingsalesReturnTotalAmout from './totalamount';
const ExistingsalesReturnTable = () => {

    const batchOptions = [
        { value: 'one', label: 'one' },
        { value: 'two', label: 'two' },
        { value: 'three', label: 'three' }
    ];

    const taxOptions = [
        { value: 'Tax excl.', label: 'Tax excl.' },
        { value: 'Tax incl.', label: 'Tax incl.' }
    ];

    const gstOptions = [
        { value: 'GST@18%.', label: 'GST@18%.' },
        { value: 'GST@9%.', label: 'GST@9%.' }
    ];

    const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const initialItems = [
        { id: 1, quantity: 4, quantity2: 5 },
        { id: 2, quantity: 3, quantity2: 6 },
        // Add more items as needed
    ];


    const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
        <label style={{ marginRight: '1em' }}>
            <input type="checkbox" {...props} />
            {children}
        </label>
    );
    const handleQuantityDecClick = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
        );
    };

    const handleQuantityIncClick = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
        );
    };

    const [disableButton, setDisableButton] = useState(true);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isChecked, setChecked] = useState(false);


    const [items, setItems] = useState(initialItems);




    useEffect(() => {
        if (!disableButton && inputRef.current) {
            inputRef.current.focus();
        }
    }, [disableButton]);




    return (
        <>
            <div className="w-full h-full flex-col justify-start items-start flex mt-2 bg-gray-100  rounded-lg">
                <div className="w-full h-[84px] p-6 bg-white rounded-tl-[10px] rounded-tr-[10px] border border-neutral-400 justify-between items-center gap-6 flex">
                    <div className='bg-orange-200 rounded-md px-2' ><span className="text-orange-600  text-sm font-medium font-['Satoshi']">You’re owed: ₹</span><span className="text-orange-600 text-sm font-bold font-['Satoshi']">2,124</span></div>
                    <div className='flex items-center h-9 px-4 py-2.5 bg-black justify-between rounded-lg '>

                        <Popover placement="bottom-end" showArrow offset={10}>
                            <PopoverTrigger>
                                <Button color="gray-400"
                                    variant="solid"
                                    className="capitalize flex border-none bg-black text-white rounded-lg ">
                                    <div className='flex pr-2'><Image src={DownArrow} alt='DownArrow' className='w-4 h-4 ' /></div>Add Customer</Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-5 bg-black text-white flex flex-row items-start rounded-lg border-2 ,t-3 mt-2.5">

                                <div className="flex flex-col ">

                                    <div className='flex flex-col'>

                                        <Link className='no-underline flex item-center' href='/finance/overview'>
                                            <div className='text-base p-4   text-white flex '>
                                                <div className='flex pr-2'><Image src={Invoice} alt='Invoice' className='w-5 h-5 ' /></div>Inverse</div>
                                        </Link>
                                        <Link className='no-underline flex item-center' href='/finance/overview'>
                                            <div className='text-base p-4  text-white flex '>
                                                <div className='flex pr-2'><Image src={Invoice} alt='Invoice' className='w-5 h-5 ' /></div>Return</div>
                                        </Link>
                                        <Link className='no-underline flex item-center' href='/finance/overview'>
                                            <div className='text-base p-4  text-white flex '>
                                                <div className='flex pr-2'><Image src={Invoice} alt='Invoice' className='w-5 h-5 ' /></div>Estimate</div>
                                        </Link>

                                    </div>
                                </div>


                            </PopoverContent>
                        </Popover>



                    </div>
                </div>
                <div className="flex-col w-full pr-[16px] pl-[16px] pt-[20px]">
                    <ExistingsalesReturnHeader />

                    <div className="w-full">
                        <div className="w-full h-[84px] p-6 bg-white rounded-tl-[10px] rounded-tr-[10px] border border-neutral-400 justify-between items-center gap-6 flex">
                            <div className="text-gray-500 text-xl font-medium font-['Satoshi']">
                                Items
                            </div>

                        </div>
                        <div>
                            <div className='flex  w-full justify-evenly items-center box-border bg-gray-100  h-12  border-b border-neutral-400 text-gray-500'>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>No.</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Name</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'>Selling Price</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Batch No.</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Return Reason</div>

                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Quantity</div>

                                <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'>Tax %</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Tax Amt.</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Total</div>
                            </div>
                            {items.map((item) => (
                                <div key={item.id}>
                                    <div className='flex justify-evenly items-center w-full  box-border  bg-white  bg-white border border-solid border-gray-200 text-gray-400   '>
                                        <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>{item.id}</div>
                                        <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>{`Item ${item.id}`}</div>

                                        <div className='w-2/12 px-6 flex items-center text-neutral-400 text-base font-medium gap-5'>
                                            <div className="w-1/12 flex items-center text-neutral-400 text-base font-medium">₹400</div>
                                            <div
                                                className="text-neutral-400 text-sm font-medium font-['Satoshi']">Tax Inc</div>
                                        </div>
                                        <div className='w-1/12 px-6 flex-col items-center text-neutral-400 text-base font-medium'>
                                            <div
                                                className="text-neutral-400 text-sm font-medium font-['Satoshi']">12345678</div>
                                            <div className="text-neutral-400 text-[10px] font-medium font-['Satoshi'] px-2">Exp. 09/04/24</div>
                                        </div>
                                        <div className='w-1/12 px-6 flex-col items-center text-neutral-400 text-base font-medium'>
                                            <div
                                                className="text-neutral-400 text-base font-medium font-['Satoshi']">oner</div>
                                        </div>
                                        <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium gap-[12px]'>
                                            <div>{item.quantity}</div>
                                        </div>

                                        <div className='w-2/12 px-6 flex items-center text-neutral-400 text-base font-medium'>
                                            <div
                                                className="text-neutral-400 text-sm font-medium font-['Satoshi']">GST 18%</div>
                                        </div>
                                        <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>{`₹${item.quantity * 400}`}</div>
                                        <div className='w-1/12 px-6 flex items-center text-neutral-400 text-base font-medium'>{`₹${item.quantity * 400 * 1.18}`}</div>

                                    </div>
                                    <div className='flex  w-full justify-evenly items-center box-border bg-white  h-12  border-b border-neutral-400 text-gray-500'>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'></div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>
                                            <div className="w-full h-7 px-2 py-1.5 bg-violet-100 rounded-[5px] justify-center items-center gap-2 inline-flex">
                                                <div className="text-indigo-600 text-sm font-medium font-['Satoshi']">Item Discount</div>
                                            </div>
                                        </div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'>

                                        </div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'><div
                                            className="text-neutral-400 text-sm font-medium font-['Satoshi']"> Gst 18%</div>
                                        </div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'></div>

                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'> </div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'> </div>
                                        <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'></div>
                                        <div className="text-red-500 text-base font-bold px-6 w-1/12 font-['Satoshi']">-₹236</div>

                                    </div>
                                </div>


                            ))}
                            <div className='flex  w-full justify-evenly items-center box-border bg-gray-100  h-12  border-b border-neutral-400 text-gray-500'>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>Total</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'> </div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'></div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'> </div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>{items.reduce((acc, item) => acc + item.quantity, 0)} Items</div>

                                <div className=' flex text-gray-500 text-base font-medium px-6 w-2/12'>
                                    <div
                                        className="text-neutral-400 text-sm font-medium font-['Satoshi']"> Gst 18%</div>
                                </div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>{`₹${items.reduce((acc, item) => acc + item.quantity * 400 * 0.18, 0)}`}</div>
                                <div className=' flex text-gray-500 text-base font-medium px-6 w-1/12'>{`₹${items.reduce((acc, item) => acc + item.quantity * 400 * 1.18, 0)}`}</div>
                            </div>
                        </div>
                        <ExistingsalesReturnTotalAmout />

                    </div>
                </div>
                <ExistingsalesReturnBottomBar />
            </div>



        </>

    )
}

export default ExistingsalesReturnTable;
