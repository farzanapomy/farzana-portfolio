import Particles from "react-tsparticles";

export const ParticlesBg = () => {
    const particlesInit = (main) => {
       

    };

    const particlesLoaded = (container) => {
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        // value: "#0d47a1",
                    },
                },
                fpsLimit: 600,
                interactivity: {
                    modes: {
                        bubble: {
                            distance: 10,
                            duration: 2,
                            opacity: 0.1,
                            size: 10,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 2100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,

                        opacity: 0.9,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: .8,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1200,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                // detectRetina: true,
            }}
        />
    );
};
