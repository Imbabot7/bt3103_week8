<template>
    <div id="counter">
        <button id="minus" v-on:click=subtract()>-</button>
        <span> {{number}} </span>
        <button id="plus" v-on:click=add()>+</button>
    </div>
    
</template>

<script>
export default {
    props : {
        items: {
            type: Object
        }
    }
    ,data() {
        return {
            number:0
        }
    },
    methods: {
        add: function() {
            if (this.number == 10) {
                alert("You cannot buy more than 10 items.");
            } else {
                this.number = this.number + 1;
            }
            this.$emit('counter', this.items, this.number);
            },
        subtract: function() {
            this.number = Math.max(0,this.number-1);
            this.$emit('counter', this.items, this.number);
        }
    }
}
</script>

<style>
    div {
        font-size: 26px;
    }

    div > button {
        background-color: pink;
        border-radius:8px;
        padding: 16px;
        margin: 5px
    }
</style>