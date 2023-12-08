import { AccessibleRole } from "../../../../step-definition-generator/accessible-role";

enum FR_DEFINITE_ARTICLE {
    L = "l'",
    LE = "le ",
    LA = "la "
}

enum FR_INDEFINITE_ARTICLE {
    UN = "un",
    UNE = "une"
}

class FrAccessibleRole extends AccessibleRole {
    definiteArticle!: FR_DEFINITE_ARTICLE;
    indefiniteArticle!: FR_INDEFINITE_ARTICLE;

    constructor(id: string, name: string, definiteArticle: FR_DEFINITE_ARTICLE, indefiniteArticle: FR_INDEFINITE_ARTICLE) {
        super();
        this.id = id;
        this.name = name;
        this.definiteArticle = definiteArticle;
        this.indefiniteArticle = indefiniteArticle;
    }

    override getDefiniteArticle(): string {
        return this.definiteArticle.toString();
    }

    override getIndefiniteArticle(): string {
        return this.indefiniteArticle.toString();
    }

    override getOfDefiniteArticle(): string {
        if (this.definiteArticle === FR_DEFINITE_ARTICLE.L) {
            return "de l'";
        } else {
            if (this.indefiniteArticle === FR_INDEFINITE_ARTICLE.UNE) {
                return "de la ";
            } else {
                return "du ";
            }
        }
    }

    override namedAdjective(): string {
        return this.indefiniteArticle === FR_INDEFINITE_ARTICLE.UNE ? "nommée" : "nommé";
    }
}

export const FR_ROLES: AccessibleRole[] = [
    {
        id: "alert",
        name: "alerte",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "alertdialog",
        name: "dialogue d'alerte",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "application",
        name: "application",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "article",
        name: "article",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "banner",
        name: "bannière",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "button",
        name: "bouton",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "cell",
        name: "cellule",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "checkbox",
        name: "case à cocher",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "columnheader",
        name: "en-tête de colonne",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "combobox",
        name: "boîte à choix",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "command",
        name: "commande",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "comment",
        name: "commentaire",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "complementary",
        name: "complémentaire",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "composite",
        name: "composite",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "contentinfo",
        name: "contentinfo",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "definition",
        name: "définition",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "dialog",
        name: "dialogue",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "directory",
        name: "répertoire",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "document",
        name: "document",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "feed",
        name: "flux",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "figure",
        name: "figure",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "form",
        name: "formulaire",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "generic",
        name: "générique",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "grid",
        name: "grille",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "gridcell",
        name: "cellule de grille",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "group",
        name: "groupe",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "heading",
        name: "titre",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "img",
        name: "image",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "input",
        name: "entrée",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "landmark",
        name: "point de repère",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "link",
        name: "lien",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "list",
        name: "liste",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "listbox",
        name: "boîte à liste",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "listitem",
        name: "élément de liste",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "log",
        name: "log",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "main",
        name: "principal",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "mark",
        name: "marque",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "math",
        name: "mathématique",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "menu",
        name: "menu",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "menubar",
        name: "barre de menu",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "menuitem",
        name: "élément de menu",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "menuitemcheckbox",
        name: "menu d'élément de boîte à choix",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "menuitemradio",
        name: "menu d'élement de bouton radio",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "meter",
        name: "compteur",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "navigation",
        name: "navigation",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "none",
        name: "aucun",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "note",
        name: "note",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "option",
        name: "option",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "presentation",
        name: "présentation",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "progressbar",
        name: "barre de progression",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "radio",
        name: "bouton radio",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "radiogroup",
        name: "groupe de boutons radios",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "range",
        name: "plage",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "region",
        name: "région",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "roletype",
        name: "type de rôle",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "row",
        name: "rangée",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "rowgroup",
        name: "groupe de rangs",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "rowheader",
        name: "en-tête de ligne",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "scrollbar",
        name: "barre de défilement",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "search",
        name: "recherche",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "searchbox",
        name: "boîte de recherche",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "section",
        name: "section",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "sectionhead",
        name: "tête de section",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "select",
        name: "sélectionner",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "separator",
        name: "séparateur",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "slider",
        name: "curseur",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "spinbutton",
        name: "bouton rotatif",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "status",
        name: "statut",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "structure",
        name: "structure",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "suggestion",
        name: "suggestion",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "switch",
        name: "interrupteur",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "tab",
        name: "onglet",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "table",
        name: "tableau",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "tablist",
        name: "tablist",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "tabpanel",
        name: "tabpanel",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "term",
        name: "terme",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "textbox",
        name: "boîte à texte",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "timer",
        name: "minuterie",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "toolbar",
        name: "barre d'outils",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "tooltip",
        name: "infobulle",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "tree",
        name: "arbre",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "treegrid",
        name: "grille d'arbre",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    },
    {
        id: "treeitem",
        name: "élément d'arbre",
        definiteArticle: FR_DEFINITE_ARTICLE.L,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "widget",
        name: "widget",
        definiteArticle: FR_DEFINITE_ARTICLE.LE,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UN
    },
    {
        id: "window",
        name: "fenêtre",
        definiteArticle: FR_DEFINITE_ARTICLE.LA,
        indefiniteArticle: FR_INDEFINITE_ARTICLE.UNE
    }
].map(role =>new FrAccessibleRole(role.id, role.name, role.definiteArticle, role.indefiniteArticle));
