import React from 'react'

interface LoadingIndicatorProps {
  isLoading: boolean
  children?: React.ReactNode
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading, children }) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-end h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-2 border-pink-500"></div>
          <span className="ml-4 text-pink-500 font-medium">Loading products...</span>
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default LoadingIndicator