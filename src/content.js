let content = {
    contact: {
        name: "Antonio Santiago",
        currentRole: "Fullstack Developer",
        
        age: 25,
        location: "Zapopan, Jalisco",
        company: "Oracle",

        image:'/images/me.png'
    }, 

    accounts: {
        github: 'https://github.com/asantiagot',
        linkedin: 'https://www.linkedin.com/in/asantiagot/'
    },
    
    projects: {
        myPortfolio: {
            name: "Generic Portfolio Generator",
            summary: "A super easy generator that uses a JSON file to create your portfolio",
            thumbnail: "images/myPortfolio.png",
        }
    },

    about: {
        bio: "From Mexico City. My main hobbies are videogames, tennis and coding. I studied Computer Engineering at UNAM, and I joined the Software Engineering industry since 2016.",
    }, 

    trajectory: {
        role_1: {
            company: "Centro de Investigaciones de Diseño Industrial",
            role: "Web UI Developer",
            description: "Developed the whole UI of an Academic Platform, in conjunction with the Design team of the Faculty",
            date: {
                start: new Date("May 2015"),
                end: new Date("January 2016")
            }
        }, 
        role_2: {
            company: "Oracle",
            role: "Applications Developer",
            description: "Payables Team. Cloud application.",
            date: {
                start: new Date("February 2016"),
                end: new Date("July 2018")
            }
        },
        role_3: {
            company: "Oracle",
            role: "Senior Applications Developer",
            description: "More freedom when working on projects",
            date: {
                start: new Date("July 2018"),
            }
        }
    }
}

export default (content);