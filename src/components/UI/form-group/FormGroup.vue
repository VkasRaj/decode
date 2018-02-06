<template functional>
    <div class="form-group">
        <label for="">{{ props.label }}</label>
        <slot name="extra-info-top"></slot>
        <slot name="input"></slot>
        <slot name="extra-info-bottom"></slot>
    </div>
</template>
