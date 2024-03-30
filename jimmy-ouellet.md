# Doc du TP01 de Jimmy Ouellet

Par Anthony R.

## Lisibilité du code

L'ensemble du code est parfaitement lisible. Les fonctions sont découpées afin de faciliter la compréhension. Les fonctions et les variables ont pour la plupart des noms représentatifs tels que:

* reloadPage(): void
* selectedSong: Song
* changeSongStatus(status: string)
* const currentTime: string

Cependant, certaines fonctions pourraient avoir des noms plus significatifs tels que l'exemple de la fonction `next()`:

```typescript
function next():void {
    if (allSongs.value !== undefined && selectedSong !== null) {
        let currentSongIndex: number = allSongs.value.indexOf(selectedSong);
        if (currentSongIndex === allSongs.value.length - 1) {
            currentSongIndex = 0;
        } else {
            currentSongIndex++;
        }
        select(allSongs.value[currentSongIndex]);
    }
}
```

Dans le contexte il est facile de comprendre à quoi cette fonction sert, mais un nom tel que selectNextInList serait plus indicatif.

D'ailleur, des commentaires pourrait être ajouter afin d'aider à la compréhension.

## Les Principes

### Principes de séparation

Le code est séparé en plusieurs composantes afin de faciliter l'utilisation et la compréhension. Les constantes et les types sont tous dans leurs propres fichiers dans le dossier script, soit `constants.ts` et `types.ts`. Aucune fonction ne fait deux choses ou plus à la fois.

### Principes du code

Tous les principes d'un bon code peuvent être trouvés [ICI](https://appweb.progwmj.ca/documentations/bonnes-pratiques/revue-code#le-code).

Dans le code, il n'y a pas grand-chose à reprocher. Les fonctions ne font qu'une seule chose, comme mentionné plus haut. Le code ne se répète qu'à de rares occasions, comme avec les fonctions `next()` et `previous()` qui ont un code presque identique:

```typescript
function next():void {
    if (allSongs.value !== undefined && selectedSong !== null) {
        let currentSongIndex: number = allSongs.value.indexOf(selectedSong);
        if (currentSongIndex === allSongs.value.length - 1) {
            currentSongIndex = 0;
        } else {
            currentSongIndex++;
        }
        select(allSongs.value[currentSongIndex]);
    }
}

function previous(): void {
    if (allSongs.value !== undefined && selectedSong !== null){
        let currentSongIndex: number = allSongs.value.indexOf(selectedSong);
        if (currentSongIndex === 0) {
            currentSongIndex = allSongs.value.length - 1;
        } else {
            currentSongIndex--;
        }
        select(allSongs.value[currentSongIndex]);
    }
}
```

Le code est très propre, on ne retrouve aucun code mort, de fichier inutile ou de commentaire inutile. Des constantes ont été utilisées pour éviter l'utilisation de "valeurs magiques" sauf dans `songPlayerDatas` et dans `songInfo` où des strings sont utilisées dans les templates.

### Principes TypeScript

Bien que, dans l'ensemble, le code respecte beaucoup les différents principes de programmation propres à TypeScript, certaines petites erreurs minimes se pointent, telles que l'absence de type de retour pour la fonction `loadAllArtists()`. Au final, il est clair qu'ici TypeScript est très bien compris et est utilisé afin de fournir un code lisible et facile à comprendre.
