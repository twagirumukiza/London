# Londres quartier par quartier

Carnet de découverte de Londres, quartier par quartier — par quelqu’un qui a vécu un an à Chelsea.

## Design

Même charte que les carnets [Mexico](https://twagirumukiza.github.io/Mexico/) et [Prague](https://twagirumukiza.github.io/PRAGUE/) :

- Polices : Montserrat + Playfair Display  
- Thème jaune / noir (clair / sombre)  
- Sélecteur de langue FR / EN  
- Taille de police ajustable  

## Photos

Les photos sont dans le dossier `photos/` (sources Unsplash, licence libre).  
Remplace-les facilement par les tiennes en gardant les mêmes noms :

| Fichier | Quartier |
|---------|----------|
| `hero-london.jpg` | Fond du hero |
| `westminster.jpg` | Westminster |
| `soho.jpg` | Soho & Chinatown |
| `covent-garden.jpg` | Covent Garden |
| `city.jpg` | City of London |
| `tower-bridge.jpg` | Tower Hill |
| `borough.jpg` | Southwark / Borough |
| `shoreditch.jpg` | Shoreditch / Brick Lane |
| `camden.jpg` | Camden |
| `hampstead.jpg` | Hampstead |
| `notting-hill.jpg` | Notting Hill |
| `kensington.jpg` | Kensington |
| `chelsea.jpg` | Chelsea |
| `chelsea-harbour.jpg` | Chelsea Harbour & Creek |
| `marylebone.jpg` | Marylebone |
| `kings-cross.jpg` | King’s Cross |
| `greenwich.jpg` | Greenwich |
| `brixton.jpg` | Brixton |
| `little-venice.jpg` | Little Venice |
| `bromley.jpg` | Bromley |

## Déploiement sur GitHub Pages

1. Crée un nouveau dépôt GitHub (ex. `London` ou `Londres`)
2. Upload tout le contenu de ce dossier à la racine du dépôt
3. Va dans **Settings → Pages**
4. Source : branch `main` (ou `master`), dossier `/ (root)`
5. Le site sera en ligne à : `https://TON-USERNAME.github.io/NOM-DU-REPO/`

```bash
git init
git add .
git commit -m "Londres quartier par quartier"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/NOM-DU-REPO.git
git push -u origin main
```

## Fichiers

| Fichier        | Rôle                          |
|----------------|-------------------------------|
| `index.html`   | Structure et contenu          |
| `styles.css`   | Charte graphique (Mexico)     |
| `london.css`   | Surcharges spécifiques Londres|
| `script.js`    | Thème, langue, menu, police   |
| `photos/`      | Images (à remplacer)          |
| `README.md`    | Ce fichier                    |
