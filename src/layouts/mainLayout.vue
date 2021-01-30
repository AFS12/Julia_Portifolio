<template>
  <v-app>
  

  <v-main>
    <v-app-bar
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Julia Goncalves</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs 
        v-model="tab"
        fixed-tabs
        dark
        >
          <v-tabs-slider color="purple"></v-tabs-slider>
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item.title }} - <v-icon> {{ item.icon }} </v-icon>
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
        <v-list-item-title class="title">
            Meus Portifolios
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>

          <v-divider color="black"></v-divider>

          <v-list-item>
            <v-list-item-title ><h3>Desenhos a Mao</h3></v-list-item-title>
          </v-list-item>
        
          <v-list-item>
            <v-list-item-title><h3>Desenhos Digitais</h3></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><h3>Minha Formacao</h3></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><h3>Sobre</h3></v-list-item-title>
          </v-list-item>

          <v-divider color="black"></v-divider>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-row>
        <v-col cols="12" md="2">
        </v-col>

        <v-col cols="12" md="8">

        <v-card 
        elevation="12"
        outlined
        color="indigo lighten-4"
        >
          <h1><v-card-title>{{item.cardTitle}}</v-card-title></h1>
          <v-spacer></v-spacer>
          <v-divider color="black"></v-divider>
          <h3><v-card-text v-text="item.text"></v-card-text></h3>
          
          
          <v-row v-if="item.title == 'About'">
            <v-col cols="12" md="2">
            </v-col>
            <v-col cols="12" md="8">
            <v-img 
            v-if="item.title == 'About'"
            src="../img/jujubinha.jpg"
            max-height="100%"
            max-width="100%"
            center
            ></v-img>
            </v-col>
            <v-col cols="12" md="2">
            </v-col>
          </v-row>
        </v-card>
        </v-col>

        <v-col cols="12" md="2">
        </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  data(){
    return{
      tab: null,
      drawer: false,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', cardTitle: 'loren 1', text: '111111111111111111111111111111'},
          { title: 'Photos', icon: 'mdi-image', cardTitle: 'loren 2', text: '2222222222222222222222222222222222'},
          { title: 'About', icon: 'mdi-help-box',cardTitle: 'Julia Goncalves',text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          { title: 'Credits', icon: 'mdi-help-box', cardTitle: 'loren 3', text: '333333333333333333333333333333333333'}
        ], 
    }
  }
}
</script>