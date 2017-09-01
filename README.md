# Preface

For this test I have attempted both a combination of the technical and ui/ux tests. The resulting application has been programmed using ReactJS and Redux. Using the app you can add a note, see all notes and edit the notes.

# UI/UX Requirements

The application has responsive styling and should be usable on smaller screen sizes. When a note is clicked, only that notes content is viewable in a modal. Within this modal you can also edit the note content. Whenever you are able to edit a note, notepad lines will appear in the input boxes. This should make it clear that you can now make changes to the note. Creating and editing notes use the same interface, so therefore it should be more obvious how to edit the notes. When the modal is closed the notes - sorted by when they are last edited - are viewable again.

# Technical Requirements

Data persists in local storage. Although there is a blank note for the purposes of autosaving newly created notes, it is not saved to local storage and is recreated on page refresh. Redux was used for the application. This means that the notes are stored in a single application wide read only state thus meaning the application handles data safely and reliably.

# More Time

I would have written some tests, added a delete button (as delete has been implemented as an action and in the reducer) and continued to tweak the interface for mobile devices.


# Running Locally

[create-react-app](https://github.com/facebookincubator/create-react-app) was used to initially create the app

```
yarn install

yarn start
```

