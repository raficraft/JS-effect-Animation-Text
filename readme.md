# Démo
[Démo](https://raficraft.github.io/JS-effect-Animation-Text/)

# Animation de texte. Mot à mot ou lettre par lettre

Class Utilitaire javascript permettant d'animer tout type de texte mot à mot ou lettre par lettre.

# Installation et utilisation

## Installation

- Copier le script dans votre repértoire JS (engine dans l'exemple ci-dessous)
- Linké le script dans votre fichier HTML

```HTML
<script type="text/javascript" src="engine/TextAninated.js" defer></script>
```

- Installer le script

```HTML
<script type="text/javascript" src="engine/TextAninated.js" defer></script>

```

- Attaché un attribut de donnée au container parent contenant le texte à animé
- Utilisé l'attribut de donnée "textAnimated-name" sur le texte à animé

```HTML
  <section textAnimatedContainer>
    <h1 textAnimated-name='first'>Un bug ? Une panne ? Un accident ?</h1>
    <h1 textAnimated-name='second'>La solution!</h1>
    <h1 textAnimated-name='third'>#ashtag & @robase</h1>
    <h1 textAnimated-name='four'>06 88 15 87 99</h1>
    <h1 textAnimated-name="five">Agence Lyon Sud - Serezin du rhône</h1>
    <h1 textAnimated-name="six">Du Lundi au Samedi 9h - 19h</h1> 
  </section>
```

- NB : vous pouvez utiliser les mêmes attribut de données que dans l'exemple mais ce n'est pas obligatoire. Vous pouvez ciblé les éléments HTML avec des selecteurs classique. Seul le seclecteur du container parent doit être unique.

## Utilisation

- Instanncié la Class dans votre balise script ou à la suite de la Class elle même et ce pour chaque texte à animé.

```HTML
<script type="text/javascript" src="engine/TextAninated.js" defer>
  new TextAnimated({
  method : 'wordByWord',
  container : '[textAnimatedContainer]',
  child : '[textAnimated-name="first"]',
  lineBreak : [2,5],    
  keyframes : 'titleRevealY'
  animationDelay : 0.1,
  animationOffset : 7
  })
</script>
```

# Paramètres

- method : 
  - wordBydWord : Animation mot à mot
  - letterByLetter : Animation lettre par lettre
- container : Element du DOM contentant le texte à animé. Sélécteur CSS (id,class...) ou attribut de données.
- child : Element du dom à animé. Sélécteur CSS (id,class...) ou attribut de données.
- lineBreak : Tableau numérique indiquant ou effectuer des saut de lignes (voir, précisions).
- keyframes : Fait référence à l'animation css associé 
- animationDuration : Durée de l'animation en seconde des mots ou lettre du texte.
- shiftDelay : Délai d'animation en seconde entre deux mots ou deux lettres (voir, précisions).
- animationDelay : Délai en seconde de décalage d'animation.
- spacingDimension : Dimension d'espacement entre les mots pour l'animation lettre par lettre

# Précision sur les paramètres

- lineBreak : Tableau de valeur numériques
  - Exemple : [2, 5]
  - Ajoute un saut de ligne après le deuxième et cinquième mot ou lettre. Pour l'animation lettre par lettre, les espaces sont considérés comme des caractères à part entière.

- shiftDelay : Valeur comprise entre 0 et 1. 
  - Exemple : 0.2
  - Dans un texte de quatre mots, l'animation du second mot ce déclenchera après un délai de 0.2s, le deuxième après un délai de 0.4s , le troisième de 0.6s et le quatrième 0.8s après le premier mot. Idem pour l'animation lettre à lettre.

- spacingDimension : Chaîne de caractères indiquant la largeur d'espacement entre deux mots pour l'animation lettre par lettre. La valeur par défaut est exprimé en REM pour un dimensionnement de 1.375rem

# Animation

Le script est livré avec un fichier CSS, contenant quatre animation de texte. Vous pouvez créer vos propres animation et les attaché à votre texte avec le paramètre "keyframes".

NB : Pour l'animation lettre par lettre, les espacement sont considéré comme des caractères à part entière.

