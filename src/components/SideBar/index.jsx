import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import * as CourseActions from '../../store/actions/index'

import './index.css'

function SiderBar({ modules, toggleLesson }) {
    return (
        <aside>
            {
                modules.modules.map(module => (
                    <div className='course'>
                        <div className='title'>
                            <strong>{module.title}</strong>
                            <hr />
                        </div>
                        <ul key={module.id}>
                            {module.aulas.map(aula => (
                                <li key={aula.id}>
                                    {modules.activeAula.title === aula.title ?
                                        <button onClick={() => {
                                            toggleLesson(module, aula)
                                        }
                                        } className="btnCourse active">
                                            {aula.title}
                                        </button> :
                                        <button onClick={() => {
                                            toggleLesson(module, aula)
                                        }
                                        } className="btnCourse">
                                            {aula.title}
                                        </button>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </aside>
    )
}

const mapStateToProps = state => ({ modules: state.course })

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SiderBar)