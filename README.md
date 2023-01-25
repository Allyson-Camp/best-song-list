![wireframe for best-song-list](./assets/song-wireframe.png)

## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## plan

- make tables
- connect tables
- get supabase key/url
    key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZWV6YmNrc3hhemV6eGtldGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODk2MjcsImV4cCI6MTk5MDA2NTYyN30.uPokWkEqMtvLPS0Xe9q-myZON-BEU1EAO4iq7-o0cEk
    url: https://ejeezbcksxazezxketdy.supabase.co
- connect to html

    ## html
    <!-- - list page
        - hard coded page title
        -empty div for the list of songs to go -->
    - song page
        - hard coded page title?
        - div for game details

    ## state
    <!-- - songsData
        - gets list of songs -->
    - songData
        - gets info for 1 song

    ## events
    - list page
        - window.eventlistener.load
            - ask supabase for all songsData
            - put it into state
            - loop thorugh songs in state
                - redner a div for each song
                - append the div to the html element in dom
            - refactor render function
            - refactor a display function
    - detail page
        - user clicked on the href from list page
            - window.eventlistener.load
            - ask supabase for one songData
            - display function to display the data

