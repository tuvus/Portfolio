import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

AOS.init();

function App() {
    let last_scroll_position = 0;
    const defaultCurveValue = 350;
    const curveRate = 3;
    let ticking = false;

    function scrollEvent(scrollPos: number) {
        if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
            const curveValue = defaultCurveValue - scrollPos / curveRate;
            const curveElement = document.getElementById("curve")!;
            const docWidth = document.body.offsetWidth;
            curveElement.setAttribute(
                "d", "M " + docWidth + " 300 Q 400 " + curveValue + " 0 300 L 0 0 L " + docWidth + " 0 L " + docWidth + "300 Z"
            );
        }
    }

    window.addEventListener("scroll", function () {
        last_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                scrollEvent(last_scroll_position);
                ticking = false;
            });
        }

        ticking = true;
    });
    window.addEventListener("resize", function () {
        last_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                scrollEvent(last_scroll_position);
                ticking = false;
            });
        }

        ticking = true;
    });
    useEffect(() => {
        scrollEvent(window.scrollY);
    }, []);

    return (
        <div className="w-max-1280px min-h-screen w-full">
            <div className="parallax-1 -z-5"></div>
            <header className="fixed items-center w-4/5 top-4 z-50">
                {/*Icons*/}
                <div className="flex justify-end gap-2">
                    <a href="https://www.linkedin.com/in/oskar-niesen/" target="_blank"
                       className="duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="#ffffff">
                            <path
                                d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/tuvus" target="_blank" className="ml-1.5 duration-300 hover:scale-110">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"
                             xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMinYMin" className="jam jam-github">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="mailto:oskarniesen1@gmail.com" target="_blank" className="duration-300 hover:scale-110">
                        <svg width="34" height="40" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 9 40 40"
                             stroke="#ffffff" stroke-width="0.00042">
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34 C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28 c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z"></path>
                            </g>
                        </svg>
                    </a>
                </div>

            </header>
            <div className="svg-container">

                <svg viewBox="0 0 800 400">
                    <mask id="starmask" className="mask-100%">
                        <path id="curve" fill="#ffffff" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                        </path>
                    </mask>
                </svg>
                <svg viewBox="0 0 800 400"
                     className=" svg-container bg-[url(/src/assets/StarBackgroundLarge.png)] mask-[url(#starmask)] mask-cover bg-center bg-cover">
                </svg>
            </div>
            <div className="approot top-0">
                <header className="flex flex-col mt-10 rounded-4xl">
                    <span className="text-6xl font-extrabold mb-6">Oskar Niesen</span>
                    <span className="text-2xl font-bold">Software Developer</span>
                </header>
                <section className="flex flex-col items-center w-full mt-140 overflow-x-hidden">
                    <span className="text-6xl">Projects</span>
                    <div className="flex flex-col p-8 gap-4 bg-gray-900 rounded-2xl mt-6">
                        <span className="text-lg">As a passionate software developer I have worked on many small and large projects, most of which can be found on GitHub.</span>
                        <span
                            className="text-lg">Programming languages include C#, Kotlin, Java, Typescript and C++.</span>
                        <a href="https://github.com/tuvus" target="_blank">
                            <button>GitHub Profile</button>
                        </a>
                    </div>
                    <div className="flex flex-col min-w-160 w-3/4 gap-10 p-4 align-middle">
                        <div
                            className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                            data-aos="fade-left">
                            <div
                                className="w-3/4 min-w-60 bg-[url(/src/assets/BigBattleHD.png)] bg-center bg-cover rounded-2xl"/>
                            <div className="flex flex-col gap-2 items-center">
                                <span className="font-bold text-3xl">Akroid</span>
                                <span>A space themed real time strategy game written and drawn from ground up using the Unity Game Engine.</span>
                                <a href="https://tuvus.github.io/" target="_blank">
                                    <button>Website/Demo</button>
                                </a>
                            </div>
                        </div>

                        <div
                            className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                            data-aos="fade-right">
                            <div className="flex flex-col gap-2 items-center">
                                <span className="font-bold text-3xl text-white">Euclid</span>
                                <span className="text-white">Euclid is a game engine built in C++ that focuses on easy parallelization and multiplayer synchronization.
                        To demonstrate the power of the game engine it includes a tower defense card game.</span>
                                <a href="https://github.com/tuvus/Euclid" target="_blank">
                                    <button>GitHub</button>
                                </a>
                            </div>
                            <div
                                className="w-5/4 min-w-60 bg-[url(/src/assets/Euclid.png)] bg-center bg-cover rounded-2xl"/>
                        </div>
                        <div
                            className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                            data-aos="fade-left">
                            <div
                                className="w-3/4 min-w-60 bg-[url(/src/assets/CourseScheduler.png)] bg-center bg-cover rounded-2xl"/>
                            <div className="flex flex-col gap-2 items-center">
                                <span className="font-bold text-3xl ">Course Scheduler</span>
                                <span className="">Course Scheduler that allows for easy importing and generating schedules for the Iowa State University computer science department.
                        This program helps find conflicts in the schedule and optimizes class times for administrators and professors.</span>
                                <a href="https://seniord.cs.iastate.edu/2025-Dec-09/" target="_blank">
                                    <button>Website</button>
                                </a>
                            </div>
                        </div>
                        <div
                            className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                            data-aos="fade-right">
                            <div className="flex flex-col gap-2 items-center">
                                <span className="font-bold text-3xl text-white">STEM Programs</span>
                                <span className="text-white">A set of algorithm-based games to teach and involve young learners in algorithmic thinking.</span>
                                <a href="https://github.com/CSE-Club-ISU/STEM-Programs" target="_blank">
                                    <button>GitHub</button>
                                </a>
                            </div>
                            <div
                                className="w-5/4 min-w-60 bg-[url(/src/assets/STEMPrograms.png)] bg-center bg-cover rounded-2xl"/>
                        </div>
                        <div
                            className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                            data-aos="fade-left">
                            <div
                                className="w-3/4 min-w-60 bg-[url(/src/assets/IowaSystems.png)] bg-center bg-cover rounded-2xl"/>
                            <div className="flex flex-col gap-2 items-center">
                                <span className="font-bold text-3xl">Iowa Systems</span>
                                <span className="">3d simulation of Iowa's prairie ecosystems to visualize the interactions of organisms.</span>
                                <div className="flex gap-4">
                                    <a href="https://tuvus.github.io/iowa-systems-demo/" target="_blank">
                                        <button>Demo</button>
                                    </a>
                                    <a href="https://github.com/tuvus/iowa-systems?tab=readme-ov-file" target="_blank">
                                        <button>GitHub</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
