<template>
    <div id="page-home">
        <projects-list />
        <tasks-list />
    </div>
</template>

<script>
import projectsList from "@/components/projects/list";
import tasksList from "@/components/tasks/list";

export default {
    name: 'page-home',
    components: {
        projectsList,
        tasksList,
    },
    created () {
        this.$store.dispatch('loadProjects');
        this.$store.dispatch('loadEmployees');
        this.$store.dispatch('loadTasks');
        this.$store.dispatch('loadTaskAffectations');
    },
    computed : {
        employeesModel () {
            return this.$store.state.employees;
        },
        taskAffectationsModel () {
            return this.$store.state.taskAffectations;
        }
    },
    methods : {
        getAffectedEmployeesByProject(project) {
            let employeesAffected = [];
            
            for (let task in this.tasksModel.data) {
                if (task.project_id === project.id) {
                    for (let taskAffections in this.taskAffectationsModel.data) {
                        if (taskAffections.task_id === task.id) {
                            for (let employee in this.employeesModel.data) {
                                if (employee.id === taskAffections.employee_id) {
                                    employeesAffected.push(employee)
                                }
                            }
                        }
                    }
                }
            }
            return employeesAffected;
        }
    }
}

</script>

<style lang="scss">
    @import '../assets/styles/colors';

    #page-home {
        height: 100%;
        background-color: $background;
        font-family: 'Poppins', sans-serif;
    }
</style>
