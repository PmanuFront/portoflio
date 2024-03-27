import type { Experience } from "../models/experience.model";
import { TechType } from "../models/technonlogie.model";

export const experienceData: Experience[] = [
    {
        title: "Frontend developer",
        description: "En mi primer proyecto profesional formé parte del equipo frontend que se encargó de desarrollar el front de una spa con Angular 14. En este proyecto se usaron diversas librerías, tales como Angular Material o rxjs. Adicionalmente, se realizó el desarrollo de las correspondiente pruebas unitarias de cada uno de los componentes y módulos creados.",
        enterprise: "Viewnext",
        technologies: [
            {
                name: "Typescript",
                type: TechType.LP
            },
            {
                "name": "Angular",
                "type": TechType.F
            },
            {
                "name": "Git",
                "type": TechType.C
            },
            {
                "name": "Jasmine",
                type: TechType.O
            },
            {
                "name": "Karma",
                "type": TechType.O
            }
        ]
    },
    {
        title: "Frontend developer",
        description: "Desarrollo del front de una spa Vue 3 (composition API) para proyecto IBM, siguiendo el patrón de diseño de comportamiento. Se usarón liberías como Primevue, y Pinia como gestor de estados.",
        enterprise: "Viewnext",
        technologies: [
            {
                name: "Typescript",
                type: TechType.LP
            },
            {
                "name": "Vue",
                type: TechType.F
            },
            {
                name: "Git",
                type: TechType.C
            },
            {
                name: "Pinia",
                type: TechType.O
            },
            {
                "name": "Jira",
                "type": TechType.O
            }
        ]
    },
    {
        title: "Fullstack developer",
        description: "Desarrollo y resolución de incidencias de aplicaciones en cloud de AWS, usando diversas tecnologías tales como Angular y React en el front, Java con springboot en back y manejo de bbdd SQL",
        enterprise: "Viewnext",
        technologies: [
            {
                name: "Typescript",
                type: TechType.LP
            },
            {
                name: "Angular",
                type: TechType.F
            },
            {
                name: "React",
                type: TechType.F
            },
            {
                name: "Java",
                type: TechType.B
            },
            {
                name: "Springboot",
                type: TechType.B
            },
            {
                name: "SQL",
                type: TechType.BD
            },
            {
                name: "AWS",
                type: TechType.O
            },
            {
                name: "Git",
                type: TechType.O
            }
            
        ]
    }
]