import './App.css'

function App() {

    return (
        <div className="min-h-screen w-full">
            <header className="flex flex-col">
                <span className="text-5xl mb-6">Oskar Niesen</span>
                <span className="text-2xl font-bold">Software Developer</span>
            </header>
            <section className="flex flex-col items-center w-full">
                <span className="text-4xl">Projects</span>
                <a href="https://github.com/tuvus" target="_blank">
                    <button>GitHub</button>
                </a>
                <div className="flex flex-col w-3/4 gap-10 p-4 align-middle">
                    <div
                        className="flex flex-col items-center p-8 bg-[url(/src/assets/BigBattleHD.png)] md:bg-cover rounded-2xl">
                        <span className="font-bold text-3xl">Akroid</span>
                        <span>Akroid is a space themed real time strategy game written from ground up using the Unity Game Engine.</span>
                        <a href="https://tuvus.github.io/" target="_blank">
                            <button>Website/Demo</button>
                        </a>
                    </div>
                    <div
                        className="flex flex-col items-center p-8 bg-[url(/src/assets/Euclid.png)] md:bg-cover rounded-2xl">
                        <span className="font-bold text-3xl text-black">Euclid</span>
                        <span className="text-black">Euclid is a game engine built in C++ that focuses on easy parallelization and multiplayer synchronization.</span>
                        <a href="https://github.com/tuvus/Euclid" target="_blank">
                            <button>GitHub</button>
                        </a>
                    </div>
                    <div
                        className="flex flex-col items-center p-8 bg-[url(/src/assets/CourseScheduler.png)] md:bg-cover rounded-2xl">
                        <span className="font-bold text-3xl ">Course Scheduler</span>
                        <span className="">Course Scheduler that allows for easy importing and generating schedules for the Iowa State University computer science department.</span>
                        <a href="https://seniord.cs.iastate.edu/2025-Dec-09/" target="_blank">
                            <button>Website</button>
                        </a>
                    </div>
                    <div
                        className="flex flex-col items-center p-8 bg-[url(/src/assets/STEMPrograms.png)] md:bg-cover rounded-2xl">
                        <span className="font-bold text-3xl text-black">STEM Programs</span>
                        <span className="text-black">A set of algorithm-based games to teach young learners.</span>
                        <a href="https://github.com/CSE-Club-ISU/STEM-Programs" target="_blank">
                            <button>GitHub</button>
                        </a>
                    </div>
                    <div
                        className="flex flex-col items-center p-8 bg-[url(/src/assets/IowaSystems.png)] md:bg-cover rounded-2xl">
                        <span className="font-bold text-3xl">Iowa Systems</span>
                        <span className="">Simulation of Iowa's prarie ecosystems.</span>
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
            </section>
        </div>
    )
}

export default App
