const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full">
                <div className="col-span-1 xl-row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                        
                        <div>
                            <p className="grid-headtext">Hi, I am Hugo</p>
                            <p className="grid-subtext">I am currently a data science student studying in City University of Hong Kong, honing my skill in data science and exploring the path of being full stack developer, with a passion on computing and finance field</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid2" className="w-full sm:h-[276px] h-fit object-contain" />
                        
                        <div>
                            <p className="grid-headtext">My Skills</p>
                            <p className="grid-subtext">I am proficient in Python, SQL for doing data analysis and machine learning, and have experience in using Tableau, PowerBI experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[276px] h-fit object-contain" />
                        </div>

                        <div>
                            <p className="grid-headtext">My Projects</p>
                            <p className="grid-subtext">I have done several projects in data analysis and machine learning, and have experience in using Tableau, PowerBI experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About