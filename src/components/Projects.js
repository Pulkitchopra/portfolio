import React from 'react'
import logo from '../images/project -1.jpg'
import notebook from '../images/notes app.png'
import cryptotracker from '../images/web-crypto-project.vercel.app_.png';
import netflixclone from '../images/netflix clone.png';

const Projects = (props) => {

    const projects = [
        {
            id: 1,
            logo: logo,
            Title: "Portfolio Website",
            Description: "Designed and deployed a responsive Personal Portfolio website. Designed and deployed a responsive Personal Portfolio website",
            skills: "React",
            skill2: "Tailwind",
            source: 'https://pulkitchopra.github.io/portfolio/'
        },
        {
            id: 2,
            logo: cryptotracker,
            Title: "CryptoTracker",
            Description: "Build and deployed a responsive Cryptocurrency tracking website ",
            skills: "React",
            skill2: "Material UI",
            source: 'https://web-crypto-project.vercel.app/'
        },
        {
            id: 3,
            logo: notebook,
            Title: "Notes Website",
            Description: "Notes website for writing, adding, deleting and updating notes.",
            skills: "React",
            skill2: "CSS",
            source: 'notebook'
        },
        {
            id: 4,
            logo: netflixclone,
            Title: "Netflix Clone",
            Description: "Designed and developed a Full Stack Netflix Clone using React JS",
            skills: "React",
            skill2: "CSS",
            source: 'https://web-netflix-clone.vercel.app/'
        },
    ]
    return (


        <section className='min-h-screen pb-8' id='projects' style={{ backgroundColor: props.webMode === 'light' ? 'rgb(252,252,252)' : 'rgb(32,32,43)' }}>
            <h1 className='text-3xl text-center font-bold text-clip' style={{ color: props.webMode === 'light' ? 'black' : 'white' }}>Projects</h1>
            <div className='p-6  rounded-3xl sm:m-6' >
                
                {projects.map(({ id, logo, Title, Description, source, skill2 }) => {


                    return (
                   
                        <div className='flex justify-center my-8' key={id}>
                            <div className='flex sm:grid bg-white p-3 rounded-lg shadow-xl'>

                                <div className='p-3'>


                                <a href={source}>    
                                    <img src={logo} className='h-96 w-[34rem] sm:h-48 rounded-md project-img' alt='' />
                                </a>
                                </div>
                                <div className='right w-80 p-8 sm:p-1 h-96 my-3'>
                                    <h1 className='text-center white mt-3 text-xl font-bold sm:ml-8 sm:mt-1'>{Title}</h1>
                                    <p className=' text-lg font-semibold my-6 text-gray-500 text-center'>{Description}</p>
                                    <div className='flex gap-4 justify-center'>
                                        <button className='bg-white p-2 rounded my-3 text-lg shadow-md'>React</button>
                                        <button className='bg-white p-2 rounded my-3 text-lg shadow-md'>{skill2} </button>
                                    </div>
                                    
                                    <div className='flex gap-8 justify-evenly my-3 content-center text-lg'>

                                        <a href='https://github.com/Pulkitchopra' className='btn text-center'>Code <i className="fa-brands fa-github"></i> </a>
                                        <a href={source} className='btn text-center'>Project <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default Projects
