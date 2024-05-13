import { CircleCheck } from 'lucide-react'
import React from 'react'

const Stepper = ({ step, isLast }: { step: number, isLast: boolean }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-4">
      <li className={`flex md:w-full items-center ${step>0? "text-blue-600 dark:text-blue-500": "text-gray-600 dark:text-gray-300"} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-4 dark:after:border-gray-700`}>
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {step<1? (<span className="me-2">1</span>) : (<CircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"/>)}
          User <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className={`flex md:w-full items-center ${step>=2? "text-blue-600 dark:text-blue-500": "text-gray-600 dark:text-gray-300"} after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-2 xl:after:mx-4 dark:after:border-gray-700`}>
        
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        {step==1? (<span className="me-2">2</span>) : (<CircleCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"/>)}
          Profile <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className="flex items-center">
        <span className="me-2">3</span> Preferences
      </li>
    </ol>
  )
}

export default Stepper