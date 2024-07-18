'use client';

import { lusitana } from '@/app/ui/fonts';
import Widget from '@/app/dashboard/experiments/widget';
import {
    UserGroupIcon,
    BuildingLibraryIcon,
    DocumentDuplicateIcon,
    BugAntIcon
} from '@heroicons/react/24/outline';



export default function Page() {
    return (
        <div className="w-full flex flex-col px-3 py-4 md:px-2 bg-sky-50 ">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Tailwind Experiments</h1>
            </div>
            <div className='flex grow flex-col md:flex-row md:space-x-2 md:space-y-2'>
                <Widget titleText='Widget 1' contentTitle='Lazy Bone' icon={BugAntIcon} />
                <Widget titleText='Widget 2' contentTitle='Yadi Yada' icon={DocumentDuplicateIcon} />
                <Widget titleText='Widget 3' contentTitle='Yadi Yada' icon={BuildingLibraryIcon} />
            </div>
        </div>
    );
}

