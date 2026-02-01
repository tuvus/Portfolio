import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            curveElement.setAttribute(
                "d", "M 800 300 Q 400 " + curveValue + " 0 300 L 0 400 L 800 400 L 800 300 Z"
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

    return (
        <div className="min-h-screen w-full">
            <div className="svg-container">
                <svg viewBox="0 0 800 400" className="svg bg-[url(/src/assets/StarBackgroundLarge.png)] md:bg-center md:bg-cover">
                    <path id="curve" fill="#242424" d="M 800 300 Q 400 350 0 300 L 0 400 L 800 400 L 800 300 Z">
                    </path>
                </svg>
            </div>
            <header
                className="flex flex-col p-8 rounded-4xl">
                <span className="text-5xl mb-6">Oskar Niesen</span>
                <span className="text-2xl font-bold">Software Developer</span>
            </header>
            <section className="flex flex-col items-center w-full mt-12 overflow-x-hidden">
                <span className="text-6xl">Projects</span>
                <div className="flex flex-col p-8 gap-4 bg-gray-900 rounded-2xl mt-6">
                    <span className="text-lg">As a passionate software developer I have worked on many small and large projects, most of which can be found on GitHub.</span>
                    <span className="text-lg">Programming languages include C#, Kotlin, Java, Typescript and C++.</span>
                    <a href="https://github.com/tuvus" target="_blank">
                        <button>GitHub Profile</button>
                    </a>
                </div>
                <div className="flex flex-col min-w-160 w-3/4 gap-10 p-4 align-middle">
                    <div
                        className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                        data-aos="fade-left">
                        <div
                            className="w-3/4 min-w-60 bg-[url(/src/assets/BigBattleHD.png)] md:bg-center md:bg-cover rounded-2xl"/>
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
                            className="w-5/4 min-w-60 bg-[url(/src/assets/Euclid.png)] md:bg-center md:bg-cover rounded-2xl"/>
                    </div>
                    <div
                        className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                        data-aos="fade-left">
                        <div
                            className="w-3/4 min-w-60 bg-[url(/src/assets/CourseScheduler.png)] md:bg-center md:bg-cover rounded-2xl"/>
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
                            className="w-5/4 min-w-60 bg-[url(/src/assets/STEMPrograms.png)] md:bg-center md:bg-cover rounded-2xl"/>
                    </div>
                    <div
                        className="flex p-8 gap-4 bg-gray-900 rounded-2xl transform transition duration-300 hover:scale-102"
                        data-aos="fade-left">
                        <div
                            className="w-3/4 min-w-60 bg-[url(/src/assets/IowaSystems.png)] md:bg-center md:bg-cover rounded-2xl"/>
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
    )
}

export default App
