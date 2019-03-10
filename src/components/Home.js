import React from 'react'

const Home = () => {
return(
    <div className="content col-12 col-sm-6 mx-auto px-0 mt-0">
        <ul>
            <li class="job one">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/earthgang">Website: Earthgang</a>
                <p class="job__description">I teamed up with an illustrator to build this website for Earthgang. He did the illustration and I built it in React. A single page stateless app with a React backbone.</p>
            </li>
            <li class="job two">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/lyricsearch">Lyric search app</a>
                <p class="job__description">JSX & Context API. Axios calls to Musixmatch API.</p>
            </li>
            <li class="job three">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/small">Various small projects</a>
                <p class="job__description">Meme maker, to-dos, state&router exersizes, subdirectory apps</p>
            </li>
        </ul>
    </div>
    )
}

export default Home
