const initialState = {
    activeAula: { id: 1, title: "Primeira aula" },
    activeModule: {
        id: 1,
        title: 'Iniciando com react',
    },
    modules: [{
        id: 1,
        title: 'Iniciando com react',
        aulas: [
            {
                id: 1, title: "Primeira aula"
            }, {
                id: 2, title: "Segunda aula"
            }
        ]
    },
    {
        id: 2,
        title: 'Iniciando com redux',
        aulas: [
            {
                id: 3, title: "Terceira aula"
            }, {
                id: 4, title: "Quarta aula"
            }
        ]
    }
    ]
}

export default function course(state = initialState, action) {
    if (action.type === "TOGGLE_LESSON") {
        return {
            ...state,
            activeModule: action.module,
            activeAula: action.lesson
        }
    }
    return state
}