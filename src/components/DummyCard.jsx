import React from 'react'

function DummyCard() {
    return (
        <div className='w-full h-full group'>
            <div className="w-full h-full rounded overflow-hidden flex flex-col animate-pulse">
                <div className="relative h-[50%] bg-gray-300 rounded-tl-sm rounded-tr-sm"></div>
                <div className='flex flex-col justify-between h-[50%] mx-auto w-[92%] overflow-hidden'>
                    <div className="pt-4">
                        <div className="bg-gray-300 h-6 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-4 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-4 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-4 mb-2 rounded"></div>
                    </div>
                    <div className="pt-3 pb-2 flex flex-row items-center justify-between">
                        <span className="bg-gray-300 h-4 w-20 rounded"></span>
                        <span className="bg-gray-300 h-4 w-24 rounded"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyCard