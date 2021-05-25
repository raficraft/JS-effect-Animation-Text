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

- Instacié la Class dans votre balise script ou à la suite de la Class elle même.

```HTML
<script type="text/javascript" src="engine/TextAninated.js" defer>

  new TextAnimated({
  method : 'wordByWord',
  container : '[textAnimatedContainer]',
  child : '[textAnimated-name="first"]',
  lineBreak : [2,5],  
  keyframes : 'titleRevealY'
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
- animationDuration : Durée de l'animation des mots ou lettre du texte.
- shiftDelay : Délai d'animation entre deux mots ou deux lettres (voir, précisions).
- animationDelay : Délait de décalage d'animation.

# Précision sur les paramètres

- lineBreak : Tableau de valeur numériques
  - Exemple : [2, 5]
  - Ajoute un saut de ligne après le deuxième et cinquième mot ou lettre. Pour l'animation lettre par lettre, les espaces sont considérés comme des caractères à part entière

- shiftDelay : Valeur comprise entre 0 et 1. 
  - Exemple : 0.2
  - Dans un texte de quatre mots, l'animation du second mot ce déclenchera après un délai de 0.2s, le deuxième après un délai de 0.4s , le troisième de 0.6s et le quatrième 0.8s après le premier mot. Idem pour l'animation lettre à lettre.

