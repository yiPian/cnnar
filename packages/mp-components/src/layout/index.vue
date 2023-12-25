<template>
    <div style="display: flex; align-items: center;">
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