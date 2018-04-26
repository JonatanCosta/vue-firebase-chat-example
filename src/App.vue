<template>
    <div>
        <div>
            <Initialize/>
        </div>
        <div>
            <ConversationContainer
                    v-for="id in convoIds"
                    :conversation="conversations[id]"
                    :id="id"
                    :key="id"
            />
        </div>
    </div>
</template>

<script>
    import Initialize from './components/Initialize.vue'
    import ConversationContainer from './components/ConversationContainer.vue'

    import {mapState} from 'vuex'

    export default {
        name: 'app',
        created() {
            // console.log(this.$store.state.db)
        },
        components: {
            Initialize,
            ConversationContainer
        },
        computed: {
            ...mapState({
                conversations: state => state.conversations.all,
                convoIds: state => state.conversations.allIds
            })
        },
    }
</script>

<style>
</style>