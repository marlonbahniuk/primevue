export default {
    css: `
.p-panel {
    border: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
    border-radius: var(--p-border-radius);
    background: var(--p-dark-surface-900, var(--p-surface-0));
    color: var(--p-dark-surface-0, var(--p-surface-700));
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.125rem;
}

.p-panel-toggleable .p-panel-header {
    padding: 0.75rem 1.125rem;
}

.p-panel-title {
    line-height: 1;
    font-weight: 600;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: var(--p-dark-surface-400, var(--p-surface-500));
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-panel-header-icon:enabled:hover {
    color: var(--p-dark-surface-300, var(--p-surface-600));
    background: var(--p-dark-surface-800, var(--p-surface-100));
}

.p-panel-header-icon:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-panel .p-panel-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
}

.p-panel .p-panel-footer {
    padding: 0 1.125rem 1.125rem 1.125rem;
}
    `
};
