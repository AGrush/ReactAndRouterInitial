import React from 'react'

const Home = () => {
return(
    <div className="content col-12 col-sm-6 mx-auto px-0 mt-0">
        <ul>
            <li class="job three">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://ag-shopping-list-mern-stack.herokuapp.com/">MERN stack shopping list</a>
                <p class="job__description">A fully MERN (MongoDB, Express, React, Node) app deployed to Heroku. Also using Redux & React-strap. <a className="inline-link small" rel="noopener noreferrer" target="_blank" href="https://github.com/AGrush/MERN-stack-React-app">/github</a></p>
            </li>
            <li class="job one">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/petadoption">Pet Adoption App</a>
                <p class="job__description">A new app I built over the weekend using the petfinder API which lets you search for pets around the US. Practicing Context API, Consumers/Providers, forms and passing around props & state. <a className="inline-link small" rel="noopener noreferrer" target="_blank" href="https://github.com/AGrush/Pet-adoption-app-React-v16">/github</a></p>
            </li>
             <li class="job two">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/skinnydip">Skinnydip test</a>
                <p class="job__description">I built a simple website with components made in React (Parallax, Modals, Carousel, ReqRes API data) <a className="inline-link small" rel="noopener noreferrer" target="_blank" href="https://github.com/AGrush/SkinnyDip-React">/github</a></p>
            </li>
            <li class="job three">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/earthgang">Website: Earthgang</a>
                <p class="job__description">I teamed up with an illustrator to build this website for Earthgang. He did the illustration and I built it in React. A single page stateless app with a React backbone. </p>
            </li>
            <li class="job one">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/lyricsearch">Lyric search app</a>
                <p class="job__description">JSX & Context API. Axios calls to Musixmatch API. <a className="inline-link small" rel="noopener noreferrer" target="_blank" href="https://github.com/AGrush/Lyric-Search-React-App">/github</a></p>
            </li>
            <li class="job two">
                <a className="job__header" rel="noopener noreferrer" target="_blank" href="https://agwebdesign.net/react/basicredux">Basic setup for Redux</a>
                <p class="job__description">No frills Redux boilerplate. <a className="inline-link small" rel="noopener noreferrer" target="_blank" href="https://github.com/AGrush/ReactRedux">/github</a></p>
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
