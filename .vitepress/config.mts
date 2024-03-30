import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Exercice de documentation du TP 01",
  base: "/appweb-exer16/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TP Doc', link: '/jimmy-ouellet' }
    ],

    sidebar: [
      {
        text: 'TP Doc',
        items: [
          { text: 'Jimmy Ouellet', link: '/jimmy-ouellet' },
          { text: 'Anthony Rusnak', link: '/anthony-rusnak' }
        ]
      }
    ],
  }
})
