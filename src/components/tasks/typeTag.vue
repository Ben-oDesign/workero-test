<template>
    <div class="tag" v-bind:style="{backgroundColor: backgroundColor}">
        <span class="tag--label" v-bind:style="{color: labelColor}">{{ typeLabel }}</span>
    </div>
</template>

<script type="text/javascript">

export default {
    props : {
        taskType: {
            type: String
        }
    },
    data () {
        return {}
    },
    computed : {
        typeLabel: function () {
            switch (this.taskType) {
                case 'DEVELOPMENT':
                    return "dév.";
                case 'BUG':
                    return 'ano.';
                default:
                    return this.taskType;
            }
        },
        
        backgroundColor: function () {
            switch (this.taskType) {
                case 'DEVELOPMENT':
                    return '#E2D9FF';
                case 'BUG':
                    return '#FFDBDA';
                default:
                    return '#aaaaaa';
            }
        },
    
        labelColor: function () {
            switch (this.taskType) {
                case 'DEVELOPMENT':
                    return '#997FE8';
                case 'BUG':
                    return '#FF706F';
                default:
                    return '#aaaaaa';
            }
        }
    }
}
</script>

<style lang="scss">

@import '../../assets/styles/colors';

    .tag {
        text-align: center;
        margin: 2px 8px;
        padding: 2px 0;
        width: 50px;
        border-radius: 2px;
    }
</style>