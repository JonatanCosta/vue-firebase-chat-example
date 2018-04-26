import Vue from 'vue'
import Vuex from 'vuex'

import 'babel-polyfill'

import Firebase from 'firebase'
import 'firebase/firestore'
import config from '../config/config'

import users from '../vuex/users'
import conversations from '../vuex/conversations'

Firebase.initializeApp(config)

Vue.use(Vuex)

const state = {
    db: Firebase.firestore()
}

export default new Vuex.Store({
    state,
    modules: {
        users,
        conversations
    }
})