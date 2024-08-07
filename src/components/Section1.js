
// const scrollToDiv = (ref) => {
//     if (ref.current) {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
// };

import '../style/Welcome.css'

function Section1() {
    return (
        <section className="hero">
            <div className="container">
                <div id="heading">AllianceAgenda</div>
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1 className="hero-title mt-0">Welcome, <span id="username"></span></h1>
                        <p className="hero-paragraph">AllianceAgenda me aapka swagat hai !</p>
                        <div className="hero-cta">
                            <a className="button button-primary" href="#targetDiv"
                            //   onClick={() => scrollToDiv('targetDiv')}
                            >Services</a>
                            <a className="button" href="#">Need Help, Call - Ashish</a>
                        </div>
                    </div>

                    <div className="hero-figure anime-element">
                        <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                            <rect width="528" height="396" style={{ fill: 'transparent' }} />
                        </svg>
                        {/* Add all the hero-figure-box elements here */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Section1;    