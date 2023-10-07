import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
function Download() {
    const frame = useRef("");
    useEffect(() => {
        setTimeout(() => {
            frame.current.classList.add("active");
        }, 300);
    }, []);
    return (
        <>
            <section className="download" ref={frame}>
                <div className="img"></div>
                <div className="inner">
                    <h1>
                        <span className="col1">Don't worry</span>
                        <br />
                        <span className="col2">subscribe right now!</span>
                    </h1>
                    <p className="ex">
                        Can use it anytime, anywhere as long as there is
                        internet!
                        <br />
                        Try this package that is essential when working with
                        documents.
                    </p>
                    <Link to="/" className="btn" title="Microsoft365">
                        Start Right Now
                    </Link>
                    <p>
                        You feeling burdened? A free trial is also available!
                        <span>
                            <Link to="/">Get in touch</Link>
                        </span>
                    </p>
                </div>
            </section>
            <section className="version active">
                <div className="img"></div>
                <h2>
                    Lightweight apps that
                    <br />
                    install in seconds
                </h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faWindows} />
                        <h3>Windows</h3>
                        <p>Windows 10+</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faApple} />
                        <h3>MacOS</h3>
                        <p>macOS 10.15+</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faAndroid} />
                        <h3>Android</h3>
                        <p>Google Play</p>
                    </li>
                </ul>
                <p>It can be used on the same OS as above.</p>
            </section>

            <section className="type active">
                <h2>
                    Office is now Microsoft 365 Boost productivity with
                    Microsoft more—all in one place.
                </h2>
                <div className="btn">
                    <Link to="/">Personal and family</Link>
                    <Link to="/">Business</Link>
                    <Link to="/">Enterprise</Link>
                    <Link to="/">Education</Link>
                </div>
            </section>
        </>
    );
}

export default Download;
