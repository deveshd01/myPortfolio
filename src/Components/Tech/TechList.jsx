import React, { useEffect, useState } from 'react';
import './TechList.css';



let techListData = {
    "DataScience": {
        'Machine Learning': { "1234567": "", "12354567": "", "12344567": "", "12342567": "", }, 'Deep Learning': { "1234567": "" }, 'Computer Vision': { "1234567": "" }
    },
    "DSA": {
        "topic1": { "1234567": "" }, "topic2": { "1234567": "" }, "topic3": { "1234567": "" }, "topic4": { "1234567": "" }, "topic5": { "1234567": "" }
    },
    "JAVA": {
        'code JAVA': { "1234567": "" }, 'JDBC': { "1234567": "" }, 'Hibernate': { "1234567": "" }, "Spring": { "1234567": "" }, 'Spring Boot': { "1234567": "" }
    },
    "C++": {
        "topic1": { "1234567": "" }, "topic2": { "1234567": "" }, "C++2": { "1234567": "" }, "C++3": { "1234567": "" }, "C++4": { "1234567": "" }
    },
    "Python": {
        "Python": { "1234567": "" }, "Python2": { "1234567": "" }, "Python3": { "1234567": "" }, "topPythonic4": { "1234567": "" }, "topic5": { "1234567": "" }
    },
    "DBMS": {
        "Dbms": { "1234567": "" }, 'SQL': { "1234567": "" }
    },
    "Android": { "Android Development With JAVA": { "1234567": "" } }
};


export default function TechList() {

    const [activeTab, setActiveTab] = useState(0);
    const [hoverTab, setHoverTab] = useState(0);
    const [subArr, setsubArr] = useState([]);
    const [subArr2, setsubArr2] = useState([]);
    const [view1, setView1] = useState(false);
    const [view2, setView2] = useState(true);



    let arr = Object.keys(techListData)

    useEffect(() => {
        const csswidth = `
          .wrapper nav .tab {
            width: ${100 / arr.length}%;
          }
        `;
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(csswidth));
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [arr.length]);




    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    const handleHover = (index) => {
        setHoverTab(index);
        // setActiveTab(index);
        setsubArr(Object.keys(techListData[arr[index]]));
    };
 


    return (
        <div>
            <div className="techListAll techListBody">
                <div className="wrapper" onMouseLeave={()=>setsubArr([])}>
                    <nav>
                        {arr.map((item, index) => (
                            <React.Fragment key={index}>
                                <input type="radio" name="tab" id={item.toLowerCase()} checked={activeTab === index} onChange={() => handleTabChange(index)} />

                                <label htmlFor={item.toLowerCase()} className={item.toLowerCase()} onMouseEnter={() => { handleHover(index); }} >
                                    <a href="#">
                                        <i className={`fas fa-${item.toLowerCase()}`} />
                                        {item}
                                    </a>
                                </label>
                            </React.Fragment>
                        ))}
                        <div className="tab" style={{ left: `${(100 / (arr.length)) * activeTab}%` }} ></div>
                    </nav>
                    <div className='card'>
                        <div className="submenu d-flex justify-content-around" >
                            {subArr.map((value, index) => {
                                // console.log("====",Object.keys(techListData[arr[hoverTab]][value]));
                                return (<>
                                    <span key={index} className='d-flex flex-column align-items-center'>
                                        <a href="#"> {value} </a>
                                        {    Object.keys(techListData[arr[hoverTab]][value]).map((val, i) => {
                                                return (<a key={index} className='subsubmenu' >{val}</a>)
                                            })}
                                    </span>
                                </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}