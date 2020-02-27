<template>
    <div class="edit-food-day container">
         <h2>Günün Yemeğini Güncelle {{this.$route.params.food_day_slug}}</h2>
         <form @submit.prevent="editFoodDay">
            <div class="field title">
                <label >Günün Adı:</label>
                <input type="text" v-model="foodDay.day">
            </div>
            <div v-for="(food, index) in foodDay.foods" :key="index" class="field add-food">
                <label for="food">Yemek {{index+1   }}:</label>
                <input type="text" name="food" v-model="foodDay.foods[index]">
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
import db from '@/firebase/init';
// import moment from 'moment';
import slugify from 'slugify';

export default {
    data() {
        return {
            foodDay:null,
            another:null
        }
    },
    created(){
        let ref = db.collection('foodArray').where('slug','==',this.$route.params.food_day_slug)
        ref.get().then(snapshot=>{
            snapshot.forEach(doc => {
                this.foodDay = doc.data()
                this.foodDay.id = doc.id;
            });
        })
    },
    methods: {
         addFood(){
            if(this.another){
                this.foodDay.foods.push(this.another)
                this.another = null
            }
        },
        deleteFood(food){
            this.foodDay.foods = this.foodDay.foods.filter(f=>f != food)
        },
        editFoodDay(){
            this.slug = slugify(this.foodDay.day,{
                replacement:'-',
                remove:/[$*_+~.()'"!\-:@]/g,
                lower:true
            })            
           db.collection('foodArray').doc(this.foodDay.id).update({
               day:this.foodDay.day,
               foods:this.foodDay.foods,
               slug:this.slug
           }).then(()=>{
               this.$router.push({name:'Index'})
           })
        }
    },
}
</script>