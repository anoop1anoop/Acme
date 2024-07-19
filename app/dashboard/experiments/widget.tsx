'use client';

import Link from 'next/link';

export default function Widget({ titleText, contentTitle, icon }: { titleText: string, contentTitle: string, icon: React.ElementType }) {

    const LinkIcon = icon
    return (
        <div className="flex flex-col grow border-solid hover:border-dotted border-2 rounded-lg border-emerald-400 p-2 mt-2 bg-slate-50 shadow-xl dark:bg-gray-900 dark:text-white">
            <div className="flex grow">
                <LinkIcon className="w-6" />
                <div className='pl-4'>{titleText}</div>
            </div>
            <div className="pt-4">{contentTitle}</div>
        </div>
    );
}

