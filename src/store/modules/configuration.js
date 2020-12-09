
const configuration = {
    state: {
        githubUsername: "GitHub-Laziji",
        blogTitle: "XYF-Homework",
        blogDescribe: "欢迎来到XYF的回家作业时间",
        htmlTitle: "XYF的回家作业",
        fontColor: "#ffffff",
        useBackgroundImage: false,
        backgroundColorLeft: "#155799",
        backgroundColorRight: "#159957",
        audioUrl: "",
        mini: false,
        audioAutoPlay:false,
        webSites:[]
    },

    mutations: {
        SET_CONFIGURATION: (state, configuration) => {
            state.githubUsername = configuration["githubUsername"] || "GitHub-Laziji"

            state.blogTitle = configuration["blogTitle"] || state.githubUsername

            state.blogDescribe = configuration["blogDescribe"] || `欢迎来到${state.githubUsername}的个人博客。`

            state.htmlTitle = configuration["htmlTitle"] || `${state.githubUsername}的博客`

            state.fontColor = configuration["fontColor"] || "#ffffff"
  
            state.useBackgroundImage = configuration["useBackgroundImage"] || false
 
            state.backgroundColorLeft = configuration["backgroundColorLeft"] || "#155799"
    
            state.backgroundColorRight = configuration["backgroundColorRight"] || "#159957"

            //http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3
            state.audioUrl = configuration["audioUrl"] || ""

            state.mini = configuration["mini"] || false

            state.audioAutoPlay = configuration["audioAutoPlay"] || false

            state.webSites = configuration["webSites"] || []
        }
    },

    actions: {
        LocalReload({ commit }, configuration) {
            commit('SET_CONFIGURATION', configuration)
        },
        Init({ commit }) {
            // let xmlhttp
            // if (window.XMLHttpRequest) {
            //     xmlhttp = new XMLHttpRequest()
            // } else {
            //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            // }
            // xmlhttp.open("GET", "../../../static/configuration.json", false)
            // xmlhttp.send()
            // let configuration = JSON.parse(xmlhttp.responseText)
            // commit('SET_CONFIGURATION', configuration)
        }
    }
}

export default configuration