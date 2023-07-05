
import './ProfileLinks.css';


export default function ProfileLinks() {
    let userProfileLinks = {
        github: "https://github.com/deveshd01",
        linkedIn: "https://www.linkedin.com/in/deveshdhote/",
        drive: "https://drive.google.com/drive/folders/1a9aF3o43xEQ6QCNYYWWjerpV0dhZmztH?usp=sharing",
        hackerRank: "https://www.hackerrank.com/DeveloperDD?hr_r=1"
    }



    return (
        <div className='linksContainer'>
            <button className="button github" onClick={() => { window.open(userProfileLinks.github, '_blank'); }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="svgIcon">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.305 3.438 9.8 8.205 11.385.6.112.82-.26.82-.58 0-.29-.01-1.05-.015-2.055-3.338.722-4.042-1.61-4.042-1.61C3.405 18.013 2.79 17.7 2.79 17.7c-1.087-.743.083-.727.083-.727 1.202.086 1.835 1.236 1.835 1.236 1.07 1.834 2.806 1.305 3.487.995.108-.775.416-1.305.757-1.605-2.653-.295-5.44-1.327-5.44-5.89 0-1.3.465-2.365 1.235-3.195-.135-.296-.54-1.516.105-3.16 0 0 1.005-.32 3.3 1.225.96-.266 1.98-.397 3-.403 1.02.006 2.04.137 3 .403 2.28-1.545 3.285-1.225 3.285-1.225.645 1.644.24 2.864.12 3.16.765.83 1.23 1.895 1.23 3.195 0 4.578-2.795 5.59-5.455 5.88.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.29 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>

            </button>
            <button className="button linkedin" onClick={() => { window.open(userProfileLinks.linkedIn, '_blank'); }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="svgIcon">
                    <path d="M20.835 20.837h-3.318v-5.207c0-1.242-.025-2.837-1.729-2.837-1.729 0-1.993 1.353-1.993 2.746v5.298H10.93V9h3.12v1.464h0.043c0.436-0.822 1.499-1.688 3.081-1.688 3.297 0 3.899 2.17 3.899 4.992v5.069zM7.317 7.452C6.398 7.452 5.646 6.703 5.646 5.81c0-0.893 0.753-1.641 1.671-1.641 0.918 0 1.67 0.749 1.67 1.641 0 0.893-0.752 1.642-1.67 1.642zM5.532 20.837h3.318V9H5.532v11.837z" />
                </svg>
            </button>

            <button className="button drive" onClick={() => { window.open(userProfileLinks.drive, '_blank'); }} >
                <svg className='svgIcon' viewBox="0 -3 48 48" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
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

            <button className="button hackerrank" onClick={() => { window.open(userProfileLinks.hackerRank, '_blank'); }}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="svgIcon">
                    <path d="M20.835 20.837h-3.318v-5.207c0-1.242-.025-2.837-1.729-2.837-1.729 0-1.993 1.353-1.993 2.746v5.298H10.93V9h3.12v1.464h0.043c0.436-0.822 1.499-1.688 3.081-1.688 3.297 0 3.899 2.17 3.899 4.992v5.069zM7.317 7.452C6.398 7.452 5.646 6.703 5.646 5.81c0-0.893 0.753-1.641 1.671-1.641 0.918 0 1.67 0.749 1.67 1.641 0 0.893-0.752 1.642-1.67 1.642zM5.532 20.837h3.318V9H5.532v11.837z" />
                </svg> */}
                <svg className="svgIcon" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>HackerRank icon</title><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z"></path></g></svg>
            </button>

        </div>
    )

}