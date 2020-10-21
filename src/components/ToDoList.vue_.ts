import vue from 'vue';

export default vue.extend({
    props: {
        list: Object
    },
    methods: {
        todo(id: number) {
            this.$emit("expand", id)
        },
        
    }
}
)