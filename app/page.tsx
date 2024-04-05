export default function Home() {
    return (
        <>
            <div className="hero min-h-screen" style={{backgroundImage: "url('/DomCropped.jpg')"}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Whiskers & Wags</h1>
                        <p className="mb-5">Providing love, help, and home to pets in need</p>
                        <button className="btn btn-neutral" type="button"><a href="/about">Get Started</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}
