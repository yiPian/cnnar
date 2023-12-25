<template>
    <div :style="style">
        <div><slot name="left"></slot></div>
        <div>
            <div>
                <slot name="top"></slot>
            </div>
            <div>
                <slot name="bottom"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const style = {
        display: 'flex',
        with: '100px',
        "min-height": '100px',
        "align-items": "center",
        "border": '1px solid red',
        backgroundColor: '#08a'
    }
</script>