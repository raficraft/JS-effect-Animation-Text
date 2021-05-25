# Animation de texte. Mot à mot ou lettre par lettre

Class Utilitaire javascript permettant d'animer tout type de texte mot à mot ou lettre par lettre.

#Installation et utilisation

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

- Instacié la Class dans votre balise script ou la suite de la Class elle même.

```HTML
<script type="text/javascript" src="engine/TextAninated.js" defer>

  new TextAnimated({
  method : 'wordByWord',
  container : '[textAnimatedContainer]',
  lineBreak : [2,5],
  child : '[textAnimated-name="first"]',
  keyframes : 'titleRevealY'
  })

</script>

```

# Paramètres

