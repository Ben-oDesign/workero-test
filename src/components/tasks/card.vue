<template>
    <v-card class="card__task">
        <v-icon>drag_handle</v-icon>
        <v-card-title v-text="task.code" class="card--title"></v-card-title>
        <v-card-text class="card--text">
            <type-tag :task-type="task.type" />
            <p class="card--label" >{{ task.label }}</p>
        </v-card-text>
        <v-avatar v-for="employee in currentTaskEmployees" :key="employee.id" size="36">
            <img :src="employee.profile_picture">
        </v-avatar>
    </v-card>
</template>

<script type="text/javascript">
import typeTag from "@/components/tasks/typeTag";

export default {
    components: {
        typeTag
    },
    props : {
        task: {
            type: Object
        }
    },
    data () {
        return {}
    },
    computed : {
        typeLabel: function () {
            switch (this.task.type) {
                case 'DEVELOPMENT':
                    return "dév.";
                case 'BUG':
                    return 'ano.';
                default:
                    return this.task.type;
            }
        },
        currentTaskEmployees: function () {
            let employee = this.$store.getters.currentTaskEmployees(this.task);
            console.log(employee)
            return employee;
        }
    }
}
</script>

<style lang="scss">

@import "../../assets/styles/mixins";

    .card__task {
        display: flex;
        padding: 8px 16px;
        @include shadow;
        
        .card--text {
            display: inherit;
            padding: 0;
            align-items: center;
            
            .card--label {
                margin: 2px 8px;
            }
        }
    }

</style>