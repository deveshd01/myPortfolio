import './MyIntro.css'


export default function MyIntro() {
    return (
        <>
            <section className="myIntrocontainer">
                <div className="card-container">
                    <div className="card-content">
                        <div className="card-title">
                            <span className="title">Devesh Dhote</span>
                        </div>
                        <div className="card-body bd">
                            <div className="left ">
                                iamdeveshd11@gmail.com <br/>
                                9673098959 <br/>
                                Government College of Engineering, Amravati, Maharashtra India <br/>
                                B.Tech (Information technology)
                            </div>
                            <div className="right ">
                                <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'/>
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