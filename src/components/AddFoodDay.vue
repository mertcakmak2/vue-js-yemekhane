<template>
    <div class="add-food-day container z-depth-1">
        <h2 class="center-align indigo-text">Günün Yemeğini Ekle</h2>
        <form @submit.prevent="addFoodDay">
            <div class="field title">
                <label for="day">Günün Adı:</label>
                <input type="text" name="day" v-model="day">
            </div>
             <div class="field date">
                <label for="date">Günün Tarhi:</label>
                <input type="date" name="date" v-model="date">
            </div>
            <div v-for="(food, index) in foods" :key="index" class="field add-food">
                <label for="food">Yemek {{index+1   }}:</label>
                <input type="text" name="food" v-model="foods[index]">
                <i @click="deleteFood(food)" class="material-icons delete">delete</i>
            </div>
            <div class="field add-food">
                <label for="add-food">Yemek Ekle:</label>
                <input type="text" name="add-food" @keydown.enter.prevent="addFood" v-model="another">
            </div>
             <div class="field center-align">
                 <button class="btn indigo">Ekle</button>
            </div>
        </form>
    </div>
</template>

<script>
import moment from 'moment'
import db from '@/firebase/init'
import slugify from 'slugify';

export default {
    name:"AddFoodDay",
    data() {
        return {
            day:null,
            foods:[],
            another:null,
            date:null
        }
    },
    methods: {
        addFoodDay(){
            this.slug = slugify(this.day,{
                replacement:'-',
                remove:/[$*_+~.()'"!\-:@]/g,
                lower:true
            })            
           db.collection('foodArray').add({
               day:this.day,
               date:new Date(this.date),
               foods:this.foods,
               slug:this.slug
           }).then(()=>{
               this.$router.push({name:'Index'})
           })
        },
        addFood(){
            if(this.another){
                this.foods.push(this.another)
                this.another = null
            }
        },
        deleteFood(food){
            this.foods = this.foods.filter(f=>f != food)
        }
    },
    created(){
        // var tarih = "29022020"
        console.log(moment(new Date()).format("DD-MM-YYYY"));
    }
}
</script>

<style scoped>
    .add-food-day{
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }
    .add-food-day h2{
        font-size: 2em;
        margin: 20px auto;
    }
    .add-food-day field{
        margin: 20px auto;
    }
</style>