const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full">
                <div className="col-span-1 xl-row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                        
                        <div>
                            <p className="grid-headtext">Hi, I am Hugo</p>
                            <p className="grid-subtext">I am currently a year 2 data science student studying in City University of Hong Kong, honing my skill in UI/UX design and data analysis, with a passion on computing and finance field</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid2" className="w-full sm:h-[276px] h-fit object-contain" />
                        
                        <div>
                            <p className="grid-headtext">My Skills</p>
                            <p className="grid-subtext">I am proficient in Python, SQL, and have experience in using Tableau, and UI/UX design tools such as Figma</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[276px] h-fit object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About