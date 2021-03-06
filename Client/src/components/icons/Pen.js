export default function Pen() {
    const strokeColor = "var(--black)";

    return (
        <svg className="icon" fill="none" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path
                d="M17.0382 3.83218C17.3008 3.56954 17.6126 3.3612 17.9558 3.21905C18.2989 3.07691 18.6667 3.00375 19.0382 3.00375C19.4096 3.00375 19.7774 3.07691 20.1206 3.21905C20.4637 3.3612 20.7755 3.56954 21.0382 3.83218C21.3008 4.09482 21.5092 4.40663 21.6513 4.74979C21.7934 5.09295 21.8666 5.46075 21.8666 5.83218C21.8666 6.20362 21.7934 6.57141 21.6513 6.91457C21.5092 7.25773 21.3008 7.56954 21.0382 7.83218L7.53818 21.3322L2.03818 22.8322L3.53818 17.3322L17.0382 3.83218Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
