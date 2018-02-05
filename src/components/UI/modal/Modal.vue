<template>
    <div class="modal-open">
        <div class="modal fade show d-block" tabindex="-1" role="dialog" @click="$emit('close')">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-0">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
