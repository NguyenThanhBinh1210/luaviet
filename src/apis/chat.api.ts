import http from '~/utils/http'

const chatApi = {
    getChats() {
        return http.get('/chats')
    },


}

export default chatApi
