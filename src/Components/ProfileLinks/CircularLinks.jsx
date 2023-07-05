import './CircularLinks.css'



export default function CircularLinks() {

    let userProfileLinks = {
        github: "https://github.com/deveshd01",
        linkedIn: "https://www.linkedin.com/in/deveshdhote/",
        drive: "https://drive.google.com/drive/folders/1a9aF3o43xEQ6QCNYYWWjerpV0dhZmztH?usp=sharing",
        hackerRank : "https://www.hackerrank.com/DeveloperDD?hr_r=1"
    }
    let svg = {
        drive: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
    }

    return (
        <>
            <div className="main">
                <div className="up">
                    <button className="card1" onClick={() => { window.open(userProfileLinks.drive, '_blank'); }} >
                       
                        <svg className='circulardrive' viewBox="0 -3 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">                             
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Color-" transform="translate(-601.000000, -955.000000)">
                                        <g id="drive" transform="translate(601.000000, 955.000000)">
                                            <polygon id="Shape1" fill="#3777E3" points="8.00048064 42 15.9998798 28 48 28 39.9998798 42"></polygon>
                                            <polygon id="Shape2" fill="#FFCF63" points="32.0004806 28 48 28 32.0004806 0 15.9998798 0"></polygon>
                                            <polygon id="Shape3" fill="#11A861" points="0 28 8.00048064 42 24 14 15.9998798 0"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </button>
                    <button className="card2" onClick={() => { window.open(userProfileLinks.linkedIn, '_blank'); }} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="circularlinkedin">
                            <path d="M20.835 20.837h-3.318v-5.207c0-1.242-.025-2.837-1.729-2.837-1.729 0-1.993 1.353-1.993 2.746v5.298H10.93V9h3.12v1.464h0.043c0.436-0.822 1.499-1.688 3.081-1.688 3.297 0 3.899 2.17 3.899 4.992v5.069zM7.317 7.452C6.398 7.452 5.646 6.703 5.646 5.81c0-0.893 0.753-1.641 1.671-1.641 0.918 0 1.67 0.749 1.67 1.641 0 0.893-0.752 1.642-1.67 1.642zM5.532 20.837h3.318V9H5.532v11.837z" />
                        </svg>
                    </button>
                </div>
                <div className="down">
                    <button className="card3" onClick={() => { window.open(userProfileLinks.github, '_blank'); }} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="circulargithub">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                    </button>
                    <button className="card4" onClick={() => { window.open(userProfileLinks.github, '_blank'); }} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="discord">
                            <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" />
                        </svg>
                    </button>
                </div>
            </div>


        </>
    )

}