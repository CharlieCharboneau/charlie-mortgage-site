export default function Loading() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neu-base">
        <div className="bg-neu-base rounded-3xl p-8 shadow-neu-raised">
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="text-lg font-semibold text-gray-700">Loading...</span>
          </div>
        </div>
      </div>
    )
  }