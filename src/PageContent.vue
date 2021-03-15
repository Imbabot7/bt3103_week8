<template>
    <!--<div id="food">-->
    <div id="food">
        <ul id="ulist">
            <li id="lilist" v-for="item in items" :key="item.id">
                <p><strong>{{ item.name}}</strong></p>
                <img v-bind:src="item.imageURL">
                <p>${{item.price}}</p>
                <qtyCounter v-bind:items="item" v-on:counter="onCounter"></qtyCounter>
            </li>
        </ul>
        <basket v-bind:lst = "itemsSelected"></basket>
        <!--<basket></basket>-->
    </div>
</template>

<script>
import Basket from './Basket.vue'
import database from './firebase.js'
export default {
    components: {
        basket: Basket
    },
    /*
    props: {
        someVar: {
            type: Array
        }
    },
    */
    data() {
        return {
            itemsSelected: [],
            items: []
        }
    },
    methods: {
        
        onCounter: function (item, count) {
            if (this.itemsSelected.length === 0 && count > 0) {
                //If there is nothing in items selected, push the ORDER in
                this.itemsSelected.push([item.name, count, item.price]);
            } else {

                // Loop through everything to check what is not in the basket
                for (let i = 0; i < this.itemsSelected.length; i++) {
                    const curr_item = this.itemsSelected[i];
                    const item_name = curr_item[0];

                // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
                    if (item_name == item.name && count > 0) {
                        this.itemsSelected.splice(i,1,[item_name,count,curr_item[2]])
                        //this.itemsSelected[i][1] = count;
                        break;
                    }
                // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
                    if (item_name == item.name && count == 0) {
                        this.itemsSelected.splice(i,1);
                        break;
                    }
                // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
                    else if (i == this.itemsSelected.length -1 ) {
                        this.itemsSelected.push([item.name, count, item.price]);
                    }
                }
            }
        }, 
        fetchItems: function() {
            database.collection('menu').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    this.items.push(doc.data());
                });
            });
        }
    },
    created() {
        this.fetchItems()
        
    }
}
    

</script>

<style>
    #itemsList {
        width: 100%;
        max-width: 70%;
        margin: 0px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    #ulist {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    #lilist {
        flex-grow: 1;
        flex-basis: 210px;
        text-align: center;
        padding: 10px;
        border: 1px solid #222;
        margin: 10px;
    }
    img {
        width: 135px;
        height: 135px;
    }

    #price {
        font-size: 30px;
    }

    #itemName {
        font-size: a30px;
    }

    #shoppingBasket {
        position: absolute;
        top: 36%;
        left: 75%;
    }

    #food {
        width:70%
    }


</style>