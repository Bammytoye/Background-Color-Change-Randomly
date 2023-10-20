// import React from 'react'

const Background = () => {

    const handleClick = (e) => {
        // console.log(e.target.value);
        const body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor () {
        let letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }   

    return (
        <div className="flex flex-col justify-center items-center mt-[250px]">
            <h1 className="text-lg md:text-3xl text-center font-bold uppercase font-serif">
                Background Color Change Randomly
            </h1>
            <button onClick={handleClick} className="border p-4 text-sm rounded-full bg-slate-500 font-bold">
                Click Me!!!
            </button>
        </div>
    )
}

export default Background