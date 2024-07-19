'use client';

import { lusitana } from '@/app/ui/fonts';
import Widget from '@/app/dashboard/experiments/widget';
import AccordionIcon from './AccordionIcon';
import Example from './Example';
import Example1 from './Example1';
import Example2 from './Example2';
import Example4 from './Example4';

import {
    UserGroupIcon,
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    BugAntIcon
} from '@heroicons/react/24/outline';


export default function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Tailwind 101               
            </h1>
            <div>
                <div className='flex grow flex-col md:flex-row md:space-x-2 md:space-y-2'>
                    <Widget titleText='Widget 0' contentTitle='Lazy Bone' icon={BugAntIcon} />
                    <Widget titleText='Widget 1' contentTitle='Yadi Yada' icon={DocumentDuplicateIcon} />
                    <Widget titleText='Widget 2' contentTitle='Yadi Yada' icon={BuildingLibraryIcon} />
                </div>
            </div>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">New users annually</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className=' flex space-x-4 border-solid border-2 rounded-lg mt-6'>
                <div>
                    <div className=" object-left block p-4 bg-white rounded-lg shadow w-72 h-full">
                        <div className=" w-full h-4 bg-gray-400 rounded-full mt-3">
                            <div className="w-1/2 h-full text-center text-xs text-white bg-green-500 rounded-full">
                                50%
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="block p-4  bg-white rounded-lg shadow w-72">
                        <div>
                            <span className="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-sky-500">
                                Task in progress
                            </span>
                        </div>
                        <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                            <div className="w-3/4 h-full text-center text-xs text-white bg-sky-500 rounded-full">
                                75%
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <AccordionIcon />
            </section>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <Example />
            </section>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <Example1 />
            </section>
            <section className='border-solid border-2 rounded-lg mt-6'>
                <Example2 />
            </section>
            <section className='border-dashed border-2 text-center rounded-lg mt-6 space-x-4'>
                <Example4 />
            </section>
        </main>
    );
}

