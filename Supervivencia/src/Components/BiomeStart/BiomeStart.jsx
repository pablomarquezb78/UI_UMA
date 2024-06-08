import React, { useRef, useEffect } from "react";
import './BiomeStart.css';

function BiomeStart({ video, title, subtitle }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (videoRef.current) {
                        if (entry.isIntersecting) {
                            videoRef.current.play();
                        } else {
                            videoRef.current.pause();
                        }
                    }
                });
            },
            {
                threshold: 0.7
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <section className="w-100 h-100">
            <header className="w-100 biomeStartHeader">
                <div className="w-100 biomeStartDivHeader">
                    <video
                        ref={videoRef}
                        className="w-100"
                        controls={false}
                        muted
                        alt={"Imagen inicio bioma " + title}
                        autoPlay
                        loop
                    >
                        <source src={'/VideosGrid/' + video + '.mp4'} type="video/mp4" />
                    </video>
                    <div className="w-100 h-100 position-absolute top-0"></div>
                    <div className="d-flex w-100 justify-content-center align-items-center position-absolute biomeStartTextHeader">
                        <article className="d-flex justify-content-center align-items-center flex-column">
                            <h1>{title}</h1>
                            <footer>{subtitle}</footer>
                        </article>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default BiomeStart;
