<template>
    <div>  
        <p v-for="(item, index) in datapacket[0]" :key="item.key">
            {{item.name}} : {{item.count}} 
            <br>
            <input v-bind:id="index" placeholder=0 type="number" min="0">
        </p>   
        <button v-on:click="updateOrder()">Update Order</button>
    </div>
</template>

<script>
import database from './firebase.js'
export default {
    props:['id'],
    data() {
        return {
            msg: "hi",
            datapacket: [],

        }
    },

    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.id).get().then(snapshot => {
                const document = snapshot.data();
                this.datapacket.push(document);
                /*
                snapshot.docs.forEach(doc => {
                    this.datapacket.push([doc.id, doc.data()]);*/
                //});
            });
        },
        updateOrder: function() {
           // var copy = datapacket;
           let copy = Object.assign(this.datapacket,{});
           var newList = copy[0];

           for (var i=1; i<=6; i++) {
               var ident = "order" + i;
               if (document.getElementById(ident).value !== null && document.getElementById(ident).value !== "") {
                   newList[ident].qty = document.getElementById(ident).value;
               }
           }

           database.collection('orders').doc(this.id).set(copy[0]).then(() => this.$router.push({
               path :'/orders'
           }));

        }
    },
    
    created() {
        this.id= this.$route.params.id;
        this.fetchItems()
    }
}
</script>

<style>

</style>