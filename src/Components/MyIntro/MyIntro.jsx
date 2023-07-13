import './MyIntro.css'


export default function MyIntro() {

    const personalInfo = {
        name: "Devesh Dhote",
        designation: "Data Science | Java Full Stack Developer",
        tagLine: `I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.`,
        DOB: "00/00/0000",
        email: "iamdeveshd11@gmail.com",
        mobile: "+91 9673098959",
        education : "B.Tech (Information Technology)",
        college : "Government College of Engineering, Amravati ",
        address: "Amravati, Maharashtra, India - 444603",
        freelance:"Available",
        profileImage:"https://bootdey.com/img/Content/avatar/avatar7.png"

    }


    return (
        <>
            <section className="myIntrocontainer">
                <div className="card-container">
                    <div className="card-content">
                        <div className="card-title">
                            <span className="title">Devesh Dhote</span>
                        </div>
                        <div className="card-body">
                            {/* <div className="left ">
                                iamdeveshd11@gmail.com <br />
                                9673098959 <br />
                                Government College of Engineering, Amravati, Maharashtra India <br />
                                B.Tech (Information technology)
                            </div>
                            <div className="right ">
                                
                            </div> */}

                            <div className="row">
                                <div className="column ">
                                    <div className="introTextBox">                                    
                                        <h2>{personalInfo.name}</h2>
                                        <div>
                                            <p>{personalInfo.email}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="column imgleft">
                                    <img src={personalInfo.profileImage} />
                                </div>
                            </div>



                        </div>
                        <div className="card-footer">
                            <span className="title">Some extra Information</span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}