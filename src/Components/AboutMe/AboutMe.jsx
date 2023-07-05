import React from 'react';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import './AboutMe.css';

export default function AboutMe() {
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
        <div className="aboutMebody">
            <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">{personalInfo.name}</h3>
                                <h6 className="theme-color lead">
                                    {personalInfo.designation}
                                </h6>
                                <p>
                                    {personalInfo.tagLine}
                                </p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Phone</label>
                                            <p><a href={"tel:"+personalInfo.mobile}>{personalInfo.mobile}</a></p>
                                        </div>
                                        <div className="media">
                                            <label>Education</label>
                                            <p>{personalInfo.education}</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{personalInfo.address}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <p><a href ={"mailto:"+personalInfo.email}>{personalInfo.email}</a></p>
                                        </div>
                                        <div className="media">
                                            <label>College</label>
                                            <p>{personalInfo.college}</p>
                                        </div>
                                        <div className="media">
                                        <label>Freelance</label>
                                            <span className='text-white'>{personalInfo.freelance}</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar ">
                                <img
                                    src={personalInfo.profileImage}
                                    title=""
                                    alt="Profile Photo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <ProfileLinks/>
                    </div>
                </div>
            </section>


        </div>
    )

}