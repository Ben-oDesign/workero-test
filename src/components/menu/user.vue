<template>
    <div class="user">
        <v-avatar class="user--avatar">
            <span class="user--label">PM</span>
        </v-avatar>
        <div class="user--textWrapper">
            <p class="user--name">Paul Montard</p>
            <p class="user--mail">paul-montard@gmail.com</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "user"
}
</script>

<style lang="scss">

@import "../../assets/styles/mixins.scss";

    .user {
        display: flex;
        align-items: center;
        
        .user--avatar {
            margin: 4px 8px;
            @include user_avatar;
            
            .user--label {
                font-size: small;
                font-weight: bold;
                color: $navyBlue;
            }
        }
        
        .user--textWrapper {
            margin: 2px 8px;
            
            .user--name {
                margin: 0;
                font-weight: bold;
                color: $navyBlue;
                line-height: 1;
            }
            
            .user--mail {
                margin: 0;
                font-size: small;
                color: $grey;
            }
        }
    ;
    }
</style>