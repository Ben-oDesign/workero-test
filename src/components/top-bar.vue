<template>

	<v-app-bar
		id="top-bar"
		color="white"
		elevate-on-scroll
		fixed
		app
	>
		
		<v-btn icon class="button">
			<v-icon size="medium">search</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn icon class="button">
			<v-icon size="medium">settings</v-icon>
		</v-btn>
        
        <user />

	</v-app-bar>

</template>

<script type="text/javascript">

import user from "@/components/menu/user";

    export default {
        components: {
            user
        },
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
        methods : {

        },
        beforeDestroy () {

        }
    }

</script>

<style lang="scss">

@import "../assets/styles/mixins";

    #top-bar {
        background-color: $background !important;
        padding: 0 2rem;
        
        .button {
            @include button__icon;
            margin: 2px 8px;
        }
        
        .button:first-child {
            margin-left: 0;
        }
    }

</style>