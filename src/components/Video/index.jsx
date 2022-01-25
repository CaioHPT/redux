import React from "react";

import { connect } from "react-redux";

import './index.css'

function Video({ activeLesson, activeModule }) {
    if (activeLesson.title === "Primeira aula") {
        var Video = <iframe width="560" height="315" src="https://www.youtube.com/embed/7A4UQGrFU9Q" 
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" ></iframe>
    }
    else if (activeLesson.title === "Segunda aula") {
        var Video = <iframe width="560" height="315" src="https://www.youtube.com/embed/XuhV0l3uugU" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    else if (activeLesson.title === "Terceira aula") {
        var Video = <iframe width="560" height="315" src="https://www.youtube.com/embed/u99tNt3TZf8"
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    else if (activeLesson.title === "Quarta aula") {
        var Video = <iframe width="560" height="315" src="https://www.youtube.com/embed/6WB16wZS61c" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    } else {
        var Video = <iframe width="560" height="315" src="https://www.youtube.com/embed/jNXIQW6mmFA" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    return (
        <div>
            <div className='divVideo'>
                <strong>Modulo: {activeModule.title}</strong>
                <span>Aula: {activeLesson.title}</span>
                {Video}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    activeLesson: state.course.activeAula,
    activeModule: state.course.activeModule
})

export default connect(mapStateToProps)(Video)