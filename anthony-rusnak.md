# Doc du TP01 de Anthony Rusnak

Par Jimmy O.

## Lisibilité du code

L'ensemble du projet est très bien lisible. Les variables et les fonctions sont très bien nommés ce qui fait en sorte qu'on se repère facilement dans le code. Bref, le code est très clair. Beau travail! 👍

## Bonne pratique

En général, les bonnes pratiques de programmation son respectées. Cependant, j'ai remarquer qu'il y a du code qui aurait plus mériter l'utilisation de constantes. Par exemple, dans le fichier `SongPlayerControls.vue` et `SongPlayer.vue` les chaînes de caractères *PLAYING*, *PAUSED* et *STOPPED* pourrait être des constantes (apparamment que les chaines devaient être des membres de l'enum directement, mais la version du projet ne permettait pas d'export des enums).

Sinon, le reste du code respecte bien les bonnes pratiques de programmation. Le nom des fonctions et des variables est significatif de leur fonction. Le code ne se répète pas et il est relativement simple. Si le code n'est pas trop clair, les commentaires font un bon travail pour l'expliquer. Je pense notamment a `SongPlayer.vue` qui est bien commentés.

## Utilisation de TypeScript

TypeScript est bien utilisé dans la plupars des cas. Cependant, un nombre minime d'élément n'est pas typé :

* La variable response dans la fonction fetch n'est pas typé
* Les fonctions void ne sont pas typées (Il a été jugé que les fonctions void n'avait pas besoin d'être typée, mais je crois que c'est un élément qu'il faut tout de même noter.

## Utilisation de Vue.js

Très bonne utilisation de Vue.js. Les différentes parties de l'application sont séparées en composante et chacune on leur utilisation propre. Excellent travail!
