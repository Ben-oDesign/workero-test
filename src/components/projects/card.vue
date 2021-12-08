<template>
    <v-card class="card" v-on:click="selectProject" >
        <v-card-title v-text="project.code" class="card--title"></v-card-title>
        <v-card-text class="card--text">
            <p>
                Statut: <span class="card--text__bold">{{ statusName }}</span>
            </p>
            <p>
                Tâches: <span class="card--text__bold">{{ project.nb_tasks }}</span>
            </p>
            <p>
                Personnes: <span class="card--text__bold">{{ project.nb_workers }}</span>
            </p>
            <p>
                Complétion: <span class="card--text__bold">{{ project.completion }}%</span>
            </p>
        </v-card-text>
        <v-icon
            small
            class="card--icon__border"
        >
            search
        </v-icon>
    </v-card>
</template>

<script type="text/javascript">
export default {
    props : {
        project: {
            type: Object
        }
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
        statusName: function () {
            switch (this.project.status) {
                case 'IN_PROGRESS':
                    return 'En Cours';
                default:
                    return this.project.status;
            }
        }
    },
    methods : {
        selectProject: function () {
            this.$store.commit('setCurrentProject', {
                id: this.project.id,
                code: this.project.code
            });
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/styles/colors';
    @import '../../assets/styles/mixins';

    .card {
        border: 0.250rem solid transparent;
        @include shadow;
        
        .card--title {
            font-weight: bold;
            color: $navyBlue;
        }
        
        .card--text {
            color: $navyBlue;
            
            p { margin: 0; }
            
            .card--text__bold {
                font-weight: bold;
            }
        }
        
        .card--icon__border {
            padding: 8px;
            position: absolute;
            right: 0;
            bottom: 0;
            visibility: hidden;
            background-color: $navyBlue;
            color: $white;
        }
    }
    
    
    .card:focus {
        background: none;
        border: 0.250rem solid $navyBlue;
        border-radius: 4px;
        opacity: 1;
        
        .card--icon__border {
            visibility: visible;
            border-radius: 4px 0 0 0;
        }
    }
</style>