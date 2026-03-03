import routes from './routes.js';

export const store = Vue.reactive({
    dark: JSON.parse(localStorage.getItem('dark')) || true, // Default to dark mode for GD look
    toggleDark() {
        this.dark = !this.dark;
        localStorage.setItem('dark', JSON.stringify(this.dark));
    },
});

const app = Vue.createApp({
    data: () => ({ store }),
});

const router = VueRouter.createRouter({
    // Use Hash history for easy GitHub Pages compatibility
    history: VueRouter.createWebHashHistory('/GDListTemplate/'), 
    routes,
});

app.use(router);

// Force dark mode on first load if nothing is saved
if (localStorage.getItem('dark') === null) {
    store.dark = true;
}

app.mount('#app');
