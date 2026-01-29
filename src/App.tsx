import './App.css'

function App() {

    return (
        <>
            <header className="flex flex-col">
                <span className="text-5xl mb-6">Oskar Niesen</span>
                <span className="text-2xl font-bold">Software Developer</span>
            </header>
            <section className="min-w-screen">
                <span className="text-4xl">Projects</span>
                <div className="flex flex-col gap-10 p-4">
                    <div className="flex flex-col items-center w-5/6 gap-6 bg-[url(/src/assets/BigBattleHD.png)] dark:bg-white md:flex-row md:gap-8 rounded-2xl">
                        {/*<img className="blur-xs rounded-2xl " src="/src/assets/BigBattleHD.png" alt="Picture of a Space Battle"/>*/}
                        <span className=" font-bold text-2xl">Akroid</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
