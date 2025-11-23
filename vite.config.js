export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/assets/css/app.css',
                'resources/assets/js/app.js'
            ],
            refresh: true,
        }),
    ],
});
