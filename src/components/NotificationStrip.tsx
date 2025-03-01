import React from 'react';

const NotificationStrip = () => {
  return (
    <div className="hidden lg:block bg-[#242424] text-white py-2"> {/* Added hidden lg:block */}
            <div className="max-w-7xl xl:mx-auto lg:mx-10 sm:mx-3 px-4">
                <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-sm">
                        <span className="hidden sm:inline">🎉</span>
                        <p className="text-center w-full sm:w-auto">
                            Apply Online with No Credit Check & Get Cash Deposited in Your Account Within 24 Hours!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationStrip;
