import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hello, My Name is Florjan</h2>
                <div className='prompt'>
                    <p>
                        A software developer with a passion for learning and creating
                    </p>
                    <a
                        href="https://www.linkedin.com/in/florjan-capuri-302bb71bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.w3schools.com">
                        <EmailIcon />
                    </a>
                    <a
                        href="https://github.com/FlorjanCapuri"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon />
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2> Front-End </h2>
                        <span>
                            ReactJS, HTML, CSS, JavaScript
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Back-End </h2>
                        <span>
                            MySql, PHP
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Languages </h2>
                        <span>
                            Java, JavaScript, Python, C#
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;