import React from 'react'

function DummyCard() {
    return (
        <div className="w-full h-[450px] rounded overflow-hidden flex flex-col bg-gray-200">
            {/* Placeholder Image */}
            <div className="relative h-[50%] bg-gray-400 animate-pulse"></div>
            {/* Placeholder Content */}
            <div className='flex flex-col h-[50%] mx-auto w-[92%] overflow-hidden pt-4 gap-2'>
                        <div className="bg-gray-300 h-[20%] mb-2 rounded"></div>
                        <div className="bg-gray-300 h-[60%] mb-2 rounded"></div>
                    </div>
    </div>
    )
}

export default DummyCard