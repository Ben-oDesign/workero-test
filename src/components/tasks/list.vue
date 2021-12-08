<template>
    <div id="taskList">
        <hgroup class="list--WrapperTitle">
            <h1 class="list--title">{{ currentProject.code }} <span class="list--title__normalWeight">| Priorisation des tâches</span></h1>
            <h2 class="list--subTitle">Quel est le planning pour aujourd'hui ?</h2>
        </hgroup>
        <v-container fluid>
            <v-row>
                <v-col v-for="task in currentProjectTasks" :key="task.id" :cols="12">
                    <card :task="task" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script type="text/javascript">
import card from "@/components/tasks/card";

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
        currentProject () {
            return this.$store.state.selected_project;
        },
        currentProjectTasks () {
            return this.$store.getters.currentProjectTasks();
        }
    }
}
</script>

<style lang="scss">

@import '../../assets/styles/mixins';

#taskList {
    @include list;
    
    .list--WrapperTitle {
        
        .list--title {
            @include title;
            
            .list--title__normalWeight {
                font-weight: normal;
            }
        }
        
        .list--subTitle {
            @include subTitle;
        }
    }
}
</style>