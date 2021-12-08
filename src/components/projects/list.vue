<template>
    <div id="taskList">
        <hgroup class="list--WrapperTitle">
            <h1 class="list--title">Listes des projets</h1>
            <h2 class="list--subTitle">Vue d'ensemble de l'avancements des projets</h2>
        </hgroup>
        <v-container fluid>
            <v-row>
                <v-col v-for="project in projectsModel.data" :key="project.id" :cols="3">
                    <card :project="project" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script type="text/javascript">
import card from "@/components/projects/card";

export default {
    components: {
        card
    },
    data () {
        return {
        
        }
    },
    beforeCreate () {
    
    },
    created () {
    
    },
    computed : {
        projectsModel: function () {
            console.log('load projects from store');
            return this.$store.state.projects;
        },
    }
}
</script>

<style lang="scss">

@import "../../assets/styles/mixins";

#taskList {
    @include list;

    .list--WrapperTitle {
        @include wrapperTitle;
    
        .list--title {
            @include title;
        }
        
        .list--subTitle {
            @include subTitle;
        }
    }
}

</style>