import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        /*
        ** Navigation data
        */

        navigation : [
            {
                code : 'home',
                label : 'Accueil',
                icon : 'cottage'
            },
            {
                code : 'team',
                label : 'Équipe',
                icon : 'people'
            },
            {
                code : 'activity',
                label : 'Activités & Congés',
                icon : 'calendar_today'
            },
            {
                code : 'expenses',
                label : 'Notes de frais',
                icon : 'euro_symbol'
            }
        ],

        /*
        ** Project models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        projects : {
            loading : false,
            loaded : false,
            data : [],
            error : false
        },

        /*
        ** employees models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        employees : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        /*
        ** tasks models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        tasks : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        /*
        ** taskAffectations models
        ** loading : request had been sent, waiting for response
        ** loaded : data is loaded
        ** data : actual data retrieved from API
        ** error : last fetch resulted in an error
        */

        taskAffectations : {
            loading : false,
            loaded : false,
            data : null,
            error : false
        },

        selected_project: {},
        current_task : {},
    },
    mutations: {

        /*
        ** Projects
        */

        setProjectsLoading (state, value) {
            state.projects.loading = value;
        },
        setProjectsLoaded (state, value) {
            state.projects.loaded = value;
        },
        setProjectsData (state, value) {
            state.projects.data = value;
        },
        setProjectsError (state, value) {
            state.projects.error = value;
        },
        setCurrentProject(state, project) {
            state.selected_project = project;
        },

        /*
        ** employees
        */

        setEmployeesLoading (state, value) {
            state.employees.loading = value;
        },
        setEmployeesLoaded (state, value) {
            state.employees.loaded = value;
        },
        setEmployeesData (state, value) {
            state.employees.data = value;
        },
        setEmployeesError (state, value) {
            state.employees.error = value;
        },

        /*
        ** tasks
        */

        setTasksLoading (state, value) {
            state.tasks.loading = value;
        },
        setTasksLoaded (state, value) {
            state.tasks.loaded = value;
        },
        setTasksData (state, value) {
            state.tasks.data = value;
        },
        setTasksError (state, value) {
            state.tasks.error = value;
        },

        /*
        ** taskAffectations
        */

        setTaskAffectationsLoading (state, value) {
            state.taskAffectations.loading = value;
        },
        setTaskAffectationsLoaded (state, value) {
            state.taskAffectations.loaded = value;
        },
        setTaskAffectationsData (state, value) {
            state.taskAffectations.data = value;
        },
        setTaskAffectationsError (state, value) {
            state.taskAffectations.error = value;
        }

    },
    actions: {

        loadProjects ({ state, commit }, parameters) {

            if (state.projects.loaded || state.projects.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/projects', {
                params : {}
            })
            .then (response => {
                commit('setProjectsData', response.data);
                commit('setProjectsLoaded', true);
            })
            .catch (response => {
                commit('setProjectsError', true);
            })
            .finally (() => {
                commit('setProjectsLoading', false);
            });

        },

        loadEmployees ({ state, commit }, parameters) {

            if (state.employees.loaded || state.employees.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/employees', {
                params : {}
            })
                .then (response => {
                    commit('setEmployeesData', response.data);
                    commit('setEmployeesLoaded', true);
                })
                .catch (response => {
                    commit('setEmployeesError', true);
                })
                .finally (() => {
                    commit('setEmployeesLoading', false);
                });

        },

        loadTasks ({ state, commit }, parameters) {

            if (state.tasks.loaded || state.tasks.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/tasks', {
                params : {}
            })
                .then (response => {
                    commit('setTasksData', response.data);
                    commit('setTasksLoaded', true);
                })
                .catch (response => {
                    commit('setTasksError', true);
                })
                .finally (() => {
                    commit('setTasksLoading', false);
                });

        },

        loadTaskAffectations ({ state, commit }, parameters) {

            if (state.taskAffectations.loaded || state.taskAffectations.loading) {
                return;
            }

            axios.get('https://my-json-server.typicode.com/P4Thi0ut/workero/task_affectations', {
                params : {}
            })
                .then (response => {
                    commit('setTaskAffectationsData', response.data);
                    commit('setTaskAffectationsLoaded', true);
                })
                .catch (response => {
                    commit('setTaskAffectationsError', true);
                })
                .finally (() => {
                    commit('setTaskAffectationsLoading', false);
                });

        }

    },

    getters: {
        currentProjectTasks: (state) => () => {
            if (!state.tasks.data) {
                return [];
            }

            return state.tasks.data.filter(task => task.project_id === state.selected_project.id);
        },
        currentTaskEmployees: (state) => (currentTask) => {
            if (!state.employees.data) {
                return [];
            }
            const employeesId = state.taskAffectations.data
                .filter(taskAffectation => taskAffectation.task_id === currentTask.id)
                .map(taskAffectation => taskAffectation.employee_id);
            return state.employees.data.filter(employee => employeesId.indexOf(employee.id) > -1)
        },
    }
})
