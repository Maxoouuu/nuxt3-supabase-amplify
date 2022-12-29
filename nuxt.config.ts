// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
   /*  plugins: ['~/plugins/Amplify.ts'], */
   nitro: {preset: 'netlify'},
})
