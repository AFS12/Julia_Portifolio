<template>
  <v-container fluid>
      <v-row>
            <v-col cols="14" md="1">
            </v-col>
            <v-col cols="14" md="12">
                <v-row :v-for="num in n">
                    <v-col cols="12" md="3">
                        <v-img 
                        src="../img/jujubinha.jpg"
                        max-height="100%"
                        max-width="100%"
                        center
                        ></v-img>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-img 
                        src="../img/jujubinha.jpg"
                        max-height="100%"
                        max-width="100%"
                        center
                        ></v-img>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-img 
                        src="../img/jujubinha.jpg"
                        max-height="100%"
                        max-width="100%"
                        center
                        ></v-img>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-img 
                        src="../img/jujubinha.jpg"
                        max-height="100%"
                        max-width="100%"
                        center
                        ></v-img>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="14" md="1">
            </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            n:[1,2,3,4,5]
        }
    }
}
</script>