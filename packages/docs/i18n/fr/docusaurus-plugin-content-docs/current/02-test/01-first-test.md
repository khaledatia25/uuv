# Mon premier test

:::caution
**Pour l'autocompletion depuis IntelliJ**:  télécharger le plugin [cucumber.js](https://plugins.jetbrains.com/plugin/7418-cucumber-js)
:::

## Ecriture du test
Pour écrire votre premier test, créer à la racine du projet le fichier `uuv/e2e/first-test.feature` avec le contenu suivant :
```gherkin
Feature: Hello World

  Scenario: Search - Successful case
    When I visit path "/"
    Then I should see an element with role "heading" and name "My app title"
```