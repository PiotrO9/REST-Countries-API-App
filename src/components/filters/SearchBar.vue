<template>
    <div class="search-bar">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
        </svg>
        <input class="input" type="text" placeholder="Seatch for a country...">
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
.search-bar {
    display: flex;
    background-color: var(--background-color);
    border-radius: 6px;
    padding: 15px 20px 15px 40px;
    gap: 20px;
}

.icon {
    height: 16px;
    width: 16px;
}

[data-theme='dark'] .icon {
    fill: var(--text-color);
}

[data-theme='light'] .icon {
    fill: var(--dark-gray);
}

.input {
    border: none;
    outline: none;
    background-color: inherit;
    color: var(--text-color);
}

.input:placeholder {
    color: var(--text-color);
}
</style>