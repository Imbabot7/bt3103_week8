<template>
    <div id="shoppingBasket">
        <!--{{lst}}-->
        <p>Menu:</p>
        <ul>
            <li v-for="item in lst" :key="item.name">
                
                {{item[0]}} x {{item[1]}} 

            </li>
            
        </ul>
        <button v-on:click="a=true; sendOrder()">Add Order</button>
        <p v-show="a">Subtotal: ${{findTotal}} </p>
        <p v-show="a">Grand Total: ${{findGST}} </p>
        
    </div>
</template>

<script>
import database from './firebase.js'
export default {
    props: {
        lst: {
            type: Array
        },
        test: {
            type: String
        }
    },
    data() {
        return {
            a:false,
            total:0,
            
        }
    },
    computed: {
        findTotal: function() {
            //this.a=true;
            //this.total = this.total + this.lst[0][1]*this.lst[0][2];
            //var sum = 0;
            /*for(var i;i<this.lst.length;i++) {
                sum = sum + this.lst[i][1]*this.lst[i][2];
            }*/
            /*for (var item in this.lst) {
                this.total = this.total + item[2]*item[1];
            }*/
            //this.total = sum;
            /*for (var i;i<10;i++) {
                sum += i;
            }
            return sum;*/
            //return this.lst[0][1]*this.lst[0][2];
            var total=0;
            var num = 0;
            while (num < this.lst.length) {
                total += this.lst[num][1]*this.lst[num][2]
                num += 1;
            }
            return total;
        },
        findGST: function() {
            var total=0;
            var num = 0;
            while (num < this.lst.length) {
                total += this.lst[num][1]*this.lst[num][2]
                num += 1;
            }
            return (total*1.07).toFixed(2);
            
        }
    },
    methods: {
        sendOrder: function() {
            

        var menuList = {
            "Prawn omelette":0,
            "Dry Beef Hor Fun":0,
            "Sambal KangKung":0,
            "Pork Fried Rice":0,
            "Mapo Tofu":0,
            "Cereal Prawn":0
        }

        for (let i=0; i<this.lst.length; i++) {
            menuList[this.lst[i][0]] = this.lst[i][1];
        }

        database.collection('orders').add({
            order1: {name:"Prawn omelette",qty:menuList["Prawn omelette"]},
            order2: {name:"Dry Beef Hor Fun",qty:menuList["Dry Beef Hor Fun"]},
            order3: {name:"Sambal KangKung",qty:menuList["Sambal KangKung"]},
            order4: {name:"Pork Fried Rice",qty:menuList["Pork Fried Rice"]},
            order5: {name:"Mapo Tofu",qty:menuList["Mapo Tofu"]},
            order6: {name:"Cereal Prawn",qty:menuList["Cereal Prawn"]}
        }).then(() => {location.reload()});
            
        }
    }
}
</script>

<style>
/*
    ul {
        display:inline;
        flex-wrap:nowrap;
        list-style-type:disc;
    }

    li{
        flex-grow: 0;
        flex-basis: auto;
        border: none;
    }
*/
/*
    #menu {
        position: absolute;
        top: 25%;
        left: 78%
        

    }
*/
</style>