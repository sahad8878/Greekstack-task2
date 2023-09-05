import React from 'react'

const FeedbackCard = ({name,post,description}) => {
  return (
    <div className="bg-white  p-5 w-60 rounded-2xl space-y-3">
              <div className="flex space-x-3 items-center">
                <div className="h-10 w-10 bg-[#b9b9b9] rounded-full"></div>
                <div className="space-y-1">
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-gray-600">
                    {post}
                  </p>
                </div>
              </div>
              <div className="text-sm">
             {description}
              </div>
            </div>
  )
}

export default FeedbackCard
