<template>

	<v-navigation-drawer
			id="left-drawer"
        	permanent
			app
          >
            <v-list>
              <v-list-item class="px-2">
                  <img alt="Workero logo" src="@/assets/logo.png">
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
				<v-list-item link v-for="(nav, i) in navigation" :key="i"
					@click="gotoPage(nav.code)"
				>
					<v-list-item-icon>
						<v-icon class="material-icons-outlined">
                            {{nav.icon}}
                        </v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{nav.label}}</v-list-item-title>
				</v-list-item>
            </v-list>
        </v-navigation-drawer>

</template>

<script type="text/javascript">

    export default {
        props : {
            
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
        	navigation () {
        		return this.$store.state.navigation;
        	}
        },
        methods : {
        	gotoPage (pageCode) {
        		this.$router.push({ name : `${pageCode}Page` });
        	}
        }
    }

</script>

<style lang="scss">

@import "../assets/styles/mixins";

    #left-drawer {

    }

</style>