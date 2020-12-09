import UserApi from '@/api/user'


const user = {
    state: {
        avatarUrl: 'https://xyfcms.applinzi.com/admin',
        name: '寿喜烧',
        location: 'ShangHai',
        blog: "https://blog-xyf.vercel.app",
        followers: 521,
        following: 125
    },

    mutations: {
        SET_AVATAR_URL: (state, value) => {
            state.avatarUrl = value
        },
        SET_NAME: (state, value) => {
            state.name = value
        },
        SET_LOCATION: (state, value) => {
            state.location = value
        },
        SET_BLOG: (state, value) => {
            state.blog = value
        },
        SET_FOLLOWERS: (state, value) => {
            state.followers = value
        },
        SET_FOLLOWING: (state, value) => {
            state.following = value
        }
    },

    actions: {
        GetInfo({ commit }) {
            // UserApi.getInfo().then((response) => {
            //     let result = response.data
            //     commit('SET_AVATAR_URL', result['avatar_url'])
            //     commit('SET_NAME', result['name'])
            //     commit('SET_LOCATION', result['location'])
            //     commit('SET_BLOG', result['blog'])
            //     commit('SET_FOLLOWERS', result['followers'])
            //     commit('SET_FOLLOWING', result['following'])
            // })

        }
    }
}

export default user