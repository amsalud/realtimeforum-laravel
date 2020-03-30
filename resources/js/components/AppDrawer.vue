<template>
    <v-navigation-drawer v-model="drawerToggle" absolute>
        <v-list>
            <v-list-item v-show="item.show" v-for="(item, index) in items" :key="index">
                <v-list-item-content >
                    <router-link :to="item.to" tag="v-list-item-title">
                        {{ item.title }}
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import MenuItems from '../helpers/MenuItems'

export default {
    name: 'AppDrawer',
    data(){
        return {
            drawerToggle : false,
            items: MenuItems.initialize()
        }
    },
    created(){
        EventBus.$on('drawer-toggle', data => {
            this.drawerToggle = data;
        });

        EventBus.$on('logout', ()=> { 
            this.items = MenuItems.initialize();
        });

        EventBus.$on('login', ()=> { 
            this.items = MenuItems.initialize();
        });
    }
}
</script>

<style  scoped>
    .v-list-item__content{
        cursor:pointer;
    }
</style>

