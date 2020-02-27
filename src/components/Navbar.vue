<template>
    <div class="navbar">
        <nav>
            <div class="nav-wrapper">
                <router-link :to="{name:'Index'}"> <span>Yemekhane App</span> </router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a class="btn-floating btn-large waves-effect waves-light red">
                            <router-link :to="{name:'AddFoodDay'}">
                                <i class="material-icons">add</i>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.navbar nav{
    padding: 0 20px;
    width: 100%;
    height: 10%;
} 
</style>