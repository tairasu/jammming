import React from 'react';


function Button(props) {

    const handleMouseDown = (e) => {
        //add translate-y-1 to the button
        e.currentTarget.classList.add('translate-y-1');
    };
    
    const handleMouseUp = (e) => {
        //remove translate-y-1 from the button
        e.currentTarget.classList.remove('translate-y-1');
    };

    return(
        <div className="relative">
               
                <button
                    className="absolute duration-75 top-0 z-20 left-0 p-2 bg-indigo-400 text-indigo-50 rounded-full"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={() => props.onAdd()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
                <div className="z-10 bg-black translate-y-1 rounded-full p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
    )
}

export default Button;